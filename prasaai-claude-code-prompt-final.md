# PRASA ai Website — Claude Code Prompt (Final)

## COPY EVERYTHING BELOW INTO CLAUDE CODE
## Replace [PLACEHOLDERS] with your real details first

---

```
# PROJECT: Build the prasaai.co.za website

## INFRASTRUCTURE (already set up)
- Domain: prasaai.co.za (registered on GoDaddy)
- Hosting: Existing Digital Ocean Droplet (Ubuntu, Nginx)
- Email: info@prasaai.co.za (already working)
- Google Business Profile: already created
- The site will be served by Nginx from /var/www/prasaai/
- SSL will be handled by Certbot after deployment

## CONFIG — Replace these with your real details
- Company legal name: [YOUR COMPANY NAME e.g. System Sol (Pty) Ltd]
- Company registration number: [YOUR CIPC REG NUMBER e.g. 2024/123456/07]
- Trading as: PRASA ai
- Physical address: [YOUR FULL REGISTERED ADDRESS, Cape Town, Western Cape, POSTAL CODE]
- Email: info@prasaai.co.za
- Phone: [YOUR BUSINESS PHONE e.g. +27 XX XXX XXXX]
- WhatsApp bot number: [YOUR WHATSAPP NUMBER e.g. +27 XX XXX XXXX]
- WhatsApp link: https://wa.me/[YOUR_NUMBER_NO_PLUS e.g. 27XXXXXXXXX]
- Website: https://prasaai.co.za
- Instagram: @prasaai
- Facebook: https://facebook.com/[YOUR_PAGE]
- Your name (for privacy policy info officer): [YOUR FULL NAME]

## WHAT TO BUILD

Build a static website for PRASA ai — an independent, AI-powered
WhatsApp assistant for Cape Town Metrorail commuters.

IMPORTANT CONTEXT: I am NOT affiliated with PRASA in any way. I am
a daily Metrorail commuter who noticed that PRASA's communication
to passengers has gaps — especially during disruptions. I built this
system to fill that gap, with the hope of eventually partnering with
PRASA officially.

The website must:
- Make the independence clear WITHOUT being defensive about it
- Be respectful and constructive toward PRASA — acknowledge improvements
- Have a playful, confident tone about wanting to work with PRASA
  officially someday. The vibe is "not affiliated with PRASA...yet"
  — cheeky but professional. Ambitious, not arrogant.
- Sprinkle subtle disclaimers naturally throughout the page, not just
  crammed into the footer. They should feel like part of the brand
  voice, not legal boilerplate.

## OUTPUT FILES

Create these files, all ready to drop into /var/www/prasaai/:

```
/var/www/prasaai/
├── index.html
├── privacy.html
├── terms.html
├── robots.txt
├── sitemap.xml
└── favicon.svg
```

No build tools, no frameworks, no npm. Plain HTML + CSS + minimal
vanilla JS. Everything must work when served directly by Nginx.

## DESIGN DIRECTION

Aesthetic: Modern South African transit. Clean, confident, utilitarian.
Think London Underground meets Cape Town. NOT corporate startup slop.
NOT generic AI aesthetic.

Color palette:
- Primary: #F5A623 (warm amber/gold — brand color)
- Dark background: #0F1419 (default — dark theme)
- Card backgrounds: #1A2332
- Metrorail line colors (for accents):
  Red #E63232 (Southern), Green #2E8B3E (Northern),
  Orange #F5851F (Cape Flats), Blue #4A85E8 (Central)
- Text primary: #E8ECF0
- Text secondary: #8899AA

Typography: Google Fonts only (loaded via <link> with display=swap).
Pick something with character — NOT Inter, NOT Roboto, NOT Space
Grotesk, NOT Arial. Consider: DM Sans for body, Outfit or Sora or
Plus Jakarta Sans for headings. Something modern but warm.

Dark theme by default. Saves data on OLED phones, looks premium,
matches the bot's line map aesthetic.

Mobile-first. 70%+ of visitors will be on phones with limited data.

## PAGE STRUCTURE — index.html

### Section 1: Hero

Big bold headline:
"Your Cape Town train assistant. On WhatsApp."

Subheadline:
"Real-time schedules, delay alerts, and crowd reports —
powered by AI, built by a commuter who gets it."

CTA button (prominent, amber): "Message us on WhatsApp"
→ links to https://wa.me/[YOUR_NUMBER]?text=Hi

Below the CTA, a subtle line:
"Free · No app download · Works on any phone"

And beneath that, smaller, in the secondary text color, with a
touch of personality:
"Not an official PRASA service — yet."

This is the first disclaimer. It reads as confidence, not apology.
It tells the visitor two things: we're independent, and we're
aiming higher.

### Section 2: The Problem — Lead with EMPATHY, not stats

Heading: "You know the feeling."

DO NOT open with statistics. Open with the MOMENT. Every commuter
has lived this — paint it vividly in 2-3 sentences:

"It's 6:47am. You're standing on the platform. No train. No
announcement. You check the time again. Is it 5 minutes late or
cancelled? Nobody around you knows either. You open Twitter —
nothing recent. You check the WhatsApp group — someone three
stations away says they heard it might be cables again."

That's the hook. THEN transition into the bigger picture, weaving
in the facts as supporting evidence, not the headline:

Second paragraph — acknowledge the good: Cape Town Metrorail has
improved substantially. 150,000+ passengers daily. New X'Trapolis
Mega trains are safer and more reliable. Commuters have noticed —
some save R800 a month compared to taxis. The trains are getting
better. Real improvements, real impact.

Third paragraph — identify the gap: But the information layer
hasn't kept pace. When disruptions hit — cable theft, signal
failures, overhead wire damage — commuters find out by standing
on an empty platform. Digital displays exist on the new trains,
but most stations still have none. Only Cape Town and Bellville
have platform displays. Meanwhile, commuters have built their own
informal WhatsApp groups to fill the gap — proving the demand for
instant, mobile-first information already exists.

Closing line of this section, punchy:
"The trains are getting better. The information should too."

Sources woven naturally (not as citations, just accurate claims):
- 150,000+ daily passengers (PRASA spokesperson, Dec 2025)
- 72 X'Trapolis Mega sets in Western Cape by March 2025
- R800/month savings vs taxis (GroundUp commuter interviews)
- Displays on trains but not at stations except CT and Bellville
- Informal WhatsApp groups among commuters
- City of Cape Town Rail Business Plan approved Dec 2025

Write this section as flowing PROSE. No bullet points. No numbered
lists. Paragraphs that read like good journalism.

### Section 3: What It Does (features)

6 features displayed as cards or a clean grid. Each with:
- An emoji as the icon (keeps it lightweight)
- A short bold title
- One line of description

Features:

🚆 "Instant Timetables"
Type your route, get the next 3 trains in seconds.
English, Afrikaans, or isiXhosa.

⚠️ "Live Delay Alerts"
Real-time disruption info from PRASA data and
commuter reports, delivered straight to your chat.

📍 "Line Maps"
Visual route maps showing your position, your destination,
and any delays along the way.

👥 "Crowd Reports"
See what fellow commuters are reporting at your station.
One tap to share what you see.

🤖 "Understands You"
Ask "ekse when the next train from muizi to town?"
and it just works. No menus. No dropdowns. Just ask.

💰 "Fare Calculator"
Know exactly what you'll pay. Single, return, weekly,
or monthly — before you leave home.

Below the feature grid, add a small, subtle note in secondary
text color:
"Built independently using publicly available PRASA schedule data."

This is the second natural disclaimer — reads as transparency,
not legal defensiveness.

### Section 4: How It Works

Three steps, horizontal on desktop, stacked on mobile.

Step 1: 💬 "Message us on WhatsApp"
Show the number. Keep it simple.

Step 2: 🗣️ "Ask anything"
"next train Retreat to Cape Town" or just "?" for your saved route

Step 3: ⚡ "Get answers in seconds"
Timetables, fares, maps, alerts — all in your chat.

Below the steps, create a WhatsApp chat mockup — a styled component
that LOOKS like a WhatsApp conversation (not an actual embed):

```
[User bubble, green, right-aligned]
muizi to town
                                        06:45

