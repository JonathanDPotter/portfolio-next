/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
