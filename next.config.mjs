/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

process.env.ANALYZE === "true" ? withBundleAnalyzer(nextConfig) : nextConfig;

export default nextConfig;
