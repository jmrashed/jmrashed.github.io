"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col ${alignClass} mb-16`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", color: "#a5b4fc" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="section-heading">{title}</h2>
      <motion.div
        className="section-divider mt-4"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: align === "left" ? "left" : "center" }}
      />
      {subtitle && (
        <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
