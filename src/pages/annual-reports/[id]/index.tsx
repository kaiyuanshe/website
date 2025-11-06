import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link' 
import { useRouter } from 'next/router'
import { ArrowLeft, Download, Share2, Calendar, FileText, Eye } from 'lucide-react'
import { Button, Spin, Alert, Tabs, Card } from 'antd'
import type { TabsProps } from 'antd'
import styles from './index.module.css'

interface AnnualReport {
  id: string
  title: string
  year: number
  description: string
  content: string
  coverImage: string
  publishDate: string
  downloadCount: number
  pdfUrl: string
  fileSize: string
  highlights: string[]
}

// 模拟年度报告详细数据
const mockReportsData: Record<string, AnnualReport> = {
  '2023': {
    id: '2023',
    title: '2023年开源社年度报告',
    year: 2023,
    description: '回顾2023年开源社在社区建设、技术推广、人才培养等方面的重要成果和里程碑事件。本报告详细介绍了全年的活动亮点、合作项目以及未来发展规划。',
    content: `
# 2023年开源社年度报告

## 执行摘要

2023年对于开源社而言是充满挑战与机遇的一年。在全球技术快速发展的背景下，我们持续推动中国开源生态的繁荣发展，取得了一系列重要成果。

## 主要成就

### 社区建设
- 新增注册会员 **3,500** 名，总会员数突破 **25,000** 人
- 组织线上线下活动 **150+** 场次，参与人数超过 **50,000** 人次
- 新增城市社区 **8** 个，覆盖全国 **35** 个主要城市

### 项目孵化
- 成功孵化开源项目 **25** 个，涵盖AI、云原生、Web3等热门技术领域
- 项目总GitHub星标数突破 **100,000** 个
- 有 **12** 个项目进入Apache、CNCF等国际开源基金会

### 人才培养
- 开源人才认证计划覆盖 **10,000+** 人次
- 举办技术培训 **80+** 场，培养开源技术人才 **5,000+** 人
- 与 **30+** 所高校建立合作关系，推动开源教育普及

### 国际合作
- 与Linux基金会、Apache基金会等国际组织建立深度合作
- 参与国际开源会议 **20+** 场，展示中国开源成果
- 推动 **15+** 个中国开源项目走向国际

## 技术亮点

### AI开源生态
2023年是人工智能爆发的一年，开源社积极推动AI技术的开源化发展：

- 组织AI开源技术峰会，邀请国内外专家分享最新技术
- 孵化多个AI开源项目，包括自然语言处理、计算机视觉等领域
- 建立AI开源技术社区，促进技术交流与合作

### 云原生技术推广
云原生技术是现代应用开发的重要趋势：

- 举办云原生开源实践工坊 20+ 场
- 推广Kubernetes、Docker等云原生技术
- 培养云原生技术专家 1,000+ 人

### Web3与区块链
区块链技术的发展为开源带来新的机遇：

- 组建区块链开源技术委员会
- 孵化去中心化应用开源项目
- 推动区块链技术标准化

## 重要活动回顾

### 第九届中国开源年会（COSCon'23）
- 时间：2023年10月28-29日
- 地点：北京国家会议中心
- 参会人数：3,000+ 人
- 演讲嘉宾：100+ 位国内外专家
- 主题：开源赋能数字未来

### 开源之星评选
2023年开源之星评选活动得到广泛关注：
- 收到申报项目 200+ 个
- 评选出开源之星项目 20 个
- 表彰优秀开源贡献者 50 位

### 技术培训与认证
- 开源技术培训课程：30+ 门
- 在线学习平台用户：15,000+ 人
- 颁发技术认证证书：2,000+ 张

## 合作伙伴

### 战略合作伙伴
- 华为、阿里巴巴、腾讯、百度等知名企业
- 清华大学、北京大学、浙江大学等顶尖高校
- Linux基金会、Apache基金会等国际组织

### 支持企业
感谢以下企业对开源社的大力支持：
- 科技公司：50+ 家
- 投资机构：20+ 家
- 媒体合作伙伴：30+ 家

## 财务概览

### 收入来源
- 企业赞助：60%
- 会员费用：25%
- 培训收入：10%
- 其他收入：5%

### 支出分配
- 活动组织：40%
- 人员费用：35%
- 技术开发：15%
- 运营管理：10%

## 2024年展望

### 发展目标
- 会员数量突破 35,000 人
- 新增城市社区 15 个
- 孵化开源项目 40+ 个
- 培养技术人才 8,000+ 人

### 重点工作
1. **加强国际合作**：与更多国际开源组织建立合作关系
2. **推进产业落地**：促进开源技术在各行业的应用
3. **完善人才体系**：建立更完善的开源人才培养体系
4. **提升服务质量**：为会员提供更优质的服务

### 技术重点
- **AI原生开源**：推动AI技术的原生开源发展
- **边缘计算**：关注边缘计算开源技术生态
- **量子计算**：探索量子计算开源应用
- **可持续发展**：推动绿色开源技术发展

## 致谢

感谢所有开源社成员、合作伙伴、志愿者和支持者的辛勤付出和大力支持。正是因为有了大家的共同努力，开源社才能在2023年取得如此骄人的成绩。

让我们携手并进，共同推动中国开源事业的蓬勃发展！

---

**开源社理事会**  
**2024年1月**
    `,
    coverImage: '/images/annual-report-2023-cover.svg',
    publishDate: '2024-01-15',
    downloadCount: 1256,
    pdfUrl: '/documents/kaiyuanshe-annual-report-2023.pdf',
    fileSize: '15.2 MB',
    highlights: [
      '新增注册会员3,500名，总会员数突破25,000人',
      '组织线上线下活动150+场次，参与人数超过50,000人次',
      '成功孵化开源项目25个，项目总GitHub星标数突破100,000个',
      '开源人才认证计划覆盖10,000+人次',
      '与30+所高校建立合作关系'
    ]
  },
  '2022': {
    id: '2022',
    title: '2022年开源社年度报告',
    year: 2022,
    description: '展示2022年开源社在推动中国开源生态发展方面的卓越贡献。',
    content: `# 2022年开源社年度报告\n\n## 概述\n\n2022年是开源社发展的重要一年...`,
    coverImage: '/images/annual-report-2022-cover.svg',
    publishDate: '2023-02-20',
    downloadCount: 2105,
    pdfUrl: '/documents/kaiyuanshe-annual-report-2022.pdf',
    fileSize: '12.8 MB',
    highlights: [
      '社区会员数量增长45%',
      '举办大型技术会议5场',
      '孵化开源项目30个'
    ]
  },
  '2021': {
    id: '2021',
    title: '2021年开源社年度报告',
    year: 2021,
    description: '记录2021年开源社在疫情挑战下继续推进开源事业的坚韧历程。',
    content: `# 2021年开源社年度报告\n\n## 疫情下的坚持\n\n2021年全球疫情持续...`,
    coverImage: '/images/annual-report-2021-cover.svg',
    publishDate: '2022-03-10',
    downloadCount: 1876,
    pdfUrl: '/documents/kaiyuanshe-annual-report-2021.pdf',
    fileSize: '10.5 MB',
    highlights: [
      '线上活动参与度提升300%',
      '远程协作项目增加200%',
      '数字化转型全面推进'
    ]
  }
}

