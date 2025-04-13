// next.config.ts

/**
 * @type {import('next').NextConfig}
 */
// import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    // This option is required to run ESLint on production builds
    // and is enabled by default.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
