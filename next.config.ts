import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:username/landing",
        destination: "/",
      },
      {
        source: "/projects/:username/landing/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
