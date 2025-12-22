import Head from 'next/head'
import { useRouter } from 'next/router'
import { seoConfig, type RoutePath } from '@/config/seo'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

export default function SEO(props?: SEOProps) {
  const router = useRouter()
  const pathname = router.pathname as RoutePath

  // 获取路由对应的配置，如果没有配置则使用首页配置作为默认值
  const routeConfig = seoConfig[pathname] || seoConfig['/']

  // 合并路由配置和传入的 props，props 优先级更高
  const config = {
    ...routeConfig,
    ...props
  }

  const {
    title = '开源社',
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    twitterTitle,
    twitterDescription,
    twitterImage
  } = config

  return (
    <Head>
      {/* 基础 SEO */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      {(twitterTitle || ogTitle) && (
        <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      )}
      {(twitterDescription || ogDescription) && (
        <meta name="twitter:description" content={twitterDescription || ogDescription || description || ''} />
      )}
      {(twitterImage || ogImage) && (
        <meta name="twitter:image" content={twitterImage || ogImage || ''} />
      )}
    </Head>
  )
}
