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
          source: '/:demo(foodrascals|craftycottage|hafsy-couture|fsy)',
          destination: '/:demo/index.html',
        },
        {
          // FSY demo is split into section pages that all share one static file
          source: '/fsy/:section(grab-and-go|wholesale|salon)',
          destination: '/fsy/index.html',
        },
      ],
    };
  },
};

export default nextConfig;
