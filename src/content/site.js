// The text most likely to change, kept in one place: people, prices and the
// contact form's address. Edit here, then commit and push.

/** Web3Forms access key. Public by design: it identifies the form, and the
 *  messages go to the inbox it was created for. */
export const CONTACT_ACCESS_KEY = '245db6b4-ba97-473d-a40c-025c8686928b';

export const UPDATED = '12 October 2026';

// Placeholders until the team's real details are added. `photo` is a path
// under /public (for example '/img/team/haris.jpg'); leave it out to show
// the grey box.
export const TEAM = [
  { name: 'Team Member 1', role: 'App and backend', bio: 'A line or two about what they built goes here.' },
  { name: 'Team Member 2', role: 'Hardware and firmware', bio: 'A line or two about what they built goes here.' },
  { name: 'Team Member 3', role: 'Design and testing', bio: 'A line or two about what they built goes here.' },
  { name: 'Team Member 4', role: 'Research and documentation', bio: 'A line or two about what they built goes here.' },
];

export const SUPERVISORS = [
  { name: 'Supervisor Name', role: 'Project supervisor', bio: 'Title and department go here.' },
  { name: 'Co-Supervisor Name', role: 'Co-supervisor', bio: 'Title and department go here.' },
];

// Planning figures, not offers. Nothing is on sale yet.
export const PLANS = [
  {
    when: 'Available now',
    name: 'SafeTag App',
    price: 'Free',
    note: 'Your phone acts as the SafeTag.',
    features: ['SOS, loud and silent', 'Live location for your contacts', 'Journeys and safe zones', 'Trusted contacts with permissions'],
    action: { label: 'Download', to: '/#download', primary: true },
  },
  {
    when: 'Coming soon',
    name: 'SafeTag Device',
    price: 'Rs 4,999',
    unit: 'one time',
    note: 'Plus Rs 299 a month for its mobile connection.',
    features: ['Everything in the app', 'Works without a phone', 'Voice call to contacts on SOS', 'Key ring and charging cable'],
    action: { label: 'Ask about the device', to: '/contact?topic=Device' },
    featured: true,
  },
  {
    when: 'Coming soon',
    name: 'Family Pack',
    price: 'Rs 12,999',
    unit: 'for three',
    note: 'Plus Rs 749 a month for all three.',
    features: ['Three SafeTag devices', 'One shared family view', 'Saves Rs 1,998 on the devices', 'Priority support'],
    action: { label: 'Ask about the pack', to: '/contact?topic=Family%20pack' },
  },
];

export const COMPARISON = [
  ['Audible and silent SOS', true, true, true],
  ['Live location for contacts', true, true, true],
  ['Journeys with off-route alerts', true, true, true],
  ['Safe zone notices', true, true, true],
  ['Works with no phone', false, true, true],
  ['Voice call to contacts', false, true, true],
  ['Contacts can ask for its location', false, true, true],
  ['Number of devices', 'Your phone', '1', '3'],
];
