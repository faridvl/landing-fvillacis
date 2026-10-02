import { Reveal } from "@/components/motion/Reveal";
import { DigitalMenuPreview } from "@/components/sections/DigitalMenuPreview";
import { ButtonLink, ButtonSize } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { SectionId } from "@/lib/constants";
import { REVEAL } from "@/lib/motion";
import type { HomeContent, MenuDemoContent } from "@/lib/types";
import { buildWhatsappUrl } from "@/lib/utils";

interface MenuSpotlightProps {
  content: HomeContent["menuSpotlight"];
  menu: MenuDemoContent;
  whatsapp: string;
  currency: string;
  locale: string;
}

export function MenuSpotlight({ content, menu, whatsapp, currency, locale }: MenuSpotlightProps) {
  return (
    <Section id={SectionId.MenuSpotlight} className="overflow-hidden">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} className="mb-10 lg:mb-12" />

          <ul className="mb-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {content.benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit.title} delay={i * REVEAL.stagger} className="flex gap-4">
                <Icon name={benefit.icon} className="mt-1 size-5 shrink-0 text-brand-strong" />
                <div>
                  <h3 className="mb-1 text-base font-semibold">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <ButtonLink href={buildWhatsappUrl(whatsapp, content.cta.message)} external size={ButtonSize.Lg}>
              <WhatsappIcon className="size-5" />
              {content.cta.label}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal strong className="relative">
          <div aria-hidden="true" className="absolute inset-x-10 inset-y-16 rounded-full bg-brand/25 blur-glow" />
          <PhoneFrame label={menu.previewAriaLabel} className="rotate-[-3deg]">
            <DigitalMenuPreview menu={menu} currency={currency} locale={locale} />
          </PhoneFrame>
        </Reveal>
      </Container>
    </Section>
  );
}
