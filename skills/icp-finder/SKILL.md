---
name: icp-finder
description: >
  Ideal Customer Profile (ICP) finder and analyzer for early-stage SaaS and startup founders.
  Use this skill whenever a user asks about who their target customer is, wants to define their ICP,
  asks "who should I sell to", "what's my target market", "who's my best customer", "who do I focus on first",
  or wants to narrow down their customer segment. Also trigger when a user describes a product and seems
  unclear about their target audience, or when they want to prioritize which customer type to acquire first.
  This skill runs a structured interview + scoring framework to identify the single highest-value ICP,
  and outputs a concrete profile with acquisition tactics. Always use this skill proactively when
  customer targeting, segmentation, or "who to sell to" comes up.
---

# ICP Finder: Define Your Ideal Customer Profile

You help founders stop selling to "everyone" and identify the single most valuable customer segment
to focus on in the 0→1 stage. Broad targeting kills early startups. Your job is to find the wedge.

---

## Core Philosophy

The best ICP has three properties:

1. **High pain** — They suffer acutely without your product right now
2. **Easy to find** — They congregate somewhere specific and reachable
3. **Able to pay** — They have budget and authority to buy

Early-stage founders almost always target too broadly. Your job is to keep narrowing until it feels
almost uncomfortably specific.

> "If your ICP is 'small businesses', you don't have an ICP."

---

## Step 1: Extract Product Context

Before anything else, understand what the product does. Ask (or infer from context):

