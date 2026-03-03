# Marketing Skills Pack for OpenClaw

A complete growth marketing toolkit for SaaS founders and marketers. 13 specialized skills + 1 SOUL.md to create marketing-focused OpenClaw agents.

---

## 📦 What's Included

### Core Skills (13)

#### Strategy & Planning

1. **gtm-advisor** - 0→1 Go-To-Market strategy (YouTube, Airbnb, Stripe patterns)
2. **icp-finder** - Ideal Customer Profile with scoring framework
3. **persona-builder** - Psychologically rich buyer personas
4. **competitor-intel** - Competitive analysis and battlecards
5. **growth-loops** - Viral and product-led growth loop design

#### Content & Copywriting

6. **copywriting-advisor** - Platform-native copy (LinkedIn, Twitter, FB, Google Ads, cold email, etc.)
7. **cold-email-writer** - 4-step email sequences that get replies
8. **content-calendar** - Strategic content calendars with pillars
9. **seo-brief** - SEO content briefs that rank

#### Optimization

10. **landing-page-critic** - 7-section CRO audit with rewrites
11. **onboarding-email** - User activation sequences

#### Launch

12. **product-hunt-launch** - Complete PH launch playbook
13. **growth-automation** - Daily automated marketing (4 automation levels)

### Agent Identity

- **SOUL.md** - Defines a marketing-focused OpenClaw agent's personality, principles, and workflows

### Channel Tools

- **twitterapi-io** - Twitter API integration
- **content-gen** - Social media content generation
- **pre-post-check** - Content review before posting

---

## 🚀 Quick Start

### Option 1: Install All Skills

```bash
# Copy skills to OpenClaw workspace
cp -r skills/* ~/.openclaw/workspace/skills/

# Restart OpenClaw or reload skills
```

### Option 2: Install Select Skills

```bash
# Just copy the skills you need
cp -r skills/gtm-advisor ~/.openclaw/workspace/skills/
cp -r skills/copywriting-advisor ~/.openclaw/workspace/skills/
# etc.
```

### Option 3: Create New Marketing Agent

1. Copy `SOUL.md` to new workspace root
2. Copy desired skills to `skills/` folder
3. Start new OpenClaw instance in that workspace
4. Agent will be marketing-focused from the start

---

## 📋 Skill-by-Skill Guide

### 1. GTM Advisor

**When to use**: User asks about GTM strategy, how to get first users, how to launch

**Triggers**:

- "How do I get my first 100 users?"
- "Help me with GTM strategy"
- "How do I launch my product?"

**What it does**:

- Analyzes product and ICP
- Maps to GTM patterns (platform parasite, community infiltration, etc.)
- Designs 30-day non-scalable sprint
- Identifies parasite platform

**Example output**:

```
🎯 SEED USER: Webflow agency owners (3-10 employees)
🔍 WHERE THEY ARE: forum.webflow.com, r/webflow
🚀 WEEK 1-4 SPRINT: [Specific actions]
🪱 PARASITE PLATFORM: Webflow ecosystem
```

---

### 2. ICP Finder

**When to use**: User unclear about target customer, asks "who should I sell to?"

**Triggers**:

- "Who is my ideal customer?"
- "What's my target market?"
- "Who do I focus on first?"

**What it does**:

- Scores ICP candidates on 5 dimensions (Pain, Findability, WTP, TTV, Expansion)
- Narrows from broad to wedge-specific
- Validates with 5-conversation framework

**Example output**:

```
👤 ICP PROFILE: "The Overwhelmed Solo Growth Marketer"
✅ ICP SCORE: 22/25
Pain: 4/5 | Findability: 5/5 | WTP: 4/5 | TTV: 4/5 | Expansion: 5/5
```

---

### 3. Persona Builder

**When to use**: Need deep customer psychology for copy/product decisions

**Triggers**:

- "Build me a buyer persona"
- "What does my customer think/feel/fear?"
- "Help me understand customer psychology"

**What it does**:

- 8-dimension persona framework
- Captures trigger moments, fears, language, decision process
- Provides marketing implications

**Example output**:

```
THE TRIGGER MOMENT:
"A Webflow agency just onboarded a new client who wants blog content
at scale and their writer can't keep up"

HOW THEY TALK ABOUT IT:
"I'm tired of outsourcing SEO to people who don't understand Webflow"
```

---

### 4. Competitor Intel

**When to use**: Need competitive analysis, positioning, or battlecards

**Triggers**:

- "Who are my competitors?"
- "How do I position against [X]?"
- "What makes us different?"

**What it does**:

- 5-layer analysis (market map, messaging, pricing, sentiment, gaps)
- Battlecard generation
- Positioning statement generator

