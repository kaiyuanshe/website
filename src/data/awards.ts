// 奖项获得者数据
export interface AwardRecipient {
  name: string
  nickname?: string
  avatar?: string
  date?: number
  year?: number
  recommendation?: string
}

export interface Pioneer {
  id: number
  name: string
  title: string
  description: string
  avatar: string
  year: number
}

// 开源之星数据
export const openSourceStars: AwardRecipient[] = [
  {
    name: '晁倩',
    nickname: '啊Q',
    avatar: '/img/volunteers/1.webp',
    date: 2024,
    recommendation:
      '啊 Q 是开源社长期的贡献者， 以立志打造一场 0 bug 的开源大会为目标，对开源社每年的 COSCon 从志愿者管理，赞助商对接，飞到现场活动紧急支援等，都能看到啊 Q 的身影。在家庭生活需要她投入的时候，也意外看到她百忙之中抽出时间来照顾开源社这个十岁的孩子。'
  },
  {
    name: '李建盛',
    nickname: '适兕',
    avatar: '/img/volunteers/2.webp',
    date: 2024,
    recommendation: '连续两年线下组织、支持 KCC 读书会活动。'
  },
  {
    name: '丁文昊',
    nickname: '止戈',
    avatar: '/img/cblecker.png',
    date: 2023,
    recommendation: ''
  },
  {
    name: '惠世翼',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2022,
    recommendation: ''
  },
  {
    name: '朱庆裕',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2022,
    recommendation: ''
  },
  {
    name: '郭浩赟',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2021,
    recommendation: ''
  },
  {
    name: '许银',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2021,
    recommendation: ''
  },
  {
    name: '赵生宇',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2020,
    recommendation: ''
  },
  {
    name: '朱庆裕',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2020,
    recommendation: ''
  },
  {
    name: '舒敏',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2019,
    recommendation: ''
  },
  {
    name: '梁尧',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2019,
    recommendation: ''
  },
  {
    name: '辛庆',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2018,
    recommendation: ''
  },
  {
    name: '王俊波',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2018,
    recommendation: ''
  },
  {
    name: '王春生',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2017,
    recommendation: ''
  },
  {
    name: '李思颖',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2017,
    recommendation: ''
  }
]

// COSCon之星数据
export const cosconStars2023: AwardRecipient[] = [
  {
    name: '刘于瑜',
    nickname: 'Miya',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '王玥敏',
    nickname: '月饼',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '朱亿钦',
    nickname: '居居',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '罗蕊艳',
    nickname: '小汭',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '赵玭月',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '王萱',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '赵文涵',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '李楠',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '薛云鹤',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '宋妮龙吟',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '邝曾珍',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '陈玄',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '易慧媛',
    nickname: '果汁',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '石垚',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '刘绪光',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '黄绍雅',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '桑毅炜',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '罗基印',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '谢祥佳',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '王润林',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  }
]

export const cosconStars2022: AwardRecipient[] = [
  {
    name: '王玥敏',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '袁睿斌',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '朱亿钦',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '程诗杰',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '马红伟',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '郭琦',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '崔晨洋',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '丁文昊',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '李宇飞',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '沈于蓝',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '陈玄',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '李明康',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  }
]

export const cosconStars2021: AwardRecipient[] = [
  {
    name: '代立冬',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '朱庆裕',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '舒敏',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '晁倩',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '王玥敏',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '惠世冀',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '袁睿斌',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '朱亿钦',
    nickname: '居居',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '赵苓俐',
    nickname: '灵儿',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '刘于瑜',
    nickname: 'Miya',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '程诗杰',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '陈智浩.Jacky',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  }
]

export const cosconStars2020: AwardRecipient[] = [
  {
    name: '何莹',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '苏帅',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '郭浩赟',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '袁艺',
    nickname: '袁滚滚',
    avatar: '/img/cblecker.png',
    recommendation: ''
  }
]

export const cosconStars2019: AwardRecipient[] = [
  {
    name: '许银',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '晁倩',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  },
  {
    name: '王晓珂',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: ''
  }
]

