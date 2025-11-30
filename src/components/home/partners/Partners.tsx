import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { partnersRawData } from '@/data/partners'
import styles from './Partners.module.css'

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // 只显示有logo的合作伙伴，不区分时间和等级
  const validPartners = partnersRawData.filter(
    partner => partner.logo && 
    partner.logo !== '/logo.png' && 
    partner.logo.trim() !== ''
  )

  // 将合作伙伴数组复制一份以实现无缝轮播
  const duplicatedPartners = [...validPartners, ...validPartners]

  useEffect(() => {
    let animationFrame: number
    const scrollContainer = scrollRef.current

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1
        
        // 当滚动到一半时重置到开始位置，实现无缝循环
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrame = requestAnimationFrame(scroll)
    }

    // 开始自动滚动
    const startScrolling = () => {
      animationFrame = requestAnimationFrame(scroll)
    }

    // 停止自动滚动
    const stopScrolling = () => {
      cancelAnimationFrame(animationFrame)
    }

    // 添加鼠标事件监听器
    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', stopScrolling)
      scrollContainer.addEventListener('mouseleave', startScrolling)
    }

    // 启动轮播
    startScrolling()

    // 清理函数
    return () => {
      cancelAnimationFrame(animationFrame)
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', stopScrolling)
        scrollContainer.removeEventListener('mouseleave', startScrolling)
      }
    }
  }, [])

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.partnersBlock}>
          <div className={styles.blockHeader}>
            <div className={styles.blockNumber}>04</div>
            <h2 className={styles.blockTitle}>我们的合作伙伴</h2>
            <div className={styles.blockDivider}></div>
          </div>
          
          <div className={styles.partnersCarousel}>
            <div 
              ref={scrollRef}
              className={styles.partnersScroll}
            >
              <div className={styles.partnersTrack}>
                {duplicatedPartners.map((partner, index) => (
                  <Link
                    key={`${partner.organization}-${index}`}
                    href="/partners"
                    className={styles.partnerCard}
                  >
                    <div className={styles.partnerLogoWrapper}>
                      <Image
                        src={partner.logo}
                        alt={partner.title}
                        width={120}
                        height={80}
                        className={styles.partnerLogo}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}