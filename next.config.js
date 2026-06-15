/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/#framework", destination: "/framework", permanent: true },
      { source: "/#anxiety",   destination: "/anxiety",   permanent: true },
      { source: "/#ptsd",      destination: "/ptsd",      permanent: true },
      { source: "/#about",     destination: "/about",     permanent: true },
      { source: "/#speaking",  destination: "/speaking",  permanent: true },
      { source: "/blog/:slug", destination: "/articles/:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
