import { Alert } from "antd";
import { useTranslation } from "@/hooks/useTranslation";

type TranslationFallbackNoticeProps = {
  contentLocale?: string;
};

export default function TranslationFallbackNotice({
  contentLocale,
}: TranslationFallbackNoticeProps) {
  const { locale, translateText } = useTranslation();

  if (locale !== "en" || !contentLocale || contentLocale === "en") {
    return null;
  }

  return (
    <Alert
      banner
      showIcon
      type="info"
      message={translateText("此内容暂时没有英文版本，以下显示中文原文。")}
    />
  );
}
