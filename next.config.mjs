/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/paralect",
  // images: { unoptimized: false, domains: ["https://image.tmdb.org/t/p/w500/"] },

  async rewrites() {
    return [
      {
        source: "/api/test",
        destination:
          "https://api.themoviedb.org/3/discover/movie?api_key=7b9e692ff9495f98fbb3875034e3a8f2",
      },
    ];
  },
};

export default nextConfig;
