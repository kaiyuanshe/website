import React, { useState } from "react";
import { Modal, Tag, Button } from "antd";
import {
  GitBranch,
  Globe,
  Mail,
  MapPin,
  User,
  Award,
  Building2,
} from "lucide-react";
import { members } from "@/data/members";
import { Member } from "@/types/member";
import styles from "./index.module.css";
import LocalizedText from "@/components/LocalizedText";

export default function MembersPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedMember(null);
  };

  const renderMember = (member: Member, index: number) => {
    return (
      <div
        key={index}
        className={styles.memberCard}
        onClick={() => handleMemberClick(member)}
      >
        <div className={styles.avatar}>
          <img
            src={member.avatar ? member.avatar : "/img/cblecker.png"}
            alt={member.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/img/cblecker.png";
            }}
          />
        </div>
        <div className={styles.name}>{member.name}</div>
      </div>
    );
  };

  const renderMemberDetail = () => {
    if (!selectedMember) return null;

    return (
      <div className={styles.memberDetail}>
        <div className={styles.memberHeader}>
          <div className={styles.memberAvatar}>
            <img
              src={
                selectedMember.avatar
                  ? selectedMember.avatar
                  : "/img/cblecker.png"
              }
              alt={selectedMember.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/img/cblecker.png";
              }}
            />
          </div>
          <div className={styles.memberInfo}>
            <h2 className={styles.memberName}>{selectedMember.name}</h2>
            {selectedMember.nickname && (
              <p className={styles.memberNickname}>
                <LocalizedText>{"昵称:"}</LocalizedText>
                {selectedMember.nickname}
              </p>
            )}
            {selectedMember.position && (
              <p className={styles.memberPosition}>{selectedMember.position}</p>
            )}
          </div>
        </div>

        <div className={styles.memberBody}>
          <div className={styles.memberSection}>
            <h3>
              <LocalizedText>{"基本信息"}</LocalizedText>
            </h3>
            <div className={styles.memberBasicInfo}>
              <div className={styles.infoItem}>
                <User size={16} />
                <span>
                  <LocalizedText>{"性别:"}</LocalizedText>
                  {selectedMember.gender}
                </span>
              </div>
              {selectedMember.city && (
                <div className={styles.infoItem}>
                  <MapPin size={16} />
                  <span>
                    <LocalizedText>{"城市:"}</LocalizedText>
                    {selectedMember.city}
                  </span>
                </div>
              )}
              {selectedMember.company && (
                <div className={styles.infoItem}>
                  <Building2 size={16} />
                  <span>
                    <LocalizedText>{"公司:"}</LocalizedText>
                    {selectedMember.company}
                  </span>
                </div>
              )}
            </div>
          </div>

          {selectedMember.bio && (
            <div className={styles.memberSection}>
              <h3>
                <LocalizedText>{"个人简介"}</LocalizedText>
              </h3>
              <p className={styles.memberBio}>{selectedMember.bio}</p>
            </div>
          )}

          {selectedMember.skills && selectedMember.skills.length > 0 && (
            <div className={styles.memberSection}>
              <h3>
                <LocalizedText>{"技能标签"}</LocalizedText>
              </h3>
              <div className={styles.skillTags}>
                {selectedMember.skills.map((skill, index) => (
                  <Tag key={index} color="blue">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          )}

          {selectedMember.achievements &&
            selectedMember.achievements.length > 0 && (
              <div className={styles.memberSection}>
                <h3>
                  <LocalizedText>{"成就荣誉"}</LocalizedText>
                </h3>
                <div className={styles.achievements}>
                  {selectedMember.achievements.map((achievement, index) => (
                    <div key={index} className={styles.achievementItem}>
                      <Award size={16} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          <div className={styles.memberSection}>
            <h3>
              <LocalizedText>{"联系方式"}</LocalizedText>
            </h3>
            <div className={styles.contactInfo}>
              {selectedMember.email && (
                <Button
                  type="link"
                  icon={<Mail size={16} />}
                  href={`mailto:${selectedMember.email}`}
                  target="_blank"
                >
                  {selectedMember.email}
                </Button>
              )}
              {selectedMember.github && (
                <Button
                  type="link"
                  icon={<GitBranch size={16} />}
                  href={selectedMember.github}
                  target="_blank"
                >
                  GitHub
                </Button>
              )}
              {selectedMember.website && (
                <Button
                  type="link"
                  icon={<Globe size={16} />}
                  href={
                    selectedMember.website.startsWith("http")
                      ? selectedMember.website
                      : `https://${selectedMember.website}`
                  }
                  target="_blank"
                >
                  <LocalizedText>{"个人网站"}</LocalizedText>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          <LocalizedText>{"正式成员"}</LocalizedText>
        </h1>
        <h2 className={styles.englishTitle}>FORMAL MEMBERS</h2>
        <p className={styles.description}>
          <LocalizedText>
            {"开源社正式成员是认同开源社理念，积极参与开源社活动的个人。"}
          </LocalizedText>
        </p>
      </div>

      <div className={styles.membersGrid}>
        {members.map((member, index) => renderMember(member, index))}
      </div>

      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={600}
        className={styles.memberModal}
      >
        {renderMemberDetail()}
      </Modal>
    </div>
  );
}
