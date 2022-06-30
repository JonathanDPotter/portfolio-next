/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

const nextConfig = withMDX();

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
