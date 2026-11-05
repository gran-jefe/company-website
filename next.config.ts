import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enables React <ViewTransition> for page crossfades and project image morphs
    viewTransition: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/favicon.ico',
          destination: '/favicon.png',
        },
        {
          // Static client demo storefronts in /public: serve each folder's index.html
          source: '/:demo(foodrascals|craftycottage|hafsy-couture)',
          destination: '/:demo/index.html',
        },
      ],
    };
  },
};

export default nextConfig;
