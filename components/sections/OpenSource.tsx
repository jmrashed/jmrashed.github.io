import Link from 'next/link';
import { GitFork, Package, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import AnimatedSection from '@/components/ui/AnimatedSection';

const packages = [
  {
    name: 'jmrashed/zkteco',
    description:
      'A PHP package for seamless integration with ZKTeco biometric devices — used for attendance and access control systems.',
    github: 'https://github.com/jmrashed/zkteco',
    packagist: 'https://packagist.org/packages/jmrashed/zkteco',
    accent: '#818cf8',
    tag: 'PHP',
  },
  {
    name: 'jmrashed/laravel-installer',
    description:
      'A simple installer scaffold for Laravel applications to speed up new project setup and onboarding.',
    github: 'https://github.com/jmrashed/laravel-installer',
    packagist: 'https://packagist.org/packages/jmrashed/laravel-installer',
    accent: '#f472b6',
    tag: 'Laravel',
  },
  {
    name: 'jmrashed-api-rate-limiter',
    description:
      'A lightweight API rate-limiting middleware to protect endpoints and ensure fair usage for public APIs.',
    github: 'https://github.com/jmrashed/jmrashed-api-rate-limiter',
    packagist: 'https://packagist.org/packages/jmrashed/jmrashed-api-rate-limiter',
    accent: '#34d399',
    tag: 'Middleware',
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Open Source & Packages"
          badge="OSS"
          subtitle="Maintainer of popular packages and tools used by developers worldwide."
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

                <h3
                  className="font-mono text-sm font-bold text-white mb-2"
                  style={{ color: pkg.accent }}
                >
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-5">
                  {pkg.description}
                </p>

                <div className="flex items-center gap-2.5">
                  <Link
                    href={pkg.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{
                      background: `linear-gradient(135deg, ${pkg.accent}, ${pkg.accent}99)`,
                    }}
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

        <AnimatedSection delay={0.2} className="text-center mt-10">
          <Link
            href="https://github.com/jmrashed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <GitFork className="w-4 h-4" /> View GitHub Profile
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
