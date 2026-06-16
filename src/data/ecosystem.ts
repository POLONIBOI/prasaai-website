// The System Sol ecosystem — PRASA ai's sister WhatsApp-native products.
// Surfaced as a tasteful "what we're building next" teaser, not a headline.

export interface EcosystemProduct {
  name: string;
  tagline: string;
  description: string;
  status: 'Live' | 'In build' | 'Coming soon';
  colorVar: string;
  initial: string;
}

export const ecosystem: EcosystemProduct[] = [
  {
    name: 'PRASA ai',
    tagline: 'Trains, on WhatsApp',
    description: 'The flagship. Real-time Metrorail schedules, delay alerts and crowd reports for Cape Town commuters.',
    status: 'Live',
    colorVar: '--amber',
    initial: 'P',
  },
  {
    name: 'GABS ai',
    tagline: 'Golden Arrow buses, on WhatsApp',
    description: "The same assistant for Cape Town's buses — timetables, fares and live running for Golden Arrow riders.",
    status: 'In build',
    colorVar: '--line-orange',
    initial: 'G',
  },
  {
    name: 'YourGov',
    tagline: 'A nation’s voice, on WhatsApp',
    description: 'A YouGov for South Africa — nationwide petitions and public-opinion polling at SMS-simple reach, inside the app everyone already has.',
    status: 'Coming soon',
    colorVar: '--line-blue',
    initial: 'Y',
  },
  {
    name: 'Fleet ai',
    tagline: 'Fleets, managed from chat',
    description: 'WhatsApp fleet management for operators — vehicles, drivers, routes and reports, run from a single thread.',
    status: 'Coming soon',
    colorVar: '--line-green',
    initial: 'F',
  },
];

export const ecosystemTagline =
  'One assistant for trains today. A platform for how South Africa moves and speaks — tomorrow.';
