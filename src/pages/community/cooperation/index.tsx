import React, { useState, useMemo } from 'react'
import { Dropdown, type MenuProps } from 'antd'
import { ChevronDown } from 'lucide-react'
import VolunteerProfile from '../../../components/volunteer/VolunteerProfile'
import styles from './index.module.css'

const cooperationStars2025 = [
  {
    name: '孟迎霞',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '孟迎霞老师自2014年开源社创立以来，始终陪伴着开源社区的成长。在每一个关键节点，她都以沉静而坚定的支持，润物细无声般推动着开源社向前发展。每当社区需要助力时，CSDN与孟老师总是我们最先想到、也最信赖的同行者。'
  },
  {
    name: 'Nick Vidal',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: 'Nick Vidal 以其“全球开源社区最值得信赖的推动者”之名，将世界各地的开源力量紧密相连。作为 OSI 的社区与市场负责人，他不仅搭建起跨地域的开源网络，更亲身成为连接全球开源生态与中国开源发展的关键桥梁。此次到访中国，他以“穷则变，变则通，通则达”这句充满智慧的中国古语，精准诠释了中国开源当下的发展脉搏与应变精神。他本人，正是这句话在开源世界中的生动实践。'
  },
  {
    name: 'Mario Behling',
    nickname: 'Mario',
    avatar: '/img/cblecker.png',
    recommendation: 'Mario 是开源社的老朋友。早在 2015 年，他就在 FOSSASIA 的全球开源舞台上向世界介绍了开源社，并展示了特制的开源社限量版魔方。多年来，FOSSASIA 始终与开源社如兄弟般相互扶持、并肩同行。2025 COSCon 十周年之际，Mario 以个人名义对开源社和COSCon大会的鼎力支持，也期待未来开源社与 FOSSASIA 友谊长存、携手共进。'
  }
]



const cooperationStars2023 = [
  {
    name: 'Hong Phuc Dang',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: 'Hong Phuc Dang是开源社的老朋友，她对开源社区的奉献通过她参与各种开源活动和平台得到了进一步体现，她显著地影响了开源运动，特别是在亚洲的开源运动，并展现了社区合作和全球协作的精神。她也在不断的帮助开源社开拓渠道，建立更多的国际社区链接，基于她的广泛贡献，我们想代表开源社，将“社区合作之星”奖项颁给Hong Phuc Dang。十几年如一日，将FOSSASIA做成一个在国际上有影响力开源社区，开源社常年的社区合作好伙伴。'
  },
  {
    name: 'Anni Lai',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '富有激情，身兼数职的开源社区关键人物。协助开源社在硅谷的KCC的落地，坚持在全球开源地沟通和交谈中，一定要有中国的声音。'
  },
  {
    name: '游崇佑',
    nickname: 'Mac',
    avatar: '/img/cblecker.png',
    recommendation: '游崇佑（Mac）是来自台湾的COSCUP跨境议程的负责人，他致力于促进台湾和中国大陆之间的开源社区交流。为了实现这一目标，他不遗余力地协助大陆的开源社区的朋友前往台湾，并帮助台湾的开源人士赴大陆交流。在这个过程中，他付出了许多看似琐碎却极为重要的努力，经历了不少艰辛和困难。他的辛勤努力不仅为两地的开源社区提供了宝贵的交流和合作机会，也为推动开源文化的传播和发展做出了重要贡献。我们非常荣幸地代表开源社，将“社区合作之星”奖项颁给游崇佑（Mac）。'
  }
]

const cooperationStars2022 = [
  {
    name: '李楠',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '一位可爱的长沙姑娘，在过去的一年里，积极参加社区合作活动，对接了多个开源社区，同时也是宣传小助手，积极转发推广开源社的相关资讯和参与视频剪辑工作，楠楠，好样的～'
  },
  {
    name: '高须正和',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '人们之所以寂寞是因为他们只建墙不修桥。感谢修建开源国际文化桥梁的高须正和。'
  }
]

