'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Code, Download, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/utils';
import HireMeButton from '@/components/ui/HireMeButton';

const roles = [
  'Tech Lead & Full-Stack Developer',
  'SaaS Architect & Innovator',
  'AI/ML Enthusiast & Data Scientist',
  'Full-Stack Engineer & Mentor',
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const current = roles[roleIndex];
      const display = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);

      if (typedRef.current) typedRef.current.textContent = display;

      if (isDeleting) charIndex--;
      else charIndex++;

      let speed = isDeleting ? 45 : 90;
      if (!isDeleting && charIndex === current.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }
      timer = setTimeout(type, speed);
    }

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.12] animate-float-slow"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08] animate-float"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.07] animate-float-slow"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '4s',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Availability badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                color: '#34d399',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for remote opportunities &mdash; since {siteConfig.availableFrom}
            </span>
          </motion.div>

          {/* Profile photo */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="relative">
              <div
                className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-indigo-500/40 ring-offset-4 ring-offset-transparent"
                style={{ boxShadow: '0 0 40px rgba(99,102,241,0.25)' }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Rashed Zaman — Tech Lead & Full-Stack Developer"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover object-top"
                  onError={e => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const parent = el.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-indigo-300" style="background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(245,158,11,0.1))">RZ</div>';
                    }
                  }}
                />
              </div>
              {/* Online indicator */}
              <span
                className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white dark:border-gray-950 animate-pulse"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight"
          >
            Hi, I&apos;m <span className="gradient-text">Rashed Zaman</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            variants={item}
            className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center"
            style={{ color: '#a5b4fc' }}
          >
            <span className="font-mono" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
              <span ref={typedRef} className="typing" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Results-driven Tech Lead with <span className="text-gray-900 dark:text-white font-medium">10+ years</span>{' '}
            of experience in full-stack development, team leadership, and project management.
            Leading teams of <span className="text-gray-900 dark:text-white font-medium">36+ developers</span> and
            delivering scalable solutions.
          </motion.p>

          <motion.p variants={item} className="text-sm text-gray-500 dark:text-gray-500 mb-10 max-w-xl mx-auto">
            Remote-ready — distributed teams, Git, Docker, CI/CD, Jira, async workflows.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap"
          >
            <Link href="/#contact" className="btn-primary group">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Link>
            <Link href="/projects" className="btn-outline group">
              <Code className="w-4 h-4" />
              View My Work
            </Link>
            <HireMeButton
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 text-white"
              style={{
                background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
              }}
              label="Hire Me"
            />
            <Link href={siteConfig.cvPath} target="_blank" download className="btn-outline">
              <Download className="w-4 h-4" />
              Resume
            </Link>
          </motion.div>

          {/* Stats row — driven by siteConfig.stats */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {siteConfig.stats.slice(0, 4).map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

          {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="/#about"
          className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
