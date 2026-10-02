import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { getDictionary, site } from "@/lib/content";
import { paletteCssVars, paletteHex } from "@/lib/palette";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = buildMetadata(getDictionary(site.defaultLocale));

export const viewport: Viewport = {
  themeColor: paletteHex().ink,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.defaultLocale}
      className={`${inter.variable} ${sora.variable} h-full`}
      style={paletteCssVars() as React.CSSProperties}
    >
      <body className="flex min-h-full flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
