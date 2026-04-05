"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Code, Download, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import HireMeButton from "@/components/ui/HireMeButton";

const roles = [
  "Tech Lead & Full-Stack Developer",
  "SaaS Architect & Innovator",
  "AI/ML Enthusiast & Data Scientist",
  "Full-Stack Engineer & Mentor",
];

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

      let speed = isDeleting ? 50 : 100;
      if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
      }
      timer = setTimeout(type, speed);
    }

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Rashed Zaman</span>
          </h1>

          <div className="text-2xl md:text-4xl text-blue-300 mb-8 h-16">
            <span ref={typedRef} className="typing" />
          </div>

          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Results-driven Tech Lead with 10+ years of experience in full-stack
            development, team leadership, and project management. Leading teams
            of 36+ developers and delivering scalable solutions.
          </p>

          <p className="text-sm text-blue-200 mb-10 max-w-3xl mx-auto">
            Remote-ready — experienced collaborating with distributed teams
            across time zones, using Git, Docker, CI/CD pipelines, Jira, and
            Slack to deliver projects asynchronously and reliably.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-glow flex items-center gap-2"
            >
              <Mail className="w-5 h-5" /> Get In Touch
            </Link>
            <Link
              href="/projects"
              className="border-2 border-blue-500 hover:bg-blue-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Code className="w-5 h-5" /> View My Work
            </Link>
            <HireMeButton className="bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2" label="Hire Me" />
            <Link
              href={siteConfig.cvPath}
              target="_blank"
              download
              className="bg-transparent border-2 border-white/20 hover:bg-white/10 px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Resume
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="/#about" className="text-blue-400 hover:text-blue-300">
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
}

