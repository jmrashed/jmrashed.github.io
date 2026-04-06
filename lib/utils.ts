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
  title: 'Rashed Zaman — Tech Lead & Full-Stack Developer | Portfolio',
  description:
    'Rashed Zaman — Tech Lead & Full-Stack Developer from Dhaka, Bangladesh. 10+ years building scalable web & mobile solutions using PHP, Node.js, React and cloud platforms.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jmrashed.github.io',
  email: 'jmrashed@gmail.com',
  location: 'Dhaka, Bangladesh',
  timezone: 'UTC+6 — Bangladesh Standard Time',
  contactHours: '9 AM – 6 PM (Mon–Fri)',
  availableFrom: 'April 2025',
  github: 'https://github.com/jmrashed',
  linkedin: 'https://www.linkedin.com/in/jmrashed/',
  twitter: '@jmrashed',
  cvPath: '/RASHED_ZAMAN_CV.pdf',
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '',
  /** Single source of truth for all stat numbers shown in Hero + About */
  stats: [
    { value: '10+', label: 'Years Exp.',       labelLong: 'Years Experience',  color: '#818cf8' },
    { value: '36+', label: 'Team Size',        labelLong: 'Team Members Led',  color: '#34d399' },
    { value: '100+', label: 'Projects',        labelLong: 'Projects Delivered', color: '#c084fc' },
    { value: '40+', label: 'Mentored',         labelLong: 'Devs Mentored',     color: '#fbbf24' },
    { value: '$2M+', label: 'Budget',          labelLong: 'Budget Managed',    color: '#f472b6' },
    { value: '500K+', label: 'AI Revenue',     labelLong: 'Revenue via AI',    color: '#67e8f9' },
  ],
};