// COSCon之星年度数据
export const yearlyStars = [
  { year: '2023', stars: cosconStars2023 },
  { year: '2022', stars: cosconStars2022 },
  { year: '2021', stars: cosconStars2021 },
  { year: '2020', stars: cosconStars2020 },
  { year: '2019', stars: cosconStars2019 }
]

// 开源先锋榜数据
export const pioneers: Pioneer[] = [
  {
    id: 1,
    name: 'DIYgod',
    title: 'RSSHub 作者，Follow、xLog 项目创始人',
    description:
      '95后开发者 DIYgod，秉持 "写代码是热爱，写到世界充满爱" 理念，以 "让 RSS 更简单" 为使命打造 RSSHub 开源项目，在 GitHub 获超 30k 星标，有900多 Contributors，展现中国开源力量。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 2,
    name: 'Miley Fu',
    title: 'SecondState，KubeCon China 2024会议联席主席',
    description:
      '活跃在全球技术舞台的开源布道者，在亚太、欧洲、北美的技术会议上都可以看到她的身影。同时也是众多开源活动的组织者，KubeCon China 2024会议的联席主席。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 3,
    name: '蔡威',
    title:
      'DaoCloud 道客云原生研发工程师，云原生计算基金会全球大使，Containerd & ClusterPedia 项目维护者',
    description:
      '活跃的云原生布道者，KubeCon 演讲嘉宾和评审委员会成员，多次在全球大会上分享前沿技术，在国内多个城市组织了多长 KCD 云原生活动，影响力广泛。同时也是多个 CNCF 开源项目的长期贡献者。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 4,
    name: '陈阳',
    title:
      '复旦大学计算机科学技术学院教授，开源软件 EasyGraph 创始人 / 负责人，上海开源信息技术协会理事 / 大数据专委会主任',
    description:
      '专注开源信息技术，成果显著，他设计的开源工具 EasyGraph（PyPI 下载近60万次，论文发表于 Patterns），他系统研究开源大数据中的开发者行为，获学界关注。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 5,
    name: '段少婷',
    title: 'OceanBase 开源社区负责人',
    description:
      '心系青少年与高校学生开发者生态，投身开源技术、生态建设与社区治理，热忱不减。多次亮相各大开源会议，凭专业引领开源数据库话题研讨，积极布道 OceanBase 开源技术和社区。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 6,
    name: '范晶晶',
    title: 'Datawhale 创始人',
    description:
      '作为学习者社群的创始人，范晶晶带领 Datawhale 以开源的方式推动数据科学与 AI 人才培养，开源了51门学习教程、出版了系列图书，聚合了一群有开源精神和探索精神的团队成员。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 7,
    name: '胡捷',
    title: '中兴通信开源战略总监',
    description:
      '通信行业的开源老兵，活跃在国内外开源社区，积极探索 OSPO 最佳实践。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 8,
    name: '俊哲',
    title:
      '中国信息通信研究院云计算与大数据研究所开源高级业务主管，"可信开源合规计划"社区发起人 / 负责人',
    description:
      '日拱一卒，笃志不倦。深入开源合规、开源治理领域研究，牵头编写开源治理成熟度模型标准，信通院《开源合规指南》、《开源大模型应用指南》研究报告。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 9,
    name: '赖安妮',
    title:
      'Futurewei 开源运营和营销主管，Linux 基金会 (LF) AI & Data 基金会董事，开源社顾问委员会顾问委员',
    description:
      '过去15年，在多个开源基金会和组织参与贡献，包括 CNCF、OCI、LF Edge 和 OpenStack 基金会等。目前参与贡献重点为开源人工智能战略、许可和流程。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 10,
    name: '李剑峰',
    title: 'openKylin 社区技术委员会委员，麒麟软件终端研发技术专家',
    description:
      'openKylin 社区的版本研发负责人，长期从事 Linux 桌面相关的技术研发和推广，凭借多年的社区贡献成为 Ubuntu Developer，Debian Maintainer，是开源社区的中坚力量。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 11,
    name: '李明康',
    title:
      '开放原子开源基金会教培顾问，开源社理事，中国计算机学会（CCF）开源发展委员会执行委员',
    description:
      '在多个开源社区中贡献，通过组织开源活动、发表演讲，和撰写博客写作积极推动开源教育与跨社区合作。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 12,
    name: '连林江',
    title: 'SelectDB CEO & 联合创始人，Apache Doris 开源项目商业支持者',
    description:
      '作为开源商业先锋，带领飞轮科技助力 Apache Doris 在核心功能研发、社区运营推广、用户支持维护等多个方面给予了强有力的支持，推动 Apache Doris 成为大数据领域最为活跃的开源项目之一。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 13,
    name: '梁尧',
    title: '开源社 2024 年度副理事长，OpenSDV 汽车软件开源联盟生态运营副总监',
    description:
      '长期致力于推动开放式协作与创新，在开源硬件、开源公益、开源治理等领域持续贡献，是坚持不懈、脚踏实地推动中国开源发展的无名先锋。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 14,
    name: '林清山',
    title: '阿里云智能集团资深技术专家，阿里云消息产品线负责人，Apache RocketMQ 联合创始人 & PMC 成员， Apache RocketMQ 中文社区创始人',
    description:
      '在技术层面推动了 Apache RocketMQ 的架构演进与场景拓展，在社区建设与人才培育方面积极参与社区布道，为 Apache RocketMQ 社区的持续发展注入了强大的动力。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 15,
    name: '栾小凡',
    title: 'Zilliz 合伙人 & 研发 VP，milvus开源项目的主席，LF AI & Data 基金会技术咨询委员会成员',
    description:
      '作为 Zilliz 合伙人和技术总监、LF AI & Data 基金会技术咨询委员会成员，栾小凡拥有中美顶尖高校背景与科技公司经验。在他带领下，Milvus 已成为万星项目，获 2000 多家企业应用于多场景。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 16,
    name: '罗杨',
    title: '北京大学助理研究员，中国计算机学会（CCF）开源发展委员会执行委员，Casbin 开源社区 PMC 主席',
    description:
      '罗杨专注软件与系统安全关键技术研究，其提出的 Casbin 框架在同类开源项目中领先。他作为多场开源赛事组织者、布道者，推动开源与教育融合，凭创新实践获多个国内外顶尖奖项。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 17,
    name: '彭博',
    title: 'RWKV 创始人',
    description:
      '一位 16 岁考入香港大学物理系的天才少年，经历了对冲基金量化交易和创业制造智能硬件的洗礼后，如今以 RWKV 模型开发者的身份在 AI 领域崭露头角。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 18,
    name: '苏锐',
    title: 'Juicedata 合伙人',
    description:
      '作为 Juicedata 的 1 号成员，苏锐在 JuiceFS 开源项目从无到有的过程中扮演了关键角色，同时，他在探索开源项目商业化方面也取得了不俗的成绩。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 19,
    name: '王铁震',
    title: 'Hugging Face 工程师',
    description:
      '兼具实干与梦想追求的工程师，坚信开源连接全球，让 AI 益处普惠大众，推动了多位开源模型从业者成关键意见领袖，助力社区成长。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 20,
    name: '吴承霖',
    title: 'DeepWisdom 创始人 & CEO，MetaGPT 项目作者',
    description:
      '曾是腾讯、华为等大厂最年轻的高级研究员/技术专家，发表多篇顶会论文，在顶级竞赛中获得世界冠军。其创建的 MetaGPT 等多个开源项目多次占据 GitHub 热榜世界第一。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 21,
    name: '吴峰光',
    title: 'openEuler 社区技术委员会委员',
    description:
      '从 2005 年至今，吴峰光投身于开源已 17 年。作为核心的 Linux 内核代码贡献者，他有独立维护的代码树，可以直接向 Linus 提交补丁，常年受邀参加 Kernel Summit，全球达此成就者不过百人。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 22,
    name: '熊谱翔',
    title: 'RT-Thread 创始人 & CEO',
    description:
      '十余年如一日地推进中国嵌入式开源软件，开源了 RT-Thread 内核以及周边的核心组件，并搭建国内最大的嵌入式软件生态。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 23,
    name: '徐丹青',
    title: 'Bytebase 联合创始人 & CTO',
    description:
      '曾在 Google 硅谷总部任主任工程师，两获谷歌最高工程奖，参与并带领谷歌云数据库及云服务基础设施相关研发工作，于 2022 年联合发起 Bytebase。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 24,
    name: '徐俊杰',
    title: 'DaoCloud 道客开源团队负责人，KubeCon China 2024 会议联席主席',
    description:
      '亚太首位进入 Kubernetes 指导委员会的成员，KubeCon China 2024 大会联席主席，活跃的云原生开源布道者，DaoCloud 开源团队负责人。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 25,
    name: '徐鹏飞',
    title: 'CNCF KCL Owner',
    description:
      '编程语言、编译器、开发者工具、云原生技术和开源爱好者。CNCF 基金会 KCL 语言项目 Owner，KusionStack、KubeVela、Helmfile 等开源项目贡献者。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 26,
    name: '薛植元',
    title: '上海安势信息技术有限公司创始人 & CEO，开放原子 DevOps 组长',
    description:
      '薛植元带领一众来自国内外顶尖企业的技术专家打造了一系列软件供应链安全治理工具，身体力行的将实践经验和先进理念融入到国内开源标准的制定中。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 27,
    name: '杨朝坤',
    title: '蚂蚁集团技术专家，Apache Fury 创始人',
    description:
      '杨朝坤对开源技术有着极致的追求和热爱，Apache Fury 序列化框架是其开源技术的结晶，在海内外得到了广泛的应用，为大量系统降低了成本提升效率。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 28,
    name: '杨轩',
    title: 'Linux Foundation APAC 副总裁',
    description:
      'Linux 基金会亚太区副总裁，有超 20 年软件行业经验，现负责亚太区开源生态发展，在多领域经验丰富，涵盖企业开源战略、AI 应用等诸多方面，是积极的开源基金会布道者。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 29,
    name: '杨勇',
    title: '阿里云基础软件部资深技术总监，龙蜥操作系统开源社区技术委员会主席',
    description:
      '担任龙蜥操作系统开源社区技术委员会主席期间，主持制定了龙蜥社区长期发展的技术路线，同时推动了龙蜥、欧拉、OpenCloudOS、 OpenKylin、Deepin 五大社区共同发布开源生态发展合作倡议。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 30,
    name: '杨振涛',
    title: 'vivo 研发总监、互联网 OSPO 负责人，LFAPAC Evangelist，TODO Group 长期贡献者，PECommunity 平台工程社区发起人',
    description:
      '无论是 LFAPAC 的开源布道者，还是作为 vivo 互联网的 OSPO 负责人，抑或是技术博主，都在为倡导开源技术、推广开源文化做出突出贡献。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 31,
    name: '伊洪',
    title: 'Running Page 项目作者',
    description:
      '坚定的开源爱好者，通过开源自己的跑步数据将开源理念融入生活方式，他开发的 running_page 和 xiaogpt 等项目多次登上 GitHub Trending。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 32,
    name: '张路宇',
    title: 'Dify.AI 创始人 & CEO',
    description:
      '12 岁做个人站长，2018 年创办飞蛾开启创业，2023 年创办 Dify，目前 Dify.AI 在 GitHub 获超 52,000 Stars，是全球增速最快的开源项目之一，云版本已支持数十万个 AI 驱动的创新应用。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 33,
    name: '赵云虎',
    title: '北京大成（上海）律师事务所合伙人',
    description:
      '2023 ALB CHINA 客户首选律师，多起案件入选省级十大知识产权典型案例，发布《自由和开源软件法律报告（中国）》。同时，他也在木兰开源社区、开源社、天工开物开源基金会等多个开源组织活跃，积极布道开源治理知识与实践。',
    avatar:
      '/logo.png',
    year: 2024
  },
  {
    id: 1,
    name: '王建民',
    title: '清华大学软件学院院长、Apache IoTDB 项目创始人',
    description:
      '国内开源教育的领军人物，身体力行带领学生参与开源、贡献开源，发起的开源项目 IoTDB 进入 Apache 孵化器，并毕业成为顶级项目。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 2,
    name: '陈渝',
    title: '清华大学计算机系长聘副教授，博士生导师，操作系统专家',
    description:
      '作为清华大学计算机系教授和博导，陈渝是学术界中最身体力行，教学和实践开源结合起来的教授。在高校里持续十几年一直在不遗余力地推广开源，在课程中开设《开源与操作系统的发展史-操作系统的简介》等科普课，组织操作系统大赛，鼓励学生们从事操作系统的开源贡献和参与到开源社区中来。 ',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 3,
    name: '丁皓(漩涡)',
    title: 'Databend 研发工程师',
    description:
      '丁皓（漩涡）参与开源近十年来，累计贡献了 500 多个项目，提交了 2,000 多个 Issues 和 3,000 多次 PR，参与了近 8,000 次代码审查。作为 OpenDAL 项目作者及发起人，将项目捐赠到 Apache 孵化，并带领团队将来自国内外多元化的贡献者，从孵化初期的 40 余位发展到目前的 163 位。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 4,
    name: '古思为',
    title: 'Nebula Graph 首席开源布道师',
    description:
      '活跃在各个社区活动、技术大会上的开源布道师，享受在公共空间、开源社区用魔法构建东西，并把习得魔法 scale 给社区中的更多巫师。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 5,
    name: '郭旭东',
    title: 'LFAPAC Evangelist',
    description:
      '活跃于各种各样的技术社区、开源社区，对于社区、布道、技术与教育都有着充沛的热情，热心公益，积极贡献，是开源社区不可或缺里的中坚力量。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 6,
    name: '季敏',
    title: 'Seata 社区创始人，阿里中间件分布式事务团队负责人',
    description:
      '作为 Seata 社区创始人，季敏从 0-1 构建了 Seata 开源社区体系，并受到了开发者的热烈欢迎，在短短三年间项目收获了 23k star。同时，他积极参与开源技术布道，近三年参加线上线下主题分享活动数十场。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 7,
    name: '李梦',
    title: '开源之夏/中科院软件所',
    description:
      '作为开源之夏的主要推动者之一，李梦依托开源之夏活动，辗转在国内多个城市和高校，通过 Meetup、校园行等活动积极宣传、布道开源，为开源教育做出了不可磨灭的贡献。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 8,
    name: '李钰',
    title: '阿里巴巴资深技术专家，ASF Member，Apache Flink & HBase PMC',
    description:
      '无论在 CommunityOverCode Asia 大会里，在 ALC Beijing 的双周例会里，或是作为多个 Apache 孵化项目的领路人 (Champion) 或导师 (Mentor)，我们总是会看到李钰的身影，参与并贡献着开源生态的发展，提升了国内开发者在国际开源领域的贡献度和影响力。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 9,
    name: '林旅强',
    title: '零一万物开源负责人，开源社联合创始人',
    description:
      '从 GitCafe 到华为，到如今的零一万物，林旅强一直活跃在开源社区中，关注开发者关系、开源商业、社区建设等领域，并翻译中国首部开发者关系图书《开发者关系:方法与实践》。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 10,
    name: '刘军',
    title: 'Apache Dubbo PMC Chair，阿里云服务框架负责人',
    description:
      '刘军是 Apache Dubbo PMC Chair，微服务、RPC 领域的老兵。作为Dubbo 开源社区负责人，推动 Dubbo 重启开源并成为 Apache 顶级项目。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 11,
    name: '刘敏',
    title: '优麒麟社区运营负责人，openKylin 社区副秘书长 & 运营负责人',
    description:
      'openKylin 社区的运营负责人，KDE Network China 初创成员，长期积极投入在开源 Linux 操作系统和开源社区治理的研究工作中，也是可信开源治理标准专家组的成员。在国际国内的社区活动和开源会议中，经常可见到刘敏活跃的身影。 ',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 12,
    name: '陆首群',
    title: '中国开源软件推进联盟(COPU)主席',
    description:
      '2023 年最冷的冬天，中国开源软件推进联盟（COPU）主席陆首群坐着轮椅上台演讲，感动了开源圈的新一代年轻人。陆首群教授是中国开源行业泰斗，是世界闻名的开源领袖，是中国信息化的开拓者和实践者，同时也是中国开源运动的倡导者和推动者。笔耕不辍，著有新书《开源创新：数字化转型与智能化重构》。',
    avatar:
      '/logo.png',
    year: 2023
  },
  {
    id: 1,
    name: 'Anthony Fu',
    title: 'NuxtLabs 员工，Slidev、Vitest、VueUse 作者，Vue.js 团队成员',
    description:
      '即使不是前端圈的一份子，我们也经常能刷到 AntFu 的身影，出圈是对一个人是否有影响力的最好注解。而在 B 站上，我们正见证着 AntFu 成为程序员中的新锐网红，做开源界的明星有什么不可以呢？',
    avatar:
      '/logo.png',
    year: 2022
  },
  {
    id: 2,
    name: 'Koala',
    title: 'B 站 “Koala 聊开源” Up 主',
    description:
      '曾是土木工程师，2020 年退休的程序员妈妈。缘于支持儿子的开源项目，开始接触开源，并在 B 站上开设账号 “Koala 聊开源”，通过视频的形式发布自己对开源的见解，兼顾深度与趣味性、科普性，获得了广泛关注。',
    avatar:
      '/logo.png',
    year: 2022
  },
  {
    id: 1,
    name: '包云岗',
    title: '中科院计算所研究员、博士生导师、所长助理，中国科学院大学教授，中国开放指令生态（RISC-V）联盟秘书长',
    description:
      '包云岗入选开放指令集 RISC-V 国际基金会理事会，成立中国 RISC-V 联盟，推动中国开源芯片生态建设。推动中科院大学启动“一生一芯”计划，让开源芯片教育走进本科生课堂。带领团队突破开源芯片敏捷设计方法的若干关键技术，推出“香山”开源高性能处理器芯片，当之无愧的开源芯片领军人物。',
    avatar:
      '/logo.png',
    year: 2021
  },
  {
    id: 2,
    name: '陈莉君',
    title: '西安邮电大学教授、中国开源联盟专家组成员',
    description:
      '国内最早致力于 Linux 操作系统、开源教育的高校老师，业余时间主办的 Linux 内核之旅网站，为 Linux 爱好者默默提供着无私的帮助，值得一提的是，把自己 2002 年撰写的《深入分析 Linux 内核源代码》一书，因为绝版而全文公布于网络，这为嵌入式开发者和 Linux 内核爱好者提供了触手可得的资料。坚持 20 多年，门生遍天下！',
    avatar:
      '/logo.png',
    year: 2021
  },
  {
    id: 1,
    name: '陈昱',
    title: '云启资本董事总经理',
    description:
      '云启资本董事总经理。通过投资的方式助力中国开源生态加速成长，是中国投资领域助力开源生态的代表人物。',
    avatar:
      '/logo.png',
    year: 2020
  },
  {
    id: 2,
    name: '堵俊平',
    title: '开放原子基金会TOC主席，Apache基金会Member，LF AI基金会董事，华为云与计算开源业务总经理',
    description:
      '开放原子基金会TOC主席。Apache Hadoop 国内最早的贡献者与提交者，具备国际视野与格局的国内开源领军人物之一。',
    avatar:
      '/logo.png',
    year: 2020
  }
]

// 工具函数
export const getStarsByYear = (year: string): AwardRecipient[] => {
  return yearlyStars.find(item => item.year === year)?.stars || []
}

export const getOpenSourceStarsByYear = (year: number): AwardRecipient[] => {
  return openSourceStars.filter(star => star.date === year)
}

export const getPioneersByYear = (year: number): Pioneer[] => {
  return pioneers.filter(pioneer => pioneer.year === year)
}