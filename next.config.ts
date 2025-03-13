import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //basePath: "/projects/:username/landing", // 👈 Fixes static file path issue
  async rewrites() {
    return [
      // 1️⃣ Fix `_next/static` asset paths  
      {
        source: "/projects/:username/landing/_next/:path*",
        destination: "/_next/:path*", 
      },
      // 2️⃣ Fix landing page routing  
      {
        source: "/projects/:username/landing",
        destination: "/",
      },
      {
        source: "/projects/:username/landing/",
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
