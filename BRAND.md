# PRASA ai — Brand Kit

**Version 2.0 · "Departure Board" design language · June 2026**
Maintained by System Sol (Cape Town). Source of truth for the look, voice, and components of prasaai.co.za and the WhatsApp service.

> PRASA ai is an independent project. It is **not** affiliated with the Passenger Rail Agency of South Africa (PRASA) or Metrorail. The brand voice leans into this — confident, aspirational, "not official… *yet*."

---

## 1. Brand essence

| | |
|---|---|
| **What it is** | An AI WhatsApp assistant that tells Cape Town Metrorail commuters if their train is coming, when, what it costs, and how busy it is — free, no app, in their language. |
| **One-liner** | *"Your Cape Town train assistant. On WhatsApp."* |
| **Personality** | Streetwise, dependable, warm, quietly ambitious. A clued-up commuter friend, not a corporate chatbot. |
| **Design metaphor** | **A station departure board meets a WhatsApp chat.** High-contrast dark surfaces, amber "live" signals, Metrorail line colours as the categorical palette, monospaced numerals for anything that reads like a time or a metric. |
| **Feels like** | London Underground wayfinding × Cape Town × the green of a WhatsApp bubble. Utilitarian, not startup-slop; warm, not generic-AI. |

**Design principles**
1. **Information first.** The product reduces uncertainty; the brand should too. Clarity beats decoration.
2. **Show it live.** A working status/metric on screen is the strongest trust signal — prefer real, "updated Ns ago" proof over claims.
3. **Light & fast.** Commuters are on expensive prepaid data. Every kilobyte is friction. System fonts for numerals, no heavy libraries, lazy media.
4. **Honest independence.** Sprinkle the "not PRASA… yet" disclaimer naturally; never defensive, never buried legalese only.
5. **Mobile-first, any phone.** Designed at 360px first; 44px minimum touch targets; works on low-end Android.

---

## 2. Logo & wordmark

The wordmark is the primary identity. **"PRASA ai"** — "PRASA" in Plus Jakarta Sans ExtraBold (text-primary), "ai" always **lowercase** and in **Signal Amber**.

```
PRASA ai      ← "PRASA" #F2F6FA · "ai" #FFC040 · ExtraBold (800)
```

Rules:
- Always lowercase `ai`. Never "PRASA AI", "Prasa Ai", or "PRASAai".
- Keep a single space between `PRASA` and `ai`.
- Minimum clear space around the wordmark = the cap-height of the "P".
- Minimum size: 16px cap height on screen.
- **App / favicon mark:** the letter **"P" in Signal Amber on an ink rounded square** (see `favicon.svg`). Used where the full wordmark won't fit (avatar, favicon, WhatsApp profile).
- Don't: recolour "PRASA" amber, add gradients/shadows to the wordmark, stretch, outline, or place on low-contrast backgrounds.

**Tagline lock-ups (pick one per context):**
- "Your Cape Town train assistant. On WhatsApp." (hero)
- "Real-time Metrorail help on WhatsApp." (meta / cards)
- "Not official… yet." (playful, secondary)

---

## 3. Colour system

Dark theme is the default and only theme (premium feel, OLED-friendly, matches the board aesthetic). All values are also defined as CSS custom properties in `src/styles/global.css`.

### 3.1 Core / ink (surfaces)
| Token | Hex | Use |
|---|---|---|
| `--bg-primary` | `#141D28` | Page background (ink) |
| `--bg-card` | `#202C3A` | Cards, panels |
| `--bg-card-hover` | `#283648` | Card hover |
| `--bg-elevated` | `#324356` | Raised elements, board rows |
| `--bg-nav` | `rgba(20,29,40,0.88)` | Sticky nav (blurred) |
| `--border-subtle` | `rgba(159,176,195,0.14)` | Hairline borders |

### 3.2 Brand — Signal Amber
The single brand colour. It means **"live / primary action / PRASA ai."** Use it sparingly so it stays a signal, not wallpaper.
| Token | Hex / value | Use |
|---|---|---|
| `--amber` | `#FFC040` | Brand, primary CTA, key numbers, "ai" |
| `--amber-hover` | `#FFB020` | CTA hover |
| `--amber-glow` | `rgba(255,192,64,0.40)` | CTA shadow/glow |
| `--amber-subtle` | `rgba(255,192,64,0.12)` | Tints, chips |
| `--amber-border` | `rgba(255,192,64,0.30)` | Highlighted borders |

