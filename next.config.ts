import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Static files from _next/static/*
      {
        source: "/projects/:username/_next/:path*",
        destination: "/_next/:path*",
      },
      // Landing page routing
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
      // Public assets like .svg, .ico, etc.
      {
        source:
          "/projects/:username/:file(svg|ico|png|jpg|css|js|woff2|woff|ttf)",
        destination: "/:file",
      },
      // All other routes (fallback)
      {
        source: "/projects/:username/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
