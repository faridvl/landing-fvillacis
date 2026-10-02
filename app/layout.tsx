import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { getDictionary, site } from "@/lib/content";
import { paletteCssVars, paletteHex } from "@/lib/palette";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = buildMetadata(getDictionary(site.defaultLocale));

export const viewport: Viewport = {
  themeColor: paletteHex().ink,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.defaultLocale}
      className={`${sora.variable} h-full`}
      style={paletteCssVars() as React.CSSProperties}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
