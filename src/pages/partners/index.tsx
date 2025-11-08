import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'
import { Partner, partnersData, levelOrder } from '@/data/partners'


const PartnersPage: React.FC = () => {

  const renderPartnerCard = (partner: Partner) => (
    <div key={partner.title} className={styles.partnerCard}>
      {partner.link ? (
        <a 
          href={partner.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.partnerLink}
        >
          <Image 
            src={partner.logo} 
            alt={partner.organization} 
            title={partner.title}
            className={styles.partnerLogo}
            width={120}
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </a>
      ) : (
        <Image 
          src={partner.logo} 
          alt={partner.organization} 
          title={partner.title}
          className={styles.partnerLogo}
          width={120}
          height={60}
          style={{ objectFit: 'contain' }}
        />
      )}
      {partner.tag && (
        <div className={styles.partnerTag}>
          {partner.tag}
        </div>
      )}
    </div>
  )

  const renderPartnerSection = (level: string, partners: Partner[]) => {
    if (!partners || partners.length === 0) return null
    
    return (
      <section key={level} className={styles.partnerSection}>
        <h3 className={styles.sectionTitle}>{level}</h3>
        <div className={styles.partnersGrid}>
          {partners.map(renderPartnerCard)}
        </div>
      </section>
    )
  }

  const sortedLevels = levelOrder.filter(level => partnersData[level])

  return (
    <div className={`${styles.container} nav-t-top`}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>合作伙伴</h1>
            <p className={styles.subtitle}>携手共进，共建开源生态</p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.partnersContainer}>
          {sortedLevels.map(level => 
            renderPartnerSection(level, partnersData[level])
          )}
        </div>
      </div>
    </div>
  )
}

export default PartnersPage