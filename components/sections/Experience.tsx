"use client";

import { useState } from "react";
import { ChevronDown, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <AnimatedSection delay={index * 0.08}>
      <div className="relative flex items-start gap-5 md:gap-8">
        {/* Timeline dot */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center z-10 relative"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              boxShadow: "0 0 20px rgba(99,102,241,0.35)",
            }}
          >
            <Briefcase className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="flex-grow card-glass p-6 md:p-7 mb-1">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-gray-400 text-sm mt-0.5">{exp.company} · {exp.location}</p>
            </div>
            <span
              className="self-start px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.25)",
                color: "#a5b4fc",
              }}
            >
              {exp.duration}
            </span>
          </div>

          {/* Stack */}
          {exp.stack.length > 0 && (
            <div className="mb-3">
              <p className="text-xs uppercase font-semibold text-gray-500 mb-2 tracking-wider">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <Badge key={tech} variant="purple">{tech}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {exp.skills.length > 0 && (
            <div className="mb-3">
              <p className="text-xs uppercase font-semibold text-gray-500 mb-2 tracking-wider">Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="green">{skill}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Collapsible responsibilities */}
          {exp.responsibilities.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-left focus:outline-none group"
                aria-expanded={open}
              >
                <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider group-hover:text-gray-300 transition-colors">
                  Responsibilities
                </span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden mt-3 space-y-1.5"
                  >
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Professional Journey"
          badge="Experience"
          subtitle="Over the years, I have led diverse teams and delivered impactful projects across web development, full-stack engineering, and project management."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.1))" }}
          />
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <ExperienceCard key={`${exp.company}-${i}`} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
