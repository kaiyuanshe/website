// 委员会人员数据
export interface CommitteeMember {
  name: string
  pronouns?: string
  title: string
  organization: string
  avatar: string
  twitter?: string
  github?: string
  linkedin?: string
  email?: string
  blog?: string
  details?: string[]
  onDetailClick?: () => void
}

export interface WorkingGroup {
  name: string
  description: string
  leader: string
  viceLeader?: string[]
  members: string[]
}

// 理事会数据
export const boardMembers: CommitteeMember[] = [
  {
    name: '陈阳',
    pronouns: 'Emily',
    title: '开源社 2025 届理事。',
    organization: '开源社 2025 届理事。',
    avatar: '/img/board/5.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'emily@kaiyuanshe.org',
    blog: '',
    details: [
      `个人简介： 2014 年发起成立开源社，也是中国开源年度报告，中国开源先锋 33 人，COSCon 中国开源年会的发起者。2004 年参与开源，曾任 GNOME 基金会 2010 董事总监，GNOME.Asia 社区创始人，Mozilla/Firfox 核心贡献者，GSoC 导师，2016 年任中国开源软件推进联盟副秘书长，开放原子开源基金会 TOC 导师。20 多年云计算和开源领域行业经验，目前在微软担任 Fabric 数据工厂首席产品经理，技术领域包括开源技术和社区治理、公有云、行业 AI 解决方案、知识图谱、Copilot、数据集成。2019 年获得美国人工智能专利一项， O'REILLY 《Beautiful Testing》联合作者。
      2025 年是开源社走过的第十一年，我也在这个社区的滋养下不断成长。开源社区的思维模式和工作方式早已融入我的日常，成为我工作与生活的重要组成部分，更是一份终身的事业。2025 年我希望能够尽自己所能回馈社区，并期待与更多开源的小伙伴携手，共同开拓有意义的事业。`
    ]
  },
  {
    name: '江波',
    pronouns: 'Nadia Jiang',
    title: '开源社 2025 届理事长',
    organization: '开源社 2025 届理事长',
    avatar: '/img/board/1.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'jiangbo@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：蚂蚁集团开源技术增长 & 国际化负责人，Apache 软件基金会正式成员，历任开源社理事长、副理事长、执行长、副执行长，关注开源社社区发展和国际接轨的使命，曾代表开源社参与 Open Source Congress、DevRelCon London、OpenUK State of Open Con、FOSSAsia 等国际社区活动并发表演讲。江波是多届 COSCon 中国开源年会的核心组织者、Keynote 出品人，COSCon 24 的总召集人，联合发起了 SegmentFault 思否 x 开源社 "中国开源先锋 33 人" 年度评选；连续多年参与《中国开源年度报告》开源大事记撰写、问卷推广、图文设计等工作。除在开源社贡献外，江波还在 ALC Beijing、中国计算机学会、中国通信学会等组织贡献，是 ApacheCon Asia、OpenInfra Days China、OSCAR 开源产业大会的核心组织者，OSPO Summit、Dev.Together 开发者生态峰会的联合发起人。加入蚂蚁集团前，江波曾任 SegmentFault 思否 COO。'
    ]
  },
  {
    name: '李明康',
    pronouns: '李小明',
    title: '开源社 2025 届理事',
    organization: '开源社 2025 届理事',
    avatar: '/img/board/6.webp',
    twitter: 'https://twitter.com/Bright_OSOP',
    github: 'https://github.com/Nliver',
    linkedin: '',
    email: 'slibre@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：历任开源社社区合作组组长、顾问委员会秘书、项目委员会成员、理事等职，主要负责开源社社区发展与合作、中国开源地图项目、顾问委员会和开源战略研究，是多届中国开源年会 COSCon 组委会核心成员，参与中国开源年度报告、中国开源发展蓝皮书、开源战略动态月报等开源报告编写工作。目前关注开源教育、开发者关系、开源运营和 OSPO，担任开放原子开源基金会教培顾问，李明康同时也在多个开源社区活跃贡献，是软件工程师、"明说开源"主理人、Linux 基金会亚太区开源布道者、Apache 软件基金会 Local Community Shanghai Member、中国计算机学会开源发展委员会执行委员、AWS User Group Leader、OSPO Summit 筹备组成员。曾在多个知名开源峰会上担任分论坛出品人、主持人和发表演讲，获中国开源先锋 33 人、LF 开源软件学园开源明星奖、社区合作之星等荣誉。'
    ]
  },
  {
    name: '梁尧',
    pronouns: 'Leon',
    title: '开源社 2025 届理事、执行委员会执行长。',
    organization: '开源社 2025 届理事、执行委员会执行长。',
    avatar: '/img/board/4.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'ly@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：2016 年加入开源社，2018 年起参与中国开源年会（COSCon）组委会，2020 年起担任开源社理事，2024 年度开源社副理事长，在开源社主要负责开源治理、开源创新、开源硬件等工作，发起"OpenGood 开源公益" 计划并获选"中国开放科学优秀行动"。在多个开源社区/组织中持续进行贡献，同时也是 OpenSDV 生态运营副总监，中国计算机学会开源发展委员会执委，中国电子标准院木兰开源社区知识产权委员会委员，获选"中国开源先锋 33 人"。曾参与中国开源年度报告、中国开源发展蓝皮书、木兰系列开源许可证、开放原子开放硬件许可证、中国信通院开源相关报告标准等的编写，担任中国"开源创新榜"评委。获聘上海技术交易所、深圳知识产权局以及广东、广州、珠海、海南、黑龙江等多个地区/组织机构专家，是多件中、美授权发明专利第一发明人。致力于推动科技 & 社会开放式创新生态的发展，目前主要关注具身智能（汽车&机器人）领域。'
    ]
  },
  {
    name: '林旅强',
    pronouns: 'Richard',
    title: '开源社 2025 届副理事长',
    organization: '开源社 2025 届副理事长',
    avatar: '/img/board/2.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'richard@kaiyuanshe.org',
    blog: '',
    details: [
      `个人简介：林旅强，开源社联合创始人 （2014-），RTE （实时互动） 开发者社区联合主理人 （2024-），拥有 15 年以上行业经验，专注 AI、Web3、toD 产品增长及开发者生态建设，擅长连接技术与商业，推动技术社区与开发者生态发展。曾领导华为、01.AI 等企业的 AI 产品开发者生态体系建设，现为独立顾问，为上市公司、投资机构、基金会及技术社区提供战略咨询，助力生态建设、产品增长与技术推广。作为全球技术大会的活跃讲者，林旅强曾在 O'Reilly OSCON、LinuxCon、FOSDEM、OpenUK SOOCon、FOSSAsia、DevRelCon、COSCon、COSCUP 等发表演讲，并担任 Datawhale、OpenBuild.xyz、天工开物开源基金会及 OSCAR 等组织的专家顾问。译有《开发者关系：方法与实践》（2023） 及《开源项目成功之道》（2025）。`
    ]
  },
  {
    name: '许银',
    pronouns: 'Ian',
    title: '开源社 2025 届理事',
    organization: '开源社 2025 届理事',
    avatar: '/img/board/7.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'xuyin@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：OpenBuild 开发者社区发起人，17 年加入开源社，担任过活动组组长，开源社副执行长等职，成功负责多届开源年会的落地执行。长期活跃于开源社区，参与社区贡献，曾获 开源先锋 33 人，开源之星 等殊荣。目前是 PyChina， RustCC 社区组委会成员，ALC Beijing Member。'
    ]
  },
  {
    name: '庄表伟',
    pronouns: '',
    title: '开源社 2025 届理事、项目委员会主席',
    organization: '开源社 2025 届理事、项目委员会主席',
    avatar: '/img/board/3.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'zbw@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：1997 年毕业于华东师范大学，曾任盛大创新院的高级研究员，华为内源平台架构师，开源治理专家。目前就职于重庆天工开物开源基金会，担任执行副秘书长。2015 年起加入开源社，担任过理事、执行长、理事长等职务。长期活跃于开源社区，积极参与社区的各项活动，曾在多种技术、开源大会上发表演讲，曾著有《开源思索集》一书。'
    ]
  }
]

