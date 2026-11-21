import type { Metadata, Viewport } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OpenToWorkBanner from '@/components/ui/OpenToWorkBanner';
import PageLoader from '@/components/ui/PageLoader';
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
    'Md Rasheduzzaman',
    'Rashed Zaman',
    'tech lead',
    'engineering lead',
    'software architect',
    'full-stack developer',
    'SaaS',
    'AI products',
    'team leadership',
    'system design',
    'PHP',
    'Laravel',
    'Node.js',
    'React',
    'cloud infrastructure',
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
    title: `${siteConfig.name} — Tech Lead | SaaS & AI Products`,
    description:
      'Tech Lead with 10+ years building SaaS and AI products and leading engineering teams. Node.js, React, Laravel, system architecture and team leadership.',
    siteName: siteConfig.name,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitter,
    title: `${siteConfig.name} — Tech Lead | SaaS & AI Products`,
    description:
      'Tech Lead with 10+ years building SaaS and AI products and leading engineering teams. Node.js, React, Laravel, system architecture and team leadership.',
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
              name: 'Md Rasheduzzaman',
              alternateName: 'Rashed Zaman',
              url: siteConfig.url,
              email: siteConfig.email,
              image: `${siteConfig.url}/images/profile.jpg`,
              jobTitle: 'Tech Lead | SaaS & AI Products',
              description: siteConfig.description,
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
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'SDT Ltd',
              },
              seeks: {
                '@type': 'JobPosting',
                title: 'Tech Lead / Engineering Manager / Senior Software Engineer',
                jobLocationType: 'TELECOMMUTE',
                applicantLocationRequirements: { '@type': 'Country', name: 'Worldwide' },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <PageLoader />
          <OpenToWorkBanner />
          <Navbar />
          <main>{children}</main>
          <Footer socialLinks={socialLinks} />
        </ThemeProvider>
      </body>
    </html>
  );
}
