# What Rail / Transit Executives Want to SEE in a Passenger-Experience Analytics Dashboard

Research brief for the PRASA ai public metrics dashboard (System Sol).
Goal: convince PRASA / Metrorail Western Cape and City of Cape Town leadership that
passenger-information data collected by an AI WhatsApp assistant is *valuable*, using
a dashboard that a non-technical executive can read in seconds.

Date: 2026-06-16. Evidence window: 2023–2026.

---

## 1. The core insight

Transit executives don't get excited about raw data — they get excited about data that
answers questions their current systems **can't**. PRASA/Metrorail already counts trains
and (sometimes) tickets. What they almost never have is the **passenger-side, demand-side,
sentiment-side picture in real time**: who wants to go where, where people feel
under-informed, what they complain about, and how they *feel* about the service. An AI
WhatsApp assistant is a passive sensor network for exactly that. The dashboard's job is to
prove it.

Two framings that resonate with management:

- **"We can see the network the way passengers experience it, not just the way the
  timetable describes it."** (This is the explicit direction TfL and the MTA have moved —
  see §4.)
- **"This is demand intelligence you can't buy from your signalling system."** Most-asked
  routes, demand hotspots, and information-gap zones are leading indicators for where to
  add service, where to fix comms, and where revenue is leaking.

---

## 2. KPIs transit operators & authorities actually track

Grouped the way executives think about them. Each row notes whether a PRASA ai assistant
can plausibly produce or proxy the metric — that's the pitch.

### A. Demand & ridership (the "is it being used" story)
| KPI | Definition | Can PRASA ai surface it? |
|---|---|---|
| **Ridership / patronage** | Boardings by system, line, route, time band | Proxy via query volume + reported trips; strongly correlated leading indicator |
| **Origin–Destination (OD) flows** | Where trips start vs. end | **Yes — directly.** Users ask "how do I get from X to Y." This is OD demand data operators normally pay for via smart-card/AFC studies |
| **Peak / off-peak load split** | Demand by time of day | Yes — query timestamps |
| **Most-requested routes / stations** | Ranked demand | **Yes — directly, and uniquely.** |
| **Crowding / load factor** | Passengers ÷ capacity per train/segment | Proxy via crowd reports (crowd-sourced) |

Ridership is the headline NTD-style measure of utilization; OD flows and load factor are the
ones operators historically struggle to measure cheaply.
(arenasoftwares; KPI Depot; SHARE Mobility; Transport for NSW)

### B. Reliability & operations (the "is it working" story)
| KPI | Definition | Notes / benchmark |
|---|---|---|
| **On-Time Performance (OTP)** | % services within a punctuality threshold | "Perhaps the most important measure of service quality" from a customer viewpoint. Metrorail WC reported **91% OTP** for scheduled trips in 2024/25. MTA subway weekday OTP hit **85.2%** (May 2025) |
| **Customer Journey Time Performance (CJTP)** | % of *rider trips* completed within ~5 min of schedule — measures the journey, not the train | MTA 2024: **84.36%**. This is the modern, passenger-centric reframe of OTP |
| **Additional Platform/Train/Journey Time (APT/ATT/AJT)** | Avg minutes a rider waits/rides *beyond* schedule | MTA 2024: APT 1:21, ATT 0:31. Excellent "felt delay" metric |
| **Cancellations** | % scheduled trips not delivered | Metrorail WC kept cancellations to **~3%** (2024/25) |
| **Trip completion rate** | Scheduled trips delivered end-to-end (catches turnbacks/short-running) | arenasoftwares |
| **Headway adherence** | Gap regularity on frequent service (catches bunching) | arenasoftwares |
| **Dwell time** | Time stopped at a station for boarding/alighting | Driven by passenger volume; affects total journey time |

(arenasoftwares; MTA 2024 Annual Report / metrics.mta.info; SAnews/Daily Maverick on Metrorail)

