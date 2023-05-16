const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tre.se',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tre.se',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
