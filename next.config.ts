import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rumish-LTD",
  assetPrefix: "/rumish-LTD/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
