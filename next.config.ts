import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // static exports
  reactStrictMode: true,
  basePath: '/static-site',
}

export default nextConfig
