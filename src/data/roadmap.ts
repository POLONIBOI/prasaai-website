export interface RoadmapItem {
  status: 'shipped' | 'building' | 'planned';
  title: string;
  description: string;
}

export const roadmap: RoadmapItem[] = [
  {
    status: 'shipped',
    title: 'Full Metrorail Timetable',
    description: 'All 101 stations, 19 routes, 556 daily trips — searchable on WhatsApp.',
  },
  {
    status: 'shipped',
    title: 'Multilingual Support',
    description: 'English, Afrikaans, and isiXhosa — type in any language.',
  },
  {
    status: 'shipped',
    title: 'Save Your Route',
    description: 'Save your daily commute and get schedules with a single "?" message.',
  },
  {
    status: 'shipped',
    title: 'Crowd-sourced Delay Alerts',
    description: 'Real-time disruption reports from commuters across the network.',
  },
  {
    status: 'building',
    title: 'Push Notifications',
    description: 'Get alerted before you leave home when your line has delays.',
  },
  {
    status: 'building',
    title: 'Fare Calculator',
    description: 'Calculate trip costs and compare weekly vs monthly ticket savings.',
  },
  {
    status: 'planned',
    title: 'Real-time GPS Tracking',
    description: 'Live train positions on a map — pending official PRASA partnership.',
  },
  {
    status: 'planned',
    title: 'More Cities',
    description: 'Expanding to Johannesburg, Pretoria, and Durban Metrorail networks.',
  },
  {
    status: 'planned',
    title: 'MyCiTi & Golden Arrow Integration',
    description: 'Multi-modal trip planning across Cape Town\'s full transit network.',
  },
];
