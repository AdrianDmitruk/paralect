/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true, domains: ['https://image.tmdb.org/t/p/w500/'] },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks']
  },
  async rewrites() {
    return [
      {
        source: '/api/movie',
        destination:
          'https://api.themoviedb.org/3/discover/movie?api_key=7b9e692ff9495f98fbb3875034e3a8f2'
      }
    ]
  }
}

export default nextConfig