**Example output**:

```
🥊 BATTLECARD: [You] vs [Competitor]
THEIR REAL WEAKNESSES:
① [Weakness] → Our counter: [Strength]
② [Weakness] → Our counter: [Strength]

ONE-LINE CLOSER:
"[Competitor] is great if you need X. If you need Y, we're the only option."
```

---

### 5. Growth Loops

**When to use**: User wants organic/viral growth without paid ads

**Triggers**:

- "How do I get organic growth?"
- "Build virality into my product"
- "How does [X] grow so fast?"

**What it does**:

- Identifies which of 6 loop types fits the product
- Scores loops on Friction/Reach/Conversion
- Provides build plan

**Example output**:

```
🔄 LOOP: Content/SEO Loop
TRIGGER: User creates public page
OUTPUT: Google indexes page with "Made with [Product]"
ACQUISITION: Searcher clicks → signs up
LOOP SCORE: 7.2 (high reach, low friction)
```

---

### 6. Copywriting Advisor

**When to use**: Need marketing copy for any channel

**Triggers**:

- "Write me a [platform] post"
- "Help me with copy for..."
- "What should my headline say?"

**What it does**:

- Platform-native copy (LinkedIn, Twitter, FB, Google Ads, email, etc.)
- Multiple frameworks (AIDA, PAS, BAB, FAB, 4U)
- 3 variants per request

**Example output**:

```
VARIANT A — PAS Framework
[Copy]
💡 Why: [Strategic rationale]

VARIANT B — BAB Framework
[Copy]
💡 Why: [Strategic rationale]
```

---

### 7. Cold Email Writer

**When to use**: Need B2B cold outreach sequences

**Triggers**:

- "Write me a cold email"
- "Help me reach out to [ICP]"
- "I need an email sequence"

**What it does**:

- 4-step sequence (Hook → Value Add → Social Proof → Breakup)
- Subject line formulas
- LinkedIn DM variant

**Example output**:

```
EMAIL 1 (Day 1): The Hook
[Body — 80-120 words]

EMAIL 2 (Day 4): Value Add
[Body — 60-100 words]

EMAIL 3 (Day 8): Social Proof
[Body — 80-120 words]

EMAIL 4 (Day 14): Breakup
[Body — 40-60 words]
```

---

### 8. Content Calendar

**When to use**: Need systematic content planning

**Triggers**:

- "Create a content calendar"
- "What should I post this week?"
- "Help me stay consistent with content"

**What it does**:

- Content pillar system (4-5 themes)
- Weekly calendar with specific post ideas
- Platform-specific formats

**Example output**:

```
📅 WEEK 1 — "Establish Expertise"

MON | Expertise | LinkedIn Story
[Full post idea with hook]

WED | Product | Twitter Thread
[Full post idea with hook]

FRI | Social Proof | LinkedIn Case Study
[Full post idea with hook]
```

---

### 9. SEO Brief

**When to use**: Need blog content that ranks

**Triggers**:

- "Write a blog post that ranks for [keyword]"
- "Create an SEO content brief"
- "How do I rank for [X]?"

**What it does**:

- Keyword intelligence + search intent
- SERP analysis (what top results do)
- Content structure with H1/H2/H3
- On-page SEO checklist

**Example output**:

```
📝 SEO BRIEF: "webflow seo"
Search intent: Informational
Target word count: 2,500

H1: Webflow SEO: The Complete Guide to Ranking Your Site
[Full outline with all H2s/H3s]

CONTENT DIFFERENTIATION:
What no result covers well: [Your edge]
```

---

### 10. Landing Page Critic

**When to use**: Audit and improve landing pages

**Triggers**:

- "Review my landing page"
- "Why isn't my page converting?"
- "CRO audit my homepage"

**What it does**:

- 7-section audit (Hero, Social Proof, Problem, Solution, Pricing, CTA, Clarity)
- Scores each 1-10
- Provides specific replacement copy

**Example output**:

```
🔍 LANDING PAGE AUDIT: [URL]
OVERALL SCORE: 6/10

TOP 3 FIXES:
① Hero (3/10) — Headline is generic
CURRENT: "Revolutionizing content creation"
FIX: "Rank on Google without a content team"
```

---

### 11. Onboarding Email

**When to use**: Improve trial-to-paid conversion

**Triggers**:

- "Write onboarding emails"
- "Help me activate users"
- "What emails should I send new users?"

**What it does**:

- 8-email sequence (Welcome → Activation → Habit → Conversion)
- Time-based + behavior-triggered variants
- Subject line patterns that work

**Example output**:

