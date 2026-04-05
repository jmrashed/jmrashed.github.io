"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import type { Experience } from "@/types";

interface ExperienceProps {
  experience: Experience[];
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="relative flex items-start gap-6 md:gap-8">
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20 z-10">
          <Briefcase className="w-6 h-6 text-white" />
        </div>

        <div className="flex-grow card-glass p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-300">{exp.role}</h3>
              <p className="text-gray-300">{exp.company}, {exp.location}</p>
            </div>
            <span className="bg-gray-600/20 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-500/30 self-start lg:self-auto whitespace-nowrap">
              {exp.duration}
            </span>
          </div>

          {/* Stack */}
          {exp.stack.length > 0 && (
            <div className="mb-3">
              <p className="text-xs uppercase font-semibold text-blue-400 mb-2">Stack</p>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <Badge key={tech} variant="purple">{tech}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {exp.skills.length > 0 && (
            <div className="mb-3">
              <p className="text-xs uppercase font-semibold text-blue-400 mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="green">{skill}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Collapsible responsibilities */}
          {exp.responsibilities.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-left focus:outline-none group"
                aria-expanded={open}
              >
                <span className="text-xs uppercase font-semibold text-blue-400">Responsibilities</span>
                {open ? (
                  <ChevronUp className="w-4 h-4 text-blue-300" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-blue-300" />
                )}
              </button>
              {open && (
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1 text-sm">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Journey"
          subtitle="Over the years, I have led diverse teams and delivered impactful projects across web development, full-stack engineering, and project management."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <ExperienceCard key={`${exp.company}-${i}`} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
