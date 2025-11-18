import React, { useState } from 'react'
import { pioneers, getPioneersByYear, type Pioneer } from '@/data/awards'
import styles from './index.module.css'

export default function PioneerPage() {
  const [selectedPioneer, setSelectedPioneer] = useState<Pioneer | null>(null)

  // 按年份分组并排序（从大到小）
  const pioneersByYear = pioneers.reduce(
    (acc, pioneer) => {
      const year = pioneer.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(pioneer)
      return acc
    },
    {} as Record<number, Pioneer[]>
  )

  // 获取排序后的年份（从大到小）
  const sortedYears = Object.keys(pioneersByYear)
    .map(year => parseInt(year))
    .sort((a, b) => b - a)

  const handleCardClick = (pioneer: Pioneer) => {
    setSelectedPioneer(pioneer)
  }

  const handleCloseModal = () => {
    setSelectedPioneer(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>开源先锋榜</h1>
        <div className={styles.sponsor}>
          <span className={styles.sponsorText}>发起单位</span>
          <div className={styles.sponsorLogos}>
            <img src="/logo_2.svg" alt="开源社发起单位Logo" className={styles.sponsorLogo} />
            <img src="/img/media/segmentfault.png" alt="思否发起单位Logo" className={styles.sponsorLogo} />
          </div>
        </div>
        <p className={styles.subtitle}>所谓先锋，我们理解不仅限于开发者，贡献代码的开发者、开源项目发起人、开源布道师、开源治理的先锋人物、关注开源的投资人等对推动开源生态发展有帮助的人都是榜单的目标对象。开源项目、开源治理、开源布道、开源商业、开源教育等都是我们重点关注的领域。<br/>这不是一个千篇一律的人物排行，而是——面向开发者的“米其林推荐”、“心（舌）尖上的开源人物”。<br/>榜单发布时除发布名单,每位人物还都会配有推介理由,它既是对于过去一年的总结也是由 SegmentFault 思否和开源社为你联合推介的“年度最值得关注的开源人物”。</p>
      </div>

      {sortedYears.map(year => (
        <div key={year} className={styles.yearSection}>
          <div className={styles.yearHeader}>
            <h2 className={styles.yearTitle}>{year}年开源先锋</h2>
            <div className={styles.yearDivider}></div>
          </div>

          <div className={styles.pioneersGrid}>
            {pioneersByYear[year].map(pioneer => (
              <div
                key={pioneer.id}
                className={styles.pioneerCard}
                onClick={() => handleCardClick(pioneer)}
              >
                <div className={styles.avatarContainer}>
                  <img
                    src={pioneer.avatar}
                    alt={pioneer.name}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.pioneerInfo}>
                  <h3 className={styles.pioneerName}>{pioneer.name}</h3>
                  <p className={styles.pioneerTitle}>{pioneer.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedPioneer && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>开源先锋详情</h2>
              <button
                className={styles.closeButton}
                onClick={handleCloseModal}
                aria-label="关闭"
              >
                ×
              </button>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.modalAvatarContainer}>
                <img
                  src={selectedPioneer.avatar}
                  alt={selectedPioneer.name}
                  className={styles.modalAvatar}
                />
              </div>

              <div className={styles.modalInfo}>
                <h3 className={styles.modalName}>{selectedPioneer.name}</h3>
                <p className={styles.modalJobTitle}>{selectedPioneer.title}</p>

                <div className={styles.modalDescription}>
                  <h4>个人简介</h4>
                  <p>{selectedPioneer.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
