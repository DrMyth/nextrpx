import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects/:username",
        destination: "/",
      },
      {
        source: "/projects/:username/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;