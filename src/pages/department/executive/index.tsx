import React, { useState } from 'react'
import BoardMembers from '@/components/board/BoardMembers'
import BoardMemberDetail from '@/components/board/BoardMemberDetail'
import { PersonCardProps } from '@/components/board/PersonCard'
import { workingGroups, type WorkingGroup } from '@/data/committees'
import styles from './index.module.css'

const createPersonCard = (name: string, title: string): PersonCardProps => ({
  name,
  title,
  organization: '开源社',
  avatar: '/img/cblecker.png'
})

export default function ExecutivePage() {
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

  const generateId = (name: string) => {
    return name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '').toLowerCase()
  }

  const renderWorkingGroup = (group: WorkingGroup) => {
    const allMembers: PersonCardProps[] = []
    
    allMembers.push(createPersonCard(group.leader, `${group.name}组长`))
    
    if (group.viceLeader) {
      group.viceLeader.forEach(viceLeader => {
        allMembers.push(createPersonCard(viceLeader, `${group.name}副组长`))
      })
    }
    
    group.members.forEach(member => {
      allMembers.push(createPersonCard(member, `${group.name}组员`))
    })

    const membersWithClickHandlers = allMembers.map(member => ({
      ...member,
      onDetailClick: () => handleMemberClick(member)
    }))

    return (
      <div key={group.name} id={generateId(group.name)} className={styles.workingGroup}>
        <h3 className={styles.groupTitle}>{group.name}</h3>
        <p className={styles.groupDescription}>介绍：{group.description}</p>
        <BoardMembers members={membersWithClickHandlers} title="" />
      </div>
    )
  }

  const scrollToGroup = (groupName: string) => {
    const element = document.getElementById(generateId(groupName))
    if (element) {
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - 80
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>执行委员会</h1>
        <h2 className={styles.englishTitle}>EXECUTIVE COMMITTEE</h2>

        <div className={styles.description}>
          <p className={styles.intro}>
            开源社执行委员会是开源社日常执行与办事机构，实行执行长负责制。内设执行长一名，副执行长、工作组组长和副组长若干，每届任期一年。执行长对理事会负责。副执行长、工作组组长和副组长由执行长提名。
          </p>

          <div className={styles.details}>
            <p>执行委员会可行使如下职权：</p>
            <p>（一）执行理事会决议，全权负责开源社日常事务；</p>
            <p>（二）负责向理事会作年度工作总结报告，编制年度工作计划、财务预算和决算方案；
            </p>
            <p>（三）负责受理加入开源社的申请，对其资格进行审查；</p>
            <p>（四）负责开源社正式成员的协调工作。</p>
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.workingGroups}>
            {workingGroups.map(group => renderWorkingGroup(group))}
          </div>
        </div>

        <div className={styles.sidebar}>
          <nav className={styles.navigation}>
            <h3 className={styles.navTitle}>工作组导航</h3>
            <ul className={styles.navList}>
              {workingGroups.map((group) => (
                <li key={group.name} className={styles.navItem}>
                  <button
                    className={styles.navLink}
                    onClick={() => scrollToGroup(group.name)}
                  >
                    {group.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <BoardMemberDetail
        member={selectedMember}
        visible={modalVisible}
        onClose={handleModalClose}
      />
    </div>
  )
}
