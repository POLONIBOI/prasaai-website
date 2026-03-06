import { featureIcons } from './feature-icons';

export interface Feature {
  emoji: string;
  icon: string;
  title: string;
  description: string;
  span?: 'wide' | 'tall';
}

export const features: Feature[] = [
  {
    emoji: '\u{1F686}',
    icon: featureIcons.train,
    title: 'Instant Timetables',
    description: 'Type your route, get the next 3 trains in seconds. English, Afrikaans, or isiXhosa.',
  },
  {
    emoji: '\u26A0\uFE0F',
    icon: featureIcons.signalAlert,
    title: 'Live Delay Alerts',
    description: 'Real-time disruption info from PRASA data and commuter reports, delivered straight to your chat.',
  },
  {
    emoji: '\u{1F4CD}',
    icon: featureIcons.railMap,
    title: 'Line Maps',
    description: 'Visual route maps showing your position, your destination, and any delays along the way.',
    span: 'tall',
  },
  {
    emoji: '\u{1F465}',
    icon: featureIcons.crowd,
    title: 'Crowd Reports',
    description: 'See what fellow commuters are reporting at your station. One tap to share what you see.',
  },
  {
    emoji: '\u{1F916}',
    icon: featureIcons.brainChat,
    title: 'Understands You',
    description: 'Ask "ekse when the next train from muizi to town?" and it just works. No menus. No dropdowns. Just ask.',
    span: 'wide',
  },
  {
    emoji: '\u{1F4B0}',
    icon: featureIcons.coins,
    title: 'Fare Calculator',
    description: "Know exactly what you'll pay. Single, return, weekly, or monthly \u2014 before you leave home.",
  },
];