### C. Passenger experience & satisfaction (the "do they like it" story)
| KPI | Definition | Benchmark |
|---|---|---|
| **CSAT** | Satisfaction after an interaction / period | Baseline target **>80%** |
| **NPS** | Would-recommend loyalty (−100 to +100) | Baseline target **>+30** |
| **Sentiment** | Pos/neutral/neg from free-text messages | **Yes — directly** from WhatsApp text. Operators normally only get this from expensive periodic surveys |
| **Complaint volume (normalized)** | Complaints per 100,000 journeys | TfL publishes complaints per 100,000 journeys |
| **Complaint resolution time / FCR** | Speed of resolution; % resolved first contact | FCR benchmark **65–75%**; resolution time tracked as a core CX KPI |
| **Complaint classification** | Tagged by delay / safety / cleanliness / comfort / staff, mapped to corridor + time window | Turns anecdote into actionable, location-specific signal (arenasoftwares) |

(arenasoftwares; TfL Customer Service & Operational Performance reports; Geckoboard/SQM on FCR; call-centre-helper / Hiver on CSAT/NPS targets)

### D. Information-gap metrics (the metric only a comms tool can own)
This category is PRASA ai's home turf and barely exists in incumbent dashboards.

- **Most-asked questions** (e.g. "is my train running?", "next train at X") — reveals where
  the official channels fail.
- **Information-gap / under-informed hotspots** — stations/lines/time-windows generating the
  most "where is my train / is it cancelled" queries = where passengers feel blind.
- **Disruption query spikes** — query volume jumps minutes before/after an incident; an early
  passenger-side disruption detector.
- **Self-service deflection** — questions answered without human staff = call-centre load avoided.

Research backs the value: real-time information materially raises passenger satisfaction and
reduces felt waiting time; *inaccurate or missing* information aggravates the psychological cost
of delays. Riders "suffer the consequences of communication challenges — alerts that are
confusing, inaccurate, or missing." Measuring the gap is measuring an unmet need.
(Frontiers in Psychology 2021; ScienceDirect — information availability in disruptions; Swiftly — rider alerts)

---

## 3. What "passenger information" specifically lets an operator LEARN

Concretely, the conversational data answers questions PRASA currently cannot:

1. **Demand hotspots & OD desire lines** — true origin→destination demand, including trips
   people *want* to make but currently can't (gaps in the network / abandoned trips).
2. **Most-asked routes & stations** — where to prioritise service, signage, and staffing.
3. **Where riders feel under-informed** — the stations/times generating the most "is it
   coming?" anxiety; the clearest ROI for better real-time comms.
4. **Live sentiment by line/station/time** — an always-on satisfaction survey at near-zero cost.
5. **Early disruption signal** — passenger query spikes as a leading indicator of incidents,
   often ahead of internal reporting.
6. **Fare & access friction** — confusion about fares, tap-and-go, first/last mile — directly
   relevant to PRASA's tap-and-go ticketing rollout.

WhereIsMyTransport proved the appetite: the World Bank and SA cities paid for exactly this
class of mobility/demand data to inform investment. PRASA ai can generate it continuously
instead of via one-off surveys.
(WhereIsMyTransport / World Bank; Transport for NSW Open Data; ScienceDirect smart-card disruption studies)

---

## 4. What leading transit dashboards actually expose (precedent for credibility)

- **MTA (New York)** — `metrics.mta.info` + NY Open Data. Pioneered **customer-journey-focused
  metrics**: Customer Journey Time Performance, Additional Platform/Train/Journey Time, terminal
  OTP. Deliberately reframed away from "did the train run" toward "did the *rider's trip* work."
  Strong model for PRASA ai's passenger-centric angle.
- **TfL (London)** — quarterly **Customer Service & Operational Performance** reports + open data:
  journeys/demand, reliability (PPM), customer satisfaction on a 0–10 scale, complaints per
  100,000 journeys, system availability, digital metrics. Heavy emphasis on demand trends
  (Travel in London reports).
