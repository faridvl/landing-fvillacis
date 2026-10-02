import type { Metadata } from "next";
import { site } from "@/lib/content";
import type { Dictionary } from "@/lib/types";
import { buildWhatsappUrl } from "@/lib/utils";

export function buildMetadata({ common }: Dictionary): Metadata {
  const title = `${site.name} | ${common.seo.title}`;

  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description: common.description,
    keywords: common.seo.keywords,
    applicationName: site.name,
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "website",
      url: "/",
      siteName: site.name,
      locale: site.ogLocale,
      title,
      description: common.description,
    },
    twitter: { card: "summary_large_image", title, description: common.description },
  };
}

export function buildJsonLd({ common, home }: Dictionary) {
  const orgId = `${site.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: site.defaultLocale,
        publisher: { "@id": orgId },
      },
      {
        "@type": "ProfessionalService",
        "@id": orgId,
        name: site.name,
        slogan: common.tagline,
        description: common.description,
        url: site.url,
        ...(site.contact.email && { email: site.contact.email }),
        areaServed: { "@type": "Country", name: site.country },
        address: { "@type": "PostalAddress", addressCountry: site.countryCode },
        sameAs: site.social.map((profile) => profile.url).filter(Boolean),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: buildWhatsappUrl(site.contact.whatsapp),
          availableLanguage: site.defaultLocale,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: home.solutions.title,
          itemListElement: home.solutions.items.map((solution) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: solution.name, description: solution.summary },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: home.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

// Escapa "<" para que el contenido no pueda cerrar el <script>.
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