// 顾问委员会数据
export const advisoryMembers: CommitteeMember[] = [
  {
    name: "赖安妮 Anni",
    pronouns: "Santa Clara",
    title: "顾问",
    organization: "Futurewei",
    avatar: "https://res.cloudinary.com/dqaizhakm/image/upload/v1761753233/anni_cbz1r3.png",
    twitter: "",
    github: "https://github.com/kaiyuanshe",
    email: 'anni.lai@futurewei.com',
    blog: "过去 15 年，在多个开源基金会和组织参与贡献，包括 CNCF、OCI、LF Edge 和 OpenStack 基金会等。目前参与贡献重点为开源人工智能战略、许可和流程。",
    details: [
      "现任开源社顾问委员会顾问委员，Linux 基金会 (LF) AI & Data 基金会董事，LF 欧洲顾问委员会、LF Open Metaverse 基金会委员会。 工作上，现任 Futurewei 开源运营和营销主管，负责开源项目管理、流程、合规性、培训、项目协调和生态系统建设。"
    ]
  },
  {
    name: "Hong Phuc Dang",
    pronouns: "",
    title: "顾问",
    organization: "FOSSASIA",
    avatar: "/img/cblecker.png",
    twitter: "https://x.com/hpdang",
    github: "https://github.com/hpdang",
    email: '',
    blog: "",
    details: [
      "现任开源社顾问委员会顾问委员，Hong Phuc Dang 是前 OSI 副总裁、FOSSASIA 的创始人，该组织致力于通过分享开放技术、促进全球联系和可持续生产来改善人们的生活。她主持每年的 FOSSASIA 峰会，并在越南、印度、中国、斯里兰卡和德国等国家组织开放技术峰会。她是 IEEE 开源委员会的副主席，开源商业联盟的董事会成员和开源计划的副总裁。凭借十多年的开源专业知识，她支持企业向开源和内源开发模式的技术转型。她最近的工作重点是将开源硬件大规模地投入生产。Hong Phuc 认为自由和开源不仅仅是一种自由交换代码的方式，它是一种合作模式，为全世界的人们和平合作解决问题树立了榜样。"
    ]
  },
  {
    name: "韦青",
    pronouns: "",
    title: "顾问",
    organization: "微软中国",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "蒋涛",
    pronouns: "",
    title: "顾问",
    organization: "CSDN、开放原子开源基金会",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "王旭",
    pronouns: "",
    title: "顾问",
    organization: "蚂蚁集团",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "任旭东",
    pronouns: "",
    title: "顾问",
    organization: "华为",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "王小虎",
    pronouns: "",
    title: "顾问",
    organization: "浪潮 KaiwuDB",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "余杰",
    pronouns: "Jack",
    title: "顾问",
    organization: "国防科技大学、OpenKylin",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "堵俊平",
    pronouns: "",
    title: "顾问",
    organization: "Datastrato",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "马涛",
    pronouns: "",
    title: "顾问",
    organization: "龙蜥社区",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "谭中意",
    pronouns: "",
    title: "顾问",
    organization: "COPU",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "王晓璇",
    pronouns: "Cameron",
    title: "顾问",
    organization: "商汤科技",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "杨丽蕴",
    pronouns: "",
    title: "顾问",
    organization: "中国电子技术标准化研究院",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "周明辉",
    pronouns: "",
    title: "顾问",
    organization: "北京大学",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "章文嵩",
    pronouns: "",
    title: "顾问",
    organization: "中国计算机学会",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "郭雪",
    pronouns: "",
    title: "顾问",
    organization: "中国信通院",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "姜宁",
    pronouns: "",
    title: "顾问",
    organization: "字节跳动",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "段少婷",
    pronouns: "Fiona",
    title: "顾问",
    organization: "OceanBase",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "陈梓立",
    pronouns: "",
    title: "顾问",
    organization: "Apache Software Foundation",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "杨轩",
    pronouns: "",
    title: "顾问",
    organization: "Linux Foundation",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "陈泽辉",
    pronouns: "Keith Chan",
    title: "顾问",
    organization: "Linux Foundation",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "孟伟",
    pronouns: "Vally",
    title: "顾问",
    organization: "Linux Foundation",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "莫志宏",
    pronouns: "",
    title: "顾问",
    organization: "嘉立创",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "薛植元",
    pronouns: "Alex",
    title: "顾问",
    organization: "安势科技",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "孙乐",
    pronouns: "",
    title: "顾问",
    organization: "迪玛科技",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "吴宇",
    pronouns: "",
    title: "顾问",
    organization: "醋溜科技",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "潘凌涛",
    pronouns: "",
    title: "顾问",
    organization: "Seafile",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "赵云虎",
    pronouns: "",
    title: "顾问",
    organization: "大成律所",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "马红伟",
    pronouns: "",
    title: "顾问",
    organization: "百度开源",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "严澎屹",
    pronouns: "Robert",
    title: "顾问",
    organization: "Near Foundation",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "狄安",
    pronouns: "Dean",
    title: "顾问",
    organization: "OpenTEkr",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "霍太稳",
    pronouns: "Kevin",
    title: "顾问",
    organization: "infoQ",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "马越",
    pronouns: "",
    title: "顾问",
    organization: "开源中国",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "朱其罡",
    pronouns: "",
    title: "顾问",
    organization: "北京智源研究院",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "王蕴博",
    pronouns: "",
    title: "顾问",
    organization: "中国计算机学会",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "吴晟",
    pronouns: "",
    title: "顾问",
    organization: "个人",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "马全一",
    pronouns: "",
    title: "顾问",
    organization: "个人",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  },
  {
    name: "王铁震",
    pronouns: "",
    title: "顾问",
    organization: "HuggingFace",
    avatar: "/img/cblecker.png",
    twitter: "",
    github: "",
    email: '',
    blog: "",
    details: [""]
  }
  // 注：为了简洁，这里只显示前几个成员，实际应包含所有成员
]

