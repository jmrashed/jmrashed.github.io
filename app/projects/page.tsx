import type { Metadata } from 'next';
import { getProjects } from '@/lib/data';
import ProjectsClient from '@/components/sections/ProjectsFilter';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Showcase of innovative solutions and complex systems architected and delivered by Md Rasheduzzaman.',
};

export default function ProjectsPage() {
  const projects = getProjects();
  return <ProjectsClient projects={projects} />;
}
