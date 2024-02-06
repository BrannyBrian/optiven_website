// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.pexels.com",
      "images.unsplash.com",
      "127.0.0.1",
      "localhost",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

