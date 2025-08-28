import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com'], // Add your image domains
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  // Enable image optimization
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
