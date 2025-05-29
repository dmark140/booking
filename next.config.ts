import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.js
  images: {
    domains: ['images.unsplash.com', 'yourdomain.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
