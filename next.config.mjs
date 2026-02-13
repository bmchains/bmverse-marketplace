/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // IMPORTANT: Do NOT use "output: export"
  // You are deploying with PM2 (server mode)

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ipfs.io" },
      { protocol: "https", hostname: "**.ipfs.dweb.link" },
      { protocol: "https", hostname: "i.seadn.io" },
      { protocol: "https", hostname: "openseauserdata.com" },
    ],
  },

  // Prevent build crashes from WebGL / client-only libs
  experimental: {
    esmExternals: "loose",
  },

  // Production compression
  compress: true,

  // Faster builds on VPS
  swcMinify: true,
};

export default nextConfig;

