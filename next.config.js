/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "notionbear-land.netlify.app",
        },
      ],
    },
  };

module.exports = nextConfig
