/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      // Only mock global object for SSR to avoid issues
      config.node = {
        ...config.node,
        global: true,
      };
    }
    return config;
  },
};

export default nextConfig;
