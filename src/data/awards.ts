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
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zp9voZpu2rKQ38HJYtCDlpeFsH9oDgPiaM3tbz245wgEukcOkS4WicicVg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
    year: 2024
  },
  {
    id: 2,
    name: 'Miley Fu',
    title: 'SecondState，KubeCon China 2024会议联席主席',
    description:
      '活跃在全球技术舞台的开源布道者，在亚太、欧洲、北美的技术会议上都可以看到她的身影。同时也是众多开源活动的组织者，KubeCon China 2024会议的联席主席。',
    avatar:
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zG2NvL5m74e79vXDp046ne0icc7ZiaAvqFXAcKpg1JHUqDSujwyiboN52A/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
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
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zhdavEqaxwNnm8gBj3yQVBvvYRa7DYuotTsAASNkMfg5SXpVTj1bbUQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
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
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5ziaJXgXDOL13TSaBeIYibCDlF5wsVaOrfRNOG2T4cDM5WiaqfWdKXDVKhQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
    year: 2024
  },
  {
    id: 5,
    name: '段少婷',
    title: 'OceanBase 开源社区负责人',
    description:
      '心系青少年与高校学生开发者生态，投身开源技术、生态建设与社区治理，热忱不减。多次亮相各大开源会议，凭专业引领开源数据库话题研讨，积极布道 OceanBase 开源技术和社区。',
    avatar:
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zEic09AVIEJTLL5bria8iaLvCKUbibmYluuKWkTYzTkGDZGiawMLLBV7eaxw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
    year: 2024
  },
  {
    id: 6,
    name: '范晶晶',
    title: 'Datawhale 创始人',
    description:
      '作为学习者社群的创始人，范晶晶带领 Datawhale 以开源的方式推动数据科学与 AI 人才培养，开源了51门学习教程、出版了系列图书，聚合了一群有开源精神和探索精神的团队成员。',
    avatar:
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zdMicSCpxEq7wS8NTgibpUC0UITz8HbkQ1b696mLuu1aPVibXdl3ARfvWQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
    year: 2024
  },
  {
    id: 7,
    name: '胡捷',
    title: '中兴通信开源战略总监',
    description:
      '通信行业的开源老兵，活跃在国内外开源社区，积极探索 OSPO 最佳实践。',
    avatar:
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zyFpTjeBicpibsBWVGCo3QM4qenFDXLOkm3bYMbtL1DGwcLW5qW9pibqdA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
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
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zv0hJMLdbc7dmGGqgTYxDG1gEGes174A7kTcsJ4cht9acSzFKib9qsSw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
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
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zmEI6tZ1ic5B4gWf9iaNwBK1AGA1ZcnZia6F36JbcIAFhPUfhJr6MFuEXA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
    year: 2024
  },
  {
    id: 10,
    name: '李剑峰',
    title: 'openKylin 社区技术委员会委员，麒麟软件终端研发技术专家',
    description:
      'openKylin 社区的版本研发负责人，长期从事 Linux 桌面相关的技术研发和推广，凭借多年的社区贡献成为 Ubuntu Developer，Debian Maintainer，是开源社区的中坚力量。',
    avatar:
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zt84YwB2f3uRMYDm2baROUtZ5heFgcWTdgt1p2mdaxfbiacPP4tC1iaHw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
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
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5zRmnYq3r4mwp5qAAicrexkhibyYibaTowggaRCoxUTec7HvWpltEeYNyrw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
    year: 2024
  },
  {
    id: 12,
    name: '连林江',
    title: 'SelectDB CEO & 联合创始人，Apache Doris 开源项目商业支持者',
    description:
      '作为开源商业先锋，带领飞轮科技助力 Apache Doris 在核心功能研发、社区运营推广、用户支持维护等多个方面给予了强有力的支持，推动 Apache Doris 成为大数据领域最为活跃的开源项目之一。',
    avatar:
      'https://mmbiz.qpic.cn/sz_mmbiz_png/hOYDxANDZpiasVq5FoYu2NmovsaJH8P5z5tf0kyEtL8uTDmMOtKXz8KYplSjicmV1Lhv65RyIMkAs0wEXqFbLiadQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1',
    year: 2024
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