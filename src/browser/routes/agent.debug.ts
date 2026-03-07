import crypto from "node:crypto";
import path from "node:path";
import type { BrowserRouteContext } from "../server-context.js";
import {
  readBody,
  resolveTabSelectionFromBody,
  resolveTabSelectionFromQuery,
  withPlaywrightRouteContext,
} from "./agent.shared.js";
import { resolveWritableOutputPathOrRespond } from "./output-paths.js";
import { DEFAULT_TRACE_DIR } from "./path-output.js";
import type { BrowserRouteRegistrar } from "./types.js";
import { toBoolean, toStringOrEmpty } from "./utils.js";

export function registerBrowserAgentDebugRoutes(
  app: BrowserRouteRegistrar,
  ctx: BrowserRouteContext,
) {
  app.get("/console", async (req, res) => {
    const selection = resolveTabSelectionFromQuery(req.query);
    const level = typeof req.query.level === "string" ? req.query.level : "";

    await withPlaywrightRouteContext({
      req,
      res,
      ctx,
      selection,
      feature: "console messages",
      run: async ({ cdpUrl, tab, pw }) => {
        const messages = await pw.getConsoleMessagesViaPlaywright({
          cdpUrl,
          targetId: tab.targetId,
          tabId: tab.tabId,
          level: level.trim() || undefined,
        });
        res.json({ ok: true, messages, targetId: tab.targetId, tabId: tab.tabId, url: tab.url });
      },
    });
  });

  app.get("/errors", async (req, res) => {
    const selection = resolveTabSelectionFromQuery(req.query);
    const clear = toBoolean(req.query.clear) ?? false;

    await withPlaywrightRouteContext({
      req,
      res,
      ctx,
      selection,
      feature: "page errors",
      run: async ({ cdpUrl, tab, pw }) => {
        const result = await pw.getPageErrorsViaPlaywright({
          cdpUrl,
          targetId: tab.targetId,
          tabId: tab.tabId,
          clear,
        });
        res.json({ ok: true, targetId: tab.targetId, tabId: tab.tabId, url: tab.url, ...result });
      },
    });
  });

  app.get("/requests", async (req, res) => {
    const selection = resolveTabSelectionFromQuery(req.query);
    const filter = typeof req.query.filter === "string" ? req.query.filter : "";
    const clear = toBoolean(req.query.clear) ?? false;

    await withPlaywrightRouteContext({
      req,
      res,
      ctx,
      selection,
      feature: "network requests",
      run: async ({ cdpUrl, tab, pw }) => {
        const result = await pw.getNetworkRequestsViaPlaywright({
          cdpUrl,
          targetId: tab.targetId,
          tabId: tab.tabId,
          filter: filter.trim() || undefined,
          clear,
        });
        res.json({ ok: true, targetId: tab.targetId, tabId: tab.tabId, url: tab.url, ...result });
      },
    });
  });

  app.post("/trace/start", async (req, res) => {
    const body = readBody(req);
    const selection = resolveTabSelectionFromBody(body);
    const screenshots = toBoolean(body.screenshots) ?? undefined;
    const snapshots = toBoolean(body.snapshots) ?? undefined;
    const sources = toBoolean(body.sources) ?? undefined;

    await withPlaywrightRouteContext({
      req,
      res,
      ctx,
      selection,
      feature: "trace start",
      run: async ({ cdpUrl, tab, pw }) => {
        await pw.traceStartViaPlaywright({
          cdpUrl,
          targetId: tab.targetId,
          tabId: tab.tabId,
          screenshots,
          snapshots,
          sources,
        });
        res.json({ ok: true, targetId: tab.targetId, tabId: tab.tabId, url: tab.url });
      },
    });
  });

  app.post("/trace/stop", async (req, res) => {
    const body = readBody(req);
    const selection = resolveTabSelectionFromBody(body);
    const out = toStringOrEmpty(body.path) || "";

    await withPlaywrightRouteContext({
      req,
      res,
      ctx,
      selection,
      feature: "trace stop",
      run: async ({ cdpUrl, tab, pw }) => {
        const id = crypto.randomUUID();
        const tracePath = await resolveWritableOutputPathOrRespond({
          res,
          rootDir: DEFAULT_TRACE_DIR,
          requestedPath: out,
          scopeLabel: "trace directory",
          defaultFileName: `browser-trace-${id}.zip`,
          ensureRootDir: true,
        });
        if (!tracePath) {
          return;
        }
        await pw.traceStopViaPlaywright({
          cdpUrl,
          targetId: tab.targetId,
          tabId: tab.tabId,
          path: tracePath,
        });
        res.json({
          ok: true,
          targetId: tab.targetId,
          tabId: tab.tabId,
          url: tab.url,
          path: path.resolve(tracePath),
        });
      },
    });
  });
}
