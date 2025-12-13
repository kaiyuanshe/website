import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {},
  typescript: {
    ignoreBuildErrors: true // 忽略 TypeScript 检查
  },
  turbopack: {
    root: process.cwd()
  },
  // 优化Webpack构建
  webpack: (config: any, { dev }: { dev: boolean; isServer: boolean }) => {
    // 生产环境优化
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        // 限制并发构建任务
        minimize: true,
        // 启用代码分割优化
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
      }
      // 限制CPU使用
      config.parallelism = 2
    }
    return config
  },
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design',
    'antd',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-tree',
    'rc-table',
    'rc-input'
  ],
  i18n: {
    locales: ['zh-CN', 'zh-TW', 'en'],
    defaultLocale: 'zh-CN',
    localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      }
    ]
  }
}

export default nextConfig
