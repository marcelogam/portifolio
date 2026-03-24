const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/portifolio' : '',
  assetPrefix: isProd ? '/portifolio/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;