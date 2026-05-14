"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

// Shared easing — a clean "anticipate" feel inspired by Vercel/Linear
const ease = [0.21, 1, 0.4, 1] as const;
const viewport = { once: true, margin: "-80px" } as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

// Section H2 — drops in from below as you scroll past
export function RevealH2({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}

// Smaller header (h3)
export function RevealH3({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.h3>
  );
}

// Generic eyebrow / paragraph reveal
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Span variant (inline-block) so text-level animations don't break flow
export function RevealSpan({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

// Image / figure reveal — gentle scale + fade
export function RevealMedia({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Container that staggers all direct StaggerItem children
type StaggerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delay?: number;
};
export function Stagger({
  children,
  className,
  stagger = 0.09,
  delay = 0.06,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Single staggered item — must live inside a <Stagger>
export function StaggerItem({
  children,
  className,
  ...rest
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.55, ease }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// Hero-style reveal — runs immediately on mount (no whileInView gate)
export function HeroFade({
  children,
  className,
  delay = 0,
  y = 18,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hero stagger container (mount-based, no viewport gate)
export function HeroStagger({
  children,
  className,
  stagger = 0.1,
  delay = 0.05,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Marquee / infinite ticker for brutalism strips
export function Marquee({
  children,
  duration = 30,
  className,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// Underline-on-hover link decoration (for editorial)
export function HoverUnderline({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      whileHover="hover"
      className={`relative inline-block ${className ?? ""}`}
    >
      {children}
      <motion.span
        variants={{
          hover: { scaleX: 1 },
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-current"
      />
    </motion.span>
  );
}
