import { useCallback, useEffect, useState } from 'react'
import {
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Card,
  Tag,
  App as AntdApp,
  Select,
  Spin
} from 'antd'
import type { InputProps } from 'antd'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Globe,
  FileText,
  ImageIcon,
  Save,
  Plus,
  X
} from 'lucide-react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './edit.module.css'
import UploadCardImg from '@/components/uploadCardImg/UploadCardImg'

import { getEventById, updateEvent } from '@/pages/api/event'
import dynamic from 'next/dynamic'

// const QuillEditor = dynamic(() => import('@/components/quillEditor/QuillEditor'), { ssr: false });
const VditorEditor = dynamic(
  () => import('@/components/vditorEditor/VditorEditor'),
  { ssr: false }
)

import { usePermissionGuard } from '@/hooks/usePermissionGuard'

type EventMode = '线上活动' | '线下活动'

const LocationInput = ({
  eventMode,
  ...props
}: {
  eventMode: EventMode
  props: InputProps
}) => {
  return (
    <div className={styles.inputWithIcon}>
      {eventMode === '线上活动' ? (
        <Globe className={styles.inputIcon} />
      ) : (
        <MapPin className={styles.inputIcon} />
      )}
      <Input
        {...props}
        placeholder={
          eventMode === '线上活动' ? '请输入会议链接' : '请输入详细地址'
        }
        className={styles.inputWithIconField}
      />
    </div>
  )
}

const XInput = (props: InputProps) => {
  return (
    <div className={styles.inputWithIcon}>
      <X className={styles.inputIcon} />
      <Input
        {...props}
        placeholder="请输入推文链接"
        className={styles.inputWithIconField}
      />
    </div>
  )
}

export function formatTime(isoTime: string): string {
  return dayjs(isoTime).format('YYYY-MM-DD HH:mm')
}

// 从 Cloudinary URL 中提取 public_id
function extractPublicIdFromUrl(url: string): string {
  if (!url) return ''

  // Cloudinary URL 格式: https://res.cloudinary.com/{cloud_name}/{resource_type}/{type}/{version?}/{folder}/{public_id}.{format}
  // 提取从 upload/ 后面到文件扩展名之前的部分
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/)
  return match ? match[1] : ''
}

