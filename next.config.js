/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
