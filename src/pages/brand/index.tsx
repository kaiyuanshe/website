import React from "react";
import {
  Download,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Package,
} from "lucide-react";
import styles from "./index.module.css";
import LocalizedText from "@/components/LocalizedText";

const BrandPage = () => {
  return (
    <div className={styles.brandPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <LocalizedText>{"开源社品牌资源"}</LocalizedText>
          </h1>
          <p className={styles.heroSubtitle}>
            <LocalizedText>
              {"为保证标识的清晰与统一，请从官方渠道下载标准的品牌标识素材"}
            </LocalizedText>
          </p>
        </div>
        <div className={styles.heroBackground}>
          <div className={styles.brandElements}>
            <div className={styles.logoElement}></div>
            <div className={styles.logoElement}></div>
            <div className={styles.logoElement}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Download Section */}
          <section className={styles.downloadSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <LocalizedText>{"品牌资源下载"}</LocalizedText>
              </h2>
              <p className={styles.sectionDescription}>
                <LocalizedText>
                  {"包括Logo、标准字、应用规范等完整品牌资源包"}
                </LocalizedText>
              </p>
            </div>

            <div className={styles.downloadCard}>
              <div className={styles.downloadContent}>
                <div className={styles.downloadIcon}>
                  <Package size={48} />
                </div>
                <div className={styles.downloadInfo}>
                  <h3 className={styles.downloadTitle}>
                    <LocalizedText>{"开源社品牌标识素材包"}</LocalizedText>
                  </h3>
                  <p className={styles.downloadDesc}>
                    <LocalizedText>
                      {
                        "包含完整的Logo文件、标准字体、配色方案、使用规范等素材， 支持多种格式（SVG、PNG、PDF、AI等）"
                      }
                    </LocalizedText>
                  </p>
                  <div className={styles.downloadMeta}>
                    <span className={styles.metaItem}>
                      <FileText size={16} />
                      <LocalizedText>{"完整资源包"}</LocalizedText>
                    </span>
                    <span className={styles.metaItem}>
                      <ImageIcon size={16} />
                      <LocalizedText>{"多种格式"}</LocalizedText>
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.downloadActions}>
                <a
                  href="/品牌资源.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  <Download size={20} />
                  <LocalizedText>{"立即下载"}</LocalizedText>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className={styles.contactSection}>
            <div className={styles.contactCard}>
              <h2 className={styles.contactTitle}>
                <LocalizedText>{"需要帮助？"}</LocalizedText>
              </h2>
              <p className={styles.contactDesc}>
                <LocalizedText>
                  {
                    "如果您在使用品牌资源时遇到任何问题，或需要特殊格式的素材， 请随时联系我们的品牌团队。"
                  }
                </LocalizedText>
              </p>
              <div className={styles.contactActions}>
                <a href="/about" className={styles.contactButton}>
                  <LocalizedText>{"联系我们"}</LocalizedText>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