export default function AnnualReportDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = useState(true)
  const [report, setReport] = useState<AnnualReport | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pdfLoading] = useState(false)

  useEffect(() => {
    if (id && typeof id === 'string') {
      // 模拟API调用
      setTimeout(() => {
        const reportData = mockReportsData[id]
        if (reportData) {
          setReport(reportData)
          setError(null)
        } else {
          setError('报告未找到')
        }
        setLoading(false)
      }, 500)
    }
  }, [id])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: report?.title,
          text: report?.description,
          url: window.location.href
        })
      } catch (err) {
        console.log('分享失败:', err)
      }
    } else {
      // 降级到复制链接
      navigator.clipboard.writeText(window.location.href)
      alert('链接已复制到剪贴板')
    }
  }

  const handleDownload = () => {
    if (report?.pdfUrl) {
      const link = document.createElement('a')
      link.href = report.pdfUrl
      link.download = `${report.title}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleViewPDF = () => {
    if (report?.pdfUrl) {
      window.open(report.pdfUrl, '_blank')
    }
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <Spin size="large" />
        <p>加载中...</p>
      </div>
    )
  }

  if (error || !report) {
    return (
      <div className={styles.error}>
        <Alert
          message="加载失败"
          description={error || '报告不存在或已被移除'}
          type="error"
          showIcon
        />
        <Link href="/annual-reports">
          <Button type="primary" icon={<ArrowLeft />}>
            返回报告列表
          </Button>
        </Link>
      </div>
    )
  }

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: '报告内容',
      children: (
        <div className={styles.contentTab}>
          <div 
            className={styles.markdownContent}
            dangerouslySetInnerHTML={{ 
              __html: report.content.replace(/\n/g, '<br>').replace(/#+\s/g, '<h3>').replace(/<h3>/g, '</h3><h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
            }}
          />
        </div>
      )
    },
    {
      key: '2',
      label: 'PDF预览',
      children: (
        <div className={styles.pdfTab}>
          <div className={styles.pdfViewer}>
            <div className={styles.pdfControls}>
              <Button 
                type="primary" 
                icon={<Eye />}
                onClick={handleViewPDF}
                loading={pdfLoading}
              >
                在新窗口查看PDF
              </Button>
              <Button 
                icon={<Download />}
                onClick={handleDownload}
              >
                下载PDF ({report.fileSize})
              </Button>
            </div>
            <div className={styles.pdfPlaceholder}>
              <FileText size={64} className={styles.pdfIcon} />
              <h3>PDF文档预览</h3>
              <p>点击上方按钮在新窗口查看完整PDF文档</p>
              <p className={styles.pdfInfo}>
                文件大小: {report.fileSize} | 格式: PDF
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      key: '3',
      label: '报告亮点',
      children: (
        <div className={styles.highlightsTab}>
          <div className={styles.highlightsList}>
            {report.highlights.map((highlight, index) => (
              <Card key={index} className={styles.highlightCard}>
                <div className={styles.highlightContent}>
                  <div className={styles.highlightNumber}>{index + 1}</div>
                  <div className={styles.highlightText}>{highlight}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <Head>
        <title>{report.title} - 开源社</title>
        <meta name="description" content={report.description} />
        <meta name="keywords" content={`开源社,年度报告,${report.year},中国开源`} />
      </Head>

      <div className={styles.container}>
        {/* 导航栏 */}
        <div className={styles.navigation}>
          <Link href="/annual-reports" className={styles.backButton}>
            <ArrowLeft size={20} />
            返回报告列表
          </Link>
        </div>

        {/* 报告头部 */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <div className={styles.reportMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>发布时间: {report.publishDate}</span>
                </div>
                <div className={styles.metaItem}>
                  <Download size={16} />
                  <span>下载量: {report.downloadCount.toLocaleString()}</span>
                </div>
                <div className={styles.metaItem}>
                  <FileText size={16} />
                  <span>文件大小: {report.fileSize}</span>
                </div>
              </div>
              <h1 className={styles.title}>{report.title}</h1>
              <p className={styles.description}>{report.description}</p>
              <div className={styles.actions}>
                <Button 
                  type="primary" 
                  icon={<Download />} 
                  size="large"
                  onClick={handleDownload}
                >
                  下载PDF
                </Button>
                <Button 
                  icon={<Eye />} 
                  size="large"
                  onClick={handleViewPDF}
                >
                  在线查看
                </Button>
                <Button 
                  icon={<Share2 />} 
                  size="large"
                  onClick={handleShare}
                >
                  分享
                </Button>
              </div>
            </div>
          
          </div>
        </div>

        {/* 主要内容 */}
        <div className={styles.content}>
          <Tabs defaultActiveKey="1" items={tabItems} className={styles.tabs} />
        </div>
      </div>
    </>
  )
}