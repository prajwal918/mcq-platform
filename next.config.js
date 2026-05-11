/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
