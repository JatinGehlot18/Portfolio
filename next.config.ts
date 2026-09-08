import type { NextConfig } from "next";

const isGithubPagesExport = process.env.BUILD_TARGET === "github-pages";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = isGithubPagesExport
  ? {
      output: "export",
      basePath,
      images: { unoptimized: true },
    }
  : {
      output: "standalone",
    };

export default nextConfig;
