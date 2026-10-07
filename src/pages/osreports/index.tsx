import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Button,
  Tag,
  Card,
  Popconfirm,
  Modal,
  Image,
  App as AntdApp,
} from "antd";
import dayjs from "dayjs";
import { Plus, Edit, Trash2, Share2, Eye } from "lucide-react";
import Link from "next/link";
import styles from "./index.module.css";
import router from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { getArticles, deleteArticle } from "../api/article";
import LocalizedText from "@/components/LocalizedText";
import { useTranslation } from "@/hooks/useTranslation";

export function formatTime(isoTime: string): string {
  return dayjs(isoTime).format("YYYY-MM-DD HH:mm");
}

export default function OsreportsPage() {
  const { translateText: translateUiText } = useTranslation();
  const [currentPage] = useState(1);
  const [pageSize] = useState(9999);
  const [articles, setArticles] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder] = useState<"asc" | "desc">("desc");
  const [wechatModalVisible, setWechatModalVisible] = useState(false);
  const [publishStatus, setPublishStatus] = useState(0);
  const [category] = useState("china_os_annual_report");

  // 使用统一的认证上下文，避免重复调用 useSession
  const { session, status } = useAuth();

  const permissions = useMemo(
    () => session?.user?.permissions || [],
    [session?.user?.permissions],
  );

  const { message } = AntdApp.useApp();

  // 加载年度报告列表
  const loadArticles = useCallback(
    async (params?: {
      order?: "asc" | "desc";
      page?: number;
      page_size?: number;
      publish_status?: number;
    }) => {
      try {
        setLoading(true);

        const queryParams = {
          order: params?.order ?? sortOrder,
          page: params?.page ?? currentPage,
          page_size: params?.page_size ?? pageSize,
          publish_status: params?.publish_status ?? publishStatus,
          category: category,
        };

        const result = await getArticles(queryParams);
        if (result.success && result.data) {
          // 处理后端返回的数据结构
          if (result.data.articles && Array.isArray(result.data.articles)) {
            console.log(result.data.articles);
            setArticles(result.data.articles);
          } else if (Array.isArray(result.data)) {
            setArticles(result.data);
          } else {
            console.warn("API 返回的数据格式不符合预期:", result.data);
            setArticles([]);
          }
        } else {
          console.error("获取年度报告列表失败:", result.message);
          setArticles([]);
        }
      } catch (error: unknown) {
        console.error("加载年度报告列表异常:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    },
    [sortOrder, currentPage, pageSize, publishStatus],
  );

  const handleDeleteArticle = async (id: number) => {
    try {
      const result = await deleteArticle(id);
      if (result.success) {
        message.success(result.message);
        loadArticles();
      } else {
        message.error(result.message || "删除年度报告失败");
      }
    } catch {
      message.error("删除失败，请重试");
    }
  };

  useEffect(() => {
    if (status === "loading") return; // 等待认证状态确定
    const newPublishStatus =
      status === "authenticated" && permissions.includes("event:review")
        ? 0
        : 2;
    setPublishStatus(newPublishStatus);

    // 直接调用 loadarticles，避免 publishStatus 状态更新延迟
    loadArticles({ publish_status: newPublishStatus });
  }, [status, permissions.length, loadArticles, permissions]);

  return (
    <div className={`${styles.container} nav-t-top`}>
      {/* Title Section */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          {/* <div className={styles.titleSection}>
               <h1 className={styles.title}>年度报告</h1>
               <p className={styles.subtitle}>写下所思所感，遇见共鸣之人</p>
              </div> */}
          {status === "authenticated" &&
            permissions.includes("event:write") && (
              <Link href="/osreports/new" className={styles.createButton}>
                <Plus size={20} />
                <LocalizedText>{"发布年度报告"}</LocalizedText>
              </Link>
            )}
        </div>
      </div>

      {/* articles Display */}
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingText}>
            <LocalizedText>{"加载中..."}</LocalizedText>
          </div>
        </div>
      ) : articles.length === 0 ? (
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIcon}>📖</div>
          <div className={styles.emptyTitle}>
            <LocalizedText>{"暂无年度报告"}</LocalizedText>
          </div>
          <div className={styles.emptyDescription}>
            <LocalizedText>{"还没有创建任何年度报告"}</LocalizedText>
          </div>
          {status === "authenticated" &&
            permissions.includes("event:write") && (
              <Link href="/osreports/new" className={styles.createButton}>
                <Plus className={styles.buttonIcon} />
                <LocalizedText>{"发布第一个年度报告"}</LocalizedText>
              </Link>
            )}
        </div>
      ) : (
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <Link
              href={`/osreports/${article.ID}`}
              key={article.ID}
              className={styles.cardLink}
            >
              <Card
                className={styles.articleCard}
                cover={
                  <div className={styles.cardCover}>
                    <Image
                      alt={article.title}
                      src={
                        article.cover_img ||
                        "/placeholder.svg?height=240&width=400&text=活动封面"
                      }
                      className={styles.coverImage}
                      preview={false}
                    />

                    <div className={styles.coverOverlay}>
                      {article.publish_status === 1 && (
                        <Tag className={styles.noPublishStatus}>
                          <LocalizedText>{"待审核"}</LocalizedText>
                        </Tag>
                      )}
                      <div className={styles.cardActions}>
                        {/* 只有年度报告作者才可以编辑 */}
                        {status === "authenticated" &&
                        article.publisher_id.toString() ===
                          session?.user?.uid ? (
                          <Button
                            className={styles.actionIconButton}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(`/osreports/${article.ID}/edit`);
                            }}
                            icon={<Edit className={styles.actionIcon} />}
                            title={translateUiText("编辑活动")}
                          />
                        ) : null}

                        <Button
                          className={styles.actionIconButton}
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText(
                              `${window.location.href}/${article.ID}`,
                            );
                            message.success("链接已复制到剪贴板");
                          }}
                          icon={<Share2 className={styles.actionIcon} />}
                          title={translateUiText("分享年度报告")}
                        />

                        {status === "authenticated" &&
                        permissions.includes("event:write") ? (
                          <Popconfirm
                            title={translateUiText("删除年度报告")}
                            description={translateUiText(
                              "你确定删除这个年度报告吗？",
                            )}
                            okText={translateUiText("是")}
                            cancelText={translateUiText("否")}
                            onConfirm={(e) => {
                              e?.preventDefault();
                              handleDeleteArticle(article.ID);
                            }}
                          >
                            <Button
                              className={styles.actionIconButton}
                              danger
                              icon={<Trash2 className={styles.actionIcon} />}
                              title={translateUiText("删除年度报告")}
                              onClick={(e) => e.preventDefault()}
                            />
                          </Popconfirm>
                        ) : null}
                      </div>
                    </div>
                  </div>
                }
              >
                <div className={styles.cardBodyNew}>
                  <h3 className={styles.articleTitleNew}>{article.title}</h3>
                  <p className={styles.articleDescriptionNew}>
                    {article.description}
                  </p>

                  <div className={styles.cardFooter}>
                    <div className={styles.authorInfo}>
                      <Image
                        src={article.publisher.avatar}
                        alt={article.publisher.username}
                        width={32}
                        height={32}
                        preview={false}
                        className={styles.avatar}
                        referrerPolicy="no-referrer"
                      />

                      <div className={styles.authorText}>
                        <span className={styles.authorName}>
                          {article.publisher?.username || ""}
                        </span>
                        <span className={styles.publishTime}>
                          {dayjs(
                            article.publish_time || article.CreatedAt,
                          ).format("YYYY年M月D日")}{" "}
                          · {article.read_time || "6 分钟"}
                          <LocalizedText>{"阅读"}</LocalizedText>
                        </span>
                      </div>
                      <div className={styles.viewCount}>
                        <Eye size={24} />
                        <span className={styles.viewCountText}>
                          {article.view_count || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}

      <Modal
        open={wechatModalVisible}
        onCancel={() => setWechatModalVisible(false)}
        footer={null}
        centered
        className={styles.wechatModal}
      >
        <div className={styles.wechatModalContent}>
          <div className={styles.qrCodeSection}>
            <Image
              src=""
              alt={translateUiText("小助手二维码")}
              width={200}
              height={200}
              preview={false}
            />

            <p>
              <LocalizedText>{"扫码加入微信群"}</LocalizedText>
            </p>
          </div>
          <div className={styles.qrCodeSection}>
            <Image
              src=""
              alt={translateUiText("公众号二维码")}
              width={200}
              height={200}
              preview={false}
            />

            <p>
              <LocalizedText>{"扫码关注公众号"}</LocalizedText>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
