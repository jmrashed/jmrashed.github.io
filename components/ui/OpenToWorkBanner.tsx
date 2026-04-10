'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, CalendarDays, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/utils';

const STORAGE_KEY = 'otw-banner-dismissed';

export default function OpenToWorkBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if not previously dismissed in this session
    if (!sessionStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="relative z-[60] w-full flex items-center justify-center gap-3 px-4 py-2.5 text-sm"
      style={{
        background: 'linear-gradient(90deg, #4f46e5 0%, #0f766e 50%, #4f46e5 100%)',
        backgroundSize: '200% 100%',
        animation: 'banner-slide 6s linear infinite',
      }}
    >
      {/* Animated shimmer */}
      <style>{`
        @keyframes banner-slide {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>

      <span className="flex items-center gap-1.5 font-semibold text-white">
        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
        Open to Work
      </span>

      <span className="hidden sm:block w-px h-4 bg-white/30" />

      <span className="hidden sm:flex items-center gap-1.5 text-white/80">
        <Briefcase className="w-3.5 h-3.5" />
        Senior Engineer · Tech Lead · Engineering Manager
      </span>

      <span className="hidden md:block w-px h-4 bg-white/30" />

      <span className="hidden md:flex items-center gap-1.5 text-white/80">
        🌍 Remote &nbsp;·&nbsp; 🏢 Hybrid &nbsp;·&nbsp; 📍 Onsite (Dhaka)
      </span>

      <span className="hidden lg:block w-px h-4 bg-white/30" />

      <span className="hidden lg:text-white/80 lg:flex items-center gap-1">
        ⚡ Available Now &nbsp;·&nbsp; Notice: Immediate
      </span>

      <Link
        href={siteConfig.calendly}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-indigo-700 hover:bg-indigo-50 transition-colors flex-shrink-0"
      >
        <CalendarDays className="w-3 h-3" />
        Book a Call
      </Link>

      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
