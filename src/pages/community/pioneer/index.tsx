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
            <img src="/logo_2.svg" alt="发起单位Logo" className={styles.sponsorLogo} />
            <img src="/logo.png" alt="发起单位Logo" className={styles.sponsorLogo} />
          </div>
        </div>
        <p className={styles.subtitle}>致敬那些推动开源发展的杰出贡献者</p>
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
