export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const siteConfig = {
  name: 'Rashed Zaman',
  title: 'Rashed Zaman — Technical Project Manager | Tech Lead | Full-Stack Developer',
  description:
    'Rashed Zaman — Technical Project Manager & Tech Lead from Dhaka, Bangladesh. 10+ years leading cross-functional engineering teams and delivering scalable web & mobile solutions using PHP, Node.js, React and cloud platforms.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jmrashed.github.io',
  email: 'jmrashed@gmail.com',
  location: 'Dhaka, Bangladesh (UTC+6)',
  timezone: 'UTC+6 — Overlaps UK (BST −5h) & US EST (−11h)',
  contactHours: '9 AM – 6 PM BST / 4 AM – 1 PM EST',
  workModes: 'Remote · Hybrid · Onsite (Dhaka)',
  targetRoles: 'Senior Engineer · Tech Lead · Technical Project Manager · Engineering Manager',
  github: 'https://github.com/jmrashed',
  githubReadme: 'https://github.com/jmrashed/jmrashed',
  linkedin: 'https://www.linkedin.com/in/jmrashed/',
  twitter: '@jmrashed',
  cvPath: '/rashed-zaman-technical-project-manager-resume.pdf',
  /** Single source of truth for all stat numbers shown in Hero + About */
  stats: [
    { value: '10+',   label: 'Years Exp.',  labelLong: 'Years Experience',   color: '#818cf8' },
    { value: '36+',   label: 'Team Size',   labelLong: 'Team Members Led',   color: '#34d399' },
    { value: '100+',  label: 'Projects',    labelLong: 'Projects Delivered', color: '#c084fc' },
    { value: '40+',   label: 'Mentored',    labelLong: 'Devs Mentored',      color: '#fbbf24' },
    { value: '$2M+',  label: 'Budget',      labelLong: 'Budget Managed',     color: '#f472b6' },
    { value: '500K+', label: 'AI Revenue',  labelLong: 'Revenue via AI',     color: '#67e8f9' },
  ],
  /** Currently learning — shown in Skills section */
  currentlyLearning: [
    { label: 'Rust',             color: '#f97316', why: 'Evaluating for performance-critical services where GC pauses hurt latency SLAs.' },
    { label: 'LLM Fine-tuning',  color: '#c084fc', why: 'Deepening hands-on model adaptation to scope AI features more accurately for clients.' },
    { label: 'Go',               color: '#67e8f9', why: 'Building lightweight, concurrent microservices with a smaller ops footprint than the JVM.' },
    { label: 'Kubernetes (CKA)', color: '#60a5fa', why: 'Formalizing production orchestration knowledge ahead of the certification exam.' },
    { label: 'WebAssembly',      color: '#34d399', why: 'Exploring for portable, near-native performance in browser-side compute.' },
  ],
};

/**
 * Builds a Google Calendar "create event" link pre-filled with this site's
 * owner as a guest. The visitor picks their own date/time in their own
 * Google Calendar and sending the event invites the owner directly —
 * no third-party scheduling service involved.
 */
export function googleCalendarInviteUrl(
  title = `Intro Call with ${siteConfig.name}`,
  details = `30-minute intro call. Pick any time that works for you — sending this invite will notify ${siteConfig.name} directly.`
): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details,
    add: siteConfig.email,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
