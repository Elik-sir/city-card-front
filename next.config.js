const withPWA = require('next-pwa');
const nextConfig = withPWA({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
  distDir: 'build',
});

module.exports = nextConfig;
