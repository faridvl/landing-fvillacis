import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { Section, SectionTone } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXTERNAL_LINK_PROPS, SectionId } from "@/lib/constants";
import { REVEAL } from "@/lib/motion";
import type { HomeContent } from "@/lib/types";
import { displayDomain } from "@/lib/utils";

const PREVIEW_SIZES = "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw";

export function Projects({ content }: { content: HomeContent["projects"] }) {
  return (
    <Section id={SectionId.Projects} tone={SectionTone.Muted}>
      <Container>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />

        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((project, i) => (
            <Reveal as="li" key={project.id} delay={i * REVEAL.stagger} strong className="h-full">
              <a
                href={project.url}
                {...EXTERNAL_LINK_PROPS}
                className="group flex h-full flex-col transition-transform duration-500 ease-editorial hover:-translate-y-1.5"
              >
                <BrowserFrame domain={displayDomain(project.url)} className="mb-6 transition-colors duration-500 ease-editorial group-hover:border-brand/40">
                  <Image
                    src={project.image}
                    alt={`${project.name}: ${project.category}`}
                    fill
                    sizes={PREVIEW_SIZES}
                    className="object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                  />
                </BrowserFrame>

                <p className="mb-1 text-xs font-semibold tracking-[0.18em] text-brand-strong uppercase">{project.category}</p>
                <h3 className="mb-2 flex items-center gap-2 text-2xl font-semibold">
                  {project.name}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 -translate-x-1 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>
                <ul className="flex flex-wrap gap-2" aria-label={content.deliverablesLabel}>
                  {project.deliverables.map((deliverable) => (
                    <li key={deliverable} className="rounded-full border border-line px-3 py-1 text-xs font-medium">
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
