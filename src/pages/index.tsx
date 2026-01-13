import { useEffect, useRef, useState } from 'react'

import styles from './index.module.css'
 
import Hero from '@/components/home/hero/Hero'
import MissionSection from '@/components/home/mission/Mission'
import EventSection from '@/components/home/events/Events'
import ArticleSection from '@/components/home/article/Article'
import CarouselSession from '@/components/home/carousel/Carousel'
import PartnersSection from '@/components/home/partners/Partners'
import { getEvents } from '@/pages/api/event'
import { getArticles } from '@/pages/api/article'
import { useAuth } from '@/contexts/AuthContext'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { status } = useAuth()
  const [events, setEvents] = useState<any[]>([])
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    let animationFrame: number
    const scrollContainer = scrollRef.current

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    animationFrame = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const queryParams = {
          page: 1,
          page_size: 3,
          publish_status: 2
          //  event_type:'community'
        }

        const result = await getEvents(queryParams)

        if (result.success && result.data) {
          if (result.data.events && Array.isArray(result.data.events)) {
            setEvents(result.data.events)
          } else if (Array.isArray(result.data)) {
            setEvents(result.data)
          } else {
            console.warn('API 返回的数据格式不符合预期:', result.data)
            setEvents([])
          }
        } else {
          console.error('获取事件列表失败:', result.message)
          setEvents([])
        }
      } catch (error) {
        console.error('加载事件列表异常:', error)
        setEvents([])
      }
    }

    const loadArticles = async () => {
      try {
        const queryParams = {
          page: 1,
          page_size: 3,
          publish_status: 2,
          category: 'blog'
        }

        const result = await getArticles(queryParams)
        if (result.success && result.data) {
          if (result.data.articles && Array.isArray(result.data.articles)) {
            setArticles(result.data.articles)
          } else if (Array.isArray(result.data)) {
            setArticles(result.data)
          } else {
            console.warn('API 返回的数据格式不符合预期:', result.data)
            setArticles([])
          }
        } else {
          console.error('获取文章列表失败:', result.message)
          setArticles([])
        }
      } catch (error) {
        console.error('加载文章列表异常:', error)
        setArticles([])
      }
    }

    if (!status || status !== 'loading') {
      loadEvents()
      loadArticles()
    }
  }, [status])

  return (
    <div className={styles.homepage}>
      {/* session1 */}
      <div
        style={{
          background: `linear-gradient(
    135deg,
    var(--primary-400) 0%,
    #87ceeb 30%,
    #b3d9ff 50%,
    #87ceeb 70%,
    var(--primary-400) 100%
  )`
        }}
      >
        <Hero />
        <CarouselSession events={events} articles={articles} />
      </div>

      {/* Activities Section */}
      <EventSection events={events} />
      <ArticleSection articles={articles} />
      {/* Mission Section */}
      <MissionSection />
      {/* Partners Section */}
      <PartnersSection />
    </div>
  )
}