### 3.3 Metrorail line colours (categorical palette)
Used for line identity, chart series, status accents, and section spines. **Never use colour alone** to convey status — always pair with a label or icon (colour-blind safety).
| Line | Token | Hex |
|---|---|---|
| Southern | `--line-red` | `#FF4444` |
| Northern | `--line-green` | `#38B54A` |
| Cape Flats | `--line-orange` | `#FF9A30` |
| Central | `--line-blue` | `#5E9BFF` |
| Malmesbury | `--amber` | `#FFC040` |

### 3.4 Semantic status
| Meaning | Token | Hex | Pair with |
|---|---|---|---|
| On time / good / "go" | `--status-ok` (`--line-green`) | `#38B54A` | ✓ / "On time" |
| Minor delay / at risk | `--status-warn` (`--amber`) | `#FFC040` | ! / "Delays" |
| Suspended / off-track | `--status-bad` (`--line-red`) | `#FF4444` | ✕ / "Suspended" |
| Info / neutral | `--status-info` (`--line-blue`) | `#5E9BFF` | i |

### 3.5 WhatsApp (channel colours — the "go" action)
| Token | Hex | Use |
|---|---|---|
| `--wa-green` | `#25D366` | WhatsApp CTAs, "online", channel chips |
| `--wa-dark` | `#0B141A` | Chat mockup background |
| `--wa-bubble-user` | `#005C4B` | User bubble |
| `--wa-bubble-bot` | `#1F2C34` | Bot bubble |

### 3.6 Text
| Token | Value | Use |
|---|---|---|
| `--text-primary` | `#F2F6FA` | Headings, key copy |
| `--text-secondary` | `#9FB0C3` | Body, supporting |
| `--text-muted` | `rgba(159,176,195,0.6)` | Captions, fine print |

**Contrast:** amber `#FFC040` on `#0E141C` ≈ 11:1 (AAA). Keep body text on `--text-secondary` or lighter against any surface ≤ `--bg-elevated` for AA.

---

## 4. Typography

Two self-hosted variable fonts (already in `/public/fonts`) + a system mono stack for numerals. No external font requests.

| Role | Family | Weights | Notes |
|---|---|---|---|
| **Display / headings** | **Plus Jakarta Sans** | 600–800 | Tight tracking on large sizes (`-0.02em`) |
| **Body / UI** | **DM Sans** | 400–600 | `line-height: 1.6` body |
| **Numerals / "board"** | System mono (`--font-mono`: ui-monospace, "SF Mono", "Cascadia Code", "Roboto Mono", Menlo, Consolas, monospace) | — | Times, KPIs, rates, heatmap, departure board. Use `font-variant-numeric: tabular-nums`. |

**Type scale (fluid, clamp-based — tokens in global.css):**
| Token | Range | Use |
|---|---|---|
| `--fs-display` | `clamp(2.25rem, 6vw, 4rem)` | Hero H1 |
| `--fs-h2` | `clamp(1.6rem, 4vw, 2.5rem)` | Section headings |
| `--fs-h3` | `clamp(1.1rem, 2.5vw, 1.35rem)` | Card titles |
| `--fs-lead` | `clamp(1.05rem, 2.2vw, 1.25rem)` | Lead paragraphs |
| `--fs-body` | `1rem` | Body |
| `--fs-small` | `0.875rem` | Captions |
| `--fs-micro` | `0.75rem` | Labels, eyebrows (uppercase, `letter-spacing: 0.08em`) |

**Eyebrow / kicker:** micro size, uppercase, `letter-spacing: 0.1em`, `--text-secondary` or line colour — used above section headings.

---

## 5. Spacing, radius, elevation, motion

- **Spacing scale (4px base):** `--space-1:4 · 2:8 · 3:12 · 4:16 · 5:24 · 6:32 · 7:48 · 8:64 · 9:96`. Section vertical rhythm: 80px desktop / 48–56px mobile.
- **Radius:** `--radius-sm:8 · --radius:12 · --radius-lg:16 · --radius-xl:24 · --radius-pill:999`.
- **Elevation:** `--shadow-1: 0 2px 12px rgba(0,0,0,.25)` · `--shadow-2: 0 12px 40px rgba(0,0,0,.35)` · `--shadow-glow: 0 0 60px rgba(255,192,64,.10)`.
- **Container:** max-width 1100px (1200px for dashboard data views), 16/24/32px responsive gutters.
- **Motion:** ease `cubic-bezier(0.32,0.72,0,1)`; durations 200ms (UI), 600ms (scroll reveal). Everything must collapse gracefully under `prefers-reduced-motion: reduce` (particles, shimmer, counters, pulses all disabled).

