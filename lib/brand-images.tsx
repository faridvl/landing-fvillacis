import { BRAND_MARK } from "@/lib/brand-mark";
import { paletteHex } from "@/lib/palette";

// ImageResponse no interpreta oklch.
export const IMAGE_COLORS = paletteHex();

export const ICON_SIZES = { favicon: 64, apple: 180 } as const;

export function BrandMarkImage({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox={BRAND_MARK.viewBox}>
      <rect width={BRAND_MARK.size} height={BRAND_MARK.size} rx={BRAND_MARK.tileRadius} fill={IMAGE_COLORS["brand-strong"]} />
      <path d={BRAND_MARK.letters} fill={IMAGE_COLORS.surface} />
    </svg>
  );
}
