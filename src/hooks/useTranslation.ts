/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/router";
import { useMemo } from "react";

import zhTW from "../../locales/zh-TW/common.json";
import zhCN from "../../locales/zh-CN/common.json";
import en from "../../locales/en/common.json";
import initialEnglish from "../../locales/en/initial.json";
import englishOverrides from "../../locales/en/overrides.json";

const translations = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,

  en: en,
} as const;

type LocaleType = keyof typeof translations;

export function useTranslation() {
  const router = useRouter();
  const { locale = "zh-CN" } = router;

  const t = useMemo(() => {
    const currentTranslations =
      translations[locale as LocaleType] || translations["zh-CN"];

    return (key: string): string => {
      const keys = key.split(".");
      let value: any = currentTranslations;

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          return key; // 如果找不到翻译，返回原始 key
        }
      }

      return typeof value === "string" ? value : key;
    };
  }, [locale]);

  const changeLanguage = (newLocale: string) => {
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  const translateText = useMemo(() => {
    if (locale !== "en") {
      return (text: string) => text;
    }

    return (text: string): string => {
      const normalized = text.replace(/\s+/g, " ").trim();

      if (!normalized) return text;

      const rangeMatch = normalized.match(
        /^\u663e\u793a (\d+)-(\d+) \u9879\uff0c\u5171 (\d+) \u9879$/,
      );
      if (rangeMatch) {
        return `Showing ${rangeMatch[1]}-${rangeMatch[2]} of ${rangeMatch[3]}`;
      }

      const pageMatch = normalized.match(
        /^\u7b2c (\d+)-(\d+) \u6761\uff0c\u5171 (\d+) \u6761$/,
      );
      if (pageMatch) {
        return `Items ${pageMatch[1]}-${pageMatch[2]} of ${pageMatch[3]}`;
      }

      const yearMatch = normalized.match(/^(\d{4})\u5e74$/);
      if (yearMatch) return yearMatch[1];

      const translation =
        englishOverrides[normalized as keyof typeof englishOverrides] ||
        initialEnglish[normalized as keyof typeof initialEnglish];

      if (!translation) return text;

      return translation
        .replaceAll("Kaiyuan Society", "KaiSource")
        .replaceAll("Kaiyuanshe", "KaiSource")
        .replaceAll("Open Source Society", "KaiSource")
        .replaceAll(
          "China Open Source Annual Conference",
          "China Open Source Conference",
        )
        .replaceAll("Kaiyuan People's Declaration", "Open Source Manifesto");
    };
  }, [locale]);

  return {
    t,
    translateText,
    locale,
    changeLanguage,
  };
}
