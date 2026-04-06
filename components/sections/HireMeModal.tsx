'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Download, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/utils';

type FormData = {
  name: string;
  email: string;
  availability: string;
  message: string;
};

export default function HireMeModal() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset } = useForm<FormData>();

  const close = () => {
    const modal = document.getElementById('hire-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
    setStatus('idle');
    reset();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const endpoint = siteConfig.formspreeId
        ? `https://formspree.io/f/${siteConfig.formspreeId}`
        : `https://formspree.io/f/xpwzgkqb`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `Hire Request — ${data.availability} — ${data.name}`,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputCls =
    'w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm';

  return (
    <div id="hire-modal" className="fixed inset-0 z-50 hidden items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hire-modal-title"
        className="relative z-10 w-full max-w-lg mx-4"
      >
        <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h3 id="hire-modal-title" className="text-2xl font-bold text-white">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Full-time · Part-time · Freelance — Remote-ready (UTC+6)
              </p>
            </div>
            <button
              onClick={close}
              aria-label="Close modal"
              className="text-gray-400 hover:text-white ml-4 p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Response time badge */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl mb-5 text-xs font-medium"
            style={{
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.2)',
              color: '#34d399',
            }}
          >
            <Clock className="w-3.5 h-3.5 shrink-0" />
            I typically respond within 24 hours (Mon–Fri, 9 AM–6 PM UTC+6)
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-1">Message sent!</p>
                <p className="text-gray-400 text-sm mb-6">
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button onClick={close} className="btn-primary">
                  Close
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 block mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder="Jane Smith"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 block mb-1.5 uppercase tracking-wider">
                    Engagement Type
                  </label>
                  <select {...register('availability')} className={inputCls}>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance / Short-term</option>
                    <option>Technical Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 block mb-1.5 uppercase tracking-wider">
                    Brief Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell me about your project or role..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 text-red-400 text-xs p-3 rounded-xl"
                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${siteConfig.email}`} className="underline">
                      {siteConfig.email}
                    </a>
                  </div>
                )}

                <div className="flex items-center justify-between gap-3 pt-1">
                  <Link
                    href={siteConfig.cvPath}
                    target="_blank"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
                  >
                    <Download className="w-4 h-4" /> Resume
                  </Link>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
                      style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
                    >
                      {status === 'loading' ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {status === 'loading' ? 'Sending…' : 'Send Request'}
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="px-4 py-2.5 border border-gray-700 hover:bg-gray-800 rounded-xl text-sm text-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
