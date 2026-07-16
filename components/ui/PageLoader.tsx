'use client';

import { useEffect, useState } from 'react';

type Phase = 'loading' | 'fading' | 'done';

const MIN_DISPLAY_MS = 600;
const FADE_MS = 500;

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>('loading');

  useEffect(() => {
    const start = Date.now();

    const startFade = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
      window.setTimeout(() => setPhase('fading'), remaining);
    };

    if (document.readyState === 'complete') {
      startFade();
      return;
    }

    window.addEventListener('load', startFade);
    return () => window.removeEventListener('load', startFade);
  }, []);

  useEffect(() => {
    if (phase !== 'fading') return;
    const timeout = window.setTimeout(() => setPhase('done'), FADE_MS);
    return () => window.clearTimeout(timeout);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      aria-hidden={phase === 'fading'}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-[#f8faff] dark:bg-[#080f1e] transition-opacity ease-out ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        <span className="absolute inset-0 rounded-full animate-glow-pulse" />
        <span className="absolute inset-0 rounded-full border-2 border-indigo-500/15" />
        <span className="absolute inset-0 rounded-full border-2 border-t-indigo-500 border-r-indigo-500/40 border-b-transparent border-l-transparent animate-spin" />
        <span className="gradient-text text-xl font-bold tracking-tight">RZ</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Preparing your experience
        </p>
        <div className="w-40 h-1 rounded-full overflow-hidden bg-indigo-500/10">
          <div
            className="h-full w-full animate-shimmer"
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent, #6366f1, #f59e0b, transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
