# SEO Battle Plan: prasaai.co.za vs Competitors

**Date:** 2026-03-08
**Goal:** Outrank cttrains.co.za and prasa.com in search

---

## Current Site Assessment: 8/10 Technical SEO

### Strengths
- Proper meta tags, OG tags, canonical URLs on all 4 pages
- Good heading hierarchy, schema markup (Organization + WebSite)
- Sitemap.xml + robots.txt properly configured
- Fast static site (Astro), mobile-first, clean URLs
- Great copy and value proposition

### Critical Gaps
- No Google Analytics or Search Console (flying blind)
- Only 4 pages total (index, about, privacy, terms)
- No blog, no dynamic content, no tools beyond WhatsApp
- Incomplete social links (Instagram/Facebook pointing to `#`)
- Missing FAQ, BreadcrumbList, Article, and Service schemas
- No Google Business Profile

---

## Competitor Analysis

### cttrains.co.za
- Old PHP site, no blog, no schema markup, no meta descriptions
- Pure utility (timetable lookup only) — no content depth
- States "no association with Metrorail"
- No modern SEO practices at all
- Has train times/schedules (their main advantage)
- Route selector for: Southern, Northern, Central, Cape Flats, Malmesbury lines
- Station-to-station search tool

### prasa.com
- **Broken SSL certificate** — browsers warn users away
- Corporate/bureaucratic focus, not commuter-friendly
- Slow updates, poor UX for finding schedules
- Commuters actively complain about lack of communication
- Institutional authority (official PRASA site)

**Both competitors have thin content — this is the biggest opportunity.**

---

## Strategy Overview

### Phase 1: Foundation (Immediate)

- [ ] **Google Search Console** — submit sitemap, monitor indexing
- [ ] **Google Analytics 4** — add tracking to all pages
- [ ] **Google Business Profile** — register as transportation/information service
- [ ] **Fix social links** — complete Instagram/Facebook URLs (currently `#`)
- [ ] **Add missing schemas:**
  - BreadcrumbList (navigation)
  - FAQPage (for FAQ section)
  - Service (for the WhatsApp bot)
  - LocalBusiness (Cape Town location)
- [ ] **SA Directory listings** — SA Yellow Pages, Brabys, Ananzi, Hotfrog, Bizcommunity

### Phase 2: Content Explosion

#### A) Station Pages (104 pages)
One page per operational Metrorail station targeting `"[Station Name] train times"`:
- Schedule info, connecting transport, nearby amenities, parking
- Geo-targeted titles: *"Train Times from Claremont Station | Cape Town Metrorail"*
- This alone could 10x indexed pages

#### B) Route Guide Pages (5-6 pages)
- "Complete Guide to the Southern Line: Every Station, Schedule & Tip"
- Same for Northern, Central, Cape Flats, Malmesbury lines
- Target: `"Southern Line train times"`, `"Northern Line schedule"` etc.

#### C) Blog (Weekly)

**Evergreen topics:**
- "Metrorail vs MyCiti Bus vs Taxi: Which is Cheapest?"
- "How to Buy a Metrorail Train Ticket: Step-by-Step Guide"
- "Cape Town Train Safety Guide for New Commuters"
- "Student Discounts on Metrorail: How to Save"
- "All 104 Metrorail Stations in Cape Town"
- "History of Cape Town's Railway: From 1859 to Today"
- "Central Line Restoration: What Commuters Need to Know"

**Timely content:**
- Daily/weekly "Metrorail Status Update" posts (captures *"are trains running today"*)
- Service disruption summaries
- New train announcements

#### D) FAQ Page
With FAQPage schema — targets featured snippets:
- "What time does the first train leave Cape Town?"
- "How much is a Metrorail ticket?"
- "Which Metrorail lines are running?"
- "Is Metrorail safe?"
- "How do I buy a weekly/monthly train ticket?"

### Phase 3: Killer Features

#### A) Fare Calculator
No one has this for Cape Town Metrorail. Gautrain has one for Joburg. Would own this keyword completely.

#### B) Interactive Route Map
Clickable SVG map of all lines/stations. Highly shareable, attracts natural backlinks.

#### C) Live Status Dashboard
Commuters currently rely on a 30,000-member Facebook group. A crowd-sourced or AI-powered status page would be extremely valuable.

#### D) Train Timetable Pages
Match cttrains' core feature with better UX, mobile experience, and SEO. Each route combination becomes an indexed page.

### Phase 4: Backlinks & Authority

1. **SA Directories** — SA Yellow Pages, Brabys, Ananzi, Hotfrog, Bizcommunity
2. **Press/Media** — Pitch to GroundUp, Cape Argus, News24 as commuter resource
3. **Community** — Engage 30K Metrorail Facebook group, Reddit Cape Town
4. **Broken link building** — metrorail.co.za has dead pages; find sites linking to them, offer prasaai.co.za as replacement
5. **Embeddable widgets** — fare calculator/schedule lookup other sites can embed with backlink
6. **Original research** — "State of Cape Town Rail 2026" annual report
7. **Guest posts** — Bizcommunity, transport/urban planning blogs
8. **University links** — UCT, Stellenbosch transport/urban planning departments

### Phase 5: Optimize for Google AI Overviews (2026 Critical)

- Use question-based H2/H3 headings
- "30-word rule": after each heading, provide a direct bolded answer in 30-50 words
- Use tables for timetable data (table-format featured snippets)
- Provide unique data competitors don't have
- Optimize for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

---

## Target Keywords

| Category | Examples | Page Type |
|---|---|---|
| Head terms | "Cape Town train timetable", "Metrorail schedule" | Home + Route pages |
| Route-specific | "Southern Line train times" | Route guide pages |
| Station-specific | "Claremont station train times" | 104 station pages |
| Station-to-station | "train from Cape Town to Simon's Town" | Trip planner tool |
| Informational | "how much is a Metrorail ticket" | FAQ + Blog |
| Status queries | "are Cape Town trains running today" | Live status page |
| Comparison | "Metrorail vs MyCiti bus" | Blog posts |

---

## Google SERP Features to Target

- **Featured Snippets** — FAQ answers, timetable tables, step-by-step lists
- **Local Pack** — Google Business Profile optimization
- **Knowledge Panel** — consistent entity mentions + Organization schema
- **Rich Results** — FAQPage, HowTo, Article, BreadcrumbList schema markup
- **AI Overviews** — unique data, question-based headings, 30-word answers

---

## Implementation Priority

1. Google Search Console + GA4 (do today)
2. Google Business Profile (this week)
3. Add missing schemas + fix social links (quick code changes)
4. Build FAQ page with FAQPage schema (quick win for featured snippets)
5. Build route guide pages (5-6 high-value pages)
6. Start the blog (1-2 posts per week)
7. Build fare calculator (unique tool no competitor has)
8. Build station pages (104 pages, can be templated)
9. Interactive route map (link magnet)
10. Live status dashboard (community value)

---

## Key Files Reference

| File | Purpose |
|---|---|
| `/src/components/SEO.astro` | SEO component template |
| `/src/data/site.ts` | Site configuration |
| `/astro.config.mjs` | Build configuration |
| `/public/sitemap.xml` | Sitemap |
| `/public/robots.txt` | Robots file |
| `/dist/index.html` | Built homepage |
| `/dist/about.html` | Built about page |
| `/public/og-image.png` | Social sharing image (79.9KB — could optimize) |
