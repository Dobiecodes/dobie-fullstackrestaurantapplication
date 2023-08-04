/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "dobie-fullstackrestaurantapplication.onrender.com/",
          pathname: "/uploads/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;