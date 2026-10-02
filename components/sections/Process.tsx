import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionId } from "@/lib/constants";
import { REVEAL } from "@/lib/motion";
import type { HomeContent } from "@/lib/types";
import { padStep } from "@/lib/utils";

export function Process({ content }: { content: HomeContent["process"] }) {
  return (
    <Section id={SectionId.Process}>
      <Container>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * REVEAL.stagger} className="relative">
              <span
                aria-hidden="true"
                className="mb-4 block border-b border-line pb-4 font-display text-5xl font-semibold text-brand-strong"
              >
                {padStep(i)}
              </span>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
