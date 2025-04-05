import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //basePath: "/projects/:username/landing", // 👈 Fixes static file path issue
  async rewrites() {
    return [
      // 1️⃣ Fix `_next/static` asset paths  
      {
        source: "/projects/:username/_next/:path*",
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
        source: "/projects/:username/:file(.*).(svg|ico|png|jpg|css|js|woff2|woff|ttf)",
        destination: "/:file",
      },
    ];
  },
};

export default nextConfig;
