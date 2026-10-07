import Head from "next/head";
import { useRouter } from "next/router";
import { seoConfig, type RoutePath } from "@/config/seo";
import { useTranslation } from "@/hooks/useTranslation";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export default function SEO(props?: SEOProps) {
  const router = useRouter();
  const { translateText } = useTranslation();
  const pathname = router.pathname as RoutePath;

  // 获取路由对应的配置，如果没有配置则使用首页配置作为默认值
  const routeConfig = seoConfig[pathname] || seoConfig["/"];

  // 合并路由配置和传入的 props，props 优先级更高
  const config = {
    ...routeConfig,
    ...props,
  };

  const {
    title = "开源社",
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = "website",
    twitterCard = "summary_large_image",
    twitterTitle,
    twitterDescription,
    twitterImage,
  } = config;
  const localizedTitle = translateText(title);
  const localizedDescription = description
    ? translateText(description)
    : undefined;
  const localizedKeywords = keywords ? translateText(keywords) : undefined;
  const localizedOgTitle = ogTitle ? translateText(ogTitle) : undefined;
  const localizedOgDescription = ogDescription
    ? translateText(ogDescription)
    : undefined;

  return (
    <Head>
      {/* 基础 SEO */}
      <title>{localizedTitle}</title>
      {localizedDescription && (
        <meta name="description" content={localizedDescription} />
      )}
      {localizedKeywords && (
        <meta name="keywords" content={localizedKeywords} />
      )}

      {/* Open Graph / Facebook */}
      {localizedOgTitle && (
        <meta property="og:title" content={localizedOgTitle} />
      )}
      {localizedOgDescription && (
        <meta property="og:description" content={localizedOgDescription} />
      )}
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      {(twitterTitle || ogTitle) && (
        <meta
          name="twitter:title"
          content={translateText(twitterTitle || ogTitle || title)}
        />
      )}
      {(twitterDescription || ogDescription) && (
        <meta
          name="twitter:description"
          content={translateText(
            twitterDescription || ogDescription || description || "",
          )}
        />
      )}
      {(twitterImage || ogImage) && (
        <meta name="twitter:image" content={twitterImage || ogImage || ""} />
      )}
    </Head>
  );
}
