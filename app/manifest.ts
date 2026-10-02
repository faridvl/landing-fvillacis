import type { MetadataRoute } from "next";
import { getDictionary, site } from "@/lib/content";
import { paletteHex } from "@/lib/palette";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const { common } = getDictionary(site.defaultLocale);
  const palette = paletteHex();
  return {
    name: `${site.name} | ${common.tagline}`,
    short_name: site.name,
    description: common.description,
    start_url: "/",
    display: "standalone",
    background_color: palette.ink,
    theme_color: palette.ink,
    lang: site.defaultLocale,
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }, { src: "/apple-icon", sizes: "180x180", type: "image/png" }],
  };
}
