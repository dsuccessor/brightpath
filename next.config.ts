import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.facebook.com',
      },
    ],
  },
};

export default nextConfig;
