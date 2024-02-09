// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.pexels.com",
      "images.unsplash.com",
      "127.0.0.1",
      "localhost",
      "diligent-action-b51f63e5a1.media.strapiapp.com",
      "diligent-action-b51f63e5a1.strapiapp.com"
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

