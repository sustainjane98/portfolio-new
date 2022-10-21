/** @type {import('next').NextConfig} */
const { i18n: i18next } = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  i18n: { ...i18next },
  experimental: {
    externalDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