export default function EditEventPage() {
  const { message } = AntdApp.useApp()
  const [form] = Form.useForm()
  const router = useRouter()
  const { id } = router.query // 路由参数应该叫 id，不是 ids
  const rId = Array.isArray(id) ? id[0] : id

  // 权限检查
  const { isLoading: permissionLoading, hasPermission } =
    usePermissionGuard('event:write')

  const [eventMode, setEventMode] = useState<EventMode>('线上活动')
  const [tags, setTags] = useState<string[]>(['技术分享'])
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [eventType, setEventType] = useState<string>('')
  const [cloudinaryImg, setCloudinaryImg] = useState<
    { public_id: string; secure_url: string } | undefined
  >()
  const [event, setEvent] = useState<{
    ID: number
    title: string
    description: string
    event_mode: string
    event_type: string
    link: string
    location: string
    start_time: string
    end_time: string
    cover_img: string
    tags: string[]
    twitter: string
    event_setting: number
    bage_link: string
    registration_link: string
    registration_deadline: string
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [eventSetting, setEventSetting] = useState<number>()

  // 格式化时间为字符串，保持UTC格式
  const formatDateTime = (
    date: { format: (format: string) => string },
    time: { format: (format: string) => string }
  ) => {
    if (!date || !time) return ''

    const dateStr = date.format('YYYY-MM-DD')
    const timeStr = time.format('HH:mm:ss')
    return `${dateStr} ${timeStr}`
  }

  const handleVditorEditorChange = useCallback(
    (value: string) => {
      form.setFieldValue('description', value)
    },
    [form]
  )

  const handleSubmit = async (values: {
    title: string
    eventSetting: number
    bageLink: string
    description: string
    eventMode: string
    eventType: string
    location: string
    startDate: { format: (format: string) => string }
    startTime: { format: (format: string) => string }
    endDate: { format: (format: string) => string }
    endTime: { format: (format: string) => string }
    twitter: string
    registrationLink: string
    registrationDeadline?: { format: (format: string) => string }
  }) => {
    try {
      setIsSubmitting(true)

      const updateEventRequest = {
        title: values.title || '',
        description: values.description || '',
        event_mode: values.eventMode as '线上活动' | '线下活动',
        event_type: values.eventType as 'meetup' | 'ama' | 'hackathon' | 'workshop',
        location: eventMode === '线下活动' ? values.location || '' : '',
        link: eventMode === '线上活动' ? values.location || '' : '',
        start_time: formatDateTime(values.startDate, values.startTime),
        end_time: formatDateTime(values.endDate, values.endTime),
        cover_img: cloudinaryImg?.secure_url || previewUrl, // 当用户未修改封面则使用详情返回的
        tags: tags,
        twitter: values.twitter,
        event_setting: values.eventSetting,
        bage_link: values.bageLink,
        registration_link: values.registrationLink,
        registration_deadline: values.registrationDeadline
          ? values.registrationDeadline.format('YYYY-MM-DD HH:mm:ss')
          : ''
      }

      const result = await updateEvent(String(event.ID), updateEventRequest)

      if (result.success) {
        message.success(result.message)
        // 如果活动配置是跳转到百格网站则跳转回路由/events/coscon
        if (values.eventSetting === 2) {
          router.push('/events/coscon')
        } else {
          router.push(`/events/${event.ID}`)
        }
      } else {
        message.error(result.message || '创建活动失败')
      }
    } catch (error: unknown) {
      console.error('创建活动失败:', error)
      message.error('创建活动失败，请重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddTag = () => {
    if (inputValue && !tags.includes(inputValue)) {
      const newTags = [...tags, inputValue]
      setTags(newTags)
      setInputValue('')
      console.log('添加标签后:', newTags)
    }
    setInputVisible(false)
  }

  const handleRemoveTag = (tagToRemove: string) => {
    const newTags = tags.filter(tag => tag !== tagToRemove)
    setTags(newTags)
    console.log('删除标签后:', newTags)
  }

  useEffect(() => {
    if (!router.isReady || !rId) return

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await getEventById(rId)

        if (response.success) {
          const data = response.data
          setEvent(data)

          // 动态设置 eventMode，以便正确渲染
          setEventMode(data?.event_mode as EventMode)
          setEventSetting(data?.event_setting === 2 ? 2 : 1)

          // 直接使用UTC时间，不进行时区转换
          const startTime = dayjs.utc(data?.start_time)
          const endTime = dayjs.utc(data?.end_time)
          
          console.log('原始 start_time:', data?.start_time, '-> 显示为:', startTime.format('YYYY-MM-DD HH:mm:ss'))
          console.log('原始 end_time:', data?.end_time, '-> 显示为:', endTime.format('YYYY-MM-DD HH:mm:ss'))
          
          form.setFieldsValue({
            title: data?.title,
            description: data?.description,
            eventMode: data?.event_mode,
            eventType: data?.event_type,
            // 根据活动形式来填充 location 字段
            location:
              data?.event_mode === '线上活动' ? data?.link : data?.location,
            cover: data?.cover_img,
            startDate: startTime,
            startTime: startTime,
            endDate: endTime,
            endTime: endTime,
            twitter: data?.twitter,
            eventSetting: data?.event_setting,
            bageLink: data?.bage_link,
            registrationLink: data?.registration_link,
            registrationDeadline: data?.registration_deadline
              ? dayjs.utc(data?.registration_deadline)
              : null
          })

          setPreviewUrl(data?.cover_img || '')
          setTags(data?.tags || [])

          // 如果有封面图片，从 URL 中提取 public_id 并设置 cloudinaryImg
          if (data?.cover_img) {
            const publicId = extractPublicIdFromUrl(data.cover_img)
            if (publicId) {
              setCloudinaryImg({
                public_id: publicId,
                secure_url: data.cover_img
              })
            }
          }
        }
      } catch {
        message.error('加载失败')
        setEvent(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router.isReady, rId, form, message])

  // 初始化时获取 URL 参数
  useEffect(() => {
    if (!router.isReady) return

    const queryEventType = router.query.event_type as string
    if (queryEventType) {
      setEventType(queryEventType)
    }
  }, [router.isReady, router.query.event_type])

  // 如果正在加载权限，显示加载状态
  if (permissionLoading) {
    return (
      <div
        className={`${styles.container} nav-t-top`}
        style={{ textAlign: 'center', padding: '100px 0' }}
      >
        <Spin size="large" />
        <p style={{ marginTop: '16px' }}>正在验证访问权限...</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
        <p>加载中...</p>
      </div>
    )
  }

  if (!loading && !event) {
    return (
      <div className={styles.error}>
        <h2>活动不存在</h2>
        <p>抱歉，找不到您要查看的活动</p>
        <Link 
          href={router.query.event_type === 'coscon' ? '/events/coscon' : '/events'} 
          className={styles.backButton}
        >
          {router.query.event_type === 'coscon' ? '返回中国开源年会' : '返回活动列表'}
        </Link>
      </div>
    )
  }

  return (
    <div className={`${styles.container} nav-t-top`}>
      <div className={styles.header}>
        <Link 
          href={router.query.event_type === 'coscon' ? '/events/coscon' : '/events'} 
          className={styles.backButton}
        >
          <ArrowLeft className={styles.backIcon} />
          {router.query.event_type === 'coscon' ? '返回中国开源年会' : '返回活动列表'}
        </Link>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className={styles.form}
        // initialValues={{
        //     eventMode: '线上活动',
        //     publishImmediately: true,
        // }}
      >
        <div className={styles.formGrid}>
          {/* 左侧表单 */}
          <div className={styles.leftColumn}>
            {/* 基本信息 */}
            <Card className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <FileText className={styles.sectionIcon} />
                基本信息
              </h2>

              <Form.Item
                label="活动标题"
                name="title"
                rules={[{ required: true, message: '请输入活动标题' }]}
              >
                <Input placeholder="请输入活动标题" className={styles.input} />
              </Form.Item>

              <Form.Item
                label="活动描述"
                name="description"
                rules={[{ required: true, message: '请输入活动描述' }]}
              >
                <VditorEditor
                  value={form.getFieldValue('description')}
                  onChange={handleVditorEditorChange}
                />
              </Form.Item>
            </Card>

            <Card className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Users className={styles.sectionIcon} />
                活动形式 & 类型
              </h2>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {/* 活动形式 Select */}
                <Form.Item
                  label="活动形式"
                  name="eventMode"
                  rules={[{ required: true, message: '请选择活动形式' }]}
                  style={{ flex: 1 }}
                >
                  <Select
                    placeholder="请选择活动形式"
                    options={[
                      { label: '线上活动', value: '线上活动' },
                      { label: '线下活动', value: '线下活动' }
                    ]}
                    onChange={value => setEventMode(value)}
                  />
                </Form.Item>

                {/* 活动类型 Select */}
                <Form.Item
                  label="活动类型"
                  name="eventType"
                  rules={[{ required: true, message: '请选择活动类型' }]}
                  style={{ flex: 1 }}
                >
                  <Select
                    placeholder="请选择活动类型"
                    disabled={!!eventType}
                    options={[
                      { label: '社区活动', value: 'community' },
                      { label: '开源年会', value: 'coscon' }
                    ]}
                  />
                </Form.Item>

                {eventType === 'coscon' && (
                  <div className={styles.formRow}>
                    <Form.Item
                      label="活动配置"
                      name="eventSetting"
                      rules={[{ required: true, message: '请选活动配置' }]}
                      className={styles.fixedWidthItem}
                    >
                      <Select
                        placeholder="请选择活动配置"
                        value={eventSetting}
                        options={[
                          { label: '自行配置', value: 1 },
                          { label: '跳转到百格网站', value: 2 }
                        ]}
                        onChange={value => setEventSetting(value)}
                      />
                    </Form.Item>

                    {eventSetting == 2 && (
                      <Form.Item
                        label="百格链接"
                        name="bageLink"
                        rules={[
                          {
                            required: true,
                            message: '请输入百格链接'
                          }
                        ]}
                        className={styles.flexibleItem}
                      >
                        <Input
                          placeholder="请输入百格链接"
                          className={styles.inputWithIconField}
                        />
                      </Form.Item>
                    )}
                  </div>
                )}
              </div>
            </Card>

            {/* 时间和地点 */}
            <Card className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Calendar className={styles.sectionIcon} />
                时间和地点
              </h2>

              <div className={styles.formRow}>
                <Form.Item
                  label="开始日期"
                  name="startDate"
                  rules={[{ required: true, message: '请选择开始日期' }]}
                >
                  <DatePicker className={styles.input} />
                </Form.Item>
                <Form.Item
                  label="开始时间"
                  name="startTime"
                  rules={[{ required: true, message: '请选择开始时间' }]}
                >
                  <TimePicker className={styles.input} format="HH:mm" />
                </Form.Item>
              </div>

              <div className={styles.formRow}>
                <Form.Item label="结束日期" name="endDate">
                  <DatePicker className={styles.input} />
                </Form.Item>
                <Form.Item label="结束时间" name="endTime">
                  <TimePicker className={styles.input} format="HH:mm" />
                </Form.Item>
              </div>

              <Form.Item
                label={eventMode === '线上活动' ? '活动链接' : '活动地址'}
                name="location"
                rules={[
                  {
                    required: true,
                    message: `请输入${eventMode === '线上活动' ? '活动链接' : '活动地址'}`
                  }
                ]}
              >
                <LocationInput
                  eventMode={eventMode}
                  {...form.getFieldValue('location')}
                />
              </Form.Item>
              <Form.Item
                label="推文链接"
                name="twitter"
                rules={[
                  {
                    required: true,
                    message: `请输入推文链接`
                  }
                ]}
              >
                <XInput />
              </Form.Item>
            </Card>
          </div>

          {/* 右侧表单 */}
          <div className={styles.rightColumn}>
            {/* 活动封面 */}
            <Card className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <ImageIcon className={styles.sectionIcon} />
                活动封面
              </h2>
              <Form.Item
                name="cover"
                rules={[{ required: true, message: '请上传活动封面' }]}
              >
                <UploadCardImg
                  previewUrl={previewUrl}
                  setPreviewUrl={setPreviewUrl}
                  cloudinaryImg={cloudinaryImg || null}
                  setCloudinaryImg={img => setCloudinaryImg(img || undefined)}
                  form={form as any}
                />
              </Form.Item>
            </Card>

            {/* 标签 */}
            <Card className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Plus className={styles.sectionIcon} />
                活动标签
              </h2>

              <div className={styles.tagsContainer}>
                {tags.map((tag, index) => (
                  <Tag
                    key={index}
                    closable
                    onClose={() => handleRemoveTag(tag)}
                    className={styles.tag}
                  >
                    {tag}
                  </Tag>
                ))}
                {inputVisible ? (
                  <Input
                    type="text"
                    size="small"
                    className={styles.tagInput}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onBlur={handleAddTag}
                    onPressEnter={handleAddTag}
                    autoFocus
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setInputVisible(true)}
                    className={styles.addTagButton}
                  >
                    <Plus className={styles.addTagIcon} />
                    添加标签
                  </button>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* 提交按钮 */}
        <div className={styles.submitSection}>
          <Button onClick={() => router.back()} className={styles.cancelButton}>
            取消
          </Button>
          {/* <Button
            className={styles.submitButton}
            loading={isSavingDraft}
            disabled={isSavingDraft}
            onClick={handleSaveDraft}
          >
            <NotepadTextDashed className={styles.submitIcon} />
            {isSavingDraft ? '保存中...' : '保存草稿'}
          </Button> */}
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            <Save className={styles.submitIcon} />
            {isSubmitting ? '更新中...' : '更新活动'}
          </Button>
        </div>
      </Form>
    </div>
  )
}
