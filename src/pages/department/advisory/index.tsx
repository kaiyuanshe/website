import React, { useState } from "react"
import BoardMembers from "@/components/board/BoardMembers"
import BoardMemberDetail from "@/components/board/BoardMemberDetail"
import { PersonCardProps } from "@/components/board/PersonCard"
import { advisoryMembers } from "@/data/committees"
import styles from "./index.module.css"

export default function AdvisoryPage() {
    const [selectedMember, setSelectedMember] = useState<PersonCardProps | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleMemberClick = (member: PersonCardProps) => {
        setSelectedMember(member);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
        setSelectedMember(null);
    };

    // Add click handlers to advisory members
    const membersWithClickHandlers = advisoryMembers.map(member => ({
        ...member,
        onDetailClick: () => handleMemberClick(member)
    }));

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.mainTitle}>顾问委员会</h1>
                <h2 className={styles.englishTitle}>ADVISORY COMMITTEE</h2>
                
                <div className={styles.description}>
                    <p className={styles.intro}>
                        开源社顾问委员会成立于2018年，汇聚了来自全球顶尖开源基金会、标志性开源项目社区、知名风险投资机构、一流高等院校与科研机构、权威科技媒体，以及头部互联网企业开源战略部门的资深专家与行业领袖。
                    </p>
                    
                    <p className={styles.details}>
                        委员会以推动开源生态高质量发展为使命，致力于构建开放、协同、可持续的全球开源创新网络。
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