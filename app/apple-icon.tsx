import { ImageResponse } from "next/og";
import { BrandMarkImage, ICON_SIZES } from "@/lib/brand-images";

export const size = { width: ICON_SIZES.apple, height: ICON_SIZES.apple };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<BrandMarkImage size={ICON_SIZES.apple} />, size);
}
