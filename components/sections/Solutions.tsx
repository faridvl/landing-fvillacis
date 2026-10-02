import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink, ButtonVariant } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionId } from "@/lib/constants";
import { REVEAL } from "@/lib/motion";
import type { HomeContent } from "@/lib/types";
import { buildWhatsappUrl } from "@/lib/utils";

/** Debe coincidir con lg:grid-cols-3. */
const SOLUTIONS_PER_ROW = 3;

interface SolutionsProps {
  content: HomeContent["solutions"];
  whatsapp: string;
}

export function Solutions({ content, whatsapp }: SolutionsProps) {
  return (
    <Section id={SectionId.Solutions}>
      <Container>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((solution, i) => (
            <Reveal key={solution.id} delay={(i % SOLUTIONS_PER_ROW) * REVEAL.stagger} strong className="h-full">
              <article
                id={solution.id}
                className="group flex h-full flex-col border-t-2 border-line pt-8 transition-colors duration-500 ease-editorial hover:border-brand"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand-strong transition-transform duration-500 ease-editorial group-hover:-translate-y-1">
                  <Icon name={solution.icon} className="size-6" />
                </div>
                <h3 className="mb-3 text-2xl leading-snug font-semibold text-pretty">{solution.name}</h3>
                <p className="mb-5 leading-relaxed">{solution.summary}</p>
                <p className="mb-6 text-sm">
                  <span className="font-semibold text-heading">{content.idealForLabel}: </span>
                  {solution.idealFor}
                </p>
                <ul className="mb-8 flex-1 space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={buildWhatsappUrl(whatsapp, solution.cta.message)}
                  external
                  variant={ButtonVariant.Outline}
                  className="self-start"
                >
                  {solution.cta.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
