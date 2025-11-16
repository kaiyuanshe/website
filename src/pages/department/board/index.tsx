import React, { useState } from 'react'
import BoardMembers from '@/components/board/BoardMembers'
import BoardMemberDetail from '@/components/board/BoardMemberDetail'
import { PersonCardProps } from '@/components/board/PersonCard'
import { boardMembers } from '@/data/committees'
import styles from './index.module.css'

export default function BoardPage() {
  const [selectedMember, setSelectedMember] = useState<PersonCardProps | null>(
    null
  )
  const [modalVisible, setModalVisible] = useState(false)

  const handleMemberClick = (member: PersonCardProps) => {
    setSelectedMember(member)
    setModalVisible(true)
  }

  const handleModalClose = () => {
    setModalVisible(false)
    setSelectedMember(null)
  }

  // Add click handlers to board members
  const membersWithClickHandlers = boardMembers.map(member => ({
    ...member,
    onDetailClick: () => handleMemberClick(member)
  }))

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>理事会</h1>
        <h2 className={styles.englishTitle}>GOVERNING BOARD</h2>

        <div className={styles.description}>
          <p className={styles.intro}>开源社理事会（GB）（按姓氏排序）</p>

          <p className={styles.details}>
            展望未来，我们相信在新一届理事会的领导下，开源社将继续围绕“开源治理、社区发展、国际接轨、项目孵化”四大使命，立足中国、贡献全球，为推动开源成为新时代的生活方式而不懈努力。
          </p>
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
