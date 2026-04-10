import type { Metadata, Viewport } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OpenToWorkBanner from '@/components/ui/OpenToWorkBanner';
import { getSocialLinks } from '@/lib/data';
import { siteConfig } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8faff' },
    { media: '(prefers-color-scheme: dark)',  color: '#080f1e' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/favicon.ico',       sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple:   [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other:   [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  keywords: [
    'Rashed Zaman',
    'tech lead',
    'full-stack developer',
    'PHP',
    'Node.js',
    'React',
    'cloud infrastructure',
    'software architect',
    'web development',
    'Dhaka',
    'Bangladesh',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} — Tech Lead & Full-Stack Developer`,
    description:
      'Experienced Tech Lead and Full-Stack Developer specializing in scalable web applications, system architecture and team leadership.',
    siteName: siteConfig.name,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitter,
    title: `${siteConfig.name} — Tech Lead & Full-Stack Developer`,
    description:
      'Experienced Tech Lead and Full-Stack Developer specializing in scalable web applications, system architecture and team leadership.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const socialLinks = getSocialLinks();

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Rashed Zaman',
              alternateName: 'Md Rasheduzzaman',
              url: siteConfig.url,
              email: siteConfig.email,
              image: `${siteConfig.url}/images/profile.jpg`,
              jobTitle: 'Tech Lead & Full-Stack Developer',
              description: siteConfig.description,
              telephone: siteConfig.whatsapp,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dhaka',
                addressCountry: 'BD',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Stamford University Bangladesh',
                url: 'https://www.stamforduniversity.edu.bd',
              },
              hasCredential: [
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'B.Sc. Computer Science & Engineering',
                  credentialCategory: 'degree',
                  recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Stamford University Bangladesh' },
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Project Management Specialization',
                  credentialCategory: 'certificate',
                  recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Rice University (Coursera)' },
                },
              ],
              knowsAbout: [
                'PHP', 'Laravel', 'Node.js', 'React', 'Next.js', 'TypeScript',
                'Python', 'Docker', 'AWS', 'PostgreSQL', 'MySQL',
                'System Architecture', 'Team Leadership', 'SaaS Development',
                'CI/CD', 'Agile', 'Scrum', 'AI/ML Integration',
              ],
              sameAs: [
                siteConfig.linkedin,
                siteConfig.github,
                'https://x.com/jmrashed',
                'https://medium.com/@jmrashed',
                'https://leetcode.com/u/jmrashed/',
                'https://www.hackerrank.com/profile/jmrashed',
                'https://packagist.org/packages/jmrashed/zkteco',
                siteConfig.calendly,
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'SDT Ltd',
              },
              seeks: {
                '@type': 'JobPosting',
                title: 'Senior Software Engineer / Tech Lead / Engineering Manager',
                jobLocationType: 'TELECOMMUTE',
                applicantLocationRequirements: { '@type': 'Country', name: 'Worldwide' },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <OpenToWorkBanner />
          <Navbar />
          <main>{children}</main>
          <Footer socialLinks={socialLinks} />
        </ThemeProvider>
      </body>
    </html>
  );
}
