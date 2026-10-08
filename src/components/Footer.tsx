import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiBilibili, SiWechat, SiX } from "react-icons/si";
import { useState } from "react";
import { Modal } from "antd";
import styles from "../styles/Footer.module.css";
import LocalizedText from "@/components/LocalizedText";
import { mainNavItems } from "../data/navigation";

export default function Footer() {
  const { t, locale, translateText: translateUiText } = useTranslation();
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Left section with logo and description */}
          <div className={styles.footerLeft}>
            <div className={styles.logoSection}>
              {locale === "en" ? (
                <div className={styles.englishBrand}>
                  <span className={styles.footerBrandSymbol}>
                    <Image
                      src="/logo.png"
                      alt="KaiSource symbol"
                      width={48}
                      height={48}
                    />
                  </span>
                  <span className={styles.footerBrandNames}>
                    <strong>{t("site.name")}</strong>
                    <span>{t("site.legacy_name_note")}</span>
                  </span>
                </div>
              ) : (
                <Image
                  src="/footer-logo.png"
                  alt="KAIYUANSHE Logo"
                  width={200}
                  height={100}
                  className={styles.footerLogo}
                />
              )}

              <p className={styles.aboutDescription}>
                {t("homepage.introduction.paragraph1")}
              </p>
            </div>

            {/* Social media icons */}
            <div className={styles.socialSection}>
              <div className={styles.socialLinks}>
                <Link
                  href="https://github.com/kaiyuanshe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="GitHub"
                >
                  <FaGithub className={styles.socialIcon} />
                </Link>
                <Link
                  href="https://x.com/kaiyuanshe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="X (Twitter)"
                >
                  <SiX className={styles.socialIcon} />
                </Link>
                <Link
                  href="https://www.facebook.com/kaiyuanshe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="Facebook"
                >
                  <FaFacebook className={styles.socialIcon} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/kaiyuanshe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className={styles.socialIcon} />
                </Link>
                <Link
                  href="https://space.bilibili.com/525037536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialButton}
                  aria-label="Bilibili"
                >
                  <SiBilibili className={styles.socialIcon} />
                </Link>
                <button
                  className={styles.socialButton}
                  aria-label={translateUiText("微信公众号")}
                  onClick={() => setIsWeChatModalOpen(true)}
                >
                  <SiWechat className={styles.socialIcon} />
                </button>
              </div>

              {/* Volunteer button */}
              <div className={styles.volunteerSection}>
                <Link
                  href="https://kaiyuanshe.feishu.cn/share/base/form/shrcntepbkm5aYu8wnhhXRgej0b"
                  target="_blank"
                  className={styles.volunteerButton}
                  aria-label={t("footer.become_volunteer")}
                >
                  {t("footer.become_volunteer")}
                </Link>
              </div>
            </div>
          </div>

          {/* Right section with navigation menu */}
          <div className={styles.footerRight}>
            {mainNavItems.map((section) => (
              <div key={section.key} className={styles.menuSection}>
                <h4 className={styles.menuTitle}>{t(section.labelKey)}</h4>
                <ul className={styles.menuList}>
                  {section.children
                    ?.filter((item) => item.href)
                    .map((item) => (
                      <li key={item.key}>
                        <Link
                          href={item.href!}
                          className={styles.menuLink}
                          target={item.target}
                          rel={
                            item.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {t(item.labelKey)}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer bottom with copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            <span>
              <span style={{ marginRight: "2rem" }}>
                {t("footer.copyright")}
              </span>
              <span style={{ marginRight: "2rem" }}>
                <LocalizedText>{"沪 ICP 备 19006015 号"}</LocalizedText>
              </span>
              <span>
                <LocalizedText>{"公安备案 31011202006203 号"}</LocalizedText>
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      <Modal
        title={t("footer.follow_wechat_title")}
        open={isWeChatModalOpen}
        onCancel={() => setIsWeChatModalOpen(false)}
        footer={null}
        centered
        width={400}
      >
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <Image
            src="/img/home/QRCode.png"
            alt={t("footer.wechat_qr_alt")}
            width={250}
            height={250}
            style={{ borderRadius: "8px" }}
          />

          <p style={{ marginTop: "16px", color: "#666" }}>
            {t("footer.wechat_qr_description")}
          </p>
        </div>
      </Modal>
    </footer>
  );
}
