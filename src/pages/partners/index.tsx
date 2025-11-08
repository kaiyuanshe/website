import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

interface Partner {
  title: string
  organization: string
  person?: string
  year: string
  level: string
  link?: string
  logo: string
  tag?: string
}

const partnersData: { [level: string]: Partner[] } = {
  '钻石级赞助': [
    {
      title: "钻石级赞助 浪潮 KaiwuDB & KWDB 社区",
      organization: "Retronix",
      person: "",
      year: "",
      level: "钻石级赞助",
      link: "",
      logo: "/logo.png",
      tag: ""
    },
    {
      title: "钻石级赞助 国泰金控",
      organization: "国泰金控",
      person: "",
      year: "",
      level: "钻石级赞助",
      link: "",
     logo: "/logo.png",
      tag: ""
    },
    {
      title: "钻石级赞助 AWS",
      organization: "AWS",
      person: "",
      year: "",
      level: "钻石级赞助",
      link: "",
     logo: "/logo.png",
      tag: "累计4年赞助"
    },
    {
      title: "钻石级赞助 TensTorrent",
      organization: "TensTorrent",
      person: "",
      year: "",
      level: "钻石级赞助",
      link: "",
      logo: "/images/sponsors/tenstorrent.svg",
      tag: ""
    },
    {
      title: "钻石级赞助 Framework",
      organization: "Framework",
      person: "",
      year: "",
      level: "钻石级赞助",
      link: "",
      logo: "/images/sponsors/framework.svg",
      tag: ""
    }
  ],
  '白银级赞助': [
    {
      title: "白银级赞助 GameSofa",
      organization: "GameSofa",
      person: "",
      year: "",
      level: "白银级赞助",
      link: "",
      logo: "/images/sponsors/gamesofa.svg",
      tag: "累计15年赞助"
    },
    {
      title: "白银级赞助 Linux Professional Institute",
      organization: "Linux Professional Institute",
      person: "",
      year: "",
      level: "白银级赞助",
      link: "",
      logo: "/images/sponsors/lpi.svg",
      tag: "累计2年赞助"
    }
  ],
  '青铜级赞助': [
    {
      title: "青铜级赞助 硅生研究基金会",
      organization: "硅生研究基金会",
      person: "",
      year: "",
      level: "青铜级赞助",
      link: "",
      logo: "/images/sponsors/arcrelife.svg",
      tag: "连续15年赞助"
    },
    {
      title: "青铜级赞助 Berry AI",
      organization: "Berry AI",
      person: "",
      year: "",
      level: "青铜级赞助",
      link: "",
      logo: "/images/sponsors/berry-ai.svg",
      tag: "累计5年赞助"
    }
  ],
  '好朋友级赞助': [
    {
      title: "好朋友级赞助 ANDES",
      organization: "ANDES",
      person: "",
      year: "",
      level: "好朋友级赞助",
      link: "",
      logo: "/images/sponsors/andes.svg",
      tag: "累计2年赞助"
    },
    {
      title: "好朋友级赞助 Glows.ai",
      organization: "Glows.ai",
      person: "",
      year: "",
      level: "好朋友级赞助",
      link: "",
      logo: "/images/sponsors/glows.svg",
      tag: ""
    },
    {
      title: "好朋友级赞助 Skymizer",
      organization: "Skymizer",
      person: "",
      year: "",
      level: "好朋友级赞助",
      link: "",
      logo: "/images/sponsors/skymizer.svg",
      tag: "累计8年赞助"
    }
  ]
}

const levelOrder = [
  '钻石级赞助',
  '白银级赞助',
  '青铜级赞助',
  '好朋友级赞助'
]


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