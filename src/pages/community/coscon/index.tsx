import React, { useState, useMemo } from 'react'
import { Dropdown, type MenuProps } from 'antd'
import { ChevronDown } from 'lucide-react'
import VolunteerProfile from '../../../components/volunteer/VolunteerProfile'
import { yearlyStars, getStarsByYear } from '@/data/awards'
import styles from './index.module.css'

export default function COSConStarPage() {
  const [selectedYear, setSelectedYear] = useState('2025')
  
  const uniqueYears = useMemo(() => {
    return yearlyStars.map(item => item.year).sort((a, b) => parseInt(b) - parseInt(a))
  }, [])

  const yearMenuItems: MenuProps['items'] = uniqueYears.map(year => ({
    key: year,
    label: year,
    onClick: () => setSelectedYear(year)
  }))
  
  const selectedStars = useMemo(() => {
    return getStarsByYear(selectedYear)
  }, [selectedYear])

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>COSCon之星</h1>
          <p className={styles.subtitle}>
            &quot;COSCon之星&ldquo;是从2019年开始，中国开源年会组委会（COSCon 组委会）为鼓励对中国开源年会有卓越贡献的志愿者而设立的奖项，希望通过此奖项感谢各位积极参与并贡献COSCon的小伙伴。评选范围为COSCon志愿者。
          </p>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{selectedStars.length}</div>
            <div className={styles.statLabel}>COSCon之星</div>
          </div>
          <div className={styles.statItem}>
            <Dropdown 
              menu={{ items: yearMenuItems }}
              trigger={['click','hover']}
            >
              <div className={styles.yearSelect}>
                <span>{selectedYear}</span>
                <ChevronDown size={28} />
              </div>
            </Dropdown>
            <div className={styles.statLabel}>年度表彰</div>
          </div>
         
        </div>

        <div className={styles.volunteersSection}>
          

          <div className={styles.volunteersGrid}>
            {selectedStars.map((star, index) => (
              <VolunteerProfile
                key={`${selectedYear}-${index}`}
                name={star.name}
                nickname={star.nickname}
                avatar={star.avatar}
                recommendation={star.recommendation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}