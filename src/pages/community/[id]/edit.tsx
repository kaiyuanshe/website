import { useState, useEffect } from 'react'
import {
    Form,
    Input,
    DatePicker,
    Upload,
    Button,
    Card,
    App as AntdApp,
    Spin
} from 'antd'
import { UploadIcon, Save, X } from 'lucide-react'
import styles from './edit.module.css'
import UploadCardImg from '@/components/uploadCardImg/UploadCardImg'
import router, { useRouter } from 'next/router'
import { usePermissionGuard } from '@/hooks/usePermissionGuard'
import dayjs from 'dayjs'
import { getCommunity, updateCommunity } from '@/pages/api/comunity'

const { TextArea } = Input

export default function EditCommunityPage() {
    const { message } = AntdApp.useApp()
    const [form] = Form.useForm()
    const router = useRouter()
    const { id } = router.query
    const rId = Array.isArray(id) ? id[0] : id


    // 权限检查
    const { isLoading, hasPermission } = usePermissionGuard('event:write')
    const [previewUrl, setPreviewUrl] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoadingDetail, setIsLoadingDetail] = useState(false)
    const [cloudinaryImg, setCloudinaryImg] = useState<Record<string, unknown>>()

    // 从路由获取社区ID
    useEffect(() => {
        if (!router.isReady || !rId) return
        fetchCommunityDetail(rId)
    }, [router.query])

    // 获取社区详情
    const fetchCommunityDetail = async (id: string) => {
        try {
            setIsLoadingDetail(true)
            const result = await getCommunity(id)
            if (result.success && result.data) {
                const community = result.data

                // 设置表单数据
                form.setFieldsValue({
                    cityName: community.city,
                    description: community.intro,
                    createTime: community.start_date ? dayjs(community.start_date) : null,
                    applyLink: community.register_link
                })

                // 设置预览图片
                if (community.cover) {
                    setPreviewUrl(community.cover)
                    setCloudinaryImg({ secure_url: community.cover })
                }
            } else {
                message.error('获取社区详情失败')
                router.push('/community')
            }
        } catch (error: unknown) {
            console.error('获取社区详情失败:', error)
            message.error('获取社区详情失败')
            router.push('/community')
        } finally {
            setIsLoadingDetail(false)
        }
    }

    const handleSubmit = async (values: Record<string, unknown>) => {
        try {
            console.log('表单数据:', values)
            setIsSubmitting(true)

            // 格式化日期
            const formatDate = (date: any) => {
                if (!date) return ''
                return date.format('YYYY-MM-DD HH:MM:ss')
            }

            const updateCommunityRequest = {
                city: String(values.cityName || ''),
                intro: String(values.description || ''),
                cover: String(cloudinaryImg?.secure_url || ''),
                register_link: String(values.applyLink || ''),
                start_date: formatDate(values.createTime) || ''
            }

            console.log('提交数据:', updateCommunityRequest)

            // 调用更新社区接口
            const result = await updateCommunity(rId, updateCommunityRequest)
            if (result.success) {
                message.success(result.message || '更新社区成功')
                router.push('/community')
            } else {
                message.error(result.message || '更新社区失败')
            }
        } catch (error: unknown) {
            console.error('更新社区失败:', error)
            message.error('更新社区出错，请重试')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleReset = () => {
        router.push('/community')
    }

    // 如果正在加载权限，显示加载状态
    if (isLoading) {
        return (
            <div className={styles.container} style={{ textAlign: 'center', padding: '100px 0' }}>
                <Spin size="large" />
                <p style={{ marginTop: '16px' }}>正在验证访问权限...</p>
            </div>
        )
    }

    // 如果正在加载详情，显示加载状态
    if (isLoadingDetail) {
        return (
            <div className={styles.container} style={{ textAlign: 'center', padding: '100px 0' }}>
                <Spin size="large" />
                <p style={{ marginTop: '16px' }}>正在加载社区数据...</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>编辑城市社区</h1>
                <p className={styles.subtitle}>编辑开源社城市社区信息</p>
            </div>

            <Card className={styles.formCard}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className={styles.form}
                >
                    <Form.Item
                        label="城市名称"
                        name="cityName"
                        rules={[{ required: true, message: '请输入城市名称' }]}
                    >
                        <Input
                            size="large"
                            placeholder="例如：北京、上海、深圳"
                            className={styles.input}
                        />
                    </Form.Item>

                    <Form.Item
                        label="社区介绍"
                        name="description"
                        rules={[{ required: true, message: '请输入社区介绍' }]}
                    >
                        <TextArea
                            rows={5}
                            placeholder="请描述这个城市社区的特色、活动和目标..."
                            className={styles.textarea}
                        />
                    </Form.Item>

                    <Form.Item
                        label="城市 Logo"
                        name="logo"
                        rules={[{ message: '请上传城市 Logo' }]}
                    >
                        <UploadCardImg
                            previewUrl={previewUrl}
                            setPreviewUrl={setPreviewUrl}
                            cloudinaryImg={cloudinaryImg}
                            setCloudinaryImg={setCloudinaryImg}
                            form={form}
                        />
                    </Form.Item>

                    <Form.Item
                        label="创建时间"
                        name="createTime"
                        rules={[{ required: true, message: '请选择创建时间' }]}
                    >
                        <DatePicker
                            size="large"
                            style={{ width: '100%' }}
                            placeholder="选择日期"
                            className={styles.datePicker}
                        />
                    </Form.Item>

                    <Form.Item
                        label="申请链接"
                        name="applyLink"
                        rules={[
                            { required: true, message: '请输入申请链接' },
                            { type: 'url', message: '请输入有效的 URL' }
                        ]}
                    >
                        <Input
                            size="large"
                            placeholder="https://example.com/apply"
                            className={styles.input}
                        />
                    </Form.Item>

                    <Form.Item className={styles.actions}>
                        <Button
                            size="large"
                            onClick={handleReset}
                            icon={<X size={18} />}
                            className={styles.cancelBtn}
                            disabled={isSubmitting}
                        >
                            取消
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            icon={<Save size={18} />}
                            className={styles.submitBtn}
                            loading={isSubmitting}
                            disabled={isSubmitting}
                        >
                            更新社区
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}