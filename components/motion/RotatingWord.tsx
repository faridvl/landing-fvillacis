"use client";

import { useEffect, useState } from "react";
import { REDUCED_MOTION_QUERY, ROTATING_WORD } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RotationState {
  index: number;
  previous: number | null;
}

// Todas las palabras se apilan en la misma celda: el ancho queda fijo al de la más larga.
export function RotatingWord({ words, className }: { words: string[]; className?: string }) {
  const [{ index, previous }, setRotation] = useState<RotationState>({ index: 0, previous: null });

  useEffect(() => {
    if (words.length < 2 || window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
    const id = setInterval(() => {
      setRotation(({ index: current }) => ({ index: (current + 1) % words.length, previous: current }));
    }, ROTATING_WORD.intervalMs);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className={cn("rotating-word relative inline-grid align-top", className)}>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          data-active={i === index ? "" : undefined}
          data-leaving={i === previous ? "" : undefined}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
