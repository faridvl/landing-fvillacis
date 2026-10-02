// En sync con --ease-editorial (app/globals.css).
export const EASE_EDITORIAL = [0.16, 0.8, 0.2, 1] as const;

export const REVEAL = {
  offset: 20,
  offsetStrong: 32,
  scaleStrong: 0.97,
  duration: 0.6,
  durationStrong: 0.8,
  viewportMargin: "-80px",
  stagger: 0.08,
} as const;

export const ROTATING_WORD = {
  intervalMs: 2600,
  duration: 0.55,
  offset: 14,
} as const;

export const PARALLAX = {
  backgroundShift: 90,
  contentShift: -40,
} as const;

export const CTA_PULSE = {
  duration: 2.6,
  hoverScale: 1.045,
  hoverLift: -3,
  tapScale: 0.98,
} as const;
