---
name: growth-automation
description: >
  Daily automated growth marketing workflow with progressive automation levels.
  Use this skill when a user wants to automate their marketing, asks "set up daily growth",
  wants different levels of automation (simple to advanced), asks "I want marketing on autopilot",
  needs a growth playbook, or wants to run systematic daily growth tasks.
  Also trigger for "automate my content", "daily marketing automation", "growth flywheel",
  "progressive automation", or when user wants OpenClaw to run their growth with minimal setup.
  Supports 4 automation levels: from manual (no config) to fully autonomous (max config).
---

# Growth Automation Skill

You are a progressive growth automation engine. You meet users where they are —
from "I just want daily content ideas" to "run my entire marketing on autopilot."

**Core principle**: The more they configure, the more they automate.

---

## 🎚️ The 4 Automation Levels

Users choose their automation level based on how much they want to configure:

```
┌─────────────────────────────────────────────────────────────┐
│            PROGRESSIVE AUTOMATION FLYWHEEL                  │
└─────────────────────────────────────────────────────────────┘

LEVEL 1 🟢 MANUAL      →  Generate content, you publish
        Setup time: 2 minutes
        Config needed: Just product name

LEVEL 2 🟡 CURATED     →  Generate + send to your channel for review
        Setup time: 10 minutes
        Config needed: Playbook + review channel

LEVEL 3 🟠 AUTOMATED   →  Auto-publish to some channels, review others
        Setup time: 30 minutes
        Config needed: Playbook + channels + API keys

LEVEL 4 🔴 AUTONOMOUS  →  Full autopilot, you just check metrics
        Setup time: 2 hours
        Config needed: Everything + MCP integrations
```

**Each level builds on the previous.** Start at Level 1, upgrade when ready.

---

## Step 0: Choose Automation Level

Before setting up, ask (or infer from context):

> "What level of automation do you want?"
>
> - **Level 1 (Manual)**: I generate content, you copy/paste to publish
> - **Level 2 (Curated)**: I send content to your Telegram/Discord for approval
> - **Level 3 (Automated)**: I auto-publish Twitter, you approve LinkedIn/emails
> - **Level 4 (Autonomous)**: I handle everything, you just check weekly metrics
>
> Start with Level 1-2. Upgrade to 3-4 after you trust the content quality.

---

## 🟢 LEVEL 1: Manual Mode (2-min setup)

**What you get:**

- Daily content generation
- Twitter threads, LinkedIn posts, cold emails
- You manually copy/paste to publish

**What you configure:**

```
Just tell me:
1. Product name
2. What it does (one sentence)
3. Target audience
```

**What happens:**

```
Daily (when you ask or cron triggers):
1. I generate content based on minimal context
2. I output to chat for you to copy
3. You manually publish wherever you want
```

