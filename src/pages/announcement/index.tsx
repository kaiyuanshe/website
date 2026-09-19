import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Pagination,
  Input,
  Button,
  Tag,
  Card,
  Popconfirm,
  Modal,
  Image,
  App as AntdApp,
} from "antd";
import dayjs from "dayjs";
import {
  Calendar,
  Plus,
  Edit,
  Trash2,
  Star,
  Share2,
  LayoutGrid,
  List,
  Eye,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import styles from "./index.module.css";
import router from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import { getArticles, deleteArticle } from "../api/article";
import LocalizedText from "@/components/LocalizedText";
import { useTranslation } from "@/hooks/useTranslation";

const { Search: AntSearch } = Input;

type ViewMode = "grid" | "list";

export function formatTime(isoTime: string): string {
  return dayjs(isoTime).format("YYYY-MM-DD HH:mm");
}

export default function AnnouncementPage() {
  const { translateText: translateUiText } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [articles, setArticles] = useState<Record<string, any>[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedTag] = useState("");
  const [sortOrder] = useState<"asc" | "desc">("desc");
  const [wechatModalVisible, setWechatModalVisible] = useState(false);
  const [publishStatus, setPublishStatus] = useState(0);
  const [category] = useState("announcement");

  // 使用统一的认证上下文，避免重复调用 useSession
  const { session, status } = useAuth();

  const permissions = useMemo(
    () => session?.user?.permissions || [],
    [session?.user?.permissions],
  );

  const { message } = AntdApp.useApp();

  // 加载公告列表
  const loadArticles = useCallback(
    async (params?: {
      keyword?: string;
      tag?: string;
      order?: "asc" | "desc";
      page?: number;
      page_size?: number;
      publish_status?: number;
      category?: string;
    }) => {
      try {
        setLoading(true);

        const queryParams = {
          keyword: params?.keyword ?? searchKeyword,
          tag: params?.tag ?? selectedTag,
          order: params?.order ?? sortOrder,
          page: params?.page ?? currentPage,
          page_size: params?.page_size ?? pageSize,
          publish_status: params?.publish_status ?? publishStatus,
          category: params?.category ?? category,
        };

        const result = await getArticles(queryParams);
        if (result.success && result.data) {
          // 处理后端返回的数据结构
          if (result.data.articles && Array.isArray(result.data.articles)) {
            console.log(result.data.articles);
            setArticles(result.data.articles);
            setCurrentPage(result.data.page || 1);
            setPageSize(result.data.page_size || 6);
            setTotal(result.data.total || result.data.articles.length);
          } else if (Array.isArray(result.data)) {
            setArticles(result.data);
            setTotal(result.data.length);
          } else {
            console.warn("API 返回的数据格式不符合预期:", result.data);
            setArticles([]);
            setTotal(0);
          }
        } else {
          console.error("获取公告列表失败:", result.message);
          setArticles([]);
          setTotal(0);
        }
      } catch (error: unknown) {
        console.error("加载公告列表异常:", error);
        setArticles([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    },
    [
      searchKeyword,
      selectedTag,
      sortOrder,
      currentPage,
      pageSize,
      publishStatus,
    ],
  );

  // 搜索公告
  const handleSearch = async (keyword: string) => {
    setSearchKeyword(keyword);
    setCurrentPage(1); // 重置到第一页
    await loadArticles({ keyword, page: 1 });
  };

  // 分页处理
  const handlePageChange = async (page: number, size?: number) => {
    setCurrentPage(page);
    if (size && size !== pageSize) {
      setPageSize(size);
    }
    await loadArticles({ page, page_size: size || pageSize });
  };

  // 计算当前显示的公告
  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, total);

  const currentArticles = articles; // 服务端已经处理了分页

  const handleDeleteArticle = async (id: number) => {
    // 调用创建公告接口
    try {
      const result = await deleteArticle(id);
      if (result.success) {
        message.success(result.message);
        loadArticles();
      } else {
        message.error(result.message || "发布公告失败");
      }
    } catch {
      message.error("删除失败，请重试");
    }
  };

  const handleSwitchViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (status === "loading") return; // 等待认证状态确定
    const newPublishStatus =
      status === "authenticated" && permissions.includes("event:write") ? 0 : 2;
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
               <h1 className={styles.title}>公告</h1>
               <p className={styles.subtitle}>写下所思所感，遇见共鸣之人</p>
              </div> */}
          {status === "authenticated" &&
            permissions.includes("event:write") && (
              <Link href="/announcement/new" className={styles.createButton}>
                <Plus size={20} />
                <LocalizedText>{"发布公告"}</LocalizedText>
              </Link>
            )}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <AntSearch
            placeholder={translateUiText("搜索公告标题、描述...")}
            allowClear
            size="large"
            enterButton={translateUiText("搜索")}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onSearch={handleSearch}
            onClear={() => handleSearch("")}
            loading={loading}
          />
        </div>
      </div>

      {/* View Controls */}
      <div className={styles.viewControls}>
        <div className={styles.viewModeToggle}>
          <button
            className={`${styles.viewModeButton} ${viewMode === "grid" ? styles.active : ""}`}
            onClick={() => handleSwitchViewMode("grid")}
          >
            <LayoutGrid className={styles.viewModeIcon} />
            <LocalizedText>{"卡片视图"}</LocalizedText>
          </button>
          <button
            className={`${styles.viewModeButton} ${viewMode === "list" ? styles.active : ""}`}
            onClick={() => handleSwitchViewMode("list")}
          >
            <List className={styles.viewModeIcon} />
            <LocalizedText>{"列表视图"}</LocalizedText>
          </button>
        </div>
        <div className={styles.resultsInfo}>
          <Pagination
            current={currentPage}
            total={total}
            pageSize={pageSize}
            onChange={handlePageChange}
            showTotal={(total) =>
              translateUiText(
                `显示 ${startIndex}-${endIndex} 项，共 ${total} 项`,
              )
            }
            className={styles.fullPagination}
          />
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
            <LocalizedText>{"暂无公告"}</LocalizedText>
          </div>
          <div className={styles.emptyDescription}>
            {searchKeyword || selectedTag
              ? translateUiText("没有找到符合条件的公告")
              : translateUiText("还没有创建任何公告")}
          </div>
          {!searchKeyword &&
            !selectedTag &&
            status === "authenticated" &&
            permissions.includes("event:write") && (
              <Link href="/announcement/new" className={styles.createButton}>
                <Plus className={styles.buttonIcon} />
                <LocalizedText>{"发布第一个公告"}</LocalizedText>
              </Link>
            )}
        </div>
      ) : viewMode === "grid" ? (
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <Link
              href={`/announcement/${article.ID}`}
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
                      {/* {article.publish_status === 1 && (
                  <Tag className={styles.noPublishStatus}>待审核</Tag>
                  )} */}
                      <div className={styles.cardActions}>
                        {status === "authenticated" &&
                        permissions.includes("event:write") ? (
                          <Button
                            className={styles.actionIconButton}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(`/announcement/${article.ID}/edit`);
                            }}
                            icon={<Edit className={styles.actionIcon} />}
                            title={translateUiText("编辑公告")}
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
                          title={translateUiText("分享公告")}
                        />

                        {status === "authenticated" &&
                        permissions.includes("event:write") ? (
                          <Popconfirm
                            title={translateUiText("删除公告")}
                            description={translateUiText(
                              "你确定删除这个公告吗？",
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
                              title={translateUiText("删除公告")}
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
      ) : (
        <div className={styles.listViewContainer}>
          {/* articles List */}
          <div className={styles.articlesList}>
            <div className={styles.listHeader}>
              <div className={styles.listHeaderCell}>
                <LocalizedText>{"公告信息"}</LocalizedText>
              </div>
              <div className={styles.listHeaderCell}>
                <LocalizedText>{"作者"}</LocalizedText>
              </div>
              <div className={styles.listHeaderCell}>
                <LocalizedText>{"时间"}</LocalizedText>
              </div>
              <div className={styles.listHeaderCell}>
                <LocalizedText>{"浏览量"}</LocalizedText>
              </div>
              {/* <div className={styles.listHeaderCell}>状态</div> */}
              <div className={styles.listHeaderCell}>
                <LocalizedText>{"操作"}</LocalizedText>
              </div>
            </div>
            {currentArticles.map((article) => (
              <div key={article.ID} className={styles.listRow}>
                <div className={styles.listCell}>
                  <div className={styles.articleInfo}>
                    <Link
                      href={`/announcement/${article.ID}`}
                      key={article.ID}
                      className={styles.listLink}
                    >
                      {article.title}
                    </Link>
                    {article.featured && (
                      <Star className={styles.listFeaturedIcon} />
                    )}
                  </div>
                </div>
                <div className={styles.listCell}>
                  <div className={styles.publisherInfo}>
                    <UserRound className={styles.listIcon} />
                    <span>{article.author}</span>
                  </div>
                </div>
                <div className={styles.listCell}>
                  <div className={styles.timeInfo}>
                    <div className={styles.dateTime}>
                      <Calendar className={styles.listIcon} />
                      <span>{formatTime(article.start_time)}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.listCell}>
                  <div className={styles.listViewCount}>
                    <Eye size={24} />
                    <span className={styles.listViewCountText}>
                      {article.view_count || "0"}
                    </span>
                  </div>
                </div>
                {/* <div className={styles.listCell}>
              <div className={styles.publishStatusInfo}>
              {article.publish_status === 1 && (
              <Tag color="warning">待审核</Tag>
              )}
              {article.publish_status === 2 && (
              <Tag color="success">已发布</Tag>
              )}
              </div>
              </div> */}

                <div className={styles.listCell}>
                  <div className={styles.listActions}>
                    {status === "authenticated" &&
                    permissions.includes("event:write") ? (
                      <Button
                        type="text"
                        size="small"
                        icon={<Edit className={styles.listActionIcon} />}
                        title={translateUiText("编辑公告")}
                        onClick={() =>
                          router.push(`/announcement/${article.ID}/edit`)
                        }
                      />
                    ) : null}
                    <Button
                      type="text"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        navigator.clipboard.writeText(
                          `${window.location.href}/${article.ID}`,
                        );
                        message.success("链接已复制到剪贴板");
                      }}
                      icon={<Share2 className={styles.listActionIcon} />}
                      title={translateUiText("分享公告")}
                    />

                    {status === "authenticated" &&
                    permissions.includes("event:write") ? (
                      <Popconfirm
                        title={translateUiText("删除公告")}
                        description={translateUiText("你确定删除这个公告吗？")}
                        okText={translateUiText("是")}
                        cancelText={translateUiText("否")}
                        onConfirm={() => handleDeleteArticle(article.ID)}
                      >
                        <Button
                          type="text"
                          size="small"
                          danger
                          icon={<Trash2 className={styles.listActionIcon} />}
                          title={translateUiText("删除公告")}
                        />
                      </Popconfirm>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.listBottomControls}>
        <div className={styles.bottomPagination}>
          <Pagination
            current={currentPage}
            total={total}
            pageSize={pageSize}
            onChange={handlePageChange}
            // showQuickJumper={true}
            showTotal={(total) =>
              translateUiText(
                `显示 ${startIndex}-${endIndex} 项，共 ${total} 项`,
              )
            }
            className={styles.fullPagination}
          />
        </div>
      </div>

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
