const nextConfig = {
  images: {
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

    // ✅ Ignore Windows protected folder scan errors
    config.ignoreWarnings = [
      (warn) =>
        typeof warn.message === 'string' &&
        warn.message.includes('EPERM') &&
        warn.message.includes('Application Data')
    ];

    return config;
  },
};

export default nextConfig;
