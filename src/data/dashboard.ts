// Public dashboard data for PRASA ai.
// Figures are ILLUSTRATIVE — sized to a Cape Town Metrorail-scale service
// (~22M trips/yr, 5 lines, ~100 stations) and a growing assistant user base.
// Replace with live analytics once connected. See research/management.md.

export interface Kpi {
  label: string;
  value: string;
  unit?: string;
  trend: string;          // e.g. "▲ 12%"
  trendDir: 'up' | 'down' | 'flat';
  trendGood: boolean;     // is the direction good?
  caption: string;
  spark: number[];        // sparkline series
}

export const kpis: Kpi[] = [
  {
    label: 'Commuters helped',
    value: '48,200',
    unit: 'conversations this month',
    trend: '▲ 12%',
    trendDir: 'up',
    trendGood: true,
    caption: 'Riders who got an answer in chat',
    spark: [28, 31, 33, 36, 39, 41, 43, 48],
  },
  {
    label: 'Answered instantly',
    value: '92%',
    unit: 'no human needed',
    trend: '▲ 3 pts',
    trendDir: 'up',
    trendGood: true,
    caption: 'Self-service — call-centre load avoided',
    spark: [84, 86, 87, 88, 89, 90, 91, 92],
  },
  {
    label: 'Rider sentiment',
    value: '71%',
    unit: 'positive',
    trend: '▲ 4 pts',
    trendDir: 'up',
    trendGood: true,
    caption: 'Always-on satisfaction signal from messages',
    spark: [63, 64, 66, 67, 68, 69, 70, 71],
  },
  {
    label: 'Live disruptions',
    value: '3',
    unit: 'flagged by riders now',
    trend: 'Real-time',
    trendDir: 'flat',
    trendGood: true,
    caption: 'Passenger-sourced incident radar',
    spark: [1, 4, 2, 5, 3, 6, 2, 3],
  },
];

// Most-requested routes (queries this week) — horizontal bar chart.
export const topRoutes: { route: string; queries: number; colorVar: string }[] = [
  { route: 'Cape Town ↔ Bellville', queries: 3420, colorVar: '--line-green' },
  { route: 'Cape Town ↔ Khayelitsha', queries: 2980, colorVar: '--line-blue' },
  { route: "Cape Town ↔ Simon's Town", queries: 2510, colorVar: '--line-red' },
  { route: 'Cape Town ↔ Kapteinsklip', queries: 2240, colorVar: '--line-blue' },
  { route: 'Bellville ↔ Wellington', queries: 1760, colorVar: '--line-green' },
  { route: 'Cape Town ↔ Strand', queries: 1530, colorVar: '--line-orange' },
  { route: 'Cape Town ↔ Retreat', queries: 1380, colorVar: '--line-red' },
  { route: 'Cape Town ↔ Muizenberg', queries: 1190, colorVar: '--line-red' },
];

// Demand by time of day — relative message volume index (peak = 100), 24h.
export const demandByHour: number[] = [
  10, 9, 8, 8, 11, 35, 85, 100, 90, 55, 40, 30,
  32, 30, 45, 58, 80, 95, 75, 45, 35, 25, 15, 10,
];

// Sentiment by line — percentages sum to 100.
export const sentimentByLine: { line: string; colorVar: string; pos: number; neu: number; neg: number }[] = [
  { line: 'Northern Line', colorVar: '--line-green', pos: 74, neu: 18, neg: 8 },
  { line: 'Cape Flats Line', colorVar: '--line-orange', pos: 70, neu: 19, neg: 11 },
  { line: 'Southern Line', colorVar: '--line-red', pos: 68, neu: 20, neg: 12 },
  { line: 'Central Line', colorVar: '--line-blue', pos: 61, neu: 23, neg: 16 },
  { line: 'Malmesbury Line', colorVar: '--amber', pos: 76, neu: 17, neg: 7 },
];

// Top passenger concerns — ranked tags from message text.
export const topConcerns: { label: string; pct: number }[] = [
  { label: 'Delays', pct: 34 },
  { label: 'Overcrowding', pct: 22 },
  { label: 'Safety', pct: 18 },
  { label: 'Fares & ticketing', pct: 11 },
  { label: 'Cleanliness', pct: 9 },
  { label: 'Other', pct: 6 },
];

// Information-gap hotspots — where riders feel most in the dark.
export const infoGaps: { station: string; window: string; queries: number }[] = [
  { station: 'Bellville', window: 'AM peak · 06:30–08:00', queries: 1240 },
  { station: 'Cape Town', window: 'PM peak · 16:30–18:00', queries: 980 },
  { station: 'Khayelitsha', window: 'AM peak · 06:00–07:30', queries: 870 },
  { station: 'Mutual', window: 'PM peak · 17:00–18:30', queries: 540 },
  { station: 'Retreat', window: 'AM peak · 06:30–07:30', queries: 430 },
];

// On-time performance — last 12 months (%). Target line at 90.
export const otpTrend: number[] = [86, 87, 88, 89, 88, 90, 91, 90, 89, 91, 92, 91];
export const otpTarget = 90;

// Service recovery — weekday trips operated as % of the 2019 baseline.
export const recoveryTrend: number[] = [34, 38, 42, 45, 49, 54, 58, 61, 64, 66, 68, 70];

export const cancellations = { value: '3.1%', trend: '▼ 0.4 pts', good: true };

// Coverage facts.
export const coverage = [
  { value: '101', label: 'Stations searchable' },
  { value: '19', label: 'Routes' },
  { value: '556', label: 'Daily trips' },
  { value: '5', label: 'WhatsApp channels' },
  { value: '3', label: 'Languages' },
];

export const monthLabels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