// 法律咨询委员会数据
export const legalMembers: CommitteeMember[] = [
  {
    name: '王东芳',
    pronouns: '',
    title: '顾问',
    organization: '',
    avatar: 'https://res.cloudinary.com/dqaizhakm/image/upload/v1761756615/wangdongfang_wv8jn3.jpg',
    email: 'wangdongfang@kaiyuanshe.org',
    github: 'https://github.com/kaiyuanshe',
    blog: '',
    details: []
  },
  {
    name: '薛亮',
    pronouns: '',
    title: '顾问',
    organization: '',
    avatar: 'https://res.cloudinary.com/dqaizhakm/image/upload/v1761757302/xueliang_btsujt.jpg',
    email: 'liang.xue@kaiyuanshe.org',
    github: 'https://github.com/chenlawyer'
  },
  {
    name: '张楚霞',
    pronouns: '',
    title: '顾问',
    organization: '',
    avatar: 'https://res.cloudinary.com/dqaizhakm/image/upload/v1761757707/zhangjunxia_batqow.png',
    email: '',
    github: 'https://github.com/chenlawyer'
  },
  {
    name: '董振伟',
    pronouns: 'She/Her',
    title: '顾问',
    organization: '',
    avatar: '/img/cblecker.png',
    email: '',
    github: 'https://github.com/chenlawyer'
  },
  {
    name: '郭雪',
    pronouns: '',
    title: '顾问',
    organization: '',
    avatar: 'https://res.cloudinary.com/dqaizhakm/image/upload/v1761756613/guoxue_rjww2k.png',
    email: '',
    github: 'https://github.com/chenlawyer'
  },
  {
    name: '黄鸿文',
    pronouns: '',
    title: '顾问',
    organization: '',
    avatar: 'https://res.cloudinary.com/dqaizhakm/image/upload/v1761756609/huanghongwen_qidhti.jpg',
    github: 'https://github.com/chenlawyer'
  },
  {
    name: '梁尧',
    pronouns: '',
    title: '顾问',
    organization: '',
    avatar: 'https://res.cloudinary.com/dqaizhakm/image/upload/v1761756605/liangyao_umahwn.jpg',
    email: '',
    github: 'https://github.com/chenlawyer'
  },
  {
    name: '林旅强',
    pronouns: '',
    title: '正式成员',
    organization: '',
    avatar: 'https://res.cloudinary.com/dqaizhakm/image/upload/v1761756604/linlvqiang_tmo4bq.jpg',
    email: '',
    github: 'https://github.com/chenlawyer'
  }
]

