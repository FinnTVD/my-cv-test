/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 43200,
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  reactStrictMode: false,
};

export default nextConfig;
