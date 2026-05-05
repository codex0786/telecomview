/** @type {import('next').NextConfig} */
const nextConfig = {
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
