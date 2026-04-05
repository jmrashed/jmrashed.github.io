import type { Metadata } from 'next';
import { getProjects } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ProjectCard } from '@/components/sections/Projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Showcase of innovative solutions and complex systems architected and delivered by Rashed Zaman.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="All Projects"
          subtitle="Showcase of innovative solutions and complex systems I've architected and delivered"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={(i % 6) * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
