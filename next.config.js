/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // Bundled Starlink TLE snapshot read by /api/starlink when CelesTrak is unavailable
  outputFileTracingIncludes: { "/api/starlink": ["./data/starlink.tle"] },
  // Cesium uses 'canvas' in Node env — tell webpack to ignore it
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    return config;
  },
  // Turbopack equivalent of the canvas external
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: "./empty-module.js",
      },
    },
  },
};

module.exports = nextConfig;
