import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsappFab } from "@/components/layout/WhatsappFab";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { MenuSpotlight } from "@/components/sections/MenuSpotlight";
import { Principles } from "@/components/sections/Principles";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Solutions } from "@/components/sections/Solutions";
import { MAIN_CONTENT_ID } from "@/lib/constants";
import { getDictionary, site } from "@/lib/content";
import { buildJsonLd, serializeJsonLd } from "@/lib/seo";
import { buildWhatsappUrl, toAnchor } from "@/lib/utils";

export default function Home() {
  const dictionary = getDictionary(site.defaultLocale);
  const { common, home, menuDemo } = dictionary;
  const phone = site.contact.whatsapp;
  const ctaHref = buildWhatsappUrl(phone, common.navigation.cta.message);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildJsonLd(dictionary)) }} />

      <a
        href={toAnchor(MAIN_CONTENT_ID)}
        className="sr-only z-[60] rounded-full bg-brand-strong px-4 py-2 text-on-brand focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {common.ui.skipToContent}
      </a>

      <Header brandName={site.name} navigation={common.navigation} ui={common.ui} ctaHref={ctaHref} />

      <main id={MAIN_CONTENT_ID} className="flex-1">
        <Hero content={home.hero} />
        <Solutions content={home.solutions} whatsapp={phone} />
        <Projects content={home.projects} />
        <MenuSpotlight
          content={home.menuSpotlight}
          menu={menuDemo}
          whatsapp={phone}
          currency={site.currency}
          locale={`${site.defaultLocale}-${site.countryCode}`}
        />
        <Principles content={home.principles} />
        <Process content={home.process} />
        <Faq content={home.faq} />
        <FinalCta content={home.finalCta} whatsapp={phone} />
      </main>

      <Footer site={site} common={common} solutions={home.solutions.items} whatsappHref={ctaHref} />
      <WhatsappFab href={ctaHref} label={common.ui.whatsappFab} />
    </>
  );
}
