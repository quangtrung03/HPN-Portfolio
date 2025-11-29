/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org', // Simple Icons CDN
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // Wikimedia (CapCut)
      },
    ],
  },
}

module.exports = nextConfig
