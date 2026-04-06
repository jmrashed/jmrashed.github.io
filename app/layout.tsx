import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
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
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Rashed Zaman',
                url: siteConfig.url,
                email: siteConfig.email,
                jobTitle: 'Tech Lead & Full-Stack Developer',
                description: siteConfig.description,
                address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
                sameAs: [
                  siteConfig.linkedin,
                  siteConfig.github,
                  'https://x.com/_jmrashed',
                  'https://medium.com/@jmrashed',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Featured Projects by Rashed Zaman',
                itemListElement: [
                  {
                    '@type': 'ListItem', position: 1,
                    item: {
                      '@type': 'SoftwareApplication',
                      name: 'Adi ERP',
                      description: 'Comprehensive Business ERP Solution — scales to 1,000+ concurrent users.',
                      applicationCategory: 'BusinessApplication',
                      operatingSystem: 'Web',
                      url: `${siteConfig.url}/projects/1/`,
                    },
                  },
                  {
                    '@type': 'ListItem', position: 2,
                    item: {
                      '@type': 'SoftwareApplication',
                      name: 'AI Attendance Checker',
                      description: 'AI-powered facial recognition attendance system with 99.9% accuracy.',
                      applicationCategory: 'BusinessApplication',
                      operatingSystem: 'Web, iOS, Android',
                      url: `${siteConfig.url}/projects/2/`,
                    },
                  },
                  {
                    '@type': 'ListItem', position: 3,
                    item: {
                      '@type': 'SoftwareApplication',
                      name: 'Adi Bazar',
                      description: 'Multi-store eCommerce platform with Elasticsearch and AI personalization.',
                      applicationCategory: 'BusinessApplication',
                      operatingSystem: 'Web',
                      url: `${siteConfig.url}/projects/6/`,
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer socialLinks={socialLinks} />
        </ThemeProvider>
      </body>
    </html>
  );
}
