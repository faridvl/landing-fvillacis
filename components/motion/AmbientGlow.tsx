import type { CSSProperties } from "react";
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
  const style = {
    "--drift-x": `${x}px`,
    "--drift-y": `${y}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={cn("ambient-glow pointer-events-none absolute rounded-full blur-glow", tone, className)}
      style={style}
    />
  );
}
