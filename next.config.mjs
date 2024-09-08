/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/living-fittra/",
  basePath: "/living-fittra",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
