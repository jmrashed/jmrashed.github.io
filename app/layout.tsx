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
  icons: { icon: '/favicon.png' },
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
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
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
              url: siteConfig.url,
              jobTitle: 'Tech Lead & Full-Stack Developer',
              worksFor: { '@type': 'Organization', name: 'Onest Tech LLC' },
              sameAs: [siteConfig.linkedin, siteConfig.github],
            }),
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
