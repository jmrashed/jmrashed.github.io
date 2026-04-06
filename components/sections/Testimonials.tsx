'use client';

import Link from 'next/link';
import { Star, ExternalLink, Quote, MessageSquarePlus } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { siteConfig } from '@/lib/utils';

const testimonials = [
  {
    quote:
      "I had the pleasure of working with Md Rasheduzzaman, and I can confidently say he is an exceptional Senior Lead Software Engineer. Rasheduzzaman has strong technical skills and a real talent for solving complex problems quickly. In one project, he led a team to improve our system's speed and reliability, and the results were impressive. Not only is Rasheduzzaman technically skilled, but he is also a fantastic leader. He supports and guides team members, making sure everyone feels involved and valued. His clear communication makes even complex ideas easy to understand for everyone. I highly recommend Md Rasheduzzaman as a skilled, reliable, and inspiring engineer who will make a positive impact on any team.",
    name: 'Al Amin Rony',
    role: 'Software Engineer',
    company: 'Colleague',
    initials: 'AR',
    color: '#6366f1',
    linkedin: 'https://www.linkedin.com/in/alamin-rony-125715152/',
  },
];

export default function Testimonials() {
  const t = testimonials[0];

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Colleagues Say"
          badge="Testimonials"
          subtitle="Recommendations from engineers I've worked with directly."
        />

        <AnimatedSection>
          {/* Real testimonial */}
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <Quote className="w-7 h-7 mb-4 opacity-20" style={{ color: t.color }} />

            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-8">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>

              <Link
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View on LinkedIn
              </Link>
            </div>
          </motion.div>

          {/* CTA to collect more */}
          <motion.div
            className="glass-card rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ borderColor: 'rgba(99,102,241,0.15)' }}
          >
            <MessageSquarePlus className="w-6 h-6 text-indigo-400 mx-auto mb-3" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Worked with me? I&apos;d genuinely appreciate a LinkedIn recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`${siteConfig.linkedin}details/recommendations/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #0077b5, #005885)' }}
              >
                <ExternalLink className="w-4 h-4" />
                View LinkedIn Profile
              </Link>
              <Link
                href={`${siteConfig.linkedin}details/recommendations/write/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] text-indigo-600 dark:text-indigo-300"
              >
                <MessageSquarePlus className="w-4 h-4" />
                Leave a Recommendation
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
