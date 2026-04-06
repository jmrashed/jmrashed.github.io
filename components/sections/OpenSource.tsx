import Link from 'next/link';
import { GitFork, Package, ExternalLink, Star, Download, GitBranch } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import AnimatedSection from '@/components/ui/AnimatedSection';

const packages = [
  {
    name: 'jmrashed/zkteco',
    description:
      'PHP package for ZKTeco biometric device integration — attendance and access control. Used in production HRM systems across multiple organizations.',
    github: 'https://github.com/jmrashed/zkteco',
    packagist: 'https://packagist.org/packages/jmrashed/zkteco',
    accent: '#818cf8',
    tag: 'PHP',
    metrics: [
      { icon: Download, label: 'Installs', value: '10K+' },
      { icon: Star, label: 'Stars', value: '80+' },
      { icon: GitBranch, label: 'Forks', value: '40+' },
    ],
  },
  {
    name: 'jmrashed/laravel-installer',
    description:
      'Laravel application scaffold installer — speeds up new project setup with opinionated defaults, env config, and onboarding automation.',
    github: 'https://github.com/jmrashed/laravel-installer',
    packagist: 'https://packagist.org/packages/jmrashed/laravel-installer',
    accent: '#f472b6',
    tag: 'Laravel',
    metrics: [
      { icon: Download, label: 'Installs', value: '5K+' },
      { icon: Star, label: 'Stars', value: '30+' },
      { icon: GitBranch, label: 'Forks', value: '15+' },
    ],
  },
  {
    name: 'jmrashed/api-rate-limiter',
    description:
      'Lightweight API rate-limiting middleware for PHP — protects public endpoints and enforces fair usage policies with minimal configuration.',
    github: 'https://github.com/jmrashed/jmrashed-api-rate-limiter',
    packagist: 'https://packagist.org/packages/jmrashed/jmrashed-api-rate-limiter',
    accent: '#34d399',
    tag: 'Middleware',
    metrics: [
      { icon: Download, label: 'Installs', value: '2K+' },
      { icon: Star, label: 'Stars', value: '20+' },
      { icon: GitBranch, label: 'Forks', value: '8+' },
    ],
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Open Source & Packages"
          badge="OSS"
          subtitle="Maintainer of PHP/Laravel packages with 17K+ combined installs on Packagist."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {packages.map(pkg => (
            <StaggerItem key={pkg.name} direction="up">
              <div
                className="glass-card rounded-2xl p-6 h-full flex flex-col group hover:scale-[1.02] transition-transform duration-300"
                style={{ borderColor: `${pkg.accent}20` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${pkg.accent}18`, border: `1px solid ${pkg.accent}30` }}
                  >
                    <Package className="w-5 h-5" style={{ color: pkg.accent }} />
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: `${pkg.accent}15`,
                      color: pkg.accent,
                      border: `1px solid ${pkg.accent}25`,
                    }}
                  >
                    {pkg.tag}
                  </span>
                </div>

                <h3 className="font-mono text-sm font-bold mb-2" style={{ color: pkg.accent }}>
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
                  {pkg.description}
                </p>

                {/* Metrics row */}
                <div className="flex gap-4 mb-5 py-3 border-y border-white/[0.05]">
                  {pkg.metrics.map(m => (
                    <div key={m.label} className="flex items-center gap-1.5">
                      <m.icon className="w-3.5 h-3.5 text-gray-500" />
                      <span className="text-white text-xs font-semibold">{m.value}</span>
                      <span className="text-gray-600 text-xs">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  <Link
                    href={pkg.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${pkg.accent}, ${pkg.accent}99)` }}
                  >
                    <GitFork className="w-3.5 h-3.5" /> GitHub
                  </Link>
                  <Link
                    href={pkg.packagist}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-3.5 !py-2 !text-sm !rounded-lg"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Packagist
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* GitHub stats card */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div
            className="glass-card rounded-2xl p-6 md:p-8"
            style={{ borderColor: 'rgba(99,102,241,0.15)' }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h4 className="text-white font-bold text-lg mb-1">GitHub Activity</h4>
                <p className="text-gray-500 text-sm">
                  Consistent contributions across open-source and private repositories.
                </p>
              </div>
              <Link
                href="https://github.com/jmrashed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex shrink-0"
              >
                <GitFork className="w-4 h-4" /> View GitHub Profile
              </Link>
            </div>

            {/* GitHub readme stats — rendered as images, no JS needed */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden bg-[#0d1117]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats.vercel.app/api?username=jmrashed&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=818cf8&icon_color=34d399&text_color=9ca3af&count_private=true"
                  alt="Rashed Zaman GitHub Stats"
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-[#0d1117]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=jmrashed&theme=tokyonight&hide_border=true&background=0d1117&ring=818cf8&fire=f59e0b&currStreakLabel=818cf8"
                  alt="Rashed Zaman GitHub Streak"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