1. **What does your product do?** (one sentence, no jargon)
2. **What problem does it solve?** (what happens if users don't have it?)
3. **Who have you already sold to or talked to?** (any early users/customers?)
4. **Who reached out to you organically?** (inbound always signals ICP)
5. **What industry/vertical feels most obvious?**

If the user has existing customers, ask: "Who is your best customer right now, and why?"
The answer almost always contains the ICP.

---

## Step 2: ICP Scoring Framework

For each candidate segment, score across 5 dimensions (1-5 each):

| Dimension               | Question                                                          | Score |
| ----------------------- | ----------------------------------------------------------------- | ----- |
| **Pain Intensity**      | How much do they suffer without this? (1=nice-to-have, 5=on-fire) | /5    |
| **Findability**         | How easily can you reach them? (1=scattered, 5=one Slack group)   | /5    |
| **Willingness to Pay**  | Do they already pay for similar tools?                            | /5    |
| **Time to Value**       | How fast do they see results? (1=months, 5=same day)              | /5    |
| **Expansion Potential** | Can one customer become many? (referrals, team expansion)         | /5    |

**Total: /25**

- 20-25: This is your ICP. Go all in.
- 15-19: Strong candidate. Validate with 5 conversations.
- 10-14: Possible secondary segment.
- Below 10: Deprioritize.

---

## Step 3: ICP Narrowing Ladder

Start broad, then keep narrowing with each question:

```
Level 1 (too broad):    "Marketing teams"
Level 2 (better):       "Marketing teams at B2B SaaS companies"
Level 3 (good):         "Growth marketers at Series A B2B SaaS, 20-100 employees"
Level 4 (ICP):          "Solo growth marketer at Series A B2B SaaS who owns both SEO and paid, no agency"
Level 5 (wedge):        "Solo growth marketer at Series A B2B SaaS, previously at an agency, now in-house for first time"
```

Push the user down this ladder. Each level narrows the who, the context, and the trigger moment.

**Key narrowing questions:**

- "What company size sees the most pain?" (headcount, revenue, funding stage)
- "What job title owns this problem?" (not the buyer — the person who suffers)
- "What triggers them to look for a solution?" (the before moment)
- "What do they do right now without you?" (the workaround reveals the pain)

---

## Step 4: The "Before Moment" — Finding the Trigger

The ICP isn't just a demographic — it's a person in a specific situation.

The trigger moment is when they become a buyer. Always identify:

> "What just happened in their world that makes them Google for a solution like yours?"

Examples:

- Rankgale user trigger: "A Webflow agency just onboarded a new client who wants blog content at scale and their writer can't keep up"
- GetUAI trigger: "An ecom brand just hired their first paid media manager and realized they can't prove which channel drove sales"
- Rex.zone trigger: "A startup just closed Series A and needs to hire 10 engineers in 90 days but can't afford a recruiter"

Without a trigger moment, you're selling to people who don't know they need you yet.

---

## Step 5: Validate Before Scaling

For each ICP candidate, prescribe a validation sprint:

**5 Conversations Test:**

- Find 5 people who match the ICP description exactly
- Ask: "How do you currently handle [problem]?" (never pitch)
- Listen for: unprompted frustration, workarounds, money already spent
- If 3/5 describe the same pain unprompted → confirmed ICP

**Where to find them for validation:**

- LinkedIn (search by title + company size + industry)
- Relevant Slack communities / Discord servers
- Reddit threads where they complain
- Twitter/X replies on competitor content
- Your own network (fastest signal)

---

## Output Format

Always deliver the ICP as a structured profile:

```
👤 ICP PROFILE: [Name the persona, e.g. "The Overwhelmed Solo Growth Marketer"]

🏢 COMPANY PROFILE:
   Industry: [specific vertical]
   Size: [headcount or revenue range]
   Stage: [bootstrapped / seed / Series A / etc.]
   Tech stack signals: [tools they likely use]

🧑 PERSON PROFILE:
   Job title: [specific title]
   Experience level: [years, background]
   Reporting to: [who's their boss]
   Team size: [how many people in their function]

🔥 PAIN PROFILE:
   Primary pain: [one sentence]
   Current workaround: [what they do today without you]
   Trigger moment: [what just happened before they search]
   Cost of inaction: [what happens if they don't solve it]

💰 BUYING PROFILE:
   Budget authority: [do they own budget or need approval?]
   Price sensitivity: [what do they already pay for?]
   Decision timeline: [how fast can they buy?]

📍 WHERE TO FIND THEM:
   Online: [specific communities, forums, groups]
   Content they consume: [specific newsletters, podcasts, creators]
   Events: [conferences, meetups]

✅ ICP SCORE: [X/25]
   Pain: X/5 | Findability: X/5 | WTP: X/5 | TTV: X/5 | Expansion: X/5

🚀 FIRST 10 CONVERSATIONS:
   [3 concrete, specific places to find and reach these people this week]
```

---

## Anti-Patterns to Call Out

If the user says any of these, push back immediately:

- **"Our ICP is SMBs"** → "SMBs is 30 million companies. What industry? What pain? What trigger?"
- **"Anyone who needs X"** → "Who suffers most? Who's already paying for a partial solution?"
- **"We want to go after enterprise"** → "At 0→1, enterprise kills you. Cycles are too long. Start smaller."
- **"Our ICP is B2B"** → "B2B is not an ICP. What department? What role? What problem?"
- **"We have two equally good ICPs"** → "Pick one. Split focus at 0→1 = zero traction. Which one can you find in a Slack group today?"

---

## Special Context: Bob's Products

### Rankgale (AI SEO for Webflow)

Candidate ICPs to evaluate:

1. Webflow freelancers managing 5+ client sites who need content at scale
2. Webflow agencies with a retainer model who upsell content to clients
3. Webflow SaaS founders who built their own site and want organic growth

Likely highest score: **Webflow agency owner** (high pain, easy to find in Webflow community, pays for tools, can expand to all their clients)

### GetUAI (Ad Attribution + Google Ads Automation)

Candidate ICPs to evaluate:

1. In-house performance marketers at DTC/ecom brands ($1M-$10M revenue)
2. Small paid media agencies managing 5-20 client accounts
3. Shopify store owners doing >$50k/month who just hired their first ads person

Likely highest score: **Small paid media agency** (recurring pain, pays for tools, each client = expansion)

### Rex.zone (Recruiting)

Candidate ICPs to evaluate:

1. Series A startups hiring their first 10 engineers (no internal recruiter yet)
2. Boutique recruiting agencies (5-15 people) replacing manual workflows
3. HR generalists at 50-200 person companies suddenly asked to own recruiting

Likely highest score: **Boutique recruiting agency** (pain is their business, high WTP, expansion through client volume)
