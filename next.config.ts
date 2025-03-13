import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // 1️⃣ Serve Next.js assets correctly first
      {
        source: "/projects/:username/landing/_next/:path*",
        destination: "/_next/:path*",
      },
      // 2️⃣ Redirect "/projects/:username/landing/" to the home page
      {
        source: "/projects/:username/landing/",
        destination: "/",
      },
      {
        source: "/projects/:username/landing",
        destination: "/",
      },
      // 3️⃣ Handle all other paths within landing
      {
        source: "/projects/:username/landing/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
