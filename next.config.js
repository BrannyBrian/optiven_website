const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "http", hostname: "127.0.0.1" },
      { protocol: "http", hostname: "localhost" },
      {
        protocol: "https",
        hostname: "diligent-action-b51f63e5a1.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "diligent-action-b51f63e5a1.strapiapp.com",
      },
    ],
  },
};

module.exports = nextConfig;
