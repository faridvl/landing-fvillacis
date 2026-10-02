import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionTone } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionId } from "@/lib/constants";
import { REVEAL } from "@/lib/motion";
import type { HomeContent } from "@/lib/types";

export function Principles({ content }: { content: HomeContent["principles"] }) {
  return (
    <Section id={SectionId.Principles} tone={SectionTone.Dark}>
      <Container>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * REVEAL.stagger}
              className="group border-t border-line pt-6 transition-colors duration-500 ease-editorial hover:border-brand"
            >
              <Icon
                name={item.icon}
                className="mb-5 size-7 text-brand-strong transition-transform duration-500 ease-editorial group-hover:-translate-y-1"
              />
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
