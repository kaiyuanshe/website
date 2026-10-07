import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import { ConfigProvider, App as AntdApp } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import zhTW from "antd/locale/zh_TW";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { useTranslation } from "@/hooks/useTranslation";

import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";

const localeConfig = {
  en: {
    antd: enUS,
    dayjs: "en",
  },
  "zh-CN": {
    antd: zhCN,
    dayjs: "zh-cn",
  },
  "zh-TW": {
    antd: zhTW,
    dayjs: "zh-tw",
  },
} as const;

type SupportedLocale = keyof typeof localeConfig;

const customTheme = {
  token: {
    colorPrimary: "#1d4ed8",
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const locale = (router.locale || "zh-CN") as SupportedLocale;
  const currentLocale = localeConfig[locale] || localeConfig["zh-CN"];
  const appName =
    locale === "en"
      ? process.env.NEXT_PUBLIC_APP_NAME_EN || t("site.name")
      : process.env.NEXT_PUBLIC_APP_NAME || t("site.name");
  const pagePath = router.asPath.split(/[?#]/, 1)[0] || "/";
  const canonicalBase =
    locale === "en" ? "https://kaisource.org" : "https://kaiyuanshe.cn";
  const canonicalPath = locale === "zh-TW" ? `/zh-TW${pagePath}` : pagePath;
  const canonicalUrl = `${canonicalBase}${canonicalPath}`;

  useEffect(() => {
    dayjs.locale(currentLocale.dayjs);
  }, [currentLocale.dayjs]);

  return (
    <SessionProvider
      session={session}
      // 优化 SessionProvider 配置，减少客户端请求
      refetchInterval={5 * 60} // 5分钟刷新一次
      refetchOnWindowFocus={false} // 禁用窗口聚焦时的自动刷新
      refetchWhenOffline={false} // 离线时不刷新
    >
      {/* 认证上下文提供者，统一管理认证状态，利用 NextAuth 内置缓存 */}
      <AuthProvider>
        <ConfigProvider theme={customTheme} locale={currentLocale.antd}>
          <AntdApp>
            <Layout>
              <Head>
                <title>{appName}</title>
                <meta
                  key="description"
                  name="description"
                  content={t("site.description")}
                />
                <meta
                  key="keywords"
                  name="keywords"
                  content={t("site.keywords")}
                />
                <meta key="og-title" property="og:title" content={appName} />
                <meta
                  key="og-description"
                  property="og:description"
                  content={t("site.description")}
                />
                <meta key="og-type" property="og:type" content="website" />
                <meta key="og-url" property="og:url" content={canonicalUrl} />
                <meta
                  key="og-site-name"
                  property="og:site_name"
                  content={appName}
                />
                <link key="canonical" rel="canonical" href={canonicalUrl} />
                <link
                  key="alternate-zh-cn"
                  rel="alternate"
                  hrefLang="zh-CN"
                  href={`https://kaiyuanshe.cn${pagePath}`}
                />
                <link
                  key="alternate-zh-tw"
                  rel="alternate"
                  hrefLang="zh-TW"
                  href={`https://kaiyuanshe.cn/zh-TW${pagePath}`}
                />
                <link
                  key="alternate-en"
                  rel="alternate"
                  hrefLang="en"
                  href={`https://kaisource.org${pagePath}`}
                />
                <link
                  key="alternate-default"
                  rel="alternate"
                  hrefLang="x-default"
                  href={`https://kaiyuanshe.cn${pagePath}`}
                />
              </Head>
              <Component {...pageProps} />
              {process.env.NEXT_PUBLIC_GA_ID && (
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
              )}
            </Layout>
          </AntdApp>
        </ConfigProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
