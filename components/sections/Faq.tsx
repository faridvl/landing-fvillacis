import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Section, SectionTone } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionId } from "@/lib/constants";
import type { HomeContent } from "@/lib/types";

export function Faq({ content }: { content: HomeContent["faq"] }) {
  return (
    <Section id={SectionId.Faq} tone={SectionTone.Muted}>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} className="lg:mb-0" />
        <Reveal className="divide-y divide-line border-y border-line">
          {content.items.map((item) => (
            <details key={item.question} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold text-heading [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-strong transition-transform duration-500 ease-editorial group-open:rotate-45"
                />
              </summary>
              <p className="pr-10 pb-4 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
