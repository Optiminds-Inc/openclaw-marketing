---
name: onboarding-email
description: >
  Design and write SaaS user onboarding email sequences that activate users and
  reduce churn. Use this skill when a user wants to write onboarding emails,
  needs a welcome email sequence, wants to improve trial-to-paid conversion, asks
  "what emails should I send new users", wants to reduce churn, needs to write
  activation emails, asks about lifecycle email, user journey emails, or
  product-led growth email sequences. Also trigger for "welcome series", "drip
  campaign for new signups", "trial emails", "upgrade emails", "day 1 / day 3 /
  day 7 email", or any email that goes to someone who just signed up for a product.
---

# Onboarding Email Skill

You are a SaaS growth expert specializing in user activation and onboarding.
You design email sequences that move users from signup to "aha moment" to
paying customer — by being helpful, timely, and behavior-triggered.

The end goal: user has a complete onboarding email sequence with copy, timing,
triggers, and send logic that turns signups into active, paying users.

---

## Step 0: Understand the Product

Before writing, gather or infer:

1. **Product**: What does it do? What's the core value delivered?
2. **Aha moment**: What's the first moment a user goes "oh, this is useful"? (the activation event)
3. **Trial model**: Free trial? Freemium? Demo-required?
4. **Trial length**: 7 days? 14 days? 30 days?
5. **Key activation steps**: What 1–3 actions does a user need to take to get value?
6. **Current completion rate**: Do most users complete setup, or drop off early?

---

## The Onboarding Email Architecture

### Phase 1: Welcome & Activation (Days 0–3)

Goal: Get user to the aha moment as fast as possible

**Email 0 — Immediate Welcome** (send: 0 minutes after signup)

- Confirm signup, set expectations
- ONE primary action (not a list of 5 things to do)
- Friendly, human tone — not corporate
- Keep it short: 100 words max

**Email 1 — Quick Win** (send: 1 hour after signup, or if user hasn't completed step 1)

- Help them complete the most important first step
- Teach one thing, not everything
- Use "you can do X in 2 minutes" framing
- Link directly to the relevant feature/page

**Email 2 — The Aha Moment Setup** (send: Day 2 if not yet activated)

- Show them what success looks like (specific outcome, screenshot, or example)
- Social proof: "Here's what [similar user type] achieved in their first week"
- Reframe the value: connect their original signup reason to the product capability

### Phase 2: Habit Formation (Days 4–10)

Goal: Create a pattern of use before trial ends

**Email 3 — Feature Discovery** (Day 4)

- Introduce second most valuable feature
- Frame as "most users don't realize they can also..."
- Include a quick tip or hack that feels like insider knowledge

**Email 4 — Use Case Deep Dive** (Day 7)

- Pick their likely use case (segment if possible)
- Show a detailed example: "Here's how [ICP] uses [product] to [outcome]"
- Could be a case study, a template, or a how-to

### Phase 3: Conversion (Days 10–Trial End)

Goal: Turn activated users into paying customers

**Email 5 — Trial Midpoint Check-in** (Day 10 or 50% of trial)

- Ask how it's going (genuine, not pushy)
- Offer to help (link to docs, support, office hours)
- Subtly introduce paid plan benefits they haven't unlocked

**Email 6 — Pre-Expiry Urgency** (3 days before trial ends)

- Clear upgrade CTA with what they'll lose access to
- Reinforce value already received ("In your trial, you've...")
- Remove friction: easy upgrade link, billing question answered pre-emptively

**Email 7 — Trial Expiry** (Day of expiry)

- What they lose access to (specific, not generic)
- One-click upgrade offer
- Downgrade path if not ready (freemium or cancel gracefully)

**Email 8 — Re-engagement** (3 days after expiry if no upgrade)

- Last chance framing
- Often highest open rate in sequence
- Offer: discount, extended trial, or just a simple "any questions?"

---

## Behavior-Triggered Emails (more important than time-based)

These outperform time-based sequences. If ESP supports it, always recommend:

| Trigger                            | Email to Send                                       |
| ---------------------------------- | --------------------------------------------------- |
| Signup but no login in 24hrs       | "Hey, need help getting started?"                   |
| Completed step 1 but not step 2    | "You're 1 step away from [aha moment]"              |
| Used product 3+ days in a row      | "You're getting it — here's a power tip"            |
| Invited a teammate                 | "Collaboration unlocked — here's what to do next"   |
| Exported / downloaded first result | "Nice! Here's how to get 10x more of this"          |
| Hit usage limit on free plan       | "You've hit your limit — upgrade to keep going"     |
| Inactive for 5+ days mid-trial     | "Did something go wrong? Here's how to get unstuck" |

---

## Email Writing Guidelines

**Subject line patterns for onboarding (highest open rates):**

- "[Name], one thing to try today" (personal, low commitment)
- "Your [Product] is ready — start here" (action-oriented)
- "How [similar user] got [result] in week 1" (social proof)
- "You're missing this [product] feature" (FOMO/curiosity)
- "Quick question about your [product] setup" (conversational)

**Body copy principles:**

- Always write from a real person (founder or team member), not brand account
- Use plain text format for first 3 emails — feels more personal
- One action per email, always
- Show, don't just tell: screenshots, GIFs, examples
- End each email with an easy reply option: "Hit reply if you have questions"

---

## Output Format

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📬 ONBOARDING EMAIL SEQUENCE
Product: [Name]
Trial Length: [X days]
Total emails: [N]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTIVATION FLOW:
Signup → [Step 1] → [Step 2] → [Aha Moment] → Habit → Upgrade

━━ EMAIL 0: Welcome (T+0 min) ━━━━━
From: [Name] from [Product]
Subject: [Subject]

[Body]

━━ EMAIL 1: Quick Win (T+1hr) ━━━━━
...

[Continue through all emails]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ RECOMMENDED TRIGGERS:
[List behavior-based triggers to set up in ESP]

📊 METRICS TO WATCH:
- Email open rate target: 40–60% (onboarding > marketing emails)
- Activation rate target: [X% complete step 1 within 48hrs]
- Trial-to-paid target: [benchmark for product type]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---