- **Transport for NSW** — Open Data Hub: GTFS static + real-time (vehicle positions, trip
  updates, alerts) and public **Public Transport Trips (All Modes)** patronage dashboards with
  trend lines and methodology notes.
- **CTA (Chicago)** & **Pierce Transit / VIA** — public performance dashboards built on NTD-style
  measures: ridership, OTP, efficiency, with **peer-comparison** tools and trend-over-time views.
- **Open transit data programs (GTFS)** — the lingua franca; positions PRASA ai as a contributor
  to an open data ecosystem, which authorities like.

(MTA 2024 Annual Report; TfL COPR reports; Transport for NSW Open Data Hub; transitchicago.com/performance; piercetransit.org/data-dashboards)

---

## 5. Dashboard design best practices for executives

The hard rule: **executives scan, they don't analyse.** Design for a 5-second read.

1. **The 5-second rule** — primary takeaways graspable within 5 seconds; strip chart junk.
   (UXPin; DataCamp)
2. **Few but meaningful — 6–8 metrics max.** More dilutes focus. A small set of leading KPIs
   plus a few helper metrics. (Qlik; ClearPoint)
3. **Top-down visual hierarchy.** Headline KPI cards in a full-width row at the top
   ("the headlines"); breakdowns by line/segment/time below. Honour the **F-pattern** —
   most important value top-left. (lets-viz; appdeck; UXPin)
4. **Trends, not just snapshots.** Executives care about direction over time. Pair every
   headline number with a trend (▲/▼ vs. last period + a sparkline). (boldbi; ClearPoint)
5. **Color = status, not decoration.** Green/amber/red used *consistently* for
   on-track / at-risk / off-track — and **never color alone** (add icons/labels) for
   colour-blind accessibility. (Qlik; UXPin)
6. **Plain language, no jargon.** "Trains on time," not "OTP %." Label units. Add one-line
   "what this means."
7. **Mobile-first / responsive.** Executives view on phones; must reflow cleanly. (appdeck; Datacamp)
8. **Sparklines & compact numbers over gauges** — same info in ~10% of the space. (UXPin)

(Qlik; lets-viz; appdeck; Bold BI; DataCamp; ClearPoint; UXPin; think.design)

---

## 6. South African / Cape Town rail context (for credibility & framing)

- **Ridership collapse & recovery.** Metrorail nationally rebounded to **~77 million passenger
  trips in 2024/25**, up sharply YoY but still only **~20% of pre-2015 levels** — huge headroom,
  and a data-driven recovery narrative. **Metrorail Western Cape ≈ 22.7 million** passengers
  (FY2024/25), **5 lines**, **104 of 121 stations operational** (Mar 2025), ~460 km of track.
- **Operational recovery.** PRASA restored **35 of 40 service lines**, **91% OTP**, **~3%
  cancellations** (2024/25). Weekday trips had collapsed from **444 (2019) → 153 (2022)**, now
  recovering — a perfect "watch us climb back" trend chart.
- **Investment.** PRASA spent **R21.1 billion capex in 2024/25** (nearly 2× budget). National
  ambition: **600 million PRASA passenger trips** (Minister Creecy, Oct 2025). Recovery assumes
  **R15–20 billion/yr** sustained investment.
- **City of Cape Town takeover momentum.** Service Level Plan signed **5 Dec 2024**; supported by
  the national rail master plan. The City is moving toward **managing passenger rail** — giving it
  oversight of performance plans, station revitalisation, new train sets. *This is exactly the
  audience for a passenger-experience dashboard.*
