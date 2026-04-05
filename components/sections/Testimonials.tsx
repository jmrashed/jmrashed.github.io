'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      'Rashed led our distributed engineering team with clarity and focus. He improved our CI/CD pipelines and reduced deployment time by 40%.',
    name: 'Client',
    role: 'Acme Corp',
    initials: 'CL',
    color: '#6366f1',
  },
  {
    quote:
      'His asynchronous workflow and documentation practices made onboarding remote engineers painless. Communication was excellent.',
    name: 'Product Manager',
    role: 'FinTech Co',
    initials: 'PM',
    color: '#10b981',
  },
  {
    quote:
      'Rashed is a strong technical leader — excellent mentor and reliable remote collaborator. He delivered our microservice migration on time.',
    name: 'Lead Developer',
    role: 'Startup X',
    initials: 'LD',
    color: '#c084fc',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Testimonials"
          badge="Feedback"
          subtitle="Feedback from clients and colleagues about working with me on remote projects."
        />

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
                <a
                  href="https://www.linkedin.com/in/jmrashed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2.5 rounded-xl transition-all hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gray-300" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background:
                      i === current
                        ? 'linear-gradient(90deg, #6366f1, #f59e0b)'
                        : 'rgba(255,255,255,0.15)',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="p-2.5 rounded-xl transition-all hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
