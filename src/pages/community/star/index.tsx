import React, { useState, useMemo } from 'react'
import { Dropdown, type MenuProps } from 'antd'
import { ChevronDown } from 'lucide-react'
import VolunteerProfile from '../../../components/volunteer/VolunteerProfile'
import { openSourceStars, getOpenSourceStarsByYear } from '@/data/awards'
import styles from './index.module.css'

export default function StarPage() {
  const uniqueYears = useMemo(() => {
    const years = [...new Set(openSourceStars.map(v => v.date!))].sort((a, b) => b - a)
    return years.map(year => year.toString())
  }, [])

  const [selectedYear, setSelectedYear] = useState<string>(uniqueYears[0] || '2024')

  const yearMenuItems: MenuProps['items'] = uniqueYears.map(year => ({
    key: year,
    label: year,
    onClick: () => setSelectedYear(year)
  }))

  const filteredVolunteers = useMemo(() => {
    return getOpenSourceStarsByYear(parseInt(selectedYear))
  }, [selectedYear])

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>开源之星</h1>
          <p className={styles.subtitle}>
            荣誉介绍：“开源之星”是从2017年开始，开源社理事会设立的奖项，希望通过此奖项鼓励对开源及开源社有较大年度贡献的志愿者。评选范围为开源社（理事会成员外的）正式成员。
          </p>
        </div>

        

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{filteredVolunteers.length}</div>
            <div className={styles.statLabel}>开源之星</div>
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
            {filteredVolunteers.map((volunteer, index) => (
              <VolunteerProfile
                key={index}
                name={volunteer.name}
                nickname={volunteer.nickname}
                avatar={volunteer.avatar}
                recommendation={volunteer.recommendation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
