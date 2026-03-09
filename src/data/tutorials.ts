export interface TutorialMessage {
  from: 'user' | 'bot';
  lines: string[];
  time: string;
}

export interface Tutorial {
  id: string;
  emoji: string;
  title: string;
  description: string;
  messages: TutorialMessage[];
}

export const tutorials: Tutorial[] = [
  {
    id: 'train-times',
    emoji: '\u{1F686}',
    title: 'Check Train Times',
    description: 'Just type where you\'re going — use station names, nicknames, or slang. PRASA ai understands.',
    messages: [
      {
        from: 'user',
        lines: ['muizi to town'],
        time: '06:45',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F686} Muizenberg \u2192 Cape Town',
          '\u2705 Southern Line on time',
          '\u00A0',
          '\u25B8 07:12 \u2192 07:48',
          '\u25B8 07:35 \u2192 08:11',
          '\u25B8 08:02 \u2192 08:38',
          '\u00A0',
          '\u{1F4B0} Single R12',
          '\u00A0',
          '\u{1F465} 3 commuters report on time at Muizenberg',
        ],
        time: '06:45',
      },
    ],
  },
  {
    id: 'fares',
    emoji: '\u{1F4B0}',
    title: 'Check Fares',
    description: 'Ask how much a trip costs. Get single, return, weekly, and monthly prices.',
    messages: [
      {
        from: 'user',
        lines: ['how much from Fish Hoek to Cape Town?'],
        time: '07:10',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F4B0} Fish Hoek \u2192 Cape Town',
          '\u00A0',
          '\u25B8 Single: R14',
          '\u25B8 Return: R26',
          '\u25B8 Weekly: R68',
          '\u25B8 Monthly: R230',
        ],
        time: '07:10',
      },
    ],
  },
  {
    id: 'first-last-train',
    emoji: '\u231A',
    title: 'First & Last Train',
    description: 'Find the earliest or latest departure on any route.',
    messages: [
      {
        from: 'user',
        lines: ['first train from Khayelitsha to Cape Town'],
        time: '05:15',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F686} Khayelitsha \u2192 Cape Town',
          '\u00A0',
          '\u{1F305} First train:',
          '\u25B8 05:30 \u2192 06:22',
          '\u25B8 Central Line',
        ],
        time: '05:15',
      },
    ],
  },
  {
    id: 'follow-up-return',
    emoji: '\u{1F504}',
    title: 'Quick Follow-Up: Return',
    description: 'After checking a route, just say "and the return?" to flip it.',
    messages: [
      {
        from: 'user',
        lines: ['and the return?'],
        time: '06:46',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F686} Cape Town \u2192 Muizenberg',
          '\u2705 Southern Line on time',
          '\u00A0',
          '\u25B8 17:15 \u2192 17:51',
          '\u25B8 17:35 \u2192 18:11',
          '\u25B8 17:55 \u2192 18:31',
        ],
        time: '06:46',
      },
    ],
  },
  {
    id: 'follow-up-fare',
    emoji: '\u{1F4B5}',
    title: 'Quick Follow-Up: Fare',
    description: 'After a timetable result, send "how much?" to see prices for the same route.',
    messages: [
      {
        from: 'user',
        lines: ['how much?'],
        time: '06:47',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F4B0} Muizenberg \u2192 Cape Town',
          '\u00A0',
          '\u25B8 Single: R12',
          '\u25B8 Return: R22',
          '\u25B8 Weekly: R56',
          '\u25B8 Monthly: R190',
        ],
        time: '06:47',
      },
    ],
  },
  {
    id: 'follow-up-map',
    emoji: '\u{1F5FA}\uFE0F',
    title: 'Quick Follow-Up: Map',
    description: 'After a timetable result, send "map" to get a visual line map.',
    messages: [
      {
        from: 'user',
        lines: ['map'],
        time: '06:48',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F4CD} Southern Line Map',
          '\u00A0',
          '\u25CF Muizenberg',
          '\u2502',
          '\u25CF St James',
          '\u2502',
          '\u25CF Kalk Bay',
          '\u2502',
          '\u25CF Fish Hoek',
          '\u2502',
          '\u25CF \u2026 \u2192 Cape Town',
        ],
        time: '06:48',
      },
    ],
  },
  {
    id: 'saved-commute',
    emoji: '\u2753',
    title: 'My Train (Saved Commute)',
    description: 'After checking the same route 3 times, PRASA ai saves it. Then just send "?" for an instant update.',
    messages: [
      {
        from: 'user',
        lines: ['?'],
        time: '06:50',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F686} Your morning train:',
          'Muizenberg \u2192 Cape Town',
          '\u2705 Southern Line on time',
          '\u00A0',
          '\u25B8 07:12 \u2192 07:48',
          '\u25B8 07:35 \u2192 08:11',
        ],
        time: '06:50',
      },
    ],
  },
  {
    id: 'crowd-reports',
    emoji: '\u{1F465}',
    title: 'Crowd Reports',
    description: 'After every timetable result, quick-tap buttons let you report what you see at the station.',
    messages: [
      {
        from: 'user',
        lines: ['delayed'],
        time: '07:25',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F4DD} Got it! How many minutes delayed?',
          '\u00A0',
          'Just send a number (e.g. "10")',
        ],
        time: '07:25',
      },
    ],
  },
  {
    id: 'multilingual',
    emoji: '\u{1F30D}',
    title: 'Multilingual Support',
    description: 'PRASA ai auto-detects and responds in English, Afrikaans, or isiXhosa.',
    messages: [
      {
        from: 'user',
        lines: ['Hoe laat van Bellville na Kaapstad?'],
        time: '08:00',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F686} Bellville \u2192 Kaapstad',
          '\u2705 Northern Line op tyd',
          '\u00A0',
          '\u25B8 08:15 \u2192 08:42',
          '\u25B8 08:30 \u2192 08:57',
          '\u25B8 08:45 \u2192 09:12',
        ],
        time: '08:00',
      },
    ],
  },
  {
    id: 'delay-alerts',
    emoji: '\u26A0\uFE0F',
    title: 'Live Delay Alerts',
    description: 'When disruptions hit your saved line, you get a proactive alert in your chat.',
    messages: [
      {
        from: 'bot',
        lines: [
          '\u26A0\uFE0F Service Alert',
          '\u00A0',
          'Signal failure affecting Southern Line.',
          'Expected delays of 15\u201330 minutes.',
          '\u00A0',
          '\u{1F449} Follow Southern Line channel for updates',
        ],
        time: '06:30',
      },
      {
        from: 'user',
        lines: ['thanks, is the northern line running?'],
        time: '06:31',
      },
    ],
  },
  {
    id: 'share',
    emoji: '\u{1F4E4}',
    title: 'Share with a Friend',
    description: 'Send "share" to get a pre-formatted invite you can forward to friends.',
    messages: [
      {
        from: 'user',
        lines: ['share'],
        time: '12:00',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F4E4} Here\u2019s your invite to share:',
          '\u00A0',
          '\u{1F686} Check out PRASA ai \u2014 a free WhatsApp bot for Cape Town train times, fares & alerts!',
          '\u00A0',
          'Just message +27 76 054 6767 on WhatsApp.',
        ],
        time: '12:00',
      },
    ],
  },
  {
    id: 'delete-data',
    emoji: '\u{1F6E1}\uFE0F',
    title: 'Delete My Data',
    description: 'POPIA compliant. Send "delete my data" to permanently erase everything.',
    messages: [
      {
        from: 'user',
        lines: ['delete my data'],
        time: '14:00',
      },
      {
        from: 'bot',
        lines: [
          '\u{1F6E1}\uFE0F Are you sure?',
          '\u00A0',
          'This will permanently delete your profile, saved trains, crowd reports, and all message logs.',
          '\u00A0',
          'Tap \u2705 Confirm to proceed.',
        ],
        time: '14:00',
      },
    ],
  },
];
