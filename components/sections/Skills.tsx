import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SkillsData } from "@/types";

interface SkillsProps {
  skills: SkillsData;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Expertise"
          subtitle="Comprehensive full-stack development skills with expertise in modern technologies and frameworks"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.technical_skills.map((category, i) => (
            <AnimatedSection key={category.category} delay={i * 0.1}>
              <div
                className={`skill-card p-6 border ${category.border_color} rounded-2xl bg-gradient-to-br ${category.background_gradient} shadow-lg h-full`}
              >
                <div className="flex items-center mb-4 gap-3">
                  <span className="text-3xl">{getCategoryEmoji(category.category)}</span>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}

          {/* Leadership skills */}
          <AnimatedSection delay={0.6} className="md:col-span-2 lg:col-span-3">
            <div className="p-6 border border-gray-500/30 rounded-2xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Leadership Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.leadership_skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 border ${skill.border_color} ${skill.text_color} rounded-full text-sm font-medium bg-gradient-to-br ${skill.background_gradient}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function getCategoryEmoji(category: string): string {
  const map: Record<string, string> = {
    Frontend: "🎨",
    Backend: "⚙️",
    Database: "🗄️",
    "DevOps & Cloud": "☁️",
    "AI & Emerging Tech": "🤖",
    "Security & Optimization": "🔒",
  };
  return map[category] ?? "💡";
}