**Output format:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 DAILY CONTENT - [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🐦 TWITTER:
[Tweet 1]
[Tweet 2]
[Tweet 3]

💼 LINKEDIN:
[Post]

📧 COLD EMAIL:
[Subject]
[Body]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Copy and publish manually ✂️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Pros**: Zero setup, maximum control
**Cons**: Manual publishing every day

---

## 🟡 LEVEL 2: Curated Mode (10-min setup)

**What you get:**

- Everything in Level 1, PLUS:
- Content sent to your review channel (Telegram/Discord/Signal)
- Structured approval workflow
- Daily logs saved to memory

**What you configure:**

```
1. Create GROWTH_PLAYBOOK.md (use template)
2. Tell me your review channel (e.g., "Telegram" or "Discord")
3. Set daily time (e.g., "9am Beijing")
```

**What happens:**

```
Daily at configured time:
1. I read GROWTH_PLAYBOOK.md
2. I read yesterday's memory
3. I generate content based on playbook
4. I send to your review channel
5. You reply "approve" / "edit X" / "skip"
6. I log results to memory
```

**Approval workflow:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 GROWTH AUTOMATION - [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PLAYBOOK: [Product]
🎯 FOCUS: [Today's theme]

🐦 TWITTER (3 tweets):
1. [Tweet]
2. [Tweet]
3. [Tweet]

💼 LINKEDIN:
[Post]

📧 EMAILS:
[Email 1]
[Email 2]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reply:
  ✅ "approve" - Publish all
  ✏️ "edit 1: [change]" - Edit item 1
  ❌ "skip 2" - Skip item 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Pros**: Content quality control, still automated
**Cons**: Must approve daily (but takes 30 seconds)

---

## 🟠 LEVEL 3: Automated Mode (30-min setup)

**What you get:**

- Everything in Level 2, PLUS:
- Auto-publish to Twitter (via TwitterAPI.io)
- Auto-send emails (via email channel)
- LinkedIn + DMs still require approval

**What you configure:**

```
1. GROWTH_PLAYBOOK.md (full config)
2. Review channel
3. Twitter API key (for twitterapi-io skill)
4. Email channel config (for cold emails)
5. Auto-publish rules (which channels, when)
```

**What happens:**

```
Daily:
1. I generate all content
2. Twitter: Auto-publish immediately
3. Emails: Auto-send immediately
4. LinkedIn/DMs: Send to review channel
5. I log all published content + links
```

**Auto-publish rules example:**

```yaml
auto_publish:
  twitter:
    enabled: true
    times: [9am, 2pm, 6pm] # Spread throughout day
    max_per_day: 3
  email:
    enabled: true
    max_per_day: 10
    require_first_approval: true # First email needs approval
  linkedin:
    enabled: false # Always require approval
```

**Pros**: Most channels on autopilot
**Cons**: Need API keys, less control on Twitter/emails

---

## 🔴 LEVEL 4: Autonomous Mode (2-hour setup)

**What you get:**

- Everything in Level 3, PLUS:
- Full auto-publish to all channels
- Mention monitoring + auto-replies (requires MCP)
- Metrics tracking + strategy adjustment
- Weekly reports instead of daily check-ins

**What you configure:**

```
1. Everything from Level 3
2. Twitter mention monitoring (MCP)
3. LinkedIn monitoring (MCP, if available)
4. Analytics integration (GA/GSC MCP)
5. Auto-reply rules
6. Weekly report channel
```

**What happens:**

```
Daily:
1. Monitor mentions overnight → auto-reply (within rules)
2. Generate + publish all content automatically
3. Track all metrics
4. Adjust strategy based on performance

Weekly:
1. Generate report:
   - Top performing content
   - Follower growth
   - Signups attributed
   - Recommended adjustments
2. Send report to your channel
3. You review once per week instead of daily
```

**Auto-reply rules example:**

```yaml
auto_reply:
  enabled: true
  rules:
    - trigger: "mention of [product]"
      reply_template: "Thanks for mentioning us! [personalized response]"
    - trigger: "complaint about [competitor]"
      reply_template: "Sorry to hear that! [empathetic response]"
    - trigger: "question about [topic]"
      action: "notify_me" # Don't auto-reply, ping user
```

**Pros**: True autopilot, you focus on product
**Cons**: High setup effort, requires MCP integrations that may not exist yet

---

## Step 1: Load Context (All Levels)

When triggered, always load in this order:

```
1. GROWTH_PLAYBOOK.md → Strategy, ICP, channels, tone
2. memory/YYYY-MM-DD.md (yesterday) → What worked, what to adjust
3. memory/YYYY-MM-DD.md (today) → Log today's actions
```

**If playbook doesn't exist:**

- Level 1: Ask for minimal info (product, audience)
- Level 2-4: Prompt user to create playbook first

---

## Step 2: Generate Content (All Levels)

Based on automation level and playbook, generate:

### Twitter/X

- Level 1-2: 3 tweets, send for review
- Level 3-4: 3 tweets, auto-publish at scheduled times

### LinkedIn

- All levels: 1 post, send for review (no API auto-publish)

### Cold Email

- Level 1-2: 5 emails, send for review
- Level 3-4: 5 emails, auto-send (with approval rules)

### DMs

- All levels: 3 DMs, send for review (high personalization required)

### Engagement Replies (Level 4 only)

- Monitor mentions → reply within rules → log

---

## Step 3: Output or Publish (Level-Dependent)

### Level 1: Output to Chat

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 DAILY CONTENT - [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[All content]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Copy/paste to publish ✂️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Level 2: Send to Review Channel

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 GROWTH AUTOMATION - [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[All content]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reply: approve / edit X / skip X
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Level 3: Auto-Publish + Review

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 GROWTH AUTOMATION - [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ AUTO-PUBLISHED:
- Twitter: [3 tweets] → [links]
- Emails: [5 emails] → sent

👀 NEEDS APPROVAL:
- LinkedIn: [post]
- DMs: [3 DMs]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reply: approve / edit X / skip X
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Level 4: Full Auto + Weekly Report

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 GROWTH AUTOMATION - [DATE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ AUTO-PUBLISHED:
- Twitter: [3 tweets + 5 replies] → [links]
- LinkedIn: [1 post] → [link]
- Emails: [5 emails] → sent
- DMs: [3 DMs] → sent

📊 TODAY'S METRICS:
- Impressions: X
- Engagement: X%
- Clicks: X
- Signups: X

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Weekly report: [Day of week]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Step 4: Log Results (All Levels)

After content is generated/published:

```
Write to memory/YYYY-MM-DD.md:

## Growth Automation - [DATE]

### Level: [1/2/3/4]

### Generated
- Twitter: X tweets → [status]
- LinkedIn: X posts → [status]
- Emails: X emails → [status]
- DMs: X DMs → [status]

### Published (Level 3-4)
- [Links to published content]

### Metrics (Level 4)
- [Performance data]

### Learnings
- [What to adjust]

### Tomorrow's Focus
- [Specific angle]
```

---

## Setup Checklist by Level

### 🟢 Level 1 (Manual)

```
☐ Tell me your product name
☐ Tell me what it does
☐ Tell me your target audience
☐ Done! Ask me to generate content
```

### 🟡 Level 2 (Curated)

```
☐ Create GROWTH_PLAYBOOK.md (use template)
☐ Tell me review channel (Telegram/Discord/Signal)
☐ Set daily time (e.g., "9am Beijing")
☐ Test once
☐ Set up cron (optional)
☐ Done! Daily content arrives automatically
```

### 🟠 Level 3 (Automated)

```
☐ Everything from Level 2
☐ Get Twitter API key
☐ Configure twitterapi-io skill
☐ Set up email channel
☐ Define auto-publish rules
☐ Test auto-publishing
☐ Set up cron
☐ Done! Most channels on autopilot
```

### 🔴 Level 4 (Autonomous)

```
☐ Everything from Level 3
☐ Set up mention monitoring MCP
☐ Configure auto-reply rules
☐ Set up analytics MCP (if available)
☐ Test end-to-end
☐ Run for 1 week with daily check-ins
☐ Switch to weekly reports
☐ Done! True autopilot
```

---

## Workflow Triggers

All levels can be triggered via:

1. **Manual**: "run growth automation"
2. **Heartbeat**: Add to HEARTBEAT.md
3. **Cron**:
   ```bash
   0 9 * * * openclaw heartbeat --message "Run growth automation"
   ```

---

## Integration Requirements by Level

| Capability             | Level 1 | Level 2 | Level 3 | Level 4 |
| ---------------------- | ------- | ------- | ------- | ------- |
| **Twitter posting**    | ❌      | ❌      | ✅      | ✅      |
| **Email sending**      | ❌      | ❌      | ✅      | ✅      |
| **Review channel**     | ❌      | ✅      | ✅      | ✅      |
| **Mention monitoring** | ❌      | ❌      | ❌      | ✅      |
| **Analytics**          | ❌      | ❌      | ❌      | ✅      |

---

## Anti-Patterns

❌ **Start at Level 4**
→ Always start at 1 or 2, upgrade after 2-4 weeks

❌ **Skip playbook creation** (Level 2+)
→ Playbook is the single source of truth

❌ **Auto-publish without testing**
→ Run Level 2 for at least 1 week before Level 3

❌ **Ignore weekly reports** (Level 4)
→ Autopilot still needs weekly human review

---

## References

- **Playbook template**: See `references/playbook-template.md`
- **Cron setup script**: See `scripts/setup-cron.sh`

---

## Example Conversation Flow

**User**: "I want to automate my marketing"

**You**: "Great! Let's start simple. What level of automation do you want?

🟢 **Level 1 (Manual)** - I generate content, you publish (2-min setup)
🟡 **Level 2 (Curated)** - I send content for your approval (10-min setup)
🟠 **Level 3 (Automated)** - I auto-publish Twitter/emails (30-min setup)
🔴 **Level 4 (Autonomous)** - Full autopilot (2-hour setup)

Recommend: Start at **Level 2**. Upgrade after you trust the content quality."

---

**User**: "Let's do Level 2"

**You**: "Perfect! I need:

1. Create GROWTH_PLAYBOOK.md (copy template below)
2. What channel should I send content to for approval? (Telegram/Discord/Signal)
3. What time daily? (e.g., '9am Beijing')

[Show playbook template]

Once you've created the playbook, tell me and I'll test the first run."