- **Modernisation underway** — track upgrades to cut journey times, new signalling, **tap-and-go
  ticketing**, EMU fleet growth, Train 300. (Tap-and-go = a future hard ridership/OD data source
  PRASA ai's data can complement *today*.)

(GroundUp; SAnews; Daily Maverick; Cape Town Etc; Wikipedia — Metrorail Western Cape)

---

## What to put on the public dashboard

A single screen, mobile-responsive, readable in 5 seconds. Plain language. Trends everywhere.
Realistic example ranges are sized for a CT Metrorail-scale service (~22M trips/yr, 5 lines,
~100 stations) and for an assistant with a growing user base.

### Layout (top → bottom)

**Row 1 — Headline KPI cards (full width, 4 tiles). Each: big number + ▲/▼ vs last month + sparkline.**

| Tile | Example value | Why execs care |
|---|---|---|
| **Commuters helped this month** | 48,200 conversations ▲ 12% | Reach / adoption — the "we have an audience" number |
| **Questions answered instantly** (self-service) | 92% ▲ 3pts | Call-centre load avoided; service quality |
| **Avg rider sentiment** | 71% positive ▲ 4pts | Always-on CSAT proxy |
| **Live disruptions flagged by riders** | 3 active | Real-time, passenger-sourced incident radar |

**Row 2 — Demand intelligence (the data PRASA can't get elsewhere).**

- **Top 10 most-requested routes** — horizontal bar chart. *e.g. Cape Town↔Bellville,
  Cape Town↔Khayelitsha, Cape Town↔Simon's Town leading.*
- **Origin–Destination flow map / matrix** — desire lines on a simple line map; thicker = more
  demand. The "we can see where people want to go" centrepiece.
- **Demand by time of day** — area chart, AM/PM peaks vs off-peak. *e.g. peaks 06:00–08:00 &
  16:00–18:00.*

**Row 3 — Passenger experience & information gaps.**

- **Sentiment by line** — 5 horizontal stacked bars (green/amber/red + % labels, icons for
  accessibility). Instantly shows the worst-served line.
- **Top passenger concerns** — ranked tags from messages: *delays 34%, overcrowding 22%,
  safety 18%, fares 11%, cleanliness 9%, other.*
- **"Information-gap" hotspots** — top 5 stations/times generating the most "is my train
  coming/cancelled?" queries. The slide that says *"here is exactly where to improve comms."*

**Row 4 — Operational reliability (context + alignment with PRASA's own goals).**

- **On-time performance trend** — line chart, last 12 months, target line at 90%.
  *e.g. ~88–92%.*
- **Cancellations** — small KPI tile, *~3%*, ▼ good.
- **Recovery story** — "Trips operated vs 2019 baseline," climbing trend, ties to the national
  recovery narrative.

### Design rules to apply (so it reads "executive-easy")
- **≤ 8 primary tiles.** Detail on hover/expand only.
- **Top-left = most important** (commuters helped / sentiment); F-pattern scan.
- **Every number has a trend** (arrow + sparkline) — direction beats snapshots.
- **Green/amber/red = status only**, paired with icons/labels (colour-blind safe).
- **Plain-language labels** ("Trains on time," "Where riders feel left in the dark").
- **One-line caption per chart** explaining the takeaway.
- **Mobile-responsive**, single column reflow; headline cards stack first.
- **"Updated live" timestamp** + a short methodology note (builds trust, mirrors TfNSW).

### The one-line pitch the dashboard should make
> *"For the price of a chatbot, PRASA gets a continuous, city-wide, passenger-sourced view of
> demand, sentiment, and information gaps — the exact intelligence a R20-billion recovery needs
> to spend wisely."*

---

## Sources
- Arena Software — Public Transport KPIs 2026: https://www.arenasoftwares.com/blog/public-transport-kpis-that-matter-in-2026-and-how-to-track-them-in-real-time/
- KPI Depot — Public Transportation KPIs & Benchmarks: https://kpidepot.com/kpi-industry/public-transportation-412
- SHARE Mobility — Transit KPIs for small agencies: https://www.sharemobility.com/resources/blog/transit-kpis-small-agency
- CTA Performance dashboard: https://www.transitchicago.com/performance/
- Pierce Transit Data Dashboards: https://piercetransit.org/data-dashboards/
- MTA 2024 Annual Report (KPIs): https://www.mta.info/document/168286
- MTA performance metrics portal: https://www.mta.info/transparency/metrics
- MTA Subway Customer Journey-Focused Metrics (NY Open Data): https://catalog.data.gov/dataset/mta-subway-customer-journey-focused-metrics-beginning-2025
- TfL Customer Service & Operational Performance reports: https://tfl.gov.uk/corporate/publications-and-reports/customer-service-op-performance
- TfL Travel in London 2023 (demand/performance): https://content.tfl.gov.uk/travel-in-london-2023-trends-in-public-transport-demand-and-operational-performance-acc.pdf
- Transport for NSW — Data & Insights / Public Transport Trips: https://www.transport.nsw.gov.au/data-and-research/data-and-insights/public-transport-trips-all-modes
- Transport for NSW Open Data Hub: https://opendata.transport.nsw.gov.au/
- Frontiers in Psychology (2021) — real-time info & rail delay: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.619308/full
- ScienceDirect — information availability in PT disruptions: https://www.sciencedirect.com/science/article/pii/S0965856419305075
- Swiftly — disruption communication / rider alerts: https://www.goswift.ly/blog/disruption-communication-with-rider-alerts
- WhereIsMyTransport / World Bank mobility data (case study): https://startupgraveyard.africa/blog/case-study-what-really-happened-to-whereismytransport
- Geckoboard — First Contact Resolution: https://www.geckoboard.com/best-practice/kpi-examples/first-contact-resolution-rate/
- Call Centre Helper / SQM — FCR, CSAT/NPS targets: https://www.callcentrehelper.com/the-most-valuable-kpi-to-improve-nps-csat-214287.htm
- Qlik — Dashboard design best practices: https://www.qlik.com/us/dashboard-examples/dashboard-design
- lets-viz — Executive dashboard best practices: https://lets-viz.com/blogs/executive-dashboard-best-practices-design-guide/
- appdeck — Executive Dashboard Design 2026: https://appdeck.com/blog/executive-dashboard-design-best-practices
- Bold BI — Dashboard design best practices: https://www.boldbi.com/blog/10-dashboard-design-best-practices/
- DataCamp — Effective Dashboard Design: https://www.datacamp.com/tutorial/dashboard-design-tutorial
- ClearPoint Strategy — KPI Dashboard best practices: https://www.clearpointstrategy.com/blog/kpi-dashboard-best-practices
- UXPin — Dashboard Design Principles: https://www.uxpin.com/studio/blog/dashboard-design-principles/
- GroundUp — City of Cape Town / Metrorail management: https://groundup.org.za/article/cape-town-another-step-closer-to-running-metrorail/
- GroundUp — national master plan supports CoCT push: https://groundup.org.za/article/new-national-master-plan-supports-cape-towns-push-to-manage-metrorail/
- Daily Maverick — PRASA/CoCT rail deal (Dec 2024): https://www.dailymaverick.co.za/article/2024-12-12-rail-agency-finally-signs-deal-with-city-of-cape-town-to-improve-metrorail/
- Daily Maverick — Creecy 600m trips ambition (Oct 2025): https://www.dailymaverick.co.za/article/2025-10-29-creecy-aims-to-turn-private-investment-into-600-million-prasa-passenger-trips/
- SAnews — return of five Metrorail services: https://www.sanews.gov.za/south-africa/prasa-announces-return-five-metrorail-services
- Cape Town Etc — PRASA R21.1bn rail revival: https://www.capetownetc.com/news/prasa-pours-r21-1bn-rail-revival-jobs/
- Wikipedia — Metrorail Western Cape (ridership/lines/stations): https://en.wikipedia.org/wiki/Metrorail_Western_Cape