// 项目委员会数据
export const projectMembers: CommitteeMember[] = [
  {
    name: '庄表伟',
    pronouns: '',
    title: '项目委员会主席',
    organization: '开源社 2025 届理事、项目委员会主席',
    avatar: '/img/board/3.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'zbw@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：1997 年毕业于华东师范大学，曾任盛大创新院的高级研究员，华为内源平台架构师，开源治理专家。目前就职于重庆天工开物开源基金会，担任执行副秘书长。2015 年起加入开源社，担任过理事、执行长、理事长等职务。长期活跃于开源社区，积极参与社区的各项活动，曾在多种技术、开源大会上发表演讲，曾著有《开源思索集》一书。'
    ]
  },
  {
    name: '刘天栋',
    pronouns: '',
    title: '委员',
    organization: '',
    avatar: '/img/cblecker.png',
    twitter: '',
    github: '',
    linkedin: '',
    email: '',
    blog: '',
    details: []
  },
  {
    name: '李明康',
    pronouns: '李小明',
    title: '委员',
    organization: '开源社 2025 届理事',
    avatar: '/img/board/6.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'slibre@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：历任开源社社区合作组组长、顾问委员会秘书、项目委员会成员、理事等职，主要负责开源社社区发展与合作、中国开源地图项目、顾问委员会和开源战略研究，是多届中国开源年会 COSCon 组委会核心成员，参与中国开源年度报告、中国开源发展蓝皮书、开源战略动态月报等开源报告编写工作。目前关注开源教育、开发者关系、开源运营和 OSPO，担任开放原子开源基金会教培顾问，李明康同时也在多个开源社区活跃贡献，是软件工程师、"明说开源"主理人、Linux 基金会亚太区开源布道者、Apache 软件基金会 Local Community Shanghai Member、中国计算机学会开源发展委员会执行委员、AWS User Group Leader、OSPO Summit 筹备组成员。曾在多个知名开源峰会上担任分论坛出品人、主持人和发表演讲，获中国开源先锋 33 人、LF 开源软件学园开源明星奖、社区合作之星等荣誉。'
    ]
  },
  {
    name: '许银',
    pronouns: 'Ian',
    title: '委员',
    organization: '开源社 2025 届理事',
    avatar: '/img/board/7.webp',
    twitter: '',
    github: '',
    linkedin: '',
    email: 'xuyin@kaiyuanshe.org',
    blog: '',
    details: [
      '个人简介：OpenBuild 开发者社区发起人，17 年加入开源社，担任过活动组组长，开源社副执行长等职，成功负责多届开源年会的落地执行。长期活跃于开源社区，参与社区贡献，曾获 开源先锋 33 人，开源之星 等殊荣。目前是 PyChina， RustCC 社区组委会成员，ALC Beijing Member。'
    ]
  },
  {
    name: '郭浩赟',
    pronouns: '',
    title: '委员',
    organization: '',
    avatar: '/img/cblecker.png',
    twitter: '',
    github: '',
    linkedin: '',
    email: '',
    blog: '',
    details: []
  },
  {
    name: '吴京京',
    pronouns: '',
    title: '委员',
    organization: '',
    avatar: '/img/cblecker.png',
    twitter: '',
    github: '',
    linkedin: '',
    email: '',
    blog: '',
    details: []
  },
  {
    name: '王伟',
    pronouns: '',
    title: '委员',
    organization: '',
    avatar: '/img/cblecker.png',
    twitter: '',
    github: '',
    linkedin: '',
    email: '',
    blog: '',
    details: []
  }
]

