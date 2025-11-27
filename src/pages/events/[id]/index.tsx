import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { App as AntdApp, Image, Button } from 'antd'
import { User, UserPlus, FileText, Upload, Users, Settings } from 'lucide-react'

import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

import Link from 'next/link'
import styles from './index.module.css'
import { useAuth } from '@/contexts/AuthContext'
import {
  getEventById,
  updateEventPublishStatus,
  getSessionsByEvent
} from '@/pages/api/event'
import { sanitizeMarkdown } from '@/lib/markdown'

type ContentTab = 'detail'

// 定义类型
interface Speaker {
  name: string
  title: string
  avatar?: string
}

interface AgendaItem {
  start_time: string
  end_time: string
  topic: string
  speakers: Speaker[]
}

interface Session {
  ID: number
  title: string
  address: string
  description: string
  producer: string
  volunteer: string
  agendas: AgendaItem[]
}

export default function EventDetailPage() {
  const { message } = AntdApp.useApp()
  const router = useRouter()
  const { id } = router.query
  const rId = Array.isArray(id) ? id[0] : id

  const [activeContentTab] = useState<ContentTab>('detail')
  const [sessions, setSessions] = useState<Session[]>([])
  const [sessionsLoading, setSessionsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // 检测屏幕尺寸
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [event, setEvent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'intro' | 'recap'>('intro')

  // 使用统一的认证上下文，避免重复调用 useSession
  const { session, status } = useAuth()

  const permissions = session?.user?.permissions || []

  // parseMarkdown将返回的markdown转为html展示
  const [eventContent, setEventContent] = useState<string>('')

  useEffect(() => {
    if (event?.description) {
      sanitizeMarkdown(event.description).then(htmlContent => {
        setEventContent(htmlContent)
      })
    }
  }, [event?.description])

  // 获取会场数据
  const fetchSessions = async () => {
    if (!rId) return

    try {
      setSessionsLoading(true)
      const result = await getSessionsByEvent(rId)
      if (result.success && result.data) {
        setSessions(result.data)
      } else {
        message.error(result.message || '获取会场数据失败')
        setSessions([])
      }
    } catch (error) {
      console.error('获取会场数据异常:', error)
      message.error('获取会场数据失败')
      setSessions([])
    } finally {
      setSessionsLoading(false)
    }
  }

  useEffect(() => {
    if (activeContentTab === 'detail' && rId) {
      fetchSessions()
    }
  }, [activeContentTab, rId])

  const handleUpdatePublishStatus = async () => {
    try {
      const result = await updateEventPublishStatus(event.ID, 2)
      if (result.success) {
        router.reload()
        message.success(result.message)
      } else {
        message.error(result.message || '审核出错')
      }
    } catch {
      message.error('审核出错，请重试')
    }
  }

  useEffect(() => {
    if (!router.isReady || !rId) return

    const fetchData = async () => {
      setLoading(true)
      try {
        // 获取活动详情
        const eventRes = await getEventById(rId)
        console.log('获取活动详情:', eventRes)
        setEvent(eventRes?.data ?? null)
      } catch {
        message.error('加载失败')
        setEvent(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router.isReady, rId, message])

  const handleShare = (platform?: string) => {
    if (platform === 'copy') {
      navigator.clipboard.writeText(window.location.href)
      message.success('链接已复制到剪贴板')
    } else if (platform === 'twitter') {
      const text = `${event.title} - ${window.location.href}`
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
      )
    }
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>加载中...</p>
      </div>
    )
  }

  if (
    !event ||
    (event.publish_status === 1 && !permissions.includes('event:write'))
  ) {
    return (
      <div className={styles.error}>
        <h2>活动不存在</h2>
        <p>抱歉，找不到您要查看的活动</p>
        <Link href="/events" className={styles.backButton}>
          返回活动列表
        </Link>
      </div>
    )
  }

  if (event?.event_type === 'community') {
    return (
      <div className={`${styles.container} nav-t-top`}>
        {/* ======== 社区活动专属布局 ======== */}
        <div className={styles.communityLayout}>
          {/* 活动标题与关键信息 */}
          <div className={styles.communityHeader}>
            <h1 className={styles.communityTitle}>{event.title}</h1>

            <div className={styles.communityMeta}>
              <span className={styles.metaItem}>📍 {event.location}</span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.metaItem}>
                🗓️{' '}
                {new Date(event.start_time).toLocaleDateString('zh-CN', {
                  month: 'long',
                  day: 'numeric'
                })}{' '}
                —{' '}
                {new Date(event.end_time).toLocaleDateString('zh-CN', {
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          {/* 简介 */}
          <div className="marked-paper">
            {/* <h2 className={styles.sectionTitle}>{article.title}</h2> */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: eventContent }}
            />
          </div>

          {/* <div className={styles.communityActions}>
      <Button
        type="primary"
        size="large"
        onClick={() => window.open(event.twitter, '_blank')}
      >
        查看详情
      </Button>

      {event.registration_link && (
        <Button
          size="large"
          onClick={() => window.open(event.registration_link, '_blank')}
        >
          立即报名
        </Button>
      )}
    </div> */}
        </div>
      </div>
    )
  }

  // 渲染活动详情组件
  const renderDetailSection = () => {
    const sectionProps = {
      sessions,
      sessionsLoading,
      isMobile
    }
    return <DetailSection {...sectionProps} />
  }

  return (
    <div className={`${styles.container} nav-t-top`}>
      <div className={styles.mainImage}>
        <Image
          src={event.cover_img || '/placeholder.svg'}
          alt={event.title}
          className={styles.coverImage}
          preview={false}
          width="100%"
          height={360}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={styles.actionButtons}>
        <div className={styles.buttonContainer}>
          {event.apply_link &&
            <Button
              type="primary"
              icon={<UserPlus size={18} />}
              size="large"
              className={styles.actionButton}
              onClick={() => window.open(event.apply_link , '_blank')}
            >
              志愿者/讲师报名注册
            </Button>
          }
          {event.topic_collection_link &&
            <Button
              icon={<FileText size={18} />}
              size="large"
              className={styles.actionButton}
              onClick={() => window.open(event.topic_collection_link, '_blank')}
            >
              议题征集
            </Button>
          }
          {event.courseware_submit_link &&
            <Button
              icon={<Upload size={18} />}
              size="large"
              className={styles.actionButton}
              onClick={() => window.open(event.courseware_submit_link, '_blank')}
            >
              议题课件提交
            </Button>
          }
          {event.registration_link &&
            <Button
              icon={<Users size={18} />}
              size="large"
              className={styles.actionButton}
              onClick={() => window.open(event.registration_link, '_blank')}
            >
              参会注册
            </Button>
          }
        </div>
      </div>
      <div className={styles.content}>{renderDetailSection()}</div>
    </div>
  )
}

// 定义各个组件的 Props 接口
interface SectionProps {
  sessions?: Session[]
  sessionsLoading?: boolean
  isMobile?: boolean
}

// 活动详情组件
const DetailSection = ({
  sessions = [],
  sessionsLoading,
  isMobile = false
}: SectionProps) => {
  const router = useRouter()
  const { id } = router.query
  const rId = Array.isArray(id) ? id[0] : id

  const onChange = (key: string) => {
    console.log(key)
  }

  // 会场组件
  const SessionContent: React.FC<Session> = ({
    title: name,
    address,
    description,
    producer,
    volunteer,
    agendas
  }) => {
    // 将志愿者字符串转换为数组
    const volunteerArray = volunteer
      ? volunteer
        .split(/[,;]/)
        .map(v => v.trim())
        .filter(v => v)
      : []

    return (
      <div className={styles.sessionContent}>
        <h1 className={styles.sessionTitle}>{name}</h1>
        <p className={styles.sessionAddress}>{address}</p>
        <p className={styles.sessionDescription}>{description}</p>
        <div className={styles.sessionAudit}>
          <p className={styles.sessionProducer}>
            <strong>出品人：</strong>
            {producer}
          </p>
          <p className={styles.sessionVolunteer}>
            <strong>志愿者：</strong>
            {volunteerArray.join('、 ')}
          </p>
        </div>
        {/* 议程 */}
        {agendas && agendas.length > 0 && (
          <div className={styles.agendaSection}>
            <h2 className={styles.agendaTitle}>议程</h2>
            <div className={styles.agendaList}>
              {agendas.map((item, index) => {
                return (
                  <div key={index} className={styles.agendaItem}>
                    <div className={styles.agendaTime}>
                      {formatTime(item.start_time)} -{' '}
                      {formatTime(item.end_time)}
                    </div>
                    <div className={styles.agendaTopic}>{item.topic}</div>

                    <div className={styles.agendaSpeakers}>
                      {item.speakers.map((speaker, speakerIndex) => (
                        <div key={speakerIndex} className={styles.speakerCard}>
                          <div className={styles.speakerAvatarContainer}>
                            {speaker.avatar ? (
                              <img
                                src={speaker.avatar}
                                alt={speaker.name}
                                className={styles.speakerAvatar}
                                onError={e => {
                                  e.currentTarget.style.display = 'none'
                                  const container =
                                    e.currentTarget.parentElement
                                  if (container) {
                                    container.innerHTML =
                                      '<div class="' +
                                      styles.speakerAvatarIcon +
                                      '"><svg></svg></div>'
                                  }
                                }}
                              />
                            ) : (
                              <div className={styles.speakerAvatarIcon}>
                                <User size={32} color="#666" />
                              </div>
                            )}
                          </div>
                          <div className={styles.speakerInfo}>
                            <div className={styles.speakerName}>
                              {speaker.name}
                            </div>
                            <div className={styles.speakerTitle}>
                              {speaker.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  // 格式化时间函数
  const formatTime = (timeString: string) => {
    if (!timeString) return ''
    try {
      const date = new Date(timeString)
      return date.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return timeString
    }
  }

  // 将会场数据转换为 Tabs 格式
  const getSessionTabs = (): TabsProps['items'] => {
    if (sessionsLoading) {
      return [
        {
          key: 'loading',
          label: '加载中...',
          children: <div className={styles.loading}>会场数据加载中...</div>
        }
      ]
    }

    if (sessions.length === 0) {
      return [
        {
          key: 'empty',
          label: '暂无会场',
          children: <div className={styles.empty}>暂无会场数据</div>
        }
      ]
    }

    return sessions.map((session, index) => ({
      key: session.ID.toString(),
      label: session.title || `会场${index + 1}`,
      children: <SessionContent {...session} />
    }))
  }

  const items: TabsProps['items'] = getSessionTabs()
  const { session } = useAuth()
  const permissions = session?.user?.permissions || []

  return (
    <div className={styles.tabContent}>
      <div className={styles.tabHeader}>
        {permissions.includes('event:write') && (
          <Button
            icon={<Settings size={16} />}
            className={styles.configButton}
            onClick={() => router.push(`/events/${rId}/venues`)}
          >
            年会配置
          </Button>
        )}
      </div>
      <Tabs
        defaultActiveKey={sessions.length > 0 ? sessions[0].ID.toString() : '1'}
        size="large"
        items={items}
        onChange={onChange}
        tabPosition={isMobile ? 'top' : 'left'}
        className={isMobile ? styles.mobileTabs : ''}
      />
    </div>
  )
}
