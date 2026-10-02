import siteJson from "@/content/site.json";
import esCommon from "@/content/es/common.json";
import esHome from "@/content/es/home.json";
import esMenuDemo from "@/content/es/menu-demo.json";
import { DEFAULT_LOCALE, Locale } from "@/lib/i18n";
import type { Dictionary, SiteConfig } from "@/lib/types";

// Cast necesario: los strings de un JSON no se infieren como enums.
export const site = siteJson as SiteConfig;

const DICTIONARIES: Record<Locale, Dictionary> = {
  [Locale.Es]: {
    common: esCommon,
    home: esHome,
    menuDemo: esMenuDemo,
  } as Dictionary,
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return DICTIONARIES[locale];
}
