"use client";

import { motion } from "motion/react";
import { CTA_PULSE } from "@/lib/motion";
import { EXTERNAL_LINK_PROPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PulseLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      {...EXTERNAL_LINK_PROPS}
      className={cn("cta-pulse", className)}
      style={{ animationDuration: `${CTA_PULSE.duration}s` }}
      whileHover={{ scale: CTA_PULSE.hoverScale, y: CTA_PULSE.hoverLift }}
      whileTap={{ scale: CTA_PULSE.tapScale }}
    >
      {children}
    </motion.a>
  );
}
