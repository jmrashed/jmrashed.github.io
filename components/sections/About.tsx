import Link from 'next/link';
import { Download, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import HireMeButton from '@/components/ui/HireMeButton';
import type { AchievementCategory } from '@/types';
import { siteConfig } from '@/lib/utils';

const stats = [
  { value: '10+', label: 'Years Experience', color: '#818cf8' },
  { value: '36+', label: 'Team Members Led', color: '#34d399' },
  { value: '100+', label: 'Projects Delivered', color: '#c084fc' },
  { value: '98%', label: 'Client Satisfaction', color: '#fbbf24' },
  { value: '$2M+', label: 'Budget Managed', color: '#f472b6' },
  { value: '500K+', label: 'Revenue via AI', color: '#67e8f9' },
];

interface AboutProps {
  achievements: AchievementCategory[];
}

export default function About({ achievements }: AboutProps) {
  return (
    <section id="about" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" badge="Who I Am" />

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left column */}
          <AnimatedSection direction="left">
            <h3 className="text-3xl font-bold text-white mb-6 leading-snug">
              Driving Innovation, <span className="gradient-text">Building Impact</span>
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                As a{' '}
                <span className="text-white font-medium">
                  Tech Leader with 10+ years of experience
                </span>
                , I have transformed ideas into scalable, high-impact software solutions, leading
                teams of engineers to deliver products that accelerate business growth.
              </p>
              <p>
                Currently spearheading a{' '}
                <span className="text-emerald-400 font-medium">
                  36-member development team at Onest Tech LLC
                </span>
                , I blend deep technical expertise in{' '}
                <span className="text-indigo-300">
                  PHP, Node.js, React, and Cloud Infrastructure
                </span>{' '}
                with strategic leadership.
              </p>
              <p>
                Passionate about fostering a culture of{' '}
                <span className="text-amber-300 font-medium">
                  innovation, mentorship, and continuous learning
                </span>
                , empowering engineers to grow while driving organizational success.
              </p>
            </div>

            {/* Stats grid */}
            <StaggerContainer
              className="grid grid-cols-3 gap-3 mt-10"
              staggerDelay={0.07}
              initialDelay={0.1}
            >
              {stats.map(stat => (
                <StaggerItem key={stat.label} direction="scale">
                  <div
                    className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                    style={{ borderColor: `${stat.color}22` }}
                  >
                    <div className="text-2xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs mt-1 leading-tight">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Coding profiles */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: 'https://leetcode.com/u/jmrashed/',
                  label: 'LC',
                  name: 'LeetCode',
                  desc: 'Problem-solving & algorithms',
                  color: '#f97316',
                  stats: [
                    { v: '320', l: 'Solved' },
                    { v: '55%', l: 'Acceptance' },
                  ],
                },
                {
                  href: 'https://www.hackerrank.com/profile/jmrashed',
                  label: 'HR',
                  name: 'HackerRank',
                  desc: 'Skills & certifications',
                  color: '#22c55e',
                  stats: [
                    { v: '180', l: 'Challenges' },
                    { v: '30', l: 'Certs' },
                  ],
                },
              ].map(p => (
                <Link
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 hover:scale-[1.02] transition-transform duration-300 block"
                  style={{ borderColor: `${p.color}22` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                      style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}99)` }}
                    >
                      {p.label}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: p.color }}>
                        {p.name}
                      </div>
                      <div className="text-gray-500 text-xs">{p.desc}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {p.stats.map(s => (
                      <div key={s.l}>
                        <div className="text-lg font-bold text-white">{s.v}</div>
                        <div className="text-gray-500 text-xs">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {/* Quote */}
            <div
              className="mt-8 p-5 rounded-xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(245,158,11,0.05))',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <div className="text-5xl text-indigo-500/20 font-serif absolute top-2 left-4 leading-none select-none">
                &ldquo;
              </div>
              <p className="text-gray-300 italic leading-relaxed pl-4">
                I don&apos;t just build software — I build solutions that scale, empower businesses,
                and inspire teams to achieve more.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <HireMeButton className="btn-primary" />
              <Link href={siteConfig.cvPath} target="_blank" download className="btn-outline">
                <Download className="w-4 h-4" /> Download Resume
              </Link>
            </div>
          </AnimatedSection>

          {/* Right column — achievements */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <div className="card-glass p-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span
                    className="w-1 h-5 rounded-full"
                    style={{ background: 'linear-gradient(to bottom, #6366f1, #f59e0b)' }}
                  />
                  Core Achievements
                </h4>
                <div className="space-y-6">
                  {achievements.map(cat => (
                    <div key={cat.category}>
                      <h5 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
                        {cat.category}
                      </h5>
                      <ul className="space-y-2.5">
                        {cat.items.map(item => (
                          <li key={item.id} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm leading-relaxed">
                              {item.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <h5 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider">
                    Education & Certifications
                  </h5>
                  <div className="space-y-3">
                    {[
                      {
                        icon: GraduationCap,
                        text: 'B.Sc. Computer Science & Engineering — CGPA 3.73',
                        color: 'text-indigo-400',
                      },
                      {
                        icon: Award,
                        text: 'Project Management — Rice University',
                        color: 'text-emerald-400',
                      },
                      {
                        icon: Award,
                        text: 'Web Development Specialization — University of Michigan',
                        color: 'text-purple-400',
                      },
                    ].map((e, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <e.icon className={`w-4 h-4 ${e.color} flex-shrink-0`} />
                        <span className="text-gray-400 text-sm">{e.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div
                className="absolute -inset-px rounded-2xl -z-10 opacity-30 blur-xl"
                style={{ background: 'linear-gradient(135deg, #6366f1, #f59e0b)' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