[Bot bubble, white/light, left-aligned]
🚆 Muizenberg → Cape Town
✅ Southern Line on time

▸ 07:12 → 07:48
▸ 07:35 → 08:11

💰 Single R12

👥 3 commuters report on time at Muizenberg
                                        06:45
```

Style details:
- Dark background behind the chat (like WhatsApp dark mode)
- Green bubbles for user (WhatsApp green: #005C4B or #DCF8C6)
- Light/white bubbles for bot
- Rounded corners on bubbles
- Small timestamps in grey
- Chat tails on the bubbles (the little triangle)
- Make it look realistic but obviously a demo

CTA button again after the mockup: "Try it now on WhatsApp"

### Section 5: Built by a Commuter

This section is the heart of the site. Personal, authentic,
and contains the boldest version of the "not affiliated...yet" line.

Heading: "Built by a commuter. For commuters."

Write in first person. Short paragraphs. Conversational:

Paragraph 1 — The frustration:
"I ride the train every day. And every day I'd stand on the
platform wondering if my train was coming, delayed, or cancelled.
I'd scroll through Twitter hoping for an update that usually came
30 minutes too late. I'd ask in WhatsApp groups where someone
three stations away might know something. Most mornings, I'd
just guess."

Paragraph 2 — The build:
"So I built what I wished existed. A WhatsApp bot that knows the
full Metrorail timetable, checks for disruptions in real-time,
understands when you type 'muizi to town,' and actually tells
you what's happening before you leave home."

Paragraph 3 — The ambition (this is where the disclaimer becomes
aspirational, not defensive):

"PRASA ai is not affiliated with the Passenger Rail Agency of
South Africa. Not yet, anyway. We're an independent project —
built by commuters, for commuters — with one goal: to prove that
better passenger communication isn't just possible, it's
overdue. And when PRASA is ready, we'd love to make it official."

That last paragraph does triple duty:
1. Clear legal disclaimer ✅
2. Shows ambition and confidence ✅
3. Positions a future partnership as inevitable ✅

This is the third and most prominent disclaimer on the page.

### Section 6: Open Invitation (replaces generic "For Businesses")

This is new — a short section directly addressing PRASA. Bold move.
Professional but confident.

Heading: "To PRASA: Let's talk."

Short paragraph:
"We built PRASA ai because we believe South Africa's commuters
deserve world-class passenger information. We've done the hard
work — real-time timetables, AI-powered assistance, crowd-sourced
reporting, multilingual support. All on WhatsApp, where your
passengers already are.

This could be so much bigger as an official service. If anyone at
PRASA, Metrorail, or the City of Cape Town wants to explore what
that looks like — we're ready."

CTA button: "Get in touch" → mailto:info@prasaai.co.za
(or WhatsApp link)

This section serves multiple purposes:
- Shows Meta reviewers this is a serious, ambitious project
- If anyone from PRASA actually visits, there's a clear door open
- Positions the whole project as a proposal, not a competitor
- Reinforces that you're independent but collaborative

### Section 7: Small Agency Credit

Tiny section, muted styling, clearly secondary:

"PRASA ai is built by System Sol — a Cape Town studio crafting
AI-powered WhatsApp solutions for South African businesses."

One line. Two small buttons:
"systemsol.co.za" → https://systemsol.co.za
"Work with us" → WhatsApp link

### Section 8: Footer

MUST contain ALL of the following (Meta verification requirement):

Line 1: "PRASA ai is a product of [YOUR COMPANY LEGAL NAME]"
Line 2: "Reg. [YOUR CIPC REG NUMBER]"
Line 3: [YOUR FULL ADDRESS]
Line 4: info@prasaai.co.za · [YOUR PHONE]

Links row: Privacy Policy | Terms of Service

Full disclaimer (fourth and most complete instance):
"PRASA ai is an independent project by [YOUR COMPANY LEGAL NAME].
We are not affiliated with, endorsed by, or connected to the
Passenger Rail Agency of South Africa (PRASA), Metrorail, or any
government entity. Train schedule data is sourced from publicly
available GTFS feeds. We aspire to partner with PRASA officially —
until then, we're just commuters building what we wish existed."

Note how even the footer disclaimer ends on the aspirational note.
It never reads like we're hiding. It reads like we're building
toward something.

Social links: WhatsApp · Instagram · Facebook

"Built with ❤️ in Cape Town by System Sol"
"© 2026 [YOUR COMPANY LEGAL NAME]. All rights reserved."

## DISCLAIMER PLACEMENT SUMMARY

The page has FOUR disclaimers, each escalating in detail, all
feeling natural rather than legal:

1. Hero: "Not an official PRASA service — yet." (6 words, playful)
2. Features: "Built independently using publicly available PRASA
   schedule data." (subtle, factual)
3. Built by a Commuter: "PRASA ai is not affiliated with the
   Passenger Rail Agency of South Africa. Not yet, anyway..."
   (the full story, aspirational)
4. Footer: Complete legal disclaimer with entity names (formal,
   thorough, but still ends on "we aspire to partner")

This layered approach means nobody can miss it, but it never feels
like a wall of legal text. Each instance adds personality.

## PRIVACY PAGE — /privacy.html

Same header/footer styling as index.html. Dark theme.
Simple nav bar with PRASA ai wordmark linking back to /.

Title: "Privacy Policy"
Subtitle: "Effective February 2026"

Generate a proper POPIA-compliant privacy policy covering:

1. WHO WE ARE
   - [YOUR COMPANY LEGAL NAME], trading as PRASA ai
   - "PRASA ai is an independent service not affiliated with PRASA
     or Metrorail."
   - Address, email, phone
   - Information Officer: [YOUR NAME], info@prasaai.co.za

2. WHAT WE COLLECT
   - WhatsApp phone number (necessary to send/receive messages)
   - Language preference (auto-detected from messages)
   - Saved route preferences (if user sets up "My Train")
   - Crowd reports submitted voluntarily by the user
   - Basic usage analytics (message timestamps, features used)

3. WHAT WE DO NOT COLLECT
   - We do NOT store message content after processing
   - We do NOT collect location unless explicitly shared by user
   - We do NOT sell, rent, or share data with third parties
   - We do NOT use data for advertising or profiling
   - We do NOT share data with PRASA or any government entity

4. WHY WE COLLECT IT
   - To provide personalised train information
   - To deliver relevant delay alerts
   - To improve the service

5. HOW WE PROTECT IT
   - Phone numbers stored encrypted (AES-256-GCM)
   - Lookups via hashed identifiers (not raw phone numbers)
   - Access restricted to authorised personnel only
   - Hosted on secured infrastructure

6. RETENTION
   - Active account data: retained while user actively uses service
   - Crowd reports: anonymised after 30 days
   - Session data: expires after 30 minutes of inactivity
   - Deleted accounts: all personal data removed within 7 days

7. YOUR RIGHTS UNDER POPIA
   - Right to access your personal data
   - Right to correction of inaccurate data
   - Right to deletion (message "delete my data" in WhatsApp)
   - Right to object to processing
   - Right to lodge a complaint with the Information Regulator
     (https://inforegulator.org.za)

8. CHANGES
   - We may update this policy. Changes posted here with updated date.

9. CONTACT
   - info@prasaai.co.za
   - [YOUR ADDRESS]

Style this as clean, readable prose with clear section headings.
Not a wall of legal jargon. Use the same dark theme and typography.

## TERMS PAGE — /terms.html

Same styling. Title: "Terms of Service"
Subtitle: "Effective February 2026"

Cover these points in clear, plain English:

- Acceptance: By messaging our WhatsApp number, you agree to these terms
- What we are: An independent service by [COMPANY NAME], NOT affiliated
  with PRASA, Metrorail, or any government entity
- What we provide: Train schedule information, delay alerts, crowd
  reports, fare information via WhatsApp
- Accuracy disclaimer: Data sourced from publicly available GTFS feeds.
  Schedules may not reflect real-time changes. We do our best but
  cannot guarantee 100% accuracy.
- Crowd reports: User-generated and may not be accurate. We aggregate
  but do not verify individual reports.
- No liability: We are not responsible for missed trains, incorrect
  information, travel decisions, or any damages arising from use
- Availability: Service provided "as is" — we may modify, suspend,
  or discontinue at any time
- Age requirement: Users must be 13+ to use the service
- User conduct: Don't abuse the service, submit false crowd reports,
  or attempt to overwhelm the system
- Data: See our Privacy Policy for how we handle your information
- Deletion: You can delete your data at any time by messaging
  "delete my data"
- Governing law: Republic of South Africa
- Jurisdiction: Western Cape High Court, Cape Town
- Contact: info@prasaai.co.za

## ROBOTS.TXT

```
User-agent: *
Allow: /

