"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export enum GlowTone {
  Brand = "bg-brand",
  Accent = "bg-accent",
}

interface AmbientGlowProps {
  tone: GlowTone;
  className: string;
  /** [x, y] en px. */
  drift: [number, number];
  duration: number;
  delay?: number;
}

export function AmbientGlow({ tone, className, drift, duration, delay = 0 }: AmbientGlowProps) {
  const [x, y] = drift;
  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-glow", tone, className)}
      animate={{ x: [0, x, 0], y: [0, y, 0], scale: [1, 1.08, 1] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
