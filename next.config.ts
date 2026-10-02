import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  agentRules: false,
  // La exportación estática no tiene optimizador: las imágenes ya van en WebP a su tamaño.
  images: { unoptimized: true },
  experimental: {
    // El CSS en un <link> bloquea el primer pintado en celulares lentos.
    inlineCss: true,
  },
};

export default nextConfig;
