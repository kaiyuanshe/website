import React, { useState, useMemo } from 'react'
import { Dropdown, type MenuProps } from 'antd'
import { ChevronDown } from 'lucide-react'
import VolunteerProfile from '../../../components/volunteer/VolunteerProfile'
import { volunteers } from '../../../data/volunteers'
import styles from './index.module.css'

export default function VolunteerPage() {
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(volunteers.map(v => v.awardDate.substring(0, 4))))
    return years.sort((a, b) => parseInt(b) - parseInt(a))
  }, [])

  const [selectedYear, setSelectedYear] = useState<string>(availableYears[0] || '2024')

  const yearMenuItems: MenuProps['items'] = availableYears.map(year => ({
    key: year,
    label: year,
    onClick: () => setSelectedYear(year)
  }))

  const filteredVolunteers = useMemo(() => {
    return volunteers.filter(v => v.awardDate.startsWith(selectedYear))
  }, [selectedYear])

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>年度优秀志愿者</h1>
          <p className={styles.subtitle}>
            致敬那些为开源社区无私奉献的优秀志愿者们，他们的付出推动着开源精神的传承与发展
          </p>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{filteredVolunteers.length}</div>
            <div className={styles.statLabel}>优秀志愿者</div>
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
