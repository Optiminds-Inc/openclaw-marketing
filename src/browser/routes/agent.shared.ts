import type { PwAiModule } from "../pw-ai-module.js";
import { getPwAiModule as getPwAiModuleBase } from "../pw-ai-module.js";
import type {
  BrowserRouteContext,
  BrowserTab,
  BrowserTabSelection,
  ProfileContext,
} from "../server-context.js";
import type { BrowserRequest, BrowserResponse } from "./types.js";
import { getProfileContext, jsonError } from "./utils.js";

export const SELECTOR_UNSUPPORTED_MESSAGE = [
  "Error: 'selector' is not supported. Use 'ref' from snapshot instead.",
  "",
  "Example workflow:",
  "1. snapshot action to get page state with refs",
  '2. act with ref: "e123" to interact with element',
  "",
  "This is more reliable for modern SPAs.",
].join("\n");

export function readBody(req: BrowserRequest): Record<string, unknown> {
  const body = req.body as Record<string, unknown> | undefined;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return {};
  }
  return body;
}

export function resolveTargetIdFromBody(body: Record<string, unknown>): string | undefined {
  const targetId = typeof body.targetId === "string" ? body.targetId.trim() : "";
  return targetId || undefined;
}

export function resolveTabIdFromBody(body: Record<string, unknown>): number | undefined {
  const rawTabId = body.tabId;
  if (typeof rawTabId !== "number" || !Number.isFinite(rawTabId)) {
    return undefined;
  }
  return Math.floor(rawTabId);
}

export function resolveTabSelectionFromBody(
  body: Record<string, unknown>,
): BrowserTabSelection | undefined {
  const targetId = resolveTargetIdFromBody(body);
  const tabId = resolveTabIdFromBody(body);
  if (!targetId && tabId === undefined) {
    return undefined;
  }
  return { targetId, tabId };
}

export function resolveTargetIdFromQuery(query: Record<string, unknown>): string | undefined {
  const targetId = typeof query.targetId === "string" ? query.targetId.trim() : "";
  return targetId || undefined;
}

export function resolveTabIdFromQuery(query: Record<string, unknown>): number | undefined {
  const rawTabId = typeof query.tabId === "string" ? Number(query.tabId) : undefined;
  if (typeof rawTabId !== "number" || !Number.isFinite(rawTabId)) {
    return undefined;
  }
  return Math.floor(rawTabId);
}

export function resolveTabSelectionFromQuery(
  query: Record<string, unknown>,
): BrowserTabSelection | undefined {
  const targetId = resolveTargetIdFromQuery(query);
  const tabId = resolveTabIdFromQuery(query);
  if (!targetId && tabId === undefined) {
    return undefined;
  }
  return { targetId, tabId };
}

export function handleRouteError(ctx: BrowserRouteContext, res: BrowserResponse, err: unknown) {
  const mapped = ctx.mapTabError(err);
  if (mapped) {
    return jsonError(res, mapped.status, mapped.message);
  }
  jsonError(res, 500, String(err));
}

export function resolveProfileContext(
  req: BrowserRequest,
  res: BrowserResponse,
  ctx: BrowserRouteContext,
): ProfileContext | null {
  const profileCtx = getProfileContext(req, ctx);
  if ("error" in profileCtx) {
    jsonError(res, profileCtx.status, profileCtx.error);
    return null;
  }
  return profileCtx;
}

export async function getPwAiModule(): Promise<PwAiModule | null> {
  return await getPwAiModuleBase({ mode: "soft" });
}

export async function requirePwAi(
  res: BrowserResponse,
  feature: string,
): Promise<PwAiModule | null> {
  const mod = await getPwAiModule();
  if (mod) {
    return mod;
  }
  jsonError(
    res,
    501,
    [
      `Playwright is not available in this gateway build; '${feature}' is unsupported.`,
      "Install the full Playwright package (not playwright-core) and restart the gateway, or reinstall with browser support.",
      "Docs: /tools/browser#playwright-requirement",
    ].join("\n"),
  );
  return null;
}

type RouteTabContext = {
  profileCtx: ProfileContext;
  tab: Awaited<ReturnType<ProfileContext["ensureTabAvailable"]>>;
  cdpUrl: string;
};

type RouteTabPwContext = RouteTabContext & {
  pw: PwAiModule;
};

type RouteWithTabParams<T> = {
  req: BrowserRequest;
  res: BrowserResponse;
  ctx: BrowserRouteContext;
  targetId?: string;
  selection?: BrowserTabSelection;
  run: (ctx: RouteTabContext) => Promise<T>;
};

export async function withRouteTabContext<T>(
  params: RouteWithTabParams<T>,
): Promise<T | undefined> {
  const profileCtx = resolveProfileContext(params.req, params.res, params.ctx);
  if (!profileCtx) {
    return undefined;
  }
  try {
    const tab = await profileCtx.ensureTabAvailable(params.selection ?? params.targetId);
    return await params.run({
      profileCtx,
      tab,
      cdpUrl: profileCtx.profile.cdpUrl,
    });
  } catch (err) {
    handleRouteError(params.ctx, params.res, err);
    return undefined;
  }
}

type RouteWithPwParams<T> = {
  req: BrowserRequest;
  res: BrowserResponse;
  ctx: BrowserRouteContext;
  targetId?: string;
  selection?: BrowserTabSelection;
  feature: string;
  run: (ctx: RouteTabPwContext) => Promise<T>;
};

export async function withPlaywrightRouteContext<T>(
  params: RouteWithPwParams<T>,
): Promise<T | undefined> {
  return await withRouteTabContext({
    req: params.req,
    res: params.res,
    ctx: params.ctx,
    targetId: params.targetId,
    selection: params.selection,
    run: async ({ profileCtx, tab, cdpUrl }) => {
      const pw = await requirePwAi(params.res, params.feature);
      if (!pw) {
        return undefined as T | undefined;
      }
      return await params.run({ profileCtx, tab, cdpUrl, pw });
    },
  });
}

export async function refreshTabSelection(
  profileCtx: ProfileContext,
  tab: BrowserTab,
): Promise<BrowserTab> {
  if (tab.tabId === undefined) {
    return await profileCtx.ensureTabAvailable({ targetId: tab.targetId });
  }
  return await profileCtx.ensureTabAvailable({
    tabId: tab.tabId,
    targetId: tab.targetId,
  });
}
