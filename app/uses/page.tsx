import type { Metadata } from 'next';
import { Code2, Server, Wrench, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { siteConfig } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Uses',
  description: `The hardware, software, tools, and stack that ${siteConfig.name} uses daily for development, architecture, and remote work.`,
};

const sections = [
  {
    icon: Code2,
    title: 'Editor & Terminal',
    accent: '#34d399',
    subtitle: 'Optimized for fast navigation and consistent formatting across teams.',
    items: [
      { name: 'Editor', detail: 'VS Code — with Vim keybindings for navigation speed' },
      { name: 'Theme', detail: 'One Dark Pro — high contrast, low eye strain' },
      { name: 'Font', detail: 'Fira Code with ligatures enabled' },
      { name: 'Terminal', detail: 'Zsh + Oh My Zsh + Starship prompt' },
      { name: 'Extensions', detail: 'Prettier, ESLint, GitLens, PHP Intelephense, Docker' },
    ],
  },
  {
    icon: Server,
    title: 'Daily Stack',
    accent: '#60a5fa',
    subtitle: 'Defaults I reach for across backend, frontend, data, and infra — chosen for maintainability and team velocity, not novelty.',
    items: [
      { name: 'Backend', detail: 'PHP 8.x / Laravel, Node.js / Express, Python / FastAPI' },
      { name: 'Frontend', detail: 'React, Next.js, TypeScript, Tailwind CSS' },
      { name: 'Database', detail: 'MySQL 8, PostgreSQL, MongoDB, Redis' },
      { name: 'DevOps', detail: 'Docker, GitHub Actions, AWS (EC2, S3, RDS), Nginx' },
      { name: 'AI/ML', detail: 'Python, TensorFlow, OpenCV, OpenAI API, LangChain' },
    ],
  },
  {
    icon: Wrench,
    title: 'Delivery & Team Tooling',
    accent: '#f59e0b',
    subtitle: 'How I run sprints, keep decisions documented, and coordinate distributed teams.',
    items: [
      { name: 'Version Control', detail: 'Git + GitHub — conventional commits, PR-based workflow' },
      { name: 'Project Management', detail: 'Jira for sprint planning, Notion for docs and architecture decision records' },
      { name: 'Communication', detail: 'Slack for async updates, Google Meet for syncs across time zones' },
      { name: 'API Testing', detail: 'Postman + Thunder Client (VS Code)' },
      { name: 'DB GUI', detail: 'TablePlus for MySQL/PostgreSQL, MongoDB Compass' },
      { name: 'Design Review', detail: 'Figma for wireframes and UI/UX reviews with clients' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Currently Exploring',
    accent: '#c084fc',
    subtitle: 'What I’m investing in next, and the specific problem each one is meant to solve.',
    items: siteConfig.currentlyLearning.map(item => ({
      name: item.label,
      detail: item.why,
      color: item.color,
    })),
  },
];

export default function UsesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What I Use"
          badge="Uses"
          subtitle="My hardware, editor setup, daily stack, and tools for remote development and team leadership."
        />

        <div className="space-y-6">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.08}>
              <div
                className="glass-card rounded-2xl p-6"
                style={{ borderColor: `${section.accent}20` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${section.accent}18`, border: `1px solid ${section.accent}30` }}
                  >
                    <section.icon className="w-5 h-5" style={{ color: section.accent }} />
                  </div>
                  <h2 className="font-bold text-white text-lg">{section.title}</h2>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 -mt-2">{section.subtitle}</p>

                <div className="space-y-3">
                  {section.items.map(item => (
                    <div key={item.name} className="flex items-baseline gap-3">
                      <span
                        className="text-sm font-semibold shrink-0 w-36"
                        style={{ color: ('color' in item && item.color) ? item.color : section.accent }}
                      >
                        {item.name}
                      </span>
                      {item.detail && (
                        <span className="text-gray-400 text-sm leading-relaxed">{item.detail}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
