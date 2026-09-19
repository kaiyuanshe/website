import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Tag, App as AntdApp, Image } from "antd";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Edit,
  Eye,
  User,
} from "lucide-react";
import Link from "next/link";
import styles from "./index.module.css";
import { useAuth } from "@/contexts/AuthContext";
import {
  getArticleById,
  updateArticlePublishStatus,
} from "@/pages/api/article";
import dayjs from "dayjs";
import { sanitizeMarkdown } from "@/lib/markdown";
import CommentSection from "@/components/comments/CommentSection";
import LocalizedText from "@/components/LocalizedText";
import TranslationFallbackNotice from "@/components/TranslationFallbackNotice";
import { useTranslation } from "@/hooks/useTranslation";

export function formatTime(isoTime: string): string {
  return dayjs(isoTime).format("YYYY-MM-DD HH:MM");
}

export default function ArticleDetailPage() {
  const { message } = AntdApp.useApp();
  const router = useRouter();
  const { locale } = useTranslation();
  const { id } = router.query; // 路由参数应该叫 id，不是 ids
  const rId = Array.isArray(id) ? id[0] : id;

  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // 使用统一的认证上下文，避免重复调用 useSession
  const { session, status } = useAuth();

  const permissions = session?.user?.permissions || [];

  // parseMarkdown将返回的markdown转为html展示
  const [articleContent, setArticleContent] = useState<string>("");

  useEffect(() => {
    if (article?.content) {
      sanitizeMarkdown(article.content).then((htmlContent) => {
        setArticleContent(htmlContent);
      });
    }
  }, [article?.content]);

  const handleUpdatePublishStatus = async () => {
    try {
      const result = await updateArticlePublishStatus(article.ID, 2);
      if (result.success) {
        router.reload();
        message.success(result.message);
      } else {
        message.error(result.message || "审核出错");
      }
    } catch {
      message.error("审核出错，请重试");
    }
  };

  useEffect(() => {
    if (!router.isReady || !rId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getArticleById(rId, locale);
        setArticle(response?.data);
      } catch {
        message.error("加载失败");
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router.isReady, id, locale, message, rId]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>
          <LocalizedText>{"加载中..."}</LocalizedText>
        </p>
      </div>
    );
  }

  // const isUnderReview = article?.publish_status === 1;
  // const isPublisher = article?.publisher_id?.toString() === session?.user?.uid;

  if (!article) {
    return (
      <div className={styles.error}>
        <h2>
          <LocalizedText>{"年度报告不存在"}</LocalizedText>
        </h2>
        <p>
          <LocalizedText>{"抱歉，找不到您要查看的年度报告"}</LocalizedText>
        </p>
        <Link href="/osreports" className={styles.backButton}>
          <LocalizedText>{"返回年度报告列表"}</LocalizedText>
        </Link>
      </div>
    );
  }

  return (
    <div className={`${styles.container} nav-t-top`}>
      <TranslationFallbackNotice contentLocale={article.locale} />
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/osreports" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            <LocalizedText>{"返回年度报告列表"}</LocalizedText>
          </Link>
          <div className={styles.headerActions}>
            {status === "authenticated" &&
            permissions.includes("event:write") ? (
              <Button
                icon={<Edit size={16} className={styles.actionIcon} />}
                className={styles.actionButton}
                onClick={() => router.push(`/osreports/${article.ID}/edit`)}
              >
                <LocalizedText>{"编辑"}</LocalizedText>
              </Button>
            ) : null}
            {/* {article.publish_status === 1 &&
               status === 'authenticated' &&
               permissions.includes('event:write') ? (
               <Button
                 icon={<CheckCircle size={16} className={styles.actionIcon} />}
                 className={styles.actionButton}
                 onClick={() => handleUpdatePublishStatus()}
               >
                 审核通过
               </Button>
              ) : null} */}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {article.publish_status === 1 && (
                <div
                  className={styles.statusBadge}
                  style={{ backgroundColor: "#af78e7" }}
                >
                  <LocalizedText>{"待审核"}</LocalizedText>
                </div>
              )}
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            <h3 className={styles.description}>{article.description}</h3>
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <Calendar className={styles.metaIcon} />
                <div className={styles.metaText}>
                  <LocalizedText>{"发布时间："}</LocalizedText>

                  {formatTime(article.publish_time || article.CreatedAt)}
                </div>
              </div>
              <div className={styles.metaItem}>
                <User className={styles.metaIcon} />
                <div className={styles.metaText}>
                  <LocalizedText>{"原文连接："}</LocalizedText>

                  {article.source_link ? (
                    <a
                      href={article.source_link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sourceLink}
                    >
                      {article.source_link as string}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {article.license && (
                <div className={styles.metaItem}>
                  <User className={styles.metaIcon} />
                  <div className={styles.metaText}>
                    <LocalizedText>{"版权声明："}</LocalizedText>
                    {article.license}
                  </div>
                </div>
              )}
              {(article.author || article.publisher?.username) && (
                <div className={styles.metaItem}>
                  <User className={styles.metaIcon} />
                  <div className={styles.metaText}>
                    <LocalizedText>{"作者："}</LocalizedText>
                    {article.author || article.publisher?.username}
                  </div>
                </div>
              )}
              {article.publisher?.username && (
                <div className={styles.metaItem}>
                  <User className={styles.metaIcon} />
                  <div className={styles.metaText}>
                    <LocalizedText>{"发布者："}</LocalizedText>
                    {article.publisher.username}
                  </div>
                </div>
              )}
              <div className={styles.metaItem}>
                <Eye className={styles.metaIcon} />
                <div className={styles.metaText}>
                  <LocalizedText>{"浏览量："}</LocalizedText>
                  {article.view_count || "0"}
                </div>
              </div>
              <div className={styles.tags}>
                {article.tags.map((tag: string, index: number) => (
                  <Tag key={index} className={styles.tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.coverContainer}>
              <Image
                src={article.cover_img || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={300}
                className={styles.coverImage}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className="marked-paper">
          {/* <h2 className={styles.sectionTitle}>{article.title}</h2> */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />
        </div>

        {/* 评论区域 */}
        <CommentSection
          repo="kaiyuanshe/website"
          repoId="R_kgDOQHmDoA"
          category="General"
          categoryId="DIC_kwDOQHmDoM4CxYEV"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="preferred_color_scheme"
          lang="zh-CN"
        />
      </div>
    </div>
  );
}
