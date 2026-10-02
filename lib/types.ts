import type { SectionId, SocialNetwork } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import type { IconName } from "@/lib/icons";

export interface SocialProfile {
  network: SocialNetwork;
  /** Vacío = no se renderiza. */
  url: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  defaultLocale: Locale;
  ogLocale: string;
  country: string;
  countryCode: string;
  currency: string;
  /** whatsapp sin "+"; email vacío = no se publica. */
  contact: { whatsapp: string; email: string };
  social: SocialProfile[];
}

export interface AnchorCta {
  label: string;
  target: SectionId;
}

export interface WhatsappCta {
  label: string;
  message: string;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export interface IconItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface CommonContent {
  tagline: string;
  description: string;
  seo: { title: string; keywords: string[]; ogImageAlt: string };
  navigation: { items: { label: string; target: SectionId }[]; cta: WhatsappCta };
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    whatsappFab: string;
    socialLabel: string;
    rights: string;
  };
  footer: { contactTitle: string; solutionsTitle: string; whatsappLabel: string; emailLabel: string };
}

export interface Solution {
  id: string;
  icon: IconName;
  name: string;
  summary: string;
  idealFor: string;
  features: string[];
  cta: WhatsappCta;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  image: string;
  category: string;
  description: string;
  deliverables: string[];
}

export interface HomeContent {
  hero: {
    eyebrowPrefix: string;
    rotatingWords: string[];
    title: string;
    subtitle: string;
    cta: AnchorCta;
  };
  solutions: SectionIntro & { idealForLabel: string; items: Solution[] };
  projects: SectionIntro & { deliverablesLabel: string; items: Project[] };
  menuSpotlight: SectionIntro & { benefits: IconItem[]; cta: WhatsappCta };
  principles: SectionIntro & { items: IconItem[] };
  process: SectionIntro & { steps: { title: string; description: string }[] };
  faq: SectionIntro & { items: { question: string; answer: string }[] };
  finalCta: SectionIntro & { cta: WhatsappCta };
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  highlight?: boolean;
}

export interface MenuDemoContent {
  venue: string;
  venueNote: string;
  orderLabel: string;
  highlightLabel: string;
  previewAriaLabel: string;
  categories: { name: string; items: MenuItem[] }[];
}

export interface Dictionary {
  common: CommonContent;
  home: HomeContent;
  menuDemo: MenuDemoContent;
}
