import React, { useState, useMemo } from 'react'
import { Select } from 'antd'
import BoardMembers from '@/components/board/BoardMembers'
import BoardMemberDetail from '@/components/board/BoardMemberDetail'
import { PersonCardProps } from '@/components/board/PersonCard'
import { boardMembers } from '@/data/committees'
import styles from './index.module.css'

const { Option } = Select

export default function BoardPage() {
  const [selectedMember, setSelectedMember] = useState<PersonCardProps | null>(
    null
  )
  const [modalVisible, setModalVisible] = useState(false)

  // Get available years from board members
  const availableYears = useMemo(() => {
    const years = boardMembers
      .map(member => member.year)
      .filter((year): year is number => year !== undefined)
    return [...new Set(years)].sort((a, b) => b - a)
  }, [])
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    () => availableYears[0]
  )

  const handleMemberClick = (member: PersonCardProps) => {
    setSelectedMember(member)
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
    setSelectedMember(null)
  }

  // Filter members by selected year
  const filteredMembers = useMemo(() => {
    if (selectedYear === undefined) {
      return boardMembers
    }
    return boardMembers.filter(member => member.year === selectedYear)
  }, [selectedYear])

  // Add click handlers to filtered board members
  const membersWithClickHandlers = filteredMembers.map(member => ({
    ...member,
    onDetailClick: () => handleMemberClick(member)
  }))

  const handleYearChange = (year: number | undefined) => {
    setSelectedYear(year)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>理事会</h1>
        <h2 className={styles.englishTitle}>GOVERNING BOARD</h2>

        <div className={styles.description}>
          <p className={styles.intro}>开源社理事会（GB）（按姓氏排序）</p>

          <p className={styles.details}>
            展望未来，我们相信在新一届理事会的领导下，开源社将继续围绕&quot;开源治理、社区发展、国际接轨、项目孵化&ldquo;四大使命，立足中国、贡献全球，为推动开源成为新时代的生活方式而不懈努力。
          </p>
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.filterRow}>
            <label className={styles.filterLabel}>筛选年份：</label>
            <Select
              placeholder="选择年份（全部）"
              allowClear
              value={selectedYear}
              onChange={handleYearChange}
              className={styles.yearSelect}
              style={{ width: 200 }}
            >
              {availableYears.map(year => (
                <Option key={year} value={year}>
                  {year} 年
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      <BoardMembers members={membersWithClickHandlers} title="" />

      <BoardMemberDetail
        member={selectedMember}
        visible={modalVisible}
        onClose={handleModalClose}
      />
    </div>
  )
}
