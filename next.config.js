/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  image: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      // ...
    ]
  }
}

module.exports = nextConfig
