import React from 'react'
import styles from './index.module.css'

const CodeOfConductPage = () => {
  return (
    <div className={styles.codeOfConductPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>开源社行为守则（公示版）</h1>
          <p className={styles.heroSubtitle}>
            基于开源人宣言精神的社区行为准则
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <main className={styles.contentArea}>
          {/* Manifesto Spirit Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>开源人宣言的精神</h2>
            <div className={styles.sectionContent}>
              <div className={styles.manifestoBox}>
                <p className={styles.manifestoText}>
                  本行为准则根据开源社的 <span className={styles.highlight}>"开源人宣言"</span> 精神，适用于开源社管理的所有场合，包括微信、公共和私人邮件列表、维基、博客等我们社区使用的任何其他交流渠道，以及现场活动（即会议）之中的人际直接或间接互动。
                </p>
                <div className={styles.imageContainer}>
                  <img 
                    src="/img/conduct/conduct.png" 
                    alt="开源人宣言" 
                    className={styles.conductImage}
                  />
                </div>
                <p className={styles.manifestoText}>
                  我们希望每个正式或非正式地参与开源社社区的人，或声称与开源社有任何关系的人，在任何与开源社有关的活动中，特别是以任何角色代表开源社时，都能遵守这一行为准则。
                </p>
                <p className={styles.manifestoText}>
                  这个守则并不详尽或完整。它提炼了我们对合作、共享环境和目标的共同理解。我们希望开源社社区的所有成员在精神上和文字上都能遵守它，以便它能丰富我们所有人和我们所参与的社区。
                </p>
              </div>
            </div>
          </section>

          {/* Negative List Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>负面表列</h2>
            <div className={styles.sectionContent}>
              <div className={styles.introText}>
                <p>
                  我们相信所有开源爱好者都能很好地理解并践行开源社的开源人宣言，不需要以过多的行为守则或条条框框来限制一个自由、开放与互信的开源共同体；然而我们仍需指出有一些行为是在开源社或其它开源社区都不受欢迎的，例如：
                </p>
              </div>
              <ul className={styles.negativeList}>
                <li className={styles.negativeItem}>
                  不符合本国法律或社会规范的言行
                </li>
                <li className={styles.negativeItem}>
                  针对他人的暴力威胁或语言
                </li>
                <li className={styles.negativeItem}>
                  性别歧视、种族主义或其他歧视性笑话和语言
                </li>
                <li className={styles.negativeItem}>
                  发布色情或暴力的材料或内容
                </li>
                <li className={styles.negativeItem}>
                  发布（或威胁发布）他人的个人身份信息（肉搜）
                </li>
                <li className={styles.negativeItem}>
                  分享私人内容，如私下或不公开发送的电子邮件、论坛对话，或社交频道历史记录
                </li>
                <li className={styles.negativeItem}>
                  人身攻击，特别是那些使用种族主义或性别歧视术语的侮辱
                </li>
                   <li className={styles.negativeItem}>
                  公开或恶意地对开源社、其项目、其他成员进行侮辱、诽谤、诋毁，损害社区声誉的行为。
                </li>
                <li className={styles.negativeItem}>
                  不友好或是带着恶意的关注（如性暗示等）和脏话
                </li>
                <li className={styles.negativeItem}>
                  反复骚扰他人。一般来说如果有人要求你停止某种行为或语言，请即刻停止
                </li>
                <li className={styles.negativeItem}>
                  提倡或鼓励上述任何行为
                </li>
              </ul>
            </div>
          </section>

          {/* Enforcement and Handling Measures Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>执行与处理措施</h2>
            <div className={styles.sectionContent}>
              <div className={styles.introText}>
                <p>
                  我们坚信在开源社的社区中，每一位成员都怀有善意并致力于共同建设。为维护开源社社区的健康发展与所有成员的共同利益，我们制定了本行为准则。我们坚信预防与教育优于惩罚，但对于任何经确认违反本行为准则的行为，开源社理事会有权采取其认为必要的措施，以维护社区的安全与尊严。
                </p>
              </div>

              <div className={styles.measuresList}>
                <div className={styles.measureItem}>
                  <h3 className={styles.measureTitle}>1. 反馈流程</h3>
                  <div className={styles.measureContent}>
                    <p>
                      我们鼓励任何人反馈其遭遇或目睹的违规行为。反馈可以通过邮件发送至指定的理事会邮箱：
                      <a href="mailto:board@kaiyuanshe.org" className={styles.emailLink}>board@kaiyuanshe.org</a>
                      或其他由开源社官方公布的渠道。我们将对反馈人信息严格保密，并为需要帮助的成员提供支持。
                    </p>
                  </div>
                </div>

                <div className={styles.measureItem}>
                  <h3 className={styles.measureTitle}>2. 调查与处理</h3>
                  <div className={styles.measureContent}>
                    <p>
                      收到反馈后，理事会将启动调查程序。整个过程将遵循公正、保密和及时的原则。基于调查结果和违规行为的严重程度，可能采取的措施针对两类对象：身份与权限。
                    </p>
                    
                    <div className={styles.subsection}>
                      <h4 className={styles.subsectionTitle}>适用对象包括：</h4>
                      <ul className={styles.targetList}>
                        <li className={styles.targetItem}>
                          <strong>身份：</strong> 包括但不限于开源社正式成员、工作组组员/组长、项目维护者、理事会成员、顾问，以及任何在开源社担任其他正式职务的人员。
                        </li>
                        <li className={styles.targetItem}>
                          <strong>权限：</strong> 包括但不限于在开源社管理的各类平台与场合中的权限，例如：
                          <ul className={styles.permissionList}>
                            <li>社群交流平台的参与和管理权（如邮件列表、微信群等群组的发言与成员管理权限）。</li>
                            <li>代码仓库的访问、提交、审查与维护权限（如GitHub/Gitee组织成员权限）。</li>
                            <li>官方维基、博客平台、网站的内容编辑与发布权限。</li>
                            <li>活动组织平台（如会议、Meetup）的策划与管理权限。</li>
                            <li>开源社在各类开源托管平台（如GitHub, Gitee）官方账户下的其他任何权限。</li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className={styles.subsection}>
                      <h4 className={styles.subsectionTitle}>可能采取的处理措施包括但不限于：</h4>
                      <ul className={styles.actionList}>
                        <li className={styles.actionItem}>
                          <strong>纠正与警告：</strong> 对于情节轻微、非恶意的初次违规，通常以私下警告、要求删除不当内容并道歉为主。
                        </li>
                        <li className={styles.actionItem}>
                          <strong>暂停职务与权限：</strong> 要求违规者在一定时间内（例如，30天至90天）暂停其担任的社区职务，并冻结相应的平台权限。
                        </li>
                        <li className={styles.actionItem}>
                          <strong>临时封禁：</strong> 在特定期限内（例如，6个月至1年）取消其在社区的所有参与权限与职务身份。
                        </li>
                        <li className={styles.actionItem}>
                          <strong>永久封禁：</strong> 对于严重违规、恶意行为、屡教不改或对社区安全构成重大威胁的行为，社区将立即并永久地撤销其所有职务身份与平台权限，终止其与开源社的正式关联。
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.measureItem}>
                  <h3 className={styles.measureTitle}>3. 分级处理原则</h3>
                  <div className={styles.measureContent}>
                    <p>处理措施将遵循比例原则，综合考虑以下因素：</p>
                    <ul className={styles.principleList}>
                      <li>行为的严重性和影响。</li>
                      <li>是初犯还是屡次违规。</li>
                      <li>违规者事后是否表现出悔意并积极补救。</li>
                      <li>行为是否对社区成员或集体荣誉造成重大侮辱。</li>
                      <li>行为是否对社区成员或集体安全构成直接威胁。</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.measureItem}>
                  <h3 className={styles.measureTitle}>4. 申诉机制</h3>
                  <div className={styles.measureContent}>
                    <p>
                      若当事人对处理决定有异议，可在收到决定通知后的15天内，向指定的申诉邮箱或理事会提出书面申诉，阐明理由并提供新的证据。理事会将重新审议并做出最终决定。
                    </p>
                  </div>
                </div>

                <div className={styles.measureItem}>
                  <h3 className={styles.measureTitle}>5. 特殊情况处理</h3>
                  <div className={styles.measureContent}>
                    <ul className={styles.specialList}>
                      <li>
                        <strong>紧急情况：</strong> 对于正在发生的严重违规行为（如骚扰、威胁），理事会有权立即采取临时措施，事后再补调查程序。
                      </li>
                      <li>
                        <strong>组织代表：</strong> 以开源社名义参与外部活动的成员，其违规行为将依据本守则从严处理。
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.finalityBox}>
                  <h3 className={styles.finalityTitle}>效力与最终解释权</h3>
                  <p className={styles.finalityText}>
                    本行为准则及处罚措施自公布之日起生效，并对所有社区成员具有约束力。开源社理事会保留对本文件及具体案例的最终解释权与执行权。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Community References Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>社区借镜</h2>
            <div className={styles.sectionContent}>
              <p className={styles.referenceIntro}>
                本守则借鉴以下内容和灵感:
              </p>
              <ul className={styles.referenceList}>
                <li className={styles.referenceItem}>
                  <a href="https://www.apache.org/foundation/policies/conduct.html" target="_blank" rel="noopener noreferrer">
                    Apache Software Foundation Code of Conduct
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="http://couchdb.apache.org/conduct.html" target="_blank" rel="noopener noreferrer">
                    CouchDB Project Code of Conduct
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="http://fedoraproject.org/code-of-conduct" target="_blank" rel="noopener noreferrer">
                    Fedora Project Code of Conduct
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="http://speakup.io/coc.html" target="_blank" rel="noopener noreferrer">
                    Speak Up! Code of Conduct
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="https://www.djangoproject.com/conduct/" target="_blank" rel="noopener noreferrer">
                    Django Code of Conduct
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="http://www.debian.org/vote/2014/vote_002" target="_blank" rel="noopener noreferrer">
                    Debian Code of Conduct
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="https://github.com/twitter/code-of-conduct/blob/master/code-of-conduct.md" target="_blank" rel="noopener noreferrer">
                    Twitter Open Source Code of Conduct
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="https://wiki.mozilla.org/Code_of_Conduct/Draft#Conflicts_of_Interest" target="_blank" rel="noopener noreferrer">
                    Mozilla Code of Conduct/Draft
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="https://www.python.org/community/diversity/" target="_blank" rel="noopener noreferrer">
                    Python Diversity Appendix
                  </a>
                </li>
                <li className={styles.referenceItem}>
                  <a href="http://pythonmentors.com/" target="_blank" rel="noopener noreferrer">
                    Python Mentors Home Page
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Additional Information */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>相关信息</h2>
            <div className={styles.sectionContent}>
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>开源人宣言</h3>
                <p className={styles.infoText}>
                  了解开源社的核心价值观和开源人宣言，理解我们的社区精神和理念。
                </p>
              </div>
              
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>举报违规行为</h3>
                <p className={styles.infoText}>
                  如果您遇到或发现违反本行为守则的行为，请通过开源社官方渠道进行举报。我们将认真对待每一起举报并采取适当措施。
                </p>
              </div>

              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>联系我们</h3>
                <p className={styles.infoText}>
                  如有任何关于行为守则的疑问或建议，欢迎通过开源社官方渠道联系我们。
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default CodeOfConductPage