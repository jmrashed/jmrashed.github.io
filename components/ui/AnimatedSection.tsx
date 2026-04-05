"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";
  duration?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 32 : direction === "down" ? -32 : 0,
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
    scale: direction === "scale" ? 0.92 : 1,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — wraps children that each animate in sequence */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: initialDelay } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/** Child item for StaggerContainer */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 24 : 0,
    x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    scale: direction === "scale" ? 0.9 : 1,
  };

  return (
    <motion.div
      variants={{
        hidden: initial,
        visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
