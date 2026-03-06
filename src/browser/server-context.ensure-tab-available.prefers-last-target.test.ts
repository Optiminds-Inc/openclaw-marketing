import { describe, expect, it, vi } from "vitest";
import { withFetchPreconnect } from "../test-utils/fetch-mock.js";
import type { BrowserServerState } from "./server-context.js";
import "./server-context.chrome-test-harness.js";
import { createBrowserRouteContext } from "./server-context.js";

function makeBrowserState(): BrowserServerState {
  return {
    // oxlint-disable-next-line typescript/no-explicit-any
    server: null as any,
    port: 0,
    resolved: {
      enabled: true,
      controlPort: 18791,
      cdpProtocol: "http",
      cdpHost: "127.0.0.1",
      cdpIsLoopback: true,
      evaluateEnabled: false,
      remoteCdpTimeoutMs: 1500,
      remoteCdpHandshakeTimeoutMs: 3000,
      extraArgs: [],
      color: "#FF4500",
      headless: true,
      noSandbox: false,
      attachOnly: false,
      defaultProfile: "chrome",
      profiles: {
        chrome: {
          driver: "extension",
          cdpUrl: "http://127.0.0.1:18792",
          cdpPort: 18792,
          color: "#00AA00",
        },
        openclaw: { cdpPort: 18800, color: "#FF4500" },
      },
    },
    profiles: new Map(),
  };
}

function stubChromeJsonList(responses: unknown[]) {
  const fetchMock = vi.fn();
  const queue = [...responses];

  fetchMock.mockImplementation(async (url: unknown) => {
    const u = String(url);
    if (!u.includes("/json/list")) {
      throw new Error(`unexpected fetch: ${u}`);
    }
    const next = queue.shift();
    if (!next) {
      throw new Error("no more responses");
    }
    return {
      ok: true,
      json: async () => next,
    } as unknown as Response;
  });

  global.fetch = withFetchPreconnect(fetchMock);
  return fetchMock;
}

