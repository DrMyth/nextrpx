import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:username/landing/_next/:path*",
        destination: "/_next/:path*",
      },
      {
        source: "/projects/:username/landing/:path*",
        destination: "/:path*",
      },
      {
        source: "/projects/:username/landing/",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
