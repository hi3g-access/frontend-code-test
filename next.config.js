const path = require('path')

const nextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
