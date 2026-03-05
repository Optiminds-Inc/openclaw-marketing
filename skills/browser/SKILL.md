---
name: browser
description: "Browser automation via Chrome extension relay. Controls user's existing Chrome tabs through the OpenClaw Browser Relay extension. Use when: (1) automating web interactions (click, type, navigate), (2) taking screenshots or snapshots, (3) extracting page content via AI snapshot, (4) controlling user's Chrome tabs. NOT for: simple web fetches (use web_fetch), quick searches (use web_search)."
metadata: { "openclaw": { "emoji": "🌐", "requires": { "bins": ["openclaw"] } } }
---

# Browser Skill

Control user's Chrome browser tabs via the OpenClaw Browser Relay extension.

## Prerequisites

1. Install the OpenClaw Browser Relay Chrome extension
2. Click the extension icon on tabs you want to control (badge shows "ON")
3. Configure the extension with your relay server URL

## When to Use

✅ **USE this skill when:**

- Automating web interactions (click, type, navigate, scroll)
- Taking screenshots of user's browser tabs
- Extracting structured page content via AI snapshots
- Filling forms, logging in, or multi-step web workflows
- Web scraping that requires JavaScript rendering

## When NOT to Use

❌ **DON'T use this skill when:**

- Simple static content fetch → use `web_fetch`
- Quick information searches → use `web_search`
- Reading API documentation → use `web_fetch` with the URL

## Available Actions

| Action       | Description                                             |
| ------------ | ------------------------------------------------------- |
| `status`     | Check Chrome extension relay status                     |
| `tabs`       | List attached Chrome tabs                               |
| `focus`      | Focus a specific tab by targetId                        |
| `close`      | Close a tab (or active tab if no targetId)              |
| `snapshot`   | Get AI-readable page structure (refs for automation)    |
| `screenshot` | Capture screenshot (viewport or full page)              |
| `navigate`   | Navigate to a URL in existing tab                       |
| `console`    | Get browser console messages                            |
| `pdf`        | Save current page as PDF                                |
| `upload`     | Upload files to a file input                            |
| `dialog`     | Handle browser dialogs (alert, confirm, prompt)         |
| `act`        | Execute interaction actions (click, type, scroll, etc.) |

## Quick Start

```bash
# Check if Chrome extension is connected
openclaw browser status --profile chrome

# List attached tabs
openclaw browser tabs --profile chrome

# Get AI snapshot of attached tab
openclaw browser snapshot --profile chrome

# Take screenshot
openclaw browser screenshot --profile chrome
```

## Common Workflows

### Get Page Snapshot for Automation

The `snapshot` action returns an AI-readable representation with element refs:

```bash
openclaw browser snapshot --profile chrome
```

Example output:

```yaml
- textbox [ref=e1] "Search..."
- button [ref=e2] "Submit"
- link [ref=e3] "Learn more"
```

### Interact with Elements

Use `act` action with refs from snapshot:

```bash
# Click an element
openclaw browser act --profile chrome --request '{"kind":"click","ref":"e2"}'

# Type in a text field
openclaw browser act --profile chrome --request '{"kind":"type","ref":"e1","text":"hello world"}'

# Scroll down
openclaw browser act --profile chrome --request '{"kind":"scroll","direction":"down","amount":500}'
```

### Navigate and Screenshot

```bash
# Navigate to URL
openclaw browser navigate --profile chrome --url "https://example.com"

# Take screenshot
openclaw browser screenshot --profile chrome

# Full page screenshot
openclaw browser screenshot --profile chrome --fullPage
```

### Form Filling Workflow

```bash
# 1. Get snapshot to find form elements
openclaw browser snapshot --profile chrome

# 2. Type in input fields
openclaw browser act --profile chrome --request '{"kind":"type","ref":"e1","text":"username"}'
openclaw browser act --profile chrome --request '{"kind":"type","ref":"e2","text":"password"}'

# 3. Click submit
openclaw browser act --profile chrome --request '{"kind":"click","ref":"e3"}'
```

## Act Request Types

| Kind        | Parameters             | Description                         |
| ----------- | ---------------------- | ----------------------------------- |
| `click`     | ref, x, y              | Click element by ref or coordinates |
| `type`      | ref, text, clear       | Type text into element              |
| `scroll`    | direction, amount, ref | Scroll page or element              |
| `hover`     | ref, x, y              | Hover over element                  |
| `select`    | ref, value             | Select dropdown option              |
| `press`     | key                    | Press keyboard key                  |
| `wait`      | ms, selector           | Wait for time or selector           |
| `close`     | -                      | Close current tab                   |
| `goBack`    | -                      | Navigate back                       |
| `goForward` | -                      | Navigate forward                    |

## Snapshot Options

| Option        | Description                                   |
| ------------- | --------------------------------------------- |
| `format`      | "ai" (default) or "aria"                      |
| `refs`        | "role" (default) or "aria" for stable ref IDs |
| `interactive` | Only show interactive elements                |
| `compact`     | Compact output format                         |
| `maxChars`    | Limit output size                             |
| `selector`    | Focus on specific CSS selector                |
| `depth`       | Limit DOM tree depth                          |
| `labels`      | Include visual labels in screenshot           |

## Working with Refs

Refs from snapshots (e.g., `e12`) identify elements for subsequent actions:

1. Get snapshot → note the ref for target element
2. Pass same `targetId` to act to ensure same tab context
3. Use ref in act request: `{"kind":"click","ref":"e12"}`

For stable refs across calls, use `refs="aria"` in snapshot.

## Error Handling

### No Chrome Tabs Attached

If you get "No Chrome tabs attached" error:

1. Open Chrome browser
2. Navigate to the page you want to control
3. Click the OpenClaw Browser Relay extension icon
4. Badge should show "ON"
5. Retry the command

### Stale targetId

If tab not found with targetId:

1. Run `openclaw browser tabs --profile chrome` to get current tabs
2. Use a valid targetId from the list

## Notes

- Always use `--profile chrome` for all commands
- User must manually attach tabs via the extension (click toolbar icon)
- Keep track of `targetId` when working with multiple tabs
- Prefer `snapshot` + `act` over coordinate-based interactions
- For forms, use `snapshot` to find input refs, then `act` with `kind:"type"`
