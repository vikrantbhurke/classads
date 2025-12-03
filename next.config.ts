import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/carousel",
      "@mantine/charts",
      "@mantine/dates",
      "@mantine/dropzone",
      "@mantine/form",
      "@mantine/modals",
      "@mantine/notifications",
      "@mantine/nprogress",
      "@mantine/tiptap",
    ],
  },
};

export default nextConfig;
