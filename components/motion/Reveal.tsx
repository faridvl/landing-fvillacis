"use client";

import { motion } from "motion/react";
import { EASE_EDITORIAL, REVEAL } from "@/lib/motion";

const REVEAL_ELEMENTS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
} as const;

interface RevealProps {
  children: React.ReactNode;
  as?: keyof typeof REVEAL_ELEMENTS;
  className?: string;
  delay?: number;
  strong?: boolean;
}

export function Reveal({ children, as = "div", className, delay = 0, strong = false }: RevealProps) {
  const Element = REVEAL_ELEMENTS[as];
  return (
    <Element
      className={className}
      initial={{ opacity: 0, y: strong ? REVEAL.offsetStrong : REVEAL.offset, scale: strong ? REVEAL.scaleStrong : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: REVEAL.viewportMargin }}
      transition={{ duration: strong ? REVEAL.durationStrong : REVEAL.duration, delay, ease: EASE_EDITORIAL }}
    >
      {children}
    </Element>
  );
}
