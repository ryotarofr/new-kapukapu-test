/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    newNextLinkBehavior: true,
  },
  images: {
    domains: [
      "idwitrlwanewneoypjki.supabase.co",
      "avatars.githubusercontent.com",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
