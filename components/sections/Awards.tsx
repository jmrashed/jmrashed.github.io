import { Trophy, Star, Medal } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const awards = [
  {
    icon: Trophy,
    title: 'Innovator of the Year',
    org: 'Onest Tech LLC — 2022',
    accent: '#fbbf24',
  },
  {
    icon: Star,
    title: 'Employee of The Year',
    org: 'United Group — 2017',
    accent: '#34d399',
  },
  {
    icon: Medal,
    title: 'Leadership Excellence',
    org: 'Multiple Projects — 2022–2024',
    accent: '#818cf8',
  },
];

export default function Awards() {
  return (
    <section className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.03) 50%, transparent 100%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Recognition & Awards" badge="Awards" />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {awards.map(award => (
            <StaggerItem key={award.title} direction="scale">
              <div
                className="glass-card rounded-2xl p-8 text-center group hover:scale-[1.02] transition-transform duration-300"
                style={{ borderColor: `${award.accent}25` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 animate-glow-pulse"
                  style={{
                    background: `linear-gradient(135deg, ${award.accent}30, ${award.accent}15)`,
                    border: `1px solid ${award.accent}40`,
                    boxShadow: `0 0 30px ${award.accent}20`,
                  }}
                >
                  <award.icon className="w-7 h-7" style={{ color: award.accent }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{award.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{award.org}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
