/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

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
