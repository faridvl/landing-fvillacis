"use client";

import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { AmbientGlow, GlowTone } from "@/components/motion/AmbientGlow";
import { RotatingWord } from "@/components/motion/RotatingWord";
import { ButtonLink, ButtonSize, ButtonVariant } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionId } from "@/lib/constants";
import { PARALLAX } from "@/lib/motion";
import type { HomeContent } from "@/lib/types";
import { toAnchor } from "@/lib/utils";

export function Hero({ content }: { content: HomeContent["hero"] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, PARALLAX.backgroundShift]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, PARALLAX.contentShift]);

  return (
    <section
      id={SectionId.Hero}
      ref={ref}
      className="dark-section relative flex min-h-[92svh] items-center overflow-hidden bg-ink pt-24 pb-20"
    >
      <motion.div aria-hidden="true" className="hero-grid absolute -inset-y-24 inset-x-0" style={{ y: backgroundY }} />
      <AmbientGlow tone={GlowTone.Brand} className="-top-24 -left-16 size-96 opacity-35" drift={[30, -20]} duration={16} />
      <AmbientGlow
        tone={GlowTone.Accent}
        className="-right-16 -bottom-24 size-80 opacity-20"
        drift={[-25, 18]}
        duration={18}
        delay={-6}
      />

      <Container className="relative">
        <motion.div className="mx-auto flex max-w-4xl flex-col items-center text-center" style={{ y: contentY }}>
          <div className="mb-7 flex items-center gap-3">
            <span aria-hidden="true" className="hidden h-px w-8 bg-brand sm:block" />
            <span className="flex flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-strong sm:flex-row sm:items-baseline sm:gap-1.5 sm:text-sm">
              <span>{content.eyebrowPrefix}</span>
              <RotatingWord words={content.rotatingWords} className="justify-items-center sm:justify-items-start" />
            </span>
          </div>
          <h1 className="mb-6 text-4xl leading-[1.08] font-bold text-pretty sm:text-6xl lg:text-7xl">{content.title}</h1>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-pretty text-body sm:text-lg">
            {content.subtitle}
          </p>
          <ButtonLink href={toAnchor(content.cta.target)} variant={ButtonVariant.Outline} size={ButtonSize.Lg}>
            {content.cta.label}
            <ArrowDown aria-hidden="true" className="size-4" />
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}