// 执行委员会工作组数据
export const workingGroups: WorkingGroup[] = [
  {
    name: '媒体品牌组',
    description: 'XXX',
    leader: '江波',
    members: []
  },
  {
    name: '顾问服务组',
    description: 'XXX',
    leader: '陈阳.Emily',
    viceLeader: ['李明康', '晁倩'],
    members: ['江波', '许银', '林旅强', '晁倩', '梁尧', '刘天栋', '止戈']
  },
  {
    name: '社区合作组',
    description: 'XXX',
    leader: '李明康（小明）',
    members: ['赵文涵', '李楠', '代立冬', '王文竹', '何莹', '徐硕博', '周琦', '张琰彬', '刘绪光', '徐普']
  },
  {
    name: '国际接轨组',
    description: 'XXX',
    leader: '林旅强',
    members: ['江波', '刘天栋', '陈阳', '李明康', '许银', '李思颖', '刘敏', '范圣佑']
  },
  {
    name: '财务组',
    description: 'XXX',
    leader: '李佳欣',
    viceLeader: ['王萱'],
    members: ['李思颖']
  },
  {
    name: '法务工作组',
    description: 'XXX',
    leader: '梁尧',
    viceLeader: ['丁欣'],
    members: ['沈杨', '丁文昊', '段延星']
  },
  {
    name: 'KCC工作组',
    description: 'XXX',
    leader: '庄表伟',
    viceLeader: ['惠世翼'],
    members: ['王德福', '郑旭', '董吉甫', '臧鹏', '马证', '陈玄', '刘晓东']
  },
  {
    name: '开源公益组',
    description: 'XXX',
    leader: '廖敬仪',
    members: ['梁尧', '李思颖', '庄表伟', '林夏', '何莹', '王晓珂', '李明康']
  },
  {
    name: '基础设施组',
    description: 'XXX',
    leader: '庄表伟',
    members: ['李明康', '止戈', '李海龙', '陈玄', '罗基印', '刘绪光', '李思颖', '熊靖', '高天贺', '许银', '梁尧', '桑毅炜']
  }
]