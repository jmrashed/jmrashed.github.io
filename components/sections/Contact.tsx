'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import type { SocialLink } from '@/types';
import { siteConfig } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

interface ContactProps {
  socialLinks: SocialLink[];
}

const iconMap: Record<string, string> = {
  'bi-linkedin': 'in',
  'bi-github': 'GH',
  'bi-x': 'X',
  'bi-medium': 'M',
  'bi-behance': 'Be',
  'bi-stack': 'SO',
  'bi-code': 'CP',
  'bi-code-slash': 'LC',
  'bi-terminal': 'HR',
  'bi-brush': 'Dr',
};

const inputBase =
  'w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50';
const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
};

export default function Contact({ socialLinks }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setStatus('loading');
    try {
      const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
      window.location.href = mailto;
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Work Together"
          badge="Contact"
          subtitle="Ready to bring your next project to life? Let's discuss how I can help you achieve your goals."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="card-glass p-8 h-full">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, #6366f1, #f59e0b)' }}
                />
                Contact Information
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                    accent: '#818cf8',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: siteConfig.location,
                    href: null,
                    accent: '#c084fc',
                  },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.accent}18`,
                        border: `1px solid ${item.accent}30`,
                      }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.accent }} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-sm text-white hover:text-indigo-300 transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-sm text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map(link => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target={link.target}
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.description}
                      className="w-10 h-10 inline-flex items-center justify-center rounded-xl text-xs font-bold text-gray-400 hover:text-white transition-all duration-200 hover:-translate-y-1 hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {iconMap[link.icon] ?? link.name.slice(0, 2)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="card-glass p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, #c084fc, #6366f1)' }}
                />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className={inputBase}
                      style={inputStyle}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className={inputBase}
                      style={inputStyle}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    className={inputBase}
                    style={inputStyle}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className={`${inputBase} resize-none`}
                    style={inputStyle}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm p-3 rounded-xl"
                    style={{
                      background: 'rgba(16,185,129,0.08)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-xl"
                    style={{
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.2)',
                    }}
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
                >
                  {status === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
