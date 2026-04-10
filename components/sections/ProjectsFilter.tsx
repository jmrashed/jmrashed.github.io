'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/sections/Projects';
import type { Project } from '@/types';

// Filter categories derived from actual project data
const FILTERS = [
  { label: 'All',         match: () => true },
  { label: 'PHP / Laravel', match: (p: Project) => p.Technology.some(t => /php|laravel|codeigniter/i.test(t)) },
  { label: 'Node.js',    match: (p: Project) => p.Technology.some(t => /node/i.test(t)) },
  { label: 'AI / ML',    match: (p: Project) => p.Technology.some(t => /ai|ml|tensorflow|opencv|nlp|dialogflow/i.test(t)) },
  { label: 'E-Commerce', match: (p: Project) => /e-commerce|marketplace|bookshop|bazar/i.test(p.Category + p['Product Name']) },
  { label: 'Healthcare', match: (p: Project) => /health|hospital|telemedicine|docapp/i.test(p.Industry + p['Product Name']) },
  { label: 'FinTech',    match: (p: Project) => /bank|crypto|finance|fintech/i.test(p.Industry + p['Product Name']) },
];

interface Props {
  projects: Project[];
}

export default function ProjectsClient({ projects }: Props) {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => FILTERS.find(f => f.label === active)?.match
      ? projects.filter(FILTERS.find(f => f.label === active)!.match)
      : projects,
    [active, projects]
  );

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="All Projects"
          subtitle="Innovative solutions and complex systems I've architected and delivered"
        />

        {/* Filter bar */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map(f => (
            <button
              key={f.label}
              onClick={() => setActive(f.label)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={
                active === f.label
                  ? {
                      background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                      color: '#fff',
                      boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
                    }
                  : {
                      background: 'rgba(99,102,241,0.06)',
                      border: '1px solid rgba(99,102,241,0.15)',
                      color: '#6366f1',
                    }
              }
            >
              {f.label}
              {active === f.label && filtered.length !== projects.length && (
                <span className="ml-1.5 opacity-70">({filtered.length})</span>
              )}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-20">No projects match this filter.</p>
        )}
      </div>
    </div>
  );
}
