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
    name: '崔晨洋',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2025,
    recommendation:
      '对开源社长期发展做出突出贡献的志愿者'
  },
  {
    name: '惠世冀',
    nickname: '小惠',
    avatar: '/img/cblecker.png',
    date: 2025,
    recommendation: '对开源社长期发展做出突出贡献的志愿者'
  },
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
    recommendation: '去年因为对于 COSCon 主论坛的疯狂追杀初识丁文昊（止戈），后又因其接手顾问委员会和项目委员会会议的筹备工作有了更进一步的了解。止戈对待开源社的志愿者工作尽职尽责，是难得一见的既守时又有责任感的志愿者。他有着系统性思考的策划、执行能力，善用协作工具，深刻领悟开放式协作的精髓，尤其在今年年会的赞助商权益落实工作中，促进了整个团队的协作结果，他的存在是开源社宝贵的财富。在顾问委员会、项目管理委员会、以及COSCon组委会的各项工作组，尽心尽力、任劳任怨，极大的推动了开源社的各项事务。在很多领域，不仅能够完成被推坑的各项工作，甚至还主动跳坑，承担更多的职责，非常值得信任！在顾问委员会和COSCon两个工作组中尽心尽力地长期贡献和付出。丁文昊同学在本次的开源年会中积极主动对接组委会事宜和赞助商跟进事宜，非常活跃，是一个具有巨大发展潜力的开源社核心成员，推荐入选年度COSCon之星。我很高兴向开源之星提名丁文昊。在过去一年中，他积极参与了开源社的顾问委员会，并为中国开源年会的筹备跟进工作做出了重要贡献。由于丁文昊的努力和贡献，开源社和中国开源年会都得到了极大的支持和帮助。因此，我认为丁文昊是一位优秀的开源之星候选人，值得被提名和表彰。在社区中以“止戈”之名活跃贡献，名中有“文”，止戈为“武”，文武双全的寓意在开源社的志愿工作中得到了体现，日常为开源社项目委员会、顾问委员会的服务工作进行了大量支撑，Gap Month期间更是全身投入到了开源年会的各项工作中，做出了大量贡献。对开源社多个工作组做出了突出贡献。'
  },
  {
    name: '惠世翼',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2022,
    recommendation: '小惠运营的开源小虎墩成为COSCon2021一大亮点之一，今年又主动承担起瑶台的整个策划和运作，从活动策划、志愿者培训再到讲师及赞助商的培训等，尽职尽责，同时还举办了广州线下分会场，充满活力和探索精神，值得大家学习。继承了小源，小虎墩，并且在已有平台的基础上，打磨出小虎墩讲开源系列课程。而且不仅仅是一个人独立做，更重要的是培养团队。瑶台的工作主动认领，还有线下分会场积极参与。小惠即使离开了微软，积极性丝毫不减。是值得培养的未来开源社的核心骨干。小惠主动承担了网易瑶台的展位管理、赞助商使用培训等工作，策划了广州分会场，日常也有参与小源机器人、开放黑客松等项目，热情、积极性高。细心负责。小惠在年会的瑶台元宇宙场景使用和日常的虎墩视频等方面做出了很多贡献，在开源社的新媒体渠道生态方面进行了扎实的探索实践。'
  },
  {
    name: '朱庆裕',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2022,
    recommendation: '全能 Corrie，承担了日常媒体组管理的工作，在公众号迁移的涨粉上、COSCon 各项物料的设计上颇有成绩，有突破有创新，团队日益壮大的同时，在组织管理上也有自己的思考和大胆尝试。Corrie通过日复一日的常态化贡献，在媒体管理、小组发展、会议秘书/组织等方面逐渐打磨完善出了若干成熟的框架体系，为开源社的长远发展做了多方面的沉淀积累。全知全能Corrie小姐姐，让社媒体组的成为开源社最具活力和凝聚力的小组，同时作为理事会秘书、执委会秘书也成为很多工作能顺利推进的“幕后推手”。Corrie让理事会的效率大大提高，万能助手。勇于承担：Corrie 身兼N职，包括理事会秘书、执委会秘书、COSCon22组委会主要组织者、媒体组组长领导有方：媒体组发展至今已经是开源社工作组里发展最快最健全的工作组，Corrie 付出的精力和时间难以想象。认真负责：巨细靡遗，使命必达。沟通协调：善于团队协作。'
  },
  {
    name: '郭浩赟',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2021,
    recommendation: '幕后英雄，贡献卓越。郭浩赟积极参与开源社多个项目与活动，担任开源社 KToken 项目组组长，并主持 KToken 新版本重构；开放黑客松项目组成员，举办 COSCon20以太坊黑客松活动；担任 COSCon21开源百宝箱分论坛出品人。作为以太坊亚太社区 ETHPlanet 负责人，浩赟主动地推动 ETHPlanet 成为开源社 2021 年度赞助伙伴。多才多能，热心公益，贡献开源，获选 “开源之星“ 实至名归。从第一次参与年会工作，郭浩赟就为多个论坛主题贡献邀请了V神等在内的讲师嘉宾，并且从开源社区角度严格把控了所负责的区块链论坛的演讲质量，后面在开源社的多个工作组也是一直长期贡献，期待在开源社将来和区块链结合的深度发展方面，能看到带来更多的花火。热心开源的帅小伙儿！开源社各个工作组都看得到浩赟的身影，在他的努力下，KToken项目渐有起色，开放黑客松更有创意，开源年会区块链相关的主题质量也越来越高。很厉害！'
  },
  {
    name: '许银',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2021,
    recommendation: '任劳任怨，十项全能。许银身为开源社活动组组长，不只是对开源社的活动全心投入不遗余力，对其它开源社区的活动同样地热心奉献，例如 ApacheCon Asia 的全程投入支持，ALC Beijing 和 ApacheCon Asia 的联合发起人-姜宁也说特别感谢许银的贡献，让 ApacheCon Asia 能顺利举办圆满收官。靠谱一哥获选 “开源之星“ 舍我其谁。每次见到许银都是开源大会期间，几乎每次都是他为筹备大会熬了一个通宵。为了开源瘦了二十斤，为开源消得人憔悴的开源之星。对开源有自己的理解，重守承诺，创新能力极强，结合代码能力大大提高了大会的视频剪辑，统计等效率。中国开源年会是一个全部由志愿者组织的年度大会，组织协调起来难度更大更复杂，更需要有核心人员的统筹跟进，在工作之外坚持付出精力和耐心，而这几年的年会背后，绕不开的一位核心组织者便是许银。可靠（我说的是技术），细心，还很幽默。据说大家都亲切称呼他为“银姐”，到底是多好的性格才会拥有这样甜蜜的称呼！'
  },
  {
    name: '赵生宇',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2020,
    recommendation: '清华大学计算机本科，北京大学软件工程硕士，目前同济大学计算机专业博士在读，X-lab 实验室成员，阿里云 MVP。他热爱开源，曾任阿里巴巴开源办公室高级社区经理，开源社高校合作组负责人。 2020 年 1 月，他发起 Wuhan2020 开源项目，通过开源的方式为疫情做出贡献，全球及国内多达 4000 多位志愿者参与，产生了较大的社会影响力。在读博期间，他依托开源社策划发起 “源来如此” 以及 “开源实训营” 活动，并担任主讲老师，以开展开源教育。赵生宇也是 2019/2020 中国开源年报核心贡献者，他发起了 GitHub 开源年报开源项目，负责 2020 年中国开源年度报告 GitHub 分析部分。赵生宇还当选了 InfoQ 2020 年度十大开源杰出贡献人物，堪称是开源向善的最佳模范。'
  },
  {
    name: '朱庆裕',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2020,
    recommendation: '参与开源社将近两年的时间，从一名开源小白到担任媒体组小编，历练学习后升为媒体组文案小组负责人，在主编聂老师的带领下，开源社媒体渠道快速扩大，微信公众号粉丝大涨超越 10,000 粉丝数，文章数量及发布频率大增。 Corrie 随后又被推选为理事会秘书，负责召集每月理事会，勤恳、认真、负责，获得理事会高度肯定。'
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
    recommendation: '担任2018年开源社线下活动组和社区合作组组长，做出卓越贡献。'
  },
  {
    name: '王俊波',
    nickname: '',
    avatar: '/img/cblecker.png',
    date: 2018,
    recommendation: '担任开源社基础设施组组长、KCoin开源贡献激励平台项目经理和开放黑客松云平台项目经理，做出卓越贡献。'
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
export const cosconStars2025: AwardRecipient[] = [
  {
    name: '晁倩',
    nickname: '啊Q',
    avatar: '/img/cblecker.png',
    recommendation: 'COSCon25 杰出贡献者'
  },
  {
    name: '唐小引',
    nickname: 'Miya',
    avatar: '/img/cblecker.png',
    recommendation: 'COSCon25 杰出贡献者'
  },

]

export const cosconStars2023: AwardRecipient[] = [
  {
    name: '刘于瑜',
    nickname: 'Miya',
    avatar: '/img/cblecker.png',
    recommendation: 'Miya参加每一次例会，对于集市和开源社的整合，以一种社区合作的模式非常默契地进行。体现出社区合作的精神，因此考虑推荐miya为今年的社区之星。Miya在本次开源年会中积极组织开源集市事宜，拓展市集合作方超过20家，策划和组织有条不紊，为开源年会的社区气氛活跃做出了卓越贡献。开源年会重归线下，开源市集闪亮登场，今年的开源市集受到了广泛关注，摊位报名火热，Miya综合把控各方权益的平衡、集市效果的展现等多方面因素，在市集组织方面做出了非常多的贡献，使得开源年会的市集成为年会现场的靓丽风景。'
  },
  {
    name: '王玥敏',
    nickname: '月饼',
    avatar: '/img/cblecker.png',
    recommendation: '王玥敏（我们亲切称之为月饼）在开源社从小白编辑做起，三年多的时间尽职尽责，在媒体组快速发展壮大的进程中发挥着重要的作用，是媒体组的左膀右臂。媒体组作为外界看不见的组织，潜移默化地用一篇篇介绍开源传播开源的文章向外界传达开源社的声音，月饼同学负责其中的核心部分：文章排期，渠道发展，对外沟通等。此外，在开源社开放式协作的理念指导下，月饼坚定地向年轻的志愿者们传达并带出了一批优秀的新人。开源社媒体组志愿者的留存率高达的80%，得益于月饼同学以及其他同期志愿者的的努力和坚持。在COSCon年会活动中，月饼还负责承担起繁重的礼品组的工作，代领礼品组志愿者们选品，查样，大量的沟通和协调只为在有限的预算下将设计组的作品完美呈现。同时在2023年月饼主动担任起成员发展组副组长的工作，协助落地开源社正式成员的权利和义务。默默无闻的开源贡献者值得被看见！'
  },
  {
    name: '朱亿钦',
    nickname: '居居',
    avatar: '/img/cblecker.png',
    recommendation: '朱亿钦（居居）是媒体组设计小组的组长，也是媒体组长期且长情的志愿者之一，带领设计组三年期间，贡献卓著，每月固定投入开源社20小时以上，日常活跃在媒体组的一线，此间不断带来个人的独特创意和精湛作品。作为组长，居居细致负责兼具耐心，不断带领团队创新呈现高质量作品。她规划了如开源社节日海报、吉祥物小O 表情包等诸多设计安排，带来良好的受众反馈；她对志愿者充满耐心，打造设计组内良好的学习氛围，面对经验不足的志愿者时，从设计的基本功教起，不余遗力；她在 COSCon 期间面对大量设计任务时，不仅保证宣发时效，更是呈现了高质量设计作品。作为开源社志愿者和一名设计师，居居任劳任怨、靠谱负责、专业能力出众。除日常设计任务外，她也挑起了媒体组志愿者活跃度的大梁，组建日常线下聚餐、线上活动等等，在媒体组的组织管理上做出了重要贡献。在设计开源社周边期间，为了保证成品效果，居居连续两年主动负责了周边的定制工作，与供应商沟通并协调制作。COSCon 期间设计任务繁重、庞杂，但居居依然可以在规定的时限内完成高质量作品，并且不断创新，做出令大家满意的作品。'
  },
  {
    name: '罗蕊艳',
    nickname: '小汭',
    avatar: '/img/cblecker.png',
    recommendation: '罗蕊艳（小汭）作为媒体组渠道小组负责人之一，深入参与开源社媒体组日常工作。年会期间负责开源社媒体平台的宣发工作，协调志愿者保证一篇篇优质的内容按时发布，并在年会线下参与、协助签到台的活动和签到工作，非常负责。'
  },
  {
    name: '赵玭月',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '玭月是理事会秘书、媒体组设计小组副组长，COSCon 期间完成大量设计工作，发挥个人手绘专长，创建了多个可爱的小O形象，主动承担年会设计的项目管理工作，协调设计师产出，尽职尽责。作为理事会秘书，在过去大半年里，也是尽心尽力协调理事会内工作，从无遗漏。在过去几年包括今年的 COSCon 大会上，她积极参与设计工作，负责大会签到组织和需求采购等任务。她为COSCon大会的成功举办做出了重要的贡献。赵玭月的工作精神和专业素养得到了COSCon大会组委会的高度认可。因此，我认为赵玭月是一位优秀的COSCon之星候选人，值得被提名和表彰。'
  },
  {
    name: '王萱',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '作为媒体组副组长，深入参与媒体组日常工作。今年年会期间参与策划、协助开源社在市集的展位，并在会前一天与大会志愿者共同准备大礼包。同时也作为开源年报的媒体组对接人接洽开源年报的宣传工作。'
  },
  {
    name: '赵文涵',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '赵文涵同学持续在社区合作组工作超过一年，协助线上活动宣传和线下活动宣发多次，为开源社的社区合作事宜做出了卓越的贡献。'
  },
  {
    name: '李楠',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '在过去的一年里，楠楠持续为开源社的社区合作组以及KCC工作组投入心血，为开源社的社区合作、社区发展做出了有目共睹的贡献。'
  },
  {
    name: '薛云鹤',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '薛云鹤帮忙以志愿者的身份做了很多供应商做的事情，包括本地的场地安排，目前所有的物料都寄到他那里，光是这个搬运工作都非常不容易。另外每次都积极参加组委会的会议。所以我想提名薛云鹤。我一开始以为是供应商，但其实际上是义务帮忙对接的志愿者，所有开源社物料和赞助商物料都是由他对接，因此推荐。'
  },
  {
    name: '宋妮龙吟',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '20-23年连续参与，负责线上分论坛的协助，讲师前期信息收集、ppt收集等任务，今年2023年负责开源商业、web应用、百宝箱三个分论坛，积极协助出品人 （她都是线上支撑，可能后续涉及邮寄）。'
  },
  {
    name: '邝曾珍',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '2022年成都线下志愿者，2023年继续支撑并报名申请成都线下志愿者负责人，从志愿者招募开始积极协助志愿者管理及后续线上培训沟通，现负责6个分论坛的项目跟进，积极可靠，有机会发展核心成员。'
  },
  {
    name: '陈玄',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '做stormy的视频非常给力，凌晨十二点还在编辑。后来我查了一下在哪些群，发现他参与有十几个开源社的群，长期的贡献，例如KCC，COSCon 成都落地，前几年的分论坛等。'
  },
  {
    name: '易慧媛',
    nickname: '果汁',
    avatar: '/img/cblecker.png',
    recommendation: '易慧媛（果汁），2021 年读研期间，作为 PyCon 成都组织者，在 COSCon 成都会场摆摊，精心策划摊位活动，获得参会者好评。2022 年 5 月，成都，开源市集，带领同学们组织两大活动版块之一，“学生科创展”，吸引本地和其他城市大学生参展，为市集增加活力。在COSCon23开源市集中，负责策划和组织礼品墙环节，一如既往认真负责考虑周全并且高效率，与团队伙伴协作得非常棒。'
  },
  {
    name: '石垚',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全项目组同学从COSCon22尚未结束时即开始COSCon23的系统开发，并在年会半年前即完成主要功能开发，也在年会开始前一个月完成全部会中功能和部分会后功能，全力保障年会顺利、精彩地进行。'
  },
  {
    name: '刘绪光',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全项目组同学从COSCon22尚未结束时即开始COSCon23的系统开发，并在年会半年前即完成主要功能开发，也在年会开始前一个月完成全部会中功能和部分会后功能，全力保障年会顺利、精彩地进行。'
  },
  {
    name: '黄绍雅',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全项目组同学从COSCon22尚未结束时即开始COSCon23的系统开发，并在年会半年前即完成主要功能开发，也在年会开始前一个月完成全部会中功能和部分会后功能，全力保障年会顺利、精彩地进行。'
  },
  {
    name: '桑毅炜',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全项目组同学从COSCon22尚未结束时即开始COSCon23的系统开发，并在年会半年前即完成主要功能开发，也在年会开始前一个月完成全部会中功能和部分会后功能，全力保障年会顺利、精彩地进行。'
  },
  {
    name: '罗基印',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全项目组同学从COSCon22尚未结束时即开始COSCon23的系统开发，并在年会半年前即完成主要功能开发，也在年会开始前一个月完成全部会中功能和部分会后功能，全力保障年会顺利、精彩地进行。'
  },
  {
    name: '谢祥佳',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全项目组同学从COSCon22尚未结束时即开始COSCon23的系统开发，并在年会半年前即完成主要功能开发，也在年会开始前一个月完成全部会中功能和部分会后功能，全力保障年会顺利、精彩地进行。'
  },
  {
    name: '王润林',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全项目组同学从COSCon22尚未结束时即开始COSCon23的系统开发，并在年会半年前即完成主要功能开发，也在年会开始前一个月完成全部会中功能和部分会后功能，全力保障年会顺利、精彩地进行。'
  }
]

export const cosconStars2022: AwardRecipient[] = [
  {
    name: '王玥敏',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '王玥敏（我们亲切称之为月饼）在开源社从小白编辑做起，两年多的时间尽职尽责，在媒体组快速发展壮大的进程中发挥着重要的作用，是媒体组的左膀右臂。媒体组作为外界看不见的组织，潜移默化地用一篇篇介绍开源传播开源的文章向外界传达开源社的声音，月饼同学负责其中的核心部分：文章排期，渠道发展，对外沟通等。此外，在开源社开放式协作的理念指导下，月饼坚定地向年轻的志愿者们传达并带出了一批优秀的新人。开源社媒体组志愿者的留存率高达的80%，得益于月饼同学以及其他同期志愿者的的努力和坚持。在COSCon年会活动中，月饼还负责承担起繁重的礼品组的工作，代领礼品组志愿者们选品，查样，大量的沟通和协调只为在有限的预算下将设计组的作品完美呈现。默默无闻的开源贡献者值得被看见！王玥敏（月饼）是媒体组渠道小组组长，在 COSCon 期间，参与并执行了大会的宣发任务，同时兼任周边物料组负责人之一，完成团队的组织、对接供应商等工作。月饼认真负责，任劳任怨，协调媒体组内志愿者的日常工作。'
  },
  {
    name: '袁睿斌',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '对自己有要求，目标明确，不断追求上进的媒体小哥，媒体组团宠。袁睿斌是媒体组文案小组组长，在 COSCon 期间，参与多篇文案的撰写、改稿，深入策划人物专访等，并参与了瑶台前期等策划工作。文字功底扎实，也有很强的自驱力，不需要催促 DDL，总能在约定的时间里完成令人满意的作品。除此之外，也是媒体组的后盾，为了满足我们拍开箱视频的心愿，骑车30km+给我们取物料、送物料。同时袁睿斌也是媒体组的长期贡献者，在开源社两年期间，创作、审稿了近百篇内容，为媒体组做出了重大的贡献。'
  },
  {
    name: '朱亿钦',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '可爱的设计为开源社的形象大大加分。好的设计对于社区形象和社区体验非常重要，居居在年会周边、节日海报、小O表情包等方面的设计上不仅为开源社带来了惊喜，也为开源社的业务拓展带来新的想象。朱亿钦（居居）是媒体组设计小组的组长，专业能力强，设计的作品屡屡出圈。她的设计会说话，让开源社制作的礼品拥有了灵魂。COSCon礼包也成为大家参会的期待之一。朱亿钦（居居）是媒体组设计小组组长，在 COSCon 期间，完成并带领设计志愿者完成大量设计稿，同时兼任周边物料组负责人之一，完成大会周边的设计、定制、对接供应商等工作。作为设计师，居居专业能力出众，COSCon 设计任务繁重、庞杂，但居居依然可以在规定的时限内完成高质量作品，并且不断创新，做出令大家满意的作品。作为组长，居居细致负责，不仅有大量的协同工作需要沟通、如排期、确认设计需求等，在面对经验不足的志愿者时，依然可以保持耐心，从设计的基本功教起，不余遗力。'
  },
  {
    name: '程诗杰',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '在防疫压力下主持出品工作，将原定开源人小聚的年会成都场，筹办成华为、谷歌等众多大厂嘉宾共创内容的中型活动，为开源社在成都持续保持影响力做出了贡献。'
  },
  {
    name: '马红伟',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '马红伟虽然是赞助商，但是丝毫没有一点甲方的感觉。主动积极承担北京分会场的组织工作。从招募，写稿，联系供应商印刷，而且还面临着不能回北京的风险，仍然在当北京分会场的分舵主，刷新了我的认知。'
  },
  {
    name: '郭琦',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '开源集市的发起者，积极参与到北京分会场筹备中来。短短时间，24小时内就招募到20个集市摊位主，而且多次积极主动来微软看场地，还主动给微软后勤发邮件。当我提出来马拉松需要支援时，第一时间响应。是非常值得开源社吸收的人才。以后开源集市就可以做成一个特色项目，纳入开源社旗下。'
  },
  {
    name: '崔晨洋',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '崔同学连续多年参与COSCon的志愿者工作，尽职尽责，同时也积极参与每年的上海线下分会场筹备工作，今年一个人承担起整个百格报名官网的运营工作，高效完成报名主网站和各城市分论坛的网站上线。积极帮忙解决百格网使用的各种问题，热心高效。'
  },
  {
    name: '丁文昊',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '全年在开放黑客松平台项目贡献很多代码。COSCon 2022 担任操作系统分论坛、大会主论坛出品志愿者，工作。积极主动COSCon 2022 自主基于飞书多维表格整理大会议程数据。临危受命对接主论坛讲师，催收 PPT 和演讲视频，面对繁杂细碎的工作，不抱怨，做事情有方法、有效率。最具效率志愿者之一，帮助优化内容收集文档，能快速完成交付的各项志愿者工作，同时能主动承担临时任务，任劳任怨。认真，负责，一丝不苟！'
  },
  {
    name: '李宇飞',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '上海站开源集市负责人，完成了整个上海站活动的策划和推动执行，同时引进了多个技术社区参与上海站的活动。'
  },
  {
    name: '沈于蓝',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '热情，有自驱力，是媒体组新生力量的代表。沈于蓝是媒体组视频小组组长，在 COSCon 期间，制作了年会开箱视频，同时作为渠道组责编，负责推文内容的审稿工作。虽然工作内容十分庞杂，但是她依然有着个人的方式方法，给大家提供良好的建议，本次年会中因为推文内容元素过多，小编们的发布文案总是“缺斤少两”，蓝蓝看到这样的情况后，主动寻找解决办法，制作推文核对清单，以保证每篇文章的有序、准确发布。'
  },
  {
    name: '陈玄',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '连续3年的COSCon志愿者，能力优秀，态度认真！同时也是KToken项目的成员之一，今年作为主要Owner推进COSCon数字徽章的工作，使得 COSCon22 数字徽章跟大家见面！'
  },
  {
    name: '李明康',
    nickname: '',
    avatar: '/img/cblecker.png',
    recommendation: '勇担重任，主动承担起了开源社区地图的相关工作，日常积极拓展社区合作，合作深度、合作数量均有所增长，在社区中也听到了伙伴们对小明的好评，也听到了伙伴们评价开源社“更活跃了”。在社区中的可见度非常高，积极主动，响应及时。值得栽培。小明依托开源地图项目将开源社的社区合作工作推向了新的阶段，同时还在多个工作组进行了活跃的贡献，对相关工作的推进提供了有力的支撑。勇于承担：小明身兼多职，包括社区合作组组长、顾问委员会秘书、中国开源地图项目组组长，媒体组视频号及对外社区活动参与及文章转载...认真负责：交付的任务都能很好的达成，反应迅速，从不拖拉。开拓精神：今年内紧密联系并巩固了几十家上百家的社区、企业与媒体，让开源社的社区触达与合作达到了一个新的高峰。'
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
  { year: '2025', stars: cosconStars2025 },
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