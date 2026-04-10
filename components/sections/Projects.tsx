import Link from 'next/link';
import { GitFork, Eye, ArrowRight, BookOpen, Building2 } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import type { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

const categoryColors: Record<string, string> = {
  SaaS: '#818cf8',
  FinTech: '#34d399',
  Healthcare: '#f472b6',
  'E-Commerce': '#fbbf24',
  DevOps: '#67e8f9',
  AI: '#c084fc',
  'Enterprise Software':    '#818cf8',
  'HR Technology':          '#34d399',
  'Customer Service AI':    '#c084fc',
  'Financial Technology':   '#34d399',
  'Inventory Management':   '#fbbf24',
  'E-commerce Platform':    '#fbbf24',
  'Marketplace Platform':   '#fbbf24',
  'Educational Technology': '#60a5fa',
  'Cryptocurrency Exchange':'#f59e0b',
  'Healthcare Management':  '#f472b6',
  'E-commerce Specialty':   '#fbbf24',
  'Telehealth Platform':    '#f472b6',
};

/** Derive the best proof badge for a project */
function getProofBadge(project: Project): { label: string; href: string; color: string; icon: 'github' | 'case-study' | 'production' } | null {
  if (project.github) {
    return { label: 'Open Source', href: project.github, color: '#34d399', icon: 'github' };
  }
  if (project.live_demo) {
    return { label: 'Live Demo', href: project.live_demo, color: '#60a5fa', icon: 'production' };
  }
  if (project.company_context) {
    return { label: 'In Production', href: `/projects/${project.id}`, color: '#f59e0b', icon: 'production' };
  }
  return null;
}

export function ProjectCard({ project }: { project: Project }) {
  const accent = categoryColors[project.Category] ?? '#818cf8';
  const proof = getProofBadge(project);

  return (
    <div
      className="project-card glass-card rounded-2xl p-6 flex flex-col h-full group"
      style={{ borderColor: `${accent}20` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
        >
          🚀
        </div>
        <div className="flex items-center gap-2">
          {/* Proof badge — replaces empty live_demo */}
          {proof && (
            <Link
              href={proof.href}
              target={proof.href.startsWith('http') ? '_blank' : undefined}
              rel={proof.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full transition-all hover:opacity-80"
              style={{ background: `${proof.color}15`, color: proof.color, border: `1px solid ${proof.color}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: proof.color }} />
              {proof.label}
            </Link>
          )}
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}25` }}
          >
            {project.Category}
          </span>
        </div>
      </div>

      <h3 className="text-base font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
        {project['Product Name']}
      </h3>

      {/* Company context — shows scale without needing a live URL */}
      {project.company_context && (
        <p className="text-xs mb-2 flex items-center gap-1" style={{ color: '#f59e0b' }}>
          <Building2 className="w-3 h-3 flex-shrink-0" />
          {project.company_context}
        </p>
      )}

      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
        {project.Description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.Technology.slice(0, 4).map(tech => (
          <Badge key={tech} variant="green">
            {tech}
          </Badge>
        ))}
        {project.Technology.length > 4 && (
          <Badge variant="blue">+{project.Technology.length - 4}</Badge>
        )}
      </div>

      <div className="flex gap-2.5 mt-auto">
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:gap-2.5 text-white"
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}99)` }}
        >
          <Eye className="w-3.5 h-3.5" /> Details <ArrowRight className="w-3 h-3" />
        </Link>
        {(project.github ?? project.CodeLink) && (
          <Link
            href={project.github ?? project.CodeLink ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-4 !py-2 !text-sm !rounded-lg"
          >
            <GitFork className="w-3.5 h-3.5" /> Code
          </Link>
        )}
        {!project.github && !project.CodeLink && (
          <Link
            href={`/projects/${project.id}`}
            className="btn-outline !px-4 !py-2 !text-sm !rounded-lg"
          >
            <BookOpen className="w-3.5 h-3.5" /> Case Study
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          badge="Work"
          subtitle="Showcase of innovative solutions and complex systems I've architected and delivered"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {projects.map(project => (
            <StaggerItem key={project.id} direction="up">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <Link
            href="/projects"
            className="btn-primary inline-flex"
            style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
          >
            <Eye className="w-4 h-4" /> View All Projects
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
