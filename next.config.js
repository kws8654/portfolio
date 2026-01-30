/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
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
