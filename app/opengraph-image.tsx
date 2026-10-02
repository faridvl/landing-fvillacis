import { ImageResponse } from "next/og";
import { BrandMarkImage, IMAGE_COLORS } from "@/lib/brand-images";
import { OG_IMAGE_SIZE } from "@/lib/constants";
import { getDictionary, site } from "@/lib/content";

const { common, home } = getDictionary(site.defaultLocale);

const OG_MARK_SIZE = 56;

export const alt = common.seo.ogImageAlt;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: IMAGE_COLORS.ink,
          color: IMAGE_COLORS.surface,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, fontWeight: 700 }}>
          <BrandMarkImage size={OG_MARK_SIZE} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 960 }}>{home.hero.title}</div>
          <div style={{ fontSize: 30, color: IMAGE_COLORS["brand-light"] }}>
            {home.solutions.items.map((solution) => solution.name).join("  ·  ")}
          </div>
        </div>
        <div style={{ height: 8, width: "100%", background: IMAGE_COLORS.brand }} />
      </div>
    ),
    size,
  );
}
