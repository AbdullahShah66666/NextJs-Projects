import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /*webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Filter out the React Refresh plugin to disable Fast Refresh
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ReactRefreshWebpackPlugin'
      );
    }
    return config;
  },*/
};

export default nextConfig;