describe("browser server-context ensureTabAvailable", () => {
  it("sticks to the last selected target when targetId is omitted", async () => {
    // 1st call (snapshot): stable ordering A then B (twice)
    // 2nd call (act): reversed ordering B then A (twice)
    const responses = [
      [
        { id: "A", type: "page", url: "https://a.example", webSocketDebuggerUrl: "ws://x/a" },
        { id: "B", type: "page", url: "https://b.example", webSocketDebuggerUrl: "ws://x/b" },
      ],
      [
        { id: "A", type: "page", url: "https://a.example", webSocketDebuggerUrl: "ws://x/a" },
        { id: "B", type: "page", url: "https://b.example", webSocketDebuggerUrl: "ws://x/b" },
      ],
      [
        { id: "B", type: "page", url: "https://b.example", webSocketDebuggerUrl: "ws://x/b" },
        { id: "A", type: "page", url: "https://a.example", webSocketDebuggerUrl: "ws://x/a" },
      ],
      [
        { id: "B", type: "page", url: "https://b.example", webSocketDebuggerUrl: "ws://x/b" },
        { id: "A", type: "page", url: "https://a.example", webSocketDebuggerUrl: "ws://x/a" },
      ],
    ];
    stubChromeJsonList(responses);
    const state = makeBrowserState();

    const ctx = createBrowserRouteContext({
      getState: () => state,
    });

    const chrome = ctx.forProfile("chrome");
    const first = await chrome.ensureTabAvailable();
    expect(first.targetId).toBe("A");
    const second = await chrome.ensureTabAvailable();
    expect(second.targetId).toBe("A");
  });

  it("falls back to the only attached tab when an invalid targetId is provided (extension)", async () => {
    const responses = [
      [
        {
          id: "A",
          tabId: 7,
          type: "page",
          url: "https://a.example",
          webSocketDebuggerUrl: "ws://x/a",
        },
      ],
      [
        {
          id: "A",
          tabId: 7,
          type: "page",
          url: "https://a.example",
          webSocketDebuggerUrl: "ws://x/a",
        },
      ],
    ];
    stubChromeJsonList(responses);
    const state = makeBrowserState();

    const ctx = createBrowserRouteContext({ getState: () => state });
    const chrome = ctx.forProfile("chrome");
    const chosen = await chrome.ensureTabAvailable("NOT_A_TAB");
    expect(chosen.targetId).toBe("A");
  });

  it("recovers a navigated extension tab when tabId is provided with a stale targetId", async () => {
    const responses = [
      [
        {
          id: "NEW_TARGET",
          tabId: 42,
          type: "page",
          url: "https://x.com/openclaw",
          webSocketDebuggerUrl: "ws://x/new",
        },
      ],
      [
        {
          id: "NEW_TARGET",
          tabId: 42,
          type: "page",
          url: "https://x.com/openclaw",
          webSocketDebuggerUrl: "ws://x/new",
        },
      ],
    ];
    stubChromeJsonList(responses);
    const state = makeBrowserState();

    const ctx = createBrowserRouteContext({ getState: () => state });
    const chrome = ctx.forProfile("chrome");
    const chosen = await chrome.ensureTabAvailable({ targetId: "OLD_TARGET", tabId: 42 });
    expect(chosen.targetId).toBe("NEW_TARGET");
    expect(chosen.tabId).toBe(42);
  });

  it("recovers the remembered stale extension targetId using primary task tab metadata when multiple tabs exist", async () => {
    const responses = [
      [
        {
          id: "USER_TAB",
          tabId: 7,
          type: "page",
          url: "https://example.com",
          webSocketDebuggerUrl: "ws://x/user",
          windowRole: "user",
          active: false,
          isPrimary: false,
          attachOrder: 1,
        },
        {
          id: "TASK_TAB",
          tabId: 42,
          type: "page",
          url: "https://x.com/openclaw",
          webSocketDebuggerUrl: "ws://x/task",
          windowRole: "task",
          active: true,
          isPrimary: true,
          attachOrder: 9,
        },
      ],
      [
        {
          id: "USER_TAB",
          tabId: 7,
          type: "page",
          url: "https://example.com",
          webSocketDebuggerUrl: "ws://x/user",
          windowRole: "user",
          active: false,
          isPrimary: false,
          attachOrder: 1,
        },
        {
          id: "TASK_TAB",
          tabId: 42,
          type: "page",
          url: "https://x.com/openclaw",
          webSocketDebuggerUrl: "ws://x/task",
          windowRole: "task",
          active: true,
          isPrimary: true,
          attachOrder: 9,
        },
      ],
    ];
    stubChromeJsonList(responses);
    const state = makeBrowserState();
    state.profiles.set("chrome", {
      profile: state.resolved.profiles.chrome,
      running: null,
      lastTargetId: "STALE_TARGET",
      lastTabId: null,
    });

    const ctx = createBrowserRouteContext({ getState: () => state });
    const chrome = ctx.forProfile("chrome");
    const chosen = await chrome.ensureTabAvailable("STALE_TARGET");
    expect(chosen.targetId).toBe("TASK_TAB");
    expect(chosen.tabId).toBe(42);
  });

  it("keeps rejecting a foreign stale extension targetId when multiple tabs exist", async () => {
    const responses = [
      [
        {
          id: "USER_TAB",
          tabId: 7,
          type: "page",
          url: "https://example.com",
          webSocketDebuggerUrl: "ws://x/user",
          windowRole: "user",
          active: false,
          isPrimary: false,
          attachOrder: 1,
        },
        {
          id: "TASK_TAB",
          tabId: 42,
          type: "page",
          url: "https://x.com/openclaw",
          webSocketDebuggerUrl: "ws://x/task",
          windowRole: "task",
          active: true,
          isPrimary: true,
          attachOrder: 9,
        },
      ],
      [
        {
          id: "USER_TAB",
          tabId: 7,
          type: "page",
          url: "https://example.com",
          webSocketDebuggerUrl: "ws://x/user",
          windowRole: "user",
          active: false,
          isPrimary: false,
          attachOrder: 1,
        },
        {
          id: "TASK_TAB",
          tabId: 42,
          type: "page",
          url: "https://x.com/openclaw",
          webSocketDebuggerUrl: "ws://x/task",
          windowRole: "task",
          active: true,
          isPrimary: true,
          attachOrder: 9,
        },
      ],
    ];
    stubChromeJsonList(responses);
    const state = makeBrowserState();
    state.profiles.set("chrome", {
      profile: state.resolved.profiles.chrome,
      running: null,
      lastTargetId: "DIFFERENT_TARGET",
      lastTabId: 42,
    });

    const ctx = createBrowserRouteContext({ getState: () => state });
    const chrome = ctx.forProfile("chrome");
    await expect(chrome.ensureTabAvailable("FOREIGN_STALE_TARGET")).rejects.toThrow(
      /tab not found/i,
    );
  });

  it("recovers a navigated local tab when tabId is provided with a stale targetId", async () => {
    const responses = [
      [
        {
          id: "NEW_LOCAL_TARGET",
          tabId: 88,
          type: "page",
          url: "https://local.example/openclaw",
          webSocketDebuggerUrl: "ws://x/local",
        },
      ],
      [
        {
          id: "NEW_LOCAL_TARGET",
          tabId: 88,
          type: "page",
          url: "https://local.example/openclaw",
          webSocketDebuggerUrl: "ws://x/local",
        },
      ],
    ];
    stubChromeJsonList(responses);
    const state = makeBrowserState();

    const ctx = createBrowserRouteContext({ getState: () => state });
    const openclaw = ctx.forProfile("openclaw");
    const chosen = await openclaw.ensureTabAvailable({ targetId: "OLD_LOCAL_TARGET", tabId: 88 });
    expect(chosen.targetId).toBe("NEW_LOCAL_TARGET");
    expect(chosen.tabId).toBe(88);
  });

  it("returns a descriptive message when no extension tabs are attached", async () => {
    const responses = [[]];
    stubChromeJsonList(responses);
    const state = makeBrowserState();

    const ctx = createBrowserRouteContext({ getState: () => state });
    const chrome = ctx.forProfile("chrome");
    await expect(chrome.ensureTabAvailable()).rejects.toThrow(/no attached Chrome tabs/i);
  });
});
