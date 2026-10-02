export enum SectionId {
  Hero = "inicio",
  Solutions = "soluciones",
  Projects = "proyectos",
  MenuSpotlight = "menu-digital",
  Principles = "como-trabajamos",
  Process = "proceso",
  Faq = "preguntas",
  Contact = "contacto",
}

export const MAIN_CONTENT_ID = "contenido";

export enum SocialNetwork {
  Instagram = "instagram",
  Facebook = "facebook",
  Linkedin = "linkedin",
  Github = "github",
}

export const SOCIAL_NETWORK_LABELS: Record<SocialNetwork, string> = {
  [SocialNetwork.Instagram]: "Instagram",
  [SocialNetwork.Facebook]: "Facebook",
  [SocialNetwork.Linkedin]: "LinkedIn",
  [SocialNetwork.Github]: "GitHub",
};

export const WHATSAPP_BASE_URL = "https://wa.me";

export const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener noreferrer" } as const;

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;
