/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useMemo } from "react";
import { Card, Image, Button, Tag, Popconfirm, App as AntdApp } from "antd";
import dayjs from "dayjs";
import {
  Calendar,
  Users,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Share2,
  Globe,
} from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";
import styles from "../index.module.css";
import { getEvents, deleteEvent } from "../../api/event";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import LocalizedText from "@/components/LocalizedText";
import { useTranslation } from "@/hooks/useTranslation";

export function formatTime(isoTime: string): string {
  return dayjs(isoTime).format("YYYY-MM-DD");
}

export default function CosconEventsPage() {
  const { translateText: translateUiText } = useTranslation();
  const { message } = AntdApp.useApp();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [publishStatus, setPublishStatus] = useState(2);

  const router = useRouter();
  const { session, status } = useAuth();
  const permissions = useMemo(
    () => session?.user?.permissions || [],
    [session?.user?.permissions],
  );

  // 加载事件列表 - 固定参数，只加载 coscon 类型的活动
  const loadEvents = useCallback(async () => {
    try {
      setLoading(true);

      const queryParams = {
        keyword: "",
        tag: "",
        order: "desc" as const,
        page: 1,
        page_size: 9999,
        status: "3",
        location: "",
        event_mode: "",
        event_type: "coscon", // 写死为 coscon
        publish_status: publishStatus,
      };

      const result = await getEvents(queryParams);

      if (result.success && result.data) {
        if (result.data.events && Array.isArray(result.data.events)) {
          setEvents(result.data.events);
        } else if (Array.isArray(result.data)) {
          setEvents(result.data);
        } else {
          console.warn("API 返回的数据格式不符合预期:", result.data);
          setEvents([]);
        }
      } else {
        console.error("获取事件列表失败:", result.message);
        setEvents([]);
      }
    } catch (error: unknown) {
      console.error("加载事件列表异常:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }, [publishStatus]);

  // 根据登录状态更新 publishStatus
  useEffect(() => {
    if (status === "authenticated" && permissions.includes("event:review")) {
      setPublishStatus(0);
    } else if (status === "unauthenticated") {
      setPublishStatus(2);
    }
  }, [status, permissions]);

  // 主要的数据加载效果
  useEffect(() => {
    if (!router.isReady) return;
    loadEvents();
  }, [publishStatus, loadEvents, router.isReady]);

  const handleDeleteEvent = async (id: number) => {
    try {
      const result = await deleteEvent(id);
      if (result.success) {
        message.success(result.message);
        loadEvents();
      } else {
        message.error(result.message || "删除活动失败");
      }
    } catch {
      message.error("删除失败，请重试");
    }
  };

  return (
    <div className={`${styles.container} nav-t-top`}>
      {/* Title Section */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>
              <LocalizedText>{"中国开源年会"}</LocalizedText>
            </h1>
            <p className={styles.subtitle}>
              <LocalizedText>{"中国最大的开源技术年度盛会"}</LocalizedText>
            </p>
          </div>
          {status === "authenticated" &&
            permissions.includes("event:write") && (
              <Link
                href="/events/new?event_type=coscon"
                className={styles.createButton}
              >
                <Plus size={20} />
                <LocalizedText>{"发布开源年会"}</LocalizedText>
              </Link>
            )}
        </div>
      </div>

      {/* Events Display */}
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
        </div>
      ) : events.length === 0 ? (
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIcon}>📅</div>
          <div className={styles.emptyTitle}>
            <LocalizedText>{"暂无中国开源年会活动"}</LocalizedText>
          </div>
          <div className={styles.emptyDescription}>
            <LocalizedText>{"还没有创建任何中国开源年会活动"}</LocalizedText>
          </div>
          {status === "authenticated" &&
            permissions.includes("event:write") && (
              <Link
                href="/events/new?event_type=coscon"
                className={styles.createButton}
              >
                <Plus className={styles.buttonIcon} />
                <LocalizedText>{"创建第一个活动"}</LocalizedText>
              </Link>
            )}
        </div>
      ) : (
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <Link
              href={
                event.event_setting === 2 && event.bage_link
                  ? event.bage_link
                  : `/events/${event.ID}`
              }
              target={
                event.event_setting === 2 && event.bage_link
                  ? "_blank"
                  : "_self"
              }
              rel={
                event.event_setting === 2 && event.bage_link
                  ? "noopener noreferrer"
                  : undefined
              }
              key={event.ID}
              className={styles.cardLink}
            >
              <Card
                className={styles.eventCard}
                cover={
                  <div className={styles.cardCover}>
                    <Image
                      alt={event.title}
                      src={
                        event.cover_img ||
                        "/placeholder.svg?height=240&width=400&text=活动封面"
                      }
                      className={styles.coverImage}
                      preview={false}
                    />

                    <div className={styles.coverOverlay}>
                      <div className={styles.cardActions}>
                        {status === "authenticated" &&
                        permissions.includes("event:write") ? (
                          <Button
                            className={styles.actionIconButton}
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(
                                `/events/${event.ID}/edit?event_type=coscon`,
                              );
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
                              `${window.location.href.replace("/coscon", "")}/${event.ID}`,
                            );
                            message.success("链接已复制到剪贴板");
                          }}
                          icon={<Share2 className={styles.actionIcon} />}
                          title={translateUiText("分享活动")}
                        />

                        <Button
                          className={styles.actionIconButton}
                          onClick={(e) => {
                            e.preventDefault();
                            if (event.twitter) {
                              window.open(event.twitter, "_blank");
                            }
                          }}
                          icon={<SiX className={styles.actionIcon} />}
                          title={translateUiText("查看推文")}
                        />

                        {status === "authenticated" &&
                        permissions.includes("event:write") ? (
                          <Popconfirm
                            title={translateUiText("删除活动")}
                            description={translateUiText(
                              "你确定删除这个活动吗？",
                            )}
                            okText={translateUiText("是")}
                            cancelText={translateUiText("否")}
                            onConfirm={() => handleDeleteEvent(event.ID)}
                          >
                            <Button
                              className={styles.actionIconButton}
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              icon={<Trash2 className={styles.actionIcon} />}
                              title={translateUiText("删除活动")}
                              danger
                            />
                          </Popconfirm>
                        ) : null}
                      </div>
                    </div>
                  </div>
                }
              >
                <div className={styles.cardBody}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>

                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <Calendar className={styles.metaIcon} />
                      <span>{formatTime(event.start_time)}</span>
                    </div>
                    <div className={styles.metaItem}>
                      {event.event_mode === "线上活动" ? (
                        <>
                          <Globe className={styles.metaIcon} />
                          <span className={styles.locationText}>
                            <LocalizedText>{"线上活动"}</LocalizedText>
                          </span>
                        </>
                      ) : (
                        <>
                          <MapPin className={styles.metaIcon} />
                          <span className={styles.locationText}>
                            {event.location || "未指定地点"}
                          </span>
                        </>
                      )}
                    </div>
                    {event.participants !== 0 && (
                      <div className={styles.metaItem}>
                        <Users className={styles.metaIcon} />
                        <span>{event.participants || ""}</span>
                      </div>
                    )}
                  </div>
                  {event.tags && event.tags.length > 0 && (
                    <div className={styles.cardTags}>
                      {event.tags
                        .slice(0, 3)
                        .map((tag: string, index: number) => (
                          <Tag key={index} className={styles.eventTag}>
                            {tag}
                          </Tag>
                        ))}
                      {event.tags.length > 3 && (
                        <Tag className={styles.moreTag}>
                          +{event.tags.length - 3}
                        </Tag>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
