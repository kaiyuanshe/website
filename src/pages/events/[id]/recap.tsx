import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button, Input, Form, message } from "antd";
import { ArrowLeft, Calendar, Users, Video, Mic, Save } from "lucide-react";
import styles from "./recap.module.css";
import { SiX } from "react-icons/si";
import dynamic from "next/dynamic";
import { getEventById } from "@/pages/api/event";
import { createRecap } from "@/pages/api/recap";
import LocalizedText from "@/components/LocalizedText";
import { useTranslation } from "@/hooks/useTranslation";

const QuillEditor = dynamic(
  () => import("@/components/quillEditor/QuillEditor"),
  { ssr: false },
);

interface RecapFormData {
  content: string;
  video: string;
  recording: string;
  twitter: string;
}

export default function EventRecap() {
  const { locale, translateText: translateUiText } = useTranslation();
  const [form] = Form.useForm();
  const [event, setEvent] = useState<{
    ID: string;
    title: string;
    description: string;
    cover_img: string;
    start_time: string;
    participants: number;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const rId = Array.isArray(id) ? id[0] : id;

  useEffect(() => {
    if (!router.isReady || !rId) return;

    const fetchData = async () => {
      try {
        const response = await getEventById(rId);
        console.log("获取活动详情:", response);
        setEvent(response?.data);
      } catch {
        message.error("加载失败");
        setEvent(null);
      } finally {
        // Cleanup if needed
      }
    };
    fetchData();
  }, [router.isReady, id, rId]);

  const handleSubmit = async (values: RecapFormData) => {
    setSubmitting(true);
    try {
      const res = await createRecap({
        event_id: Number(id),
        ...values,
      });

      if (res.success) {
        message.success("活动回顾发布成功！");
        router.push(`/events/${id}`);
      } else {
        message.error(res.message || "发布失败，请重试");
      }
    } catch {
      message.error("发布失败，请重试");
    } finally {
      setSubmitting(false);
    }
  };

  const truncatedDescription = useMemo(() => {
    if (!event?.description) return "";

    // 1. 用 DOMParser 解析 HTML 字符串
    const parser = new DOMParser();
    const doc = parser.parseFromString(event.description, "text/html");

    // 2. 移除所有 <img> 标签
    const images = doc.querySelectorAll("img");
    images.forEach((img) => img.remove());

    // 3. 提取纯文本（去除所有 HTML 标签后的内容）
    const textContent = doc.body.textContent || "";

    // 4. 截取前 50 个字符，添加省略号
    const trimmedText =
      textContent.length > 50 ? textContent.slice(0, 50) + "..." : textContent;

    // 5. 返回 HTML 格式（可以加 <span> 包装）
    return `<span>${trimmedText}</span>`;
  }, [event?.description]);

  // 富文本处理
  const handleQuillEditorChange = useCallback(
    (value: string) => {
      form.setFieldValue("content", value);
    },
    [form],
  );

  if (!event) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.loading}>
            <LocalizedText>{"加载中..."}</LocalizedText>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} nav-t-top`}>
      <div className={styles.content}>
        {/* 返回按钮 */}
        <div className={styles.backButton}>
          <Button
            type="text"
            icon={<ArrowLeft size={16} />}
            onClick={() => router.push(`/events/${id}`)}
            className={styles.backBtn}
          >
            <LocalizedText>{"返回活动详情"}</LocalizedText>
          </Button>
        </div>

        {/* 活动信息概览 */}
        <div className={styles.eventOverview}>
          <div className={styles.eventInfo}>
            <div className={styles.eventImage}>
              <Image
                src={event.cover_img || "/placeholder.svg"}
                alt={event.title}
                width={300}
                height={200}
              />
            </div>

            <div className={styles.eventDetails}>
              <h1 className={styles.eventTitle}>{event.title}</h1>
              <p
                className={styles.eventDescription}
                dangerouslySetInnerHTML={{ __html: truncatedDescription }}
              />

              <div className={styles.eventMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>
                    {new Date(event.start_time).toLocaleDateString(locale)}
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <Users size={16} />
                  <span>
                    {event.participants}
                    <LocalizedText>{"人参与"}</LocalizedText>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 表单标题 */}
        <h2 className={styles.formTitle}>
          <LocalizedText>{"添加活动回顾"}</LocalizedText>
        </h2>

        {/* 两栏布局表单 */}
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className={styles.form}
        >
          <div className={styles.formLayout}>
            {/* 左侧：活动回顾内容 */}
            <div className={styles.leftColumn}>
              <Form.Item
                name="content"
                label={translateUiText("活动回顾内容")}
                rules={[
                  { required: true, message: "请输入活动回顾内容" },
                  { min: 10, message: "回顾内容至少需要10个字符" },
                ]}
              >
                <QuillEditor
                  minHeight={500}
                  value={form.getFieldValue("content")}
                  onChange={handleQuillEditorChange}
                />
              </Form.Item>
            </div>

            {/* 右侧：媒体链接和操作 */}
            <div className={styles.rightColumn}>
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  <LocalizedText>{"媒体资源"}</LocalizedText>
                </h3>
                <Form.Item
                  name="twitter"
                  label={translateUiText("X 推文链接")}
                  rules={[
                    {
                      type: "url",
                      message: "请输入有效的链接地址",
                    },
                  ]}
                >
                  <Input
                    prefix={<SiX size={16} />}
                    placeholder="https://x.com/your-tweet-link"
                    className={styles.input}
                  />
                </Form.Item>
                <Form.Item
                  name="video"
                  label={translateUiText("活动视频链接")}
                  rules={[
                    {
                      type: "url",
                      message: "请输入有效的链接地址",
                    },
                  ]}
                >
                  <Input
                    prefix={<Video size={16} />}
                    placeholder="https://example.com/video.mp4"
                    className={styles.input}
                  />
                </Form.Item>

                <Form.Item
                  name="recording"
                  label={translateUiText("活动录音链接")}
                  rules={[
                    {
                      type: "url",
                      message: "请输入有效的链接地址",
                    },
                  ]}
                >
                  <Input
                    prefix={<Mic size={16} />}
                    placeholder="https://example.com/audio.mp3"
                    className={styles.input}
                  />
                </Form.Item>

                <div className={styles.mediaNote}>
                  <p>
                    <LocalizedText>{"💡 提示："}</LocalizedText>
                  </p>
                  <ul>
                    <li>
                      <LocalizedText>{"媒体资源链接为可选项"}</LocalizedText>
                    </li>
                    <li>
                      <LocalizedText>
                        {
                          "建议使用常用的视频平台发布的视频链接，如 B站，YouTube"
                        }
                      </LocalizedText>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 提交按钮 */}
              <div className={styles.submitSection}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={submitting}
                  icon={<Save size={16} />}
                  className={styles.submitButton}
                  size="large"
                  block
                >
                  {submitting
                    ? translateUiText("发布中...")
                    : translateUiText("发布回顾")}
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
