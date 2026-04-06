import Link from 'next/link';
import { BookOpen, GitBranch } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import type { SkillsData } from '@/types';
import { siteConfig } from '@/lib/utils';

interface SkillsProps {
  skills: SkillsData;
}

const categoryMeta: Record<string, { emoji: string; accent: string }> = {
  Frontend: { emoji: '🎨', accent: '#818cf8' },
  Backend: { emoji: '⚙️', accent: '#34d399' },
  Database: { emoji: '🗄️', accent: '#67e8f9' },
  'DevOps & Cloud': { emoji: '☁️', accent: '#60a5fa' },
  'AI & Emerging Tech': { emoji: '🤖', accent: '#c084fc' },
  'Security & Optimization': { emoji: '🔒', accent: '#f472b6' },
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Expertise"
          badge="Skills"
          subtitle="Comprehensive full-stack development skills with expertise in modern technologies and frameworks"
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {skills.technical_skills.map(category => {
            const meta = categoryMeta[category.category] ?? { emoji: '💡', accent: '#818cf8' };
            return (
              <StaggerItem key={category.category} direction="up">
                <div
                  className="skill-card glass-card rounded-2xl p-6 h-full group"
                  style={{ borderColor: `${meta.accent}22` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{
                        background: `${meta.accent}18`,
                        border: `1px solid ${meta.accent}30`,
                      }}
                    >
                      {meta.emoji}
                    </div>
                    <h3 className="font-semibold text-white">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                        style={{
                          background: `${meta.accent}12`,
                          border: `1px solid ${meta.accent}25`,
                          color: `${meta.accent}`,
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Leadership skills */}
        <AnimatedSection delay={0.3} className="mt-6">
          <div
            className="glass-card rounded-2xl p-6"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Leadership &amp; Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.leadership_skills.map(skill => (
                <span
                  key={skill.name}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#d1d5db',
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Currently Exploring + GitHub README */}
        <AnimatedSection delay={0.35} className="mt-6">
          <div
            className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6"
            style={{ borderColor: 'rgba(192,132,252,0.15)' }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                  Currently Exploring
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.currentlyLearning.map(item => (
                  <span
                    key={item.label}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={siteConfig.githubReadme}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shrink-0 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
            >
              <GitBranch className="w-4 h-4" />
              GitHub README
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
