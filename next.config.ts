import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/static-site',
  output: 'export', // static exports
  images: {
    unoptimized: true, // export with next/image
  },
}

export default nextConfig
