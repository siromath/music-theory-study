/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == 'production';
const subDirectory = '/music-theory-study';
const path = isProd ? subDirectory : '';

const nextConfig = {
  output: 'export',
  basePath: path,
  assetPrefix: path,
  publicRuntimeConfig: {
    basePath: path,
  },
  images: {
    loader: 'custom',
  },
};

export default nextConfig;
