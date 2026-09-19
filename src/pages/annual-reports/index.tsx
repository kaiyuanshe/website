import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Calendar, FileText, Download, Eye } from "lucide-react";
import { Card } from "antd";
import styles from "./index.module.css";
import LocalizedText from "@/components/LocalizedText";
import { useTranslation } from "@/hooks/useTranslation";

const { Meta } = Card;
export default function AnnualReportsPage() {
  const { translateText: translateUiText } = useTranslation();
  return (
    <>
      <Head>
        <title>
          <LocalizedText>{"开源社年度报告 - 开源社"}</LocalizedText>
        </title>
        <meta
          name="description"
          content={translateUiText(
            "查看开源社历年年度报告，了解中国开源生态发展历程和重要成果",
          )}
        />

        <meta
          name="keywords"
          content={translateUiText(
            "开源社,年度报告,中国开源,开源生态,技术报告",
          )}
        />
      </Head>

      <div className={styles.container}>
        {/* 页面标题部分 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>
              <LocalizedText>{"开源社年度报告"}</LocalizedText>
            </h1>
            <p className={styles.subtitle}>
              <LocalizedText>
                {"记录开源社发展历程，见证中国开源生态繁荣"}
              </LocalizedText>
            </p>
          </div>
        </div>

        {/* 报告列表 */}
        <div className={styles.content}>
          <div className={styles.reportsGrid}>
            {[].map((report) => (
              <Card
                key={report.id}
                className={styles.reportCard}
                cover={
                  <div className={styles.cardCover}>
                    <Image
                      alt={report.title}
                      src={report.coverImage}
                      width={400}
                      height={240}
                      className={styles.coverImage}
                      onError={(e) => {
                        // 如果图片加载失败，使用默认占位图
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/default-report-cover.svg";
                      }}
                    />

                    <div className={styles.coverOverlay}>
                      <div className={styles.coverActions}>
                        <Link
                          href={`/annual-reports/${report.id}`}
                          className={styles.actionButton}
                        >
                          <Eye size={20} />
                          <LocalizedText>{"在线查看"}</LocalizedText>
                        </Link>
                        <a
                          href={report.pdfUrl}
                          download
                          className={styles.actionButton}
                        >
                          <Download size={20} />
                          <LocalizedText>{"下载PDF"}</LocalizedText>
                        </a>
                      </div>
                    </div>
                  </div>
                }
              >
                <Meta
                  title={
                    <div className={styles.cardTitle}>
                      <FileText size={20} className={styles.titleIcon} />
                      {report.title}
                    </div>
                  }
                  description={
                    <div className={styles.cardContent}>
                      <p className={styles.cardDescription}>
                        {report.description}
                      </p>
                    </div>
                  }
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
