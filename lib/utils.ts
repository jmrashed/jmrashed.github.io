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
  github: 'https://github.com/jmrashed',
  linkedin: 'https://www.linkedin.com/in/jmrashed/',
  twitter: '@jmrashed',
  cvPath: '/RASHED_ZAMAN_CV.pdf',
};
