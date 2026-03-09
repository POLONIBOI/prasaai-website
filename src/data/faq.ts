export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: 'Is this an official PRASA service?',
    answer: 'No — not yet. PRASA ai is an independent project built by System Sol, a Cape Town-based team of commuters. We use publicly available GTFS schedule data and are not affiliated with, endorsed by, or connected to PRASA, Metrorail, or any government entity. We aspire to partner officially — until then, we\'re building what we wish existed.',
  },
  {
    question: 'What languages does it support?',
    answer: 'PRASA ai understands and responds in English, Afrikaans, and isiXhosa. Just type your question in whichever language you\'re comfortable with — the bot will respond in the same language.',
  },
  {
    question: 'Does it work on any phone? Do I need an app?',
    answer: 'No app download needed. If your phone can run WhatsApp, you can use PRASA ai. It works on smartphones, feature phones with WhatsApp, and even WhatsApp Web on your desktop.',
  },
  {
    question: 'How do I save my daily commute?',
    answer: 'Send a message like "save Retreat to Cape Town" and PRASA ai will remember your route. Next time, just send "?" or "my train" and you\'ll get your saved route instantly — no need to type it out every morning.',
  },
  {
    question: 'How do I delete my data?',
    answer: 'Send "delete my data" or "forget me" to the bot and all your saved preferences will be removed immediately. You can also email us at info@prasaai.co.za for a full data deletion request. We take POPIA compliance seriously.',
  },
  {
    question: 'What if the bot doesn\'t understand me?',
    answer: 'Try rephrasing your question or use station names more clearly. You can also type "help" to see a list of things PRASA ai can do. The bot understands common abbreviations like "CT" for Cape Town, "muizi" for Muizenberg, and "bellville" even if you spell it differently.',
  },
  {
    question: 'Is it free? Will it always be free?',
    answer: 'Yes, PRASA ai is completely free to use. We believe public transport information should be accessible to everyone. Standard WhatsApp data charges from your mobile provider still apply, but the service itself costs nothing.',
  },
  {
    question: 'Where does the schedule data come from?',
    answer: 'We use publicly available GTFS (General Transit Feed Specification) data published by PRASA. This is the same standardised format used by Google Maps and other transit apps worldwide.',
  },
  {
    question: 'How accurate are the times?',
    answer: 'The timetable data reflects PRASA\'s published schedules. Real-time delays are crowd-sourced from commuter reports in our WhatsApp channels. While we strive for accuracy, trains can be delayed or cancelled without notice — always allow extra time for your journey.',
  },
  {
    question: 'Can I use it outside Cape Town?',
    answer: 'Currently, PRASA ai covers the Cape Town Metrorail network — all 101 stations across 19 routes. We plan to expand to other cities in the future. Follow our WhatsApp channels to be the first to know when new regions launch.',
  },
];