const cooperationStars2021 = [
  {
    name: '何莹',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: `<p>何(小)莹身为开源社社区合作组副组长，几年以来持续地投入社区合作，今年完美地组织以及主持了 “暑期2021之大咖说开源“，之后紧张地准备出国留学的同时，还积极地与开源社社区合作组小伙伴们推动 COSCon21 社区合作事宜，让 COSCon21的合作社区达到了创记录的 75 家以上，出国当天和到达留学地之后，仍不间断地联系社区合作伙伴们，坚持不懈的精神令人感动。我们亲昵地叫她 “流浪的开源小可爱“，因为她就是当仁不让的 “社区合作之星”。</p>
    <p>初次见面是何莹来给年会开源硬件论坛做翻译志愿者，之后便常常在开源社的各个社群都能看到她活跃的身影，为开源社的社区活跃和合作做了大量的贡献，她的热情的态度和细腻的笔触令开源社区增添了柔性的温度。初次见面是何莹来给年会开源硬件论坛做翻译志愿者，之后便常常在开源社的各个社群都能看到她活跃的身影，为开源社的社区活跃和合作做了大量的贡献，她的热情的态度和细腻的笔触令开源社区增添了柔性的温度。</p>
    `
  },
  {
    name: '范晶晶',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '从 Datawhale，Wuhan2020，到开源社，其共同的特点，都是开源组织。不仅他自己所创立的开源社区 Datawhale 一直秉承着开源精神，帮助 AI 领域学习者成长，同时不遗余力地传播开源文化，为中国的开源事业添砖加瓦。为人低调，踏实能干，是开源界不可小觑的新生力量。晶晶本身是一个优秀的开源技术社区的发起人，对开源社区有着深入的思考和实践，在开源社的社区发展中也积极联合贡献了多场活动，期待之后能为开源社的社区发展注入更多进化的动能。'
  },
  {
    name: '李明康',
    nickname: '小明',
    avatar: '/img/cblecker.png',
    recommendation: '开源社媒体组负责 “人找事、事找人“ 板块的李明康堪称万能，需要他的时候，他随时可以钻进电话亭变身超人来救人救火。这次 COSCon21千头万绪，但是李明康在组委会，在媒体组宣发，在社区合作，常常第一个在各个群里推送大会相关宣传文章的就是他。明康，我们都有看到你哦！对于明康是从耳闻到目睹，明康本身也是从媒体志愿逐步积极拓展到开源社多项事务的志愿，充分展现了一个开源社区志愿者的能动性和多面工作实践的潜力。小明是开源社媒体组的长期贡献志愿者，还是媒体组为数不多有技术背景的志愿者。他非常积极努力，不用我们多说，他都会冲在最前面。这次在年会中（以及之前），他真正实现了出圈，从媒体组走出去在社区合作组，组委会，项目组里面异常活跃，大家都知道了我们媒体组的宝藏男孩小明同学！'
  },
  {
    name: '李楠',
    nickname: '楠楠',
    avatar: '/img/cblecker.png',
    recommendation: '开源社社区合作组的小可爱，我们在与 wuhan2020 合作项目中挖掘的宝藏女孩。楠楠虽然还在读书，却俨然具备一位高质量社区志愿者需要的素养--坚定执着，热爱开源，言出必达。开源社的各项活动，楠楠都会第一时间把信息送达各个社区群，在本届开源年会上，作为社区合作组的核心志愿者，楠楠在舒敏和何莹的指导下对接各个社区，在她身上既有舒敏的果敢也有何莹的细腻，只能用一句，你真行，来总结啦！'
  },
  {
    name: '高须正和 Takasu Masakazu',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '高须正和是一位深入参与中国开源社区的国际友人，并成为了开源社首位也是目前唯一的一位外国正式成员，从参与年会开源硬件论坛分享开始，便一直积极参与到开源社的社区推广中，包括翻译开源社发布的中国开源年度报告的日文版，在各类国际开源活动中宣传开源社，为开源社对接多家开源硬件合作伙伴等等，并且积极学习中文，在开源社区群和开源年会分享中努力用中文和大家进行交流，可谓开源社的国际合作大使。'
  },
  {
    name: '康悦',
    nickname: 'Rita',
    avatar: '/img/cblecker.png',
    recommendation: '康悦在微众开源繁忙而出色的工作表现的同时，身为开源社顾问委员会工作组的成员，她仍能尽心尽力地服务好开源社顾问委员会里的赞助伙伴、社区伙伴以及媒体伙伴的委员们，让委员会里的企业社区、媒体社区以及开源项目社区都能宾至如归，开心地融入到开源社-开源人的家。COSCon21更主动承担了深圳分会场的筹备工作，让深圳地区的各个社区能积极热情地参与本届中国开源年会。在开源社顾问委员会的长期支持合作和顾问委员会工作组的长期工作奉献中，都能看到康悦的身影，她既很好地平衡了双重的角色身份，又热情自发地投入到社区贡献中，为赞助伙伴和社区的合作展示了一个优秀的范例。'
  }
]

const yearlyStars = [
  { year: '2023', stars: cooperationStars2023 },
  { year: '2022', stars: cooperationStars2022 },
  { year: '2021', stars: cooperationStars2021 }
]

export default function CooperationPage() {
  const [selectedYear, setSelectedYear] = useState('2023')
  
  const uniqueYears = useMemo(() => {
    return yearlyStars.map(item => item.year).sort((a, b) => parseInt(b) - parseInt(a))
  }, [])

  const yearMenuItems: MenuProps['items'] = uniqueYears.map(year => ({
    key: year,
    label: year,
    onClick: () => setSelectedYear(year)
  }))
  
  const selectedStars = useMemo(() => {
    return yearlyStars.find(item => item.year === selectedYear)?.stars || cooperationStars2023
  }, [selectedYear])

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>社区合作之星</h1>
          <p className={styles.subtitle}>
            "社区合作之星"是从2021年开始，开源社社区合作组为鼓励对中国开源社区之间的合作有杰出贡献的志愿者而设立的奖项，希望通过此奖项感谢所有为社区合作做出贡献的朋友们。评选对象不限于开源社成员或志愿者。
          </p>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{selectedStars.length}</div>
            <div className={styles.statLabel}>社区合作之星</div>
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
