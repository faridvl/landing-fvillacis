import { AmbientGlow, GlowTone } from "@/components/motion/AmbientGlow";
import { PulseLink } from "@/components/motion/PulseLink";
import { Reveal } from "@/components/motion/Reveal";
import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS, ButtonSize, ButtonVariant } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section, SectionTone } from "@/components/ui/Section";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { SectionId } from "@/lib/constants";
import type { HomeContent } from "@/lib/types";
import { buildWhatsappUrl, cn } from "@/lib/utils";

export function FinalCta({ content, whatsapp }: { content: HomeContent["finalCta"]; whatsapp: string }) {
  return (
    <Section id={SectionId.Contact} tone={SectionTone.Dark} className="overflow-hidden py-28 lg:py-40">
      <div aria-hidden="true" className="final-cta-glow pointer-events-none absolute inset-0" />
      <AmbientGlow tone={GlowTone.Brand} className="top-6 right-[6%] size-80 opacity-30" drift={[-24, 22]} duration={14} />
      <AmbientGlow tone={GlowTone.Accent} className="bottom-0 left-[4%] size-72 opacity-20" drift={[20, -18]} duration={17} delay={-5} />

      <Container className="relative">
        <Reveal strong className="mx-auto max-w-3xl text-center">
          <Eyebrow centered>{content.eyebrow}</Eyebrow>
          <h2 className="mb-6 text-4xl leading-tight font-bold text-pretty sm:text-5xl lg:text-6xl">{content.title}</h2>
          {content.subtitle && <p className="mx-auto mb-12 max-w-xl text-lg text-pretty sm:text-xl">{content.subtitle}</p>}
          <PulseLink
            href={buildWhatsappUrl(whatsapp, content.cta.message)}
            className={cn(BUTTON_BASE, BUTTON_VARIANTS[ButtonVariant.Primary], BUTTON_SIZES[ButtonSize.Lg], "text-lg")}
          >
            <WhatsappIcon className="size-5" />
            {content.cta.label}
          </PulseLink>
        </Reveal>
      </Container>
    </Section>
  );
}
