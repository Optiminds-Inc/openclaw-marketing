# GROWTH_PLAYBOOK.md Template

Copy this template to your workspace root as `GROWTH_PLAYBOOK.md` and customize.
Fill in only the sections needed for your automation level.

---

## 🟢 MINIMAL CONFIG (Level 1 - Manual)

**Just answer these 3 questions:**

```markdown
## Product Basics

**Product name**: [Your product]
**What it does**: [One sentence]
**Target audience**: [Who needs this?]
```

That's it! I'll generate content based on this minimal context.

---

## 🟡 STANDARD CONFIG (Level 2 - Curated)

**Fill in these sections:**

```markdown
# Growth Playbook - [Product Name]

_Last updated: [DATE]_

## Product Overview

**Name**: [Product name]
**Tagline**: [One-line description]
**URL**: [Website URL]
**Core value**: [What problem does it solve?]
**Differentiation**: [Why choose this over alternatives?]

---

## Ideal Customer Profile (ICP)

### Primary ICP

**Who**: [Specific job title / persona]
**Company**: [Company type, size, stage]
**Trigger moment**: [What makes them need this NOW?]
**Pain**: [Specific pain they feel]
**Current solution**: [What they do without your product]

---

## Content Strategy

### Content Themes (rotate weekly)

| Week   | Theme     | Focus   |
| ------ | --------- | ------- |
| Week 1 | [Theme 1] | [Angle] |
| Week 2 | [Theme 2] | [Angle] |
| Week 3 | [Theme 3] | [Angle] |
| Week 4 | [Theme 4] | [Angle] |

### Hook Library

- "[Hook template 1]"
- "[Hook template 2]"
- "[Hook template 3]"
- "[Hook template 4]"
- "[Hook template 5]"

---

## Channels

### Twitter/X

- **Active**: Yes/No
- **Frequency**: X posts/day
- **Focus**: [Type of content]

### LinkedIn

- **Active**: Yes/No
- **Frequency**: X posts/week
- **Focus**: [Type of content]

### Cold Email

- **Active**: Yes/No
- **Frequency**: X emails/day
- **Target**: [Who]
- **Goal**: [Reply / Demo / etc.]

### DMs

- **Active**: Yes/No
- **Frequency**: X DMs/day
- **Platform**: [LinkedIn / Twitter / Both]
- **Goal**: [Relationship / Referral / etc.]

---

## Tone & Voice

**Overall tone**: [Professional / Casual / Contrarian / Friendly expert]

**Do's**:

- [Writing guideline 1]
- [Writing guideline 2]

**Don'ts**:

- [What to avoid 1]
- [What to avoid 2]

---

## Automation Config

**Review channel**: [Telegram / Discord / Signal]
**Daily time**: [e.g., 9am Beijing]
**Automation level**: Level 2 (Curated)
```

---

## 🟠 ADVANCED CONFIG (Level 3 - Automated)

**Add these sections to Level 2 config:**

````markdown
---

## Auto-Publish Rules

### Twitter

```yaml
twitter:
  enabled: true
  times: [9am, 2pm, 6pm]
  max_per_day: 3
  require_approval_first: false
```
````

### Cold Email

```yaml
email:
  enabled: true
  max_per_day: 10
  require_first_approval: true # First email needs OK
  follow_up_days: [3, 7, 14]
```

### LinkedIn

```yaml
linkedin:
  enabled: false # Always require approval (no API)
```

---

## API Keys Needed

- [ ] Twitter API key (for twitterapi-io skill)
- [ ] Email channel configured
- [ ] Test auto-publishing

---

## Approval Rules

Even with auto-publish:

- First 10 tweets: Require approval
- First 5 emails: Require approval
- All LinkedIn posts: Require approval
- All DMs: Require approval

````

---

## 🔴 FULL CONFIG (Level 4 - Autonomous)

**Add these sections to Level 3 config:**

```markdown
---

## Mention Monitoring

### Twitter Mentions
```yaml
twitter_mentions:
  enabled: true
  check_interval: 4h  # How often to check
  auto_reply_rules:
    - trigger: "mention of [product]"
      action: "reply"
      template: "Thanks for mentioning us! [personalized]"

    - trigger: "complaint about [competitor]"
      action: "reply"
      template: "Sorry to hear that! [empathetic response]"

    - trigger: "question about [topic]"
      action: "notify_me"  # Don't auto-reply
````

### LinkedIn Mentions

```yaml
linkedin_mentions:
  enabled: false # No API yet
```

---

## Analytics Integration

```yaml
analytics:
  google_analytics: [Property ID]
  google_search_console: [Site URL]

  track:
    - impressions
    - engagement_rate
    - clicks
    - signups
    - revenue_attributed
```

---

## Weekly Reports

```yaml
weekly_report:
  enabled: true
  channel: [Telegram / Discord / Email]
  day: [Monday / Friday]

  include:
    - top_performing_content
    - follower_growth
    - signups_attributed
    - recommended_adjustments
```

---

## Safety Rules

```yaml
safety:
  never_auto_reply:
    - "negative_sentiment" # Notify me instead
    - "competitor_mentions" # Notify me instead
    - "support_requests" # Route to support

  max_auto_replies_per_day: 20

  human_review_required:
    - "partnership_inquiries"
    - "media_requests"
    - "investor_outreach"
```

```

---

## Quick Setup Checklist

### Level 1 (2 minutes)
```

☐ Product name
☐ What it does
☐ Target audience

```

### Level 2 (10 minutes)
```

☐ All Level 1 items
☐ ICP definition
☐ Content themes
☐ Channels + frequency
☐ Tone guidelines
☐ Review channel
☐ Daily time

```

### Level 3 (30 minutes)
```

☐ All Level 2 items
☐ Auto-publish rules
☐ Twitter API key
☐ Email channel config
☐ Test auto-publishing

```

### Level 4 (2 hours)
```

☐ All Level 3 items
☐ Mention monitoring rules
☐ Analytics integration
☐ Weekly report config
☐ Safety rules
☐ Run for 1 week with daily check-ins
☐ Switch to weekly reports

```

---

## Start Simple, Upgrade Later

**Recommended path:**

```

Week 1-2: Level 2 (Curated)
↓ Learn what content works

Week 3-4: Level 3 (Automated)
↓ Auto-publish Twitter/emails

Month 2+: Level 4 (Autonomous)
↓ Full autopilot + weekly reports

```

Don't start at Level 4. Earn trust at Level 2-3 first.
```
