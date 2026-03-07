import type { BrowserRouteContext } from "../server-context.js";
import {
  readBody,
  resolveTabSelectionFromBody,
  withPlaywrightRouteContext,
} from "./agent.shared.js";
import { ensureOutputRootDir, resolveWritableOutputPathOrRespond } from "./output-paths.js";
import { DEFAULT_DOWNLOAD_DIR } from "./path-output.js";
import type { BrowserRouteRegistrar } from "./types.js";
import { jsonError, toNumber, toStringOrEmpty } from "./utils.js";

function buildDownloadRequestBase(cdpUrl: string, targetId: string, timeoutMs: number | undefined) {
  return {
    cdpUrl,
    targetId,
    timeoutMs: timeoutMs ?? undefined,
  };
}

export function registerBrowserAgentActDownloadRoutes(
  app: BrowserRouteRegistrar,
  ctx: BrowserRouteContext,
) {
  app.post("/wait/download", async (req, res) => {
    const body = readBody(req);
    const selection = resolveTabSelectionFromBody(body);
    const out = toStringOrEmpty(body.path) || "";
    const timeoutMs = toNumber(body.timeoutMs);

    await withPlaywrightRouteContext({
      req,
      res,
      ctx,
      selection,
      feature: "wait for download",
      run: async ({ cdpUrl, tab, pw }) => {
        await ensureOutputRootDir(DEFAULT_DOWNLOAD_DIR);
        let downloadPath: string | undefined;
        if (out.trim()) {
          const resolvedDownloadPath = await resolveWritableOutputPathOrRespond({
            res,
            rootDir: DEFAULT_DOWNLOAD_DIR,
            requestedPath: out,
            scopeLabel: "downloads directory",
          });
          if (!resolvedDownloadPath) {
            return;
          }
          downloadPath = resolvedDownloadPath;
        }
        const requestBase = {
          ...buildDownloadRequestBase(cdpUrl, tab.targetId, timeoutMs),
          tabId: tab.tabId,
        };
        const result = await pw.waitForDownloadViaPlaywright({
          ...requestBase,
          path: downloadPath,
        });
        res.json({
          ok: true,
          targetId: tab.targetId,
          tabId: tab.tabId,
          url: tab.url,
          download: result,
        });
      },
    });
  });

  app.post("/download", async (req, res) => {
    const body = readBody(req);
    const selection = resolveTabSelectionFromBody(body);
    const ref = toStringOrEmpty(body.ref);
    const out = toStringOrEmpty(body.path);
    const timeoutMs = toNumber(body.timeoutMs);
    if (!ref) {
      return jsonError(res, 400, "ref is required");
    }
    if (!out) {
      return jsonError(res, 400, "path is required");
    }

    await withPlaywrightRouteContext({
      req,
      res,
      ctx,
      selection,
      feature: "download",
      run: async ({ cdpUrl, tab, pw }) => {
        await ensureOutputRootDir(DEFAULT_DOWNLOAD_DIR);
        const downloadPath = await resolveWritableOutputPathOrRespond({
          res,
          rootDir: DEFAULT_DOWNLOAD_DIR,
          requestedPath: out,
          scopeLabel: "downloads directory",
        });
        if (!downloadPath) {
          return;
        }
        const requestBase = {
          ...buildDownloadRequestBase(cdpUrl, tab.targetId, timeoutMs),
          tabId: tab.tabId,
        };
        const result = await pw.downloadViaPlaywright({
          ...requestBase,
          ref,
          path: downloadPath,
        });
        res.json({
          ok: true,
          targetId: tab.targetId,
          tabId: tab.tabId,
          url: tab.url,
          download: result,
        });
      },
    });
  });
}
