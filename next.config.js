/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

// module.exports = nextConfig

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // 你可以根据需要添加更多页面
    };
  },
  distDir: 'out',
};