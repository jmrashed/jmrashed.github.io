'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle, CalendarDays, ArrowRight } from 'lucide-react';
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

const inputCls =
  'w-full px-4 py-3 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08]';

const contactItems = [
  { icon: Mail,          label: 'Email',     key: 'email',    accent: '#818cf8', external: false },
  { icon: MessageCircle, label: 'WhatsApp',  key: 'whatsapp', accent: '#25d366', external: true  },
  { icon: MapPin,        label: 'Location',  key: 'location', accent: '#c084fc', external: false },
  { icon: Clock,         label: 'Timezone',  key: 'timezone', accent: '#34d399', external: false },
  { icon: Clock,         label: 'Hours',     key: 'hours',    accent: '#f59e0b', external: false },
] as const;

function getContactValue(key: string): { value: string; href: string | null } {
  switch (key) {
    case 'email':    return { value: siteConfig.email,        href: `mailto:${siteConfig.email}` };
    case 'whatsapp': return { value: siteConfig.whatsapp,     href: siteConfig.whatsappUrl };
    case 'location': return { value: siteConfig.location,     href: null };
    case 'timezone': return { value: siteConfig.timezone,     href: null };
    case 'hours':    return { value: siteConfig.contactHours, href: null };
    default:         return { value: '', href: null };
  }
}

export default function Contact({ socialLinks }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const endpoint = siteConfig.formspreeId
        ? `https://formspree.io/f/${siteConfig.formspreeId}`
        : `https://formspree.io/f/xpwzgkqb`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
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
          subtitle="Open to Senior Engineer, Tech Lead & Engineering Manager roles — Remote, Hybrid or Onsite (Dhaka). UTC+6 with strong overlap for UK & US teams."
        />

        {/* Calendly booking banner — primary CTA */}
        <AnimatedSection className="mb-10">
          <div
            className="relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(16,185,129,0.08) 100%)',
              border: '1px solid rgba(99,102,241,0.25)',
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-10 -left-10 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)', filter: 'blur(40px)' }}
            />
            <div className="flex items-center gap-4 z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 4px 20px rgba(99,102,241,0.35)' }}
              >
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-0.5">Fastest Way to Connect</p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Book a 30-min Intro Call</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  Pick a slot that works for you — I&apos;m available across UK &amp; US time zones.
                </p>
              </div>
            </div>
            <Link
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white whitespace-nowrap z-10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
              }}
            >
              <CalendarDays className="w-4 h-4" />
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-black/[0.06] dark:bg-white/[0.06]" />
          <span className="text-xs text-gray-400 uppercase tracking-widest px-2">or send a message</span>
          <div className="flex-1 h-px bg-black/[0.06] dark:bg-white/[0.06]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <div className="card-glass p-8 h-full">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, #6366f1, #f59e0b)' }}
                />
                Contact Information
              </h3>

              <div className="space-y-4 mb-8">
                {contactItems.map(({ icon: Icon, label, key, accent, external }) => {
                  const { value, href } = getContactValue(key);
                  return (
                    <div key={label} className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: accent }} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                        {href ? (
                          <Link
                            href={href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noopener noreferrer' : undefined}
                            className="text-sm text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                          >
                            {value}
                          </Link>
                        ) : (
                          <p className="text-sm text-gray-900 dark:text-white">{value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
                {/* Calendly shortcut inside info card */}
                <Link
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 mb-6 p-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                  style={{
                    background: 'rgba(99,102,241,0.07)',
                    border: '1px solid rgba(99,102,241,0.18)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
                  >
                    <CalendarDays className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500">Prefer a call?</p>
                    <p className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      Book on Calendly
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                </Link>

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
                      className="w-10 h-10 inline-flex items-center justify-center rounded-xl text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-1 hover:scale-110 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08]"
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
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, #c084fc, #6366f1)' }}
                />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className={inputCls}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className={inputCls}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    className={inputCls}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm p-3 rounded-xl"
                    style={{
                      background: 'rgba(16,185,129,0.08)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Message sent! I&apos;ll get back to you within 24 hours.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm p-3 rounded-xl"
                    style={{
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.2)',
                    }}
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or reach out via WhatsApp.
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
