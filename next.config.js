/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: true },
  turbopack: {},
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      canvas: false,
    };

    if (isServer) {
      config.externals = [...(config.externals || []), { canvas: 'commonjs canvas' }];
    }

    return config;
  },
};

module.exports = nextConfig;
