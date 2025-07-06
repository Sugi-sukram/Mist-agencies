// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //  domains: ["mistagencies.com", "encrypted-tbn1.gstatic.com","doted-dev.s3.ap-southeast-1.amazonaws.com",'http://172.26.16.1:3000'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

export default nextConfig;
