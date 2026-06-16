// "Advertise with us" data for PRASA ai — sell sponsored placements inside the chat flow.
// Audience figures are ILLUSTRATIVE; benchmark figures (open rate, CPM bands) are
// sourced in research/advertisers.md. Quote ad-slot CTR conservatively (2–8%).

export interface StatTile {
  value: string;
  label: string;
  note?: string;
  mono?: boolean;
}

// Hero audience band — lead with PRASA ai's own inventory, use Metrorail as TAM context.
export const audienceTiles: StatTile[] = [
  { value: '11,400', label: 'Daily active commuters', note: 'PRASA ai · the real inventory', mono: true },
  { value: '34,000+', label: 'Replies served / day', note: 'Your impression inventory', mono: true },
  { value: '~98%', label: 'Message open rate', note: 'WhatsApp channel ceiling', mono: true },
  { value: '~100%', label: 'In-thread viewability', note: 'One message, no scroll-past', mono: true },
  { value: '6.3', label: 'Sessions / user / week', note: 'They commute daily', mono: true },
  { value: '99%', label: 'On a smartphone', note: 'Mobile-first audience', mono: true },
  { value: '343k', label: 'Addressable daily trips by 2026', note: 'Metrorail WC — your TAM', mono: true },
  { value: 'POPIA', label: 'Opt-in · encrypted · brand-safe', note: 'Clean adjacency' },
];

export interface AdFormat {
  name: string;
  blurb: string;
  thread: { from: 'user' | 'bot' | 'sponsored'; lines: string[]; time?: string }[];
}

export const adFormats: AdFormat[] = [
  {
    name: 'In-chat sponsored line',
    blurb: 'A single, labelled sponsored line inside a normal schedule reply — read in the moment a rider plans their trip.',
    thread: [
      { from: 'user', lines: ['bellville to town'], time: '07:18' },
      {
        from: 'bot',
        lines: [
          '🚆 Northern Line — Bellville → Cape Town',
          '✅ On time',
          '▸ Next: 07:42 · Platform 2',
          '▸ Then: 08:05, 08:24',
        ],
        time: '07:18',
      },
      {
        from: 'sponsored',
        lines: ['☕ Vida e Caffè @ Cape Town Station', 'R10 off your morning coffee — show this chat.', '[ Get offer → ]'],
      },
    ],
  },
  {
    name: 'Daypart offer card',
    blurb: 'A contextual offer tied to the time of day — grocery and QSR for the evening commute home.',
    thread: [
      { from: 'user', lines: ['?'], time: '17:05' },
      { from: 'bot', lines: ['🚆 PM peak · Southern Line', '✅ Running on time', '▸ Retreat → Cape Town 17:21'], time: '17:05' },
      {
        from: 'sponsored',
        lines: ['🛒 Heading home? Checkers Sixty60', 'R50 off your first order — tap to claim.', '[ Claim → ]'],
      },
    ],
  },
  {
    name: 'Delay-alert sponsorship',
    blurb: '“While you wait” — a category-exclusive sponsor on disruption alerts. Highest attention, capped and labelled.',
    thread: [
      { from: 'bot', lines: ['⚠️ Central Line delay', '~15 min on your route near Mutual.'], time: '08:02' },
      {
        from: 'sponsored',
        lines: ['Brought to you by MTN', 'While you wait — buy 1GB, get 1GB free.', '[ Learn more → ]'],
      },
    ],
  },
];

// Dayparting model — relative reply-volume index (peak = 100), per hour (00–23).
export const hourlyIndex: number[] = [
  10, 9, 8, 8, 11, 35, 85, 100, 90, 55, 40, 30,
  32, 30, 45, 58, 80, 95, 75, 45, 35, 25, 15, 10,
];

export const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const dayMultiplier: number[] = [1.05, 1.0, 1.0, 1.0, 0.95, 0.55, 0.35];

export const dayparts = [
  { label: 'AM peak', window: '06:00–09:00', tier: 'Peak', verticals: 'Coffee · breakfast · news · data bundles' },
  { label: 'Midday', window: '09:00–16:00', tier: 'Value', verticals: 'Fintech · services · PSAs' },
  { label: 'PM peak', window: '16:00–19:00', tier: 'Peak', verticals: 'Grocery · QSR · retail · entertainment' },
  { label: 'Evenings & weekends', window: '19:00–06:00 · Sat–Sun', tier: 'Value', verticals: 'Leisure · events · retail' },
];

export interface BuyOption {
  placement: string;
  format: string;
  daypart: string;
  fit: string;
}

export const buyOptions: BuyOption[] = [
  { placement: 'In-chat sponsored line', format: 'Text + link in a schedule reply', daypart: 'Any / peak', fit: 'Always-on reach, lowest commitment' },
  { placement: 'Daypart offer card', format: 'Rich card + CTA', daypart: 'AM or PM peak', fit: 'Time-relevant offers (coffee, dinner)' },
  { placement: 'Delay-alert sponsorship', format: 'Contextual, category-exclusive', daypart: 'All-day, capped', fit: 'Highest attention — “while you wait”' },
  { placement: 'Route / line takeover', format: 'Your brand across one line’s replies', daypart: 'Peak, fixed term', fit: 'Own a corridor for a campaign' },
  { placement: 'PSA / government', format: 'Public-interest messaging', daypart: 'Off-peak', fit: 'Reach a hard-to-reach commuter audience' },
];

export const buyNotes = [
  'Pricing is tailored to reach, daypart and exclusivity — tell us your goal and budget, and we’ll send a quote.',
  'Buy on impressions (CPM, familiar to digital buyers) or a flat weekly rate (familiar to out-of-home) — whichever suits you.',
  'Ask about a discounted launch pilot to prove it on your budget before you scale.',
];

export const process = [
  { num: 1, title: 'Brief & target', body: 'Pick your line(s), daypart, audience and format. We map it to live inventory.' },
  { num: 2, title: 'Creative', body: 'We write the sponsored line to read like the chat — short, one CTA, always labelled “Sponsored”.' },
  { num: 3, title: 'Approve & schedule', body: 'You sign off. We frequency-cap (max one ad per reply) and book the daypart.' },
  { num: 4, title: 'Go live', body: 'Ads serve inside relevant replies to opted-in commuters — in the moment of intent.' },
  { num: 5, title: 'Measure', body: 'Promo codes, tap-throughs and conversations-started, in a weekly performance report.' },
];

export const brandSafety = [
  'Opt-in audience only — no scraped lists, no cold spam.',
  'POPIA-compliant and end-to-end encrypted channel.',
  'Maximum one ad per reply, frequency-capped per rider.',
  'Always labelled “Sponsored”; never on safety-critical lines (unless a PSA).',
  'Category exclusivity available on sponsorships.',
];

export const measurement = [
  'Unique promo codes per campaign for clean redemption tracking.',
  'Click-to-WhatsApp / tap-through tracking on every CTA.',
  'Conversations started and replies attributed to your slot.',
  'Weekly performance report — impressions, CTR, conversions.',
];
