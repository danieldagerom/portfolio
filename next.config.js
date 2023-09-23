/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'media.graphassets.com',
      'unbarqdsw2021-1.github.io',
      'www.almocogratis.com.br',
    ],
  },
}

module.exports = nextConfig
