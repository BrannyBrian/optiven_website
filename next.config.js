// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pexels.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

