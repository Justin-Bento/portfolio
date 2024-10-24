import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.sanity.io",
      // ...
    ],
  },
};

export default nextConfig;
