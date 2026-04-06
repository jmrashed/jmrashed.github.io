'use client';

import Link from 'next/link';
import { ExternalLink, MessageSquarePlus } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { siteConfig } from '@/lib/utils';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Testimonials"
          badge="Feedback"
          subtitle="Recommendations from colleagues and clients I've worked with."
        />

        <AnimatedSection>
          <motion.div
            className="glass-card rounded-2xl p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}
            >
              <MessageSquarePlus className="w-7 h-7 text-indigo-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Recommendations on LinkedIn
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
              I&apos;ve worked with great teams across 10+ years. If we&apos;ve collaborated,
              I&apos;d genuinely appreciate a recommendation on LinkedIn — it means a lot.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`${siteConfig.linkedin}details/recommendations/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #0077b5, #005885)' }}
              >
                <ExternalLink className="w-4 h-4" />
                View LinkedIn Profile
              </Link>
              <Link
                href={`${siteConfig.linkedin}details/recommendations/write/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#a5b4fc',
                }}
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
