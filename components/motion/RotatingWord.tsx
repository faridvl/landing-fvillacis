"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_EDITORIAL, ROTATING_WORD } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Reserva el ancho de la palabra más larga para que el texto vecino no salte.
export function RotatingWord({ words, className }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), ROTATING_WORD.intervalMs);
    return () => clearInterval(id);
  }, [reduceMotion, words.length]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={cn("relative inline-grid align-top", className)}>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ opacity: 0, y: ROTATING_WORD.offset }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -ROTATING_WORD.offset }}
          transition={{ duration: ROTATING_WORD.duration, ease: EASE_EDITORIAL }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
