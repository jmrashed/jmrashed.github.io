import Link from "next/link";
import { GitFork, Eye } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card card-glass p-8 flex flex-col h-full">
      <div className="mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
          🚀
        </div>
        <h3 className="text-xl font-bold text-blue-300">{project["Product Name"]}</h3>
        <p className="text-gray-400 text-sm">{project.Category}</p>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">{project.Description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.Technology.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="green">{tech}</Badge>
        ))}
        {project.Technology.length > 4 && (
          <Badge variant="blue">+{project.Technology.length - 4}</Badge>
        )}
      </div>

      <div className="flex gap-3 mt-auto">
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
        >
          <Eye className="w-4 h-4" /> Details
        </Link>
        {(project.github ?? project.CodeLink) && (
          <Link
            href={project.github ?? project.CodeLink ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg text-sm font-semibold transition-all"
          >
            <GitFork className="w-4 h-4" /> Code
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcase of innovative solutions and complex systems I've architected and delivered"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            <Eye className="w-5 h-5" /> View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
