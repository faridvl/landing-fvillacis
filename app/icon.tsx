import { ImageResponse } from "next/og";
import { BrandMarkImage, ICON_SIZES } from "@/lib/brand-images";

export const size = { width: ICON_SIZES.favicon, height: ICON_SIZES.favicon };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<BrandMarkImage size={ICON_SIZES.favicon} />, size);
}