---

## 6. Signature components

1. **Departure board** — dark panel, line-status rows (colour bar + line name + status pill + next-train mono times), a live amber pulse dot, and an "updated Ns ago" timestamp. The hero centrepiece and the live-proof trust signal.
2. **WhatsApp chat mockup** — realistic dark-mode WhatsApp thread (user bubble `--wa-bubble-user` right, bot bubble `--wa-bubble-bot` left, mono times, typing indicator). Also the host for **sponsored ad formats** (always labelled "— Sponsored —").
3. **KPI card** — eyebrow label, big mono number, trend `▲/▼ vs last month`, optional sparkline (inline SVG). Top-left = most important (F-pattern).
4. **Rail spine** — a thin vertical line with station dots running beside section headings; the structural motif tying the page together.
5. **Line chips / status pills** — pill with line colour, label always present.
6. **Charts (pure CSS/SVG, no libs):** horizontal bar rows, stacked sentiment bars, area/line trend (inline SVG path), 7×24 dayparting heatmap (CSS grid, opacity = intensity).
7. **Buttons:** primary (amber pill, ink text), WhatsApp (wa-green pill), outline (amber border), ghost/secondary (subtle border). 44px min height on mobile.

---

## 7. Voice & tone

- **Plain, warm, specific.** "Will my train come, and when?" beats "real-time multimodal journey intelligence."
- **Local & human.** Comfortable with "lekker", "ekse", "muizi to town", isiXhosa/Afrikaans. Meet riders in their language.
- **Confident, never arrogant.** We're proud of what we built and open about being independent.
- **The "…yet" disclaimer system** (escalating, always ending aspirational):
  1. Hero micro-line: *"Not an official PRASA service — yet."*
  2. Features note: *"Built independently using publicly available PRASA schedule data."*
  3. Story paragraph: the full, friendly independence statement.
  4. Footer: complete legal disclaimer that still ends on "we aspire to partner."
- **Numbers honestly.** On the dashboard/advertise pages, label illustrative figures as illustrative; quote conservative ad-slot CTR (2–8%), present the 98% open rate as a channel ceiling, not a promise.

**Do:** "Save ~R800/month vs taxis." · "3 commuters report on time at Muizenberg." · "Updated 12s ago."
**Don't:** "Revolutionary AI-powered mobility ecosystem." · unattributed hype · fake precision.

---

## 8. The System Sol ecosystem (sister products — hint, don't headline)

PRASA ai is the flagship of a family of WhatsApp-native civic/mobility products by System Sol. Surface these as a tasteful "What we're building next" teaser (home + dashboard expansion strip) — same design language, each with a line-colour accent. Tone: "coming", credible, not vapourware.

| Product | One-liner | Accent |
|---|---|---|
| **GABS ai / Golden Arrow ai** | The same assistant for Golden Arrow Bus Services riders — Cape Town's buses on WhatsApp. | `--line-orange` |
| **YourGov** | A YouGov for South Africa — nationwide WhatsApp petitions & public-opinion polling, civic voice at SMS-simple reach. | `--line-blue` |
| **Fleet ai** | WhatsApp fleet-management for operators — vehicles, drivers, and routes managed from chat. | `--line-green` |

Positioning line: *"One assistant for trains today. A platform for how South Africa moves and speaks — tomorrow."*

---

## 9. Accessibility & performance checklist

- WCAG AA contrast on all text; status never by colour alone.
- 44px min touch targets on mobile; visible focus states.
- `prefers-reduced-motion` fully honoured.
- Semantic HTML (`header/nav/main/section/footer`); alt text; `aria-hidden` on decorative SVG.
- Target < 100KB/page excluding fonts; self-hosted fonts with `font-display: swap` + preload; no blocking third-party scripts.
- Multilingual intent: English / Afrikaans / isiXhosa surfaced in copy and examples.