Sitemap: https://prasaai.co.za/sitemap.xml
```

## SITEMAP.XML

Standard XML sitemap with 3 URLs:
- https://prasaai.co.za/ (priority 1.0, changefreq weekly)
- https://prasaai.co.za/privacy.html (priority 0.3, changefreq monthly)
- https://prasaai.co.za/terms.html (priority 0.3, changefreq monthly)

## FAVICON

Simple SVG: the letter "P" in amber (#F5A623) on a dark (#0F1419)
rounded square. Clean at 32x32. Save as favicon.svg.

## TECHNICAL REQUIREMENTS

- Static HTML only. No frameworks, no build step, no npm.
- All CSS in a <style> tag inside each HTML file (reduces requests)
- Google Fonts via <link> in <head> with display=swap. Max 2 fonts.
- Vanilla JS only if needed (smooth scroll, mobile nav toggle).
- Responsive: 360px phones through 1440px desktop.
- FAST: target < 100KB per page (excluding fonts).
- Every page needs:
  - <meta charset="utf-8">
  - <meta name="viewport" content="width=device-width, initial-scale=1">
  - <meta name="theme-color" content="#0F1419">
  - Descriptive <title> tag
  - <meta name="description">
  - Open Graph tags (og:title, og:description, og:image, og:url, og:type)
  - Twitter card meta tags
  - <link rel="canonical" href="https://prasaai.co.za[/page]">
  - <link rel="icon" href="/favicon.svg" type="image/svg+xml">
- index.html must include JSON-LD structured data:
  - Organization schema (name, url, logo, address, contactPoint)
  - WebSite schema (name, url)
- Semantic HTML: <header>, <main>, <section>, <footer>, <nav>
- WCAG AA color contrast (especially amber text on dark backgrounds)

## DEPLOYMENT

Files will be copied directly to /var/www/prasaai/ and served by
Nginx. No server-side rendering. All pages use .html extensions.
Everything must work when served as static files.

## CRITICAL RULES

1. FOUR layered disclaimers as described above — hero, features,
   commuter story, footer. Each one natural, not legalistic.
2. The "not affiliated...yet" tone must be consistent. Playful,
   confident, aspirational. Never defensive, never apologetic.
3. Legal entity name + address on EVERY page footer (Meta requirement).
4. No bullet points in the problem section — prose paragraphs only.
5. Lead the problem section with empathy (the platform moment),
   not statistics. Stats support the story, they don't lead it.
6. Keep file sizes tiny. Commuters are on prepaid mobile data.
7. WhatsApp CTA must be unmissable on mobile.
8. The WhatsApp chat mockup must look realistic (dark mode style).
9. Use lowercase "ai" in the brand: "PRASA ai" everywhere.
10. The "To PRASA: Let's talk" section should feel bold but
    respectful. Like a cover letter, not a demand letter.
```

---

## AFTER CLAUDE CODE: Deployment Checklist

### DNS — GoDaddy
```
Type    Name    Value                   TTL
A       @       [YOUR DROPLET IP]       600
A       www     [YOUR DROPLET IP]       600
```

### Nginx — Digital Ocean Droplet
```bash
sudo mkdir -p /var/www/prasaai
# Copy files from Claude Code output into /var/www/prasaai/

sudo nano /etc/nginx/sites-available/prasaai
```

Paste:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name prasaai.co.za www.prasaai.co.za;
    root /var/www/prasaai;
    index index.html;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location ~* \.(svg|jpg|png|ico|css|js)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    error_page 404 /index.html;
}
```

```bash
sudo ln -s /etc/nginx/sites-available/prasaai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL
```bash
sudo certbot --nginx -d prasaai.co.za -d www.prasaai.co.za
```

### Google Search Console
1. search.google.com/search-console → Add property
2. URL prefix → https://prasaai.co.za
3. Verify via DNS TXT record in GoDaddy
4. Submit sitemap: https://prasaai.co.za/sitemap.xml
5. Request indexing for homepage
