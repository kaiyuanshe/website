import { Globe } from "lucide-react";
import { Dropdown } from "antd";
import { useTranslation } from "../hooks/useTranslation";
import styles from "../styles/LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  onChange,
}: { onChange?: () => void } = {}) {
  const { translateText: translateUiText } = useTranslation();
  const { t, locale, changeLanguage } = useTranslation();

  const selectLanguage = (newLocale: string) => {
    onChange?.();
    if (newLocale !== locale) changeLanguage(newLocale);
  };

  const languageItems = [
    {
      key: "zh-CN",
      label: (
        <div className={styles.languageItem}>
          <span className={styles.languageText}>
            {t("language.simplified_chinese")}
          </span>
          {locale === "zh-CN" && (
            <span className={styles.activeIndicator}>✓</span>
          )}
        </div>
      ),

      onClick: () => selectLanguage("zh-CN"),
    },
    {
      key: "zh-TW",
      label: (
        <div className={styles.languageItem}>
          <span className={styles.languageText}>
            {t("language.traditional_chinese")}
          </span>
          {locale === "zh-TW" && (
            <span className={styles.activeIndicator}>✓</span>
          )}
        </div>
      ),

      onClick: () => selectLanguage("zh-TW"),
    },
    {
      key: "en",
      label: (
        <div className={styles.languageItem}>
          <span className={styles.languageText}>{t("language.english")}</span>
          {locale === "en" && <span className={styles.activeIndicator}>✓</span>}
        </div>
      ),

      onClick: () => selectLanguage("en"),
    },
  ];

  return (
    <Dropdown
      menu={{ items: languageItems }}
      placement="bottomRight"
      trigger={["hover", "click"]}
      overlayClassName={styles.languageDropdown}
      arrow
    >
      <button
        type="button"
        className={styles.languageSwitcher}
        title={t("language.switch")}
      >
        <Globe className={styles.globeIcon} />
        <span className={styles.currentLanguage}>
          {locale === "zh-TW"
            ? translateUiText("繁")
            : locale === "zh-CN"
              ? "简"
              : "EN"}
        </span>
      </button>
    </Dropdown>
  );
}
