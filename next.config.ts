import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // El CSS en un <link> bloquea el primer pintado en celulares lentos.
    inlineCss: true,
  },
};

export default nextConfig;
