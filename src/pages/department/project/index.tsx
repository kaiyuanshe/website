import React, { useState } from 'react'
import BoardMembers from '@/components/board/BoardMembers'
import BoardMemberDetail from '@/components/board/BoardMemberDetail'
import { PersonCardProps } from '@/components/board/PersonCard'
import { projectMembers } from '@/data/committees'
import styles from './index.module.css'

export default function ProjectPage() {
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

  // Add click handlers to project members
  const membersWithClickHandlers = projectMembers.map(member => ({
    ...member,
    onDetailClick: () => handleMemberClick(member)
  }))

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>项目委员会</h1>
        <h2 className={styles.englishTitle}>PROJECT COMMITTEE</h2>

        <div className={styles.description}>
          <p className={styles.intro}>
            开源社项目委员会负责监督和管理开源社支持的各类开源项目，推动项目的健康发展。
          </p>

          <p className={styles.details}>
            项目委员会致力于为开源项目提供技术指导、资源支持和社区建设帮助。委员会成员都是在开源项目管理和技术发展方面具有丰富经验的专家，帮助项目制定技术路线图，建立健全的治理结构，培养活跃的开发者社区。
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