```
📬 EMAIL 0: Welcome (T+0 min)
Subject: [Name], one thing to try today
[Body]

📬 EMAIL 1: Quick Win (T+1hr)
Subject: You're 1 step away from [aha moment]
[Body]
```

---

### 12. Product Hunt Launch

**When to use**: Planning PH launch

**Triggers**:

- "How do I launch on Product Hunt?"
- "Help me get #1 Product of the Day"
- "PH launch strategy"

**What it does**:

- 4-week pre-launch timeline
- Tagline + description writing
- Launch day hour-by-hour playbook
- Asset checklist

**Example output**:

```
🚀 PH LAUNCH PLAN: [Product]

TAGLINE: AI SEO for Webflow — rank without a content team

WEEK -4: Choose hunter, prepare assets
WEEK -3: Content warm-up
WEEK -2: Community seeding
WEEK -1: Final prep
LAUNCH DAY: Hour-by-hour playbook
```

---

### 13. Growth Automation

**When to use**: Automate daily marketing tasks

**Triggers**:

- "Automate my marketing"
- "Run daily growth tasks"
- "Set up marketing on autopilot"

**What it does**:

- 4 automation levels (Manual → Curated → Automated → Autonomous)
- Daily content generation
- Review workflow or auto-publish

**Example output**:

```
🤖 GROWTH AUTOMATION - [DATE]
📋 PLAYBOOK: [Product]

🐦 TWITTER: 3 tweets
💼 LINKEDIN: 1 post
📧 EMAILS: 5 emails

Reply: approve / edit X / skip X
```

---

## 🎯 Common Workflows

### Workflow 1: New Product Launch

```
1. gtm-advisor → Design GTM strategy
2. icp-finder → Define ICP
3. persona-builder → Deep customer understanding
4. copywriting-advisor → Write launch copy
5. product-hunt-launch → Execute PH launch
6. growth-automation → Set up daily execution
```

### Workflow 2: Improve Conversions

```
1. landing-page-critic → Audit landing page
2. onboarding-email → Optimize activation
3. copywriting-advisor → Rewrite weak sections
```

### Workflow 3: Build Growth Engine

```
1. growth-loops → Design viral/PLG loops
2. content-calendar → Plan content system
3. seo-brief → Create SEO content
4. growth-automation → Automate execution
```

### Workflow 4: Competitive Positioning

```
1. competitor-intel → Analyze competition
2. icp-finder → Find underserved segments
3. persona-builder → Understand target buyer
4. copywriting-advisor → Rewrite positioning
```

---

## 📁 File Structure

```
marketing-skills-pack/
├── SOUL.md                    # Marketing agent identity
├── README.md                  # This file
└── skills/
    ├── gtm-advisor/
    │   └── SKILL.md
    ├── icp-finder/
    │   └── SKILL.md
    ├── persona-builder/
    │   └── SKILL.md
    ├── competitor-intel/
    │   └── SKILL.md
    ├── growth-loops/
    │   └── SKILL.md
    ├── copywriting-advisor/
    │   └── SKILL.md
    ├── cold-email-writer/
    │   └── SKILL.md
    ├── content-calendar/
    │   └── SKILL.md
    ├── seo-brief/
    │   └── SKILL.md
    ├── landing-page-critic/
    │   └── SKILL.md
    ├── onboarding-email/
    │   └── SKILL.md
    ├── product-hunt-launch/
    │   └── SKILL.md
    ├── growth-automation/
    │   ├── SKILL.md
    │   ├── references/
    │   │   └── playbook-template.md
    │   └── scripts/
    │       └── setup-cron.sh
    ├── twitterapi-io/
    │   └── SKILL.md
    ├── content-gen/
    │   └── SKILL.md
    └── pre-post-check/
        └── SKILL.md
```

---

## 🔧 Customization

### Adding Your Products

Edit `SOUL.md` to add product-specific context:

```markdown
## Special Context: Your Products

### [Product Name]

- **Focus**: [ICP]
- **Channels**: [Where to post]
- **Content themes**: [What to emphasize]
```

### Creating New Skills

Use skill-creator to add new capabilities:

```bash
# In OpenClaw workspace
~/.openclaw/skills/scripts/init_skill.py [skill-name] --path skills/
```

---

## 💡 Tips

1. **Start with 2-3 skills** — Don't install everything at once
2. **Use SOUL.md** — It makes the agent marketing-focused from the start
3. **Combine skills** — Best results come from skill chains (GTM → ICP → Copy)
4. **Iterate** — Update skills based on what works

---

## 📚 Resources

- **OpenClaw docs**: https://docs.openclaw.ai
- **Skill hub**: https://clawhub.com
- **Community**: https://discord.com/invite/clawd

---

_Built for SaaS founders who want systematic, not sporadic, growth._
