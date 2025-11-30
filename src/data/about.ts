// About 页面数据
export interface HeroImage {
  src: string;
  alt: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

export interface Honor {
  image: string;
  title: string;
  date: string;
  description: string;
}

// 轮播图片数组
export const heroImages: HeroImage[] = [
  {
    src: "/img/about/banner.jpeg",
    alt: "开源社"
  },
  {
    src: "/img/about/where.webp", 
    alt: "开源社四大使命"
  },
  {
    src: "/img/about/how.webp",
    alt: "开源社的工作"
  },
  {
    src: "/img/about/COSCon.webp",
    alt: "中国开源年会"
  }
];

// 发展历程数据
export const timelineData: TimelineItem[] = [
  {
    year: "2014",
    title: "开源社成立",
    description: "开源社（KAIYUANSHE®）成立，以'贡献、共识、共治'原则组成。与欧洲OSS-Watch合作，提供开源治理工具。",
    position: "left"
  },
  {
    year: "2015",
    title: "首个年度报告",
    description: "发布首版《中国开源生态系统年度报告》，主办Apache中国路演。",
    position: "right"
  },
  {
    year: "2016",
    title: "加入OSI & 首届COSCon",
    description: "加入Open Source Initiative(OSI)，成为首家中国成员。举办首届中国开源年会(COSCon)。",
    position: "left"
  },
  {
    year: "2017",
    title: "教育组织成立",
    description: "执委会下设立开源教育组、高校合作组等专注开源教育的工作组。",
    position: "right"
  },
  {
    year: "2018",
    title: "开源教育论坛",
    description: "在第三届中国开源年会上出品最早的开源教育分论坛。",
    position: "left"
  },
  {
    year: "2019",
    title: "木兰许可证 & 教育基金",
    description: "参与编制首个中英双语国际开源许可证'木兰宽松许可证'。在华东师范大学设立'中国开源软件教育基金'。",
    position: "right"
  },
  {
    year: "2020",
    title: "开源人宣言 & 开源特训营",
    description: "发布《开源人宣言》，推出《开源特训营》视频课程，参与首届'开源之夏'活动。",
    position: "left"
  },
  {
    year: "2021",
    title: "开源公益计划",
    description: "联合腾源会发起'WeOpen Good开源公益计划'，推动用开源技术赋能公益组织。",
    position: "right"
  },
  {
    year: "2022",
    title: "标准制定参与",
    description: "参与木兰开放作品许可证编制、《信息技术 开源 开源项目评估模型参考架构》标准制定。",
    position: "left"
  },
  {
    year: "2023",
    title: "青少年开源论坛",
    description: "在COSCon'23发起国内首个青少年开源论坛。连续参与Open Source Congress。",
    position: "right"
  },
  {
    year: "2024",
    title: "OpenGood开源公益",
    description: "发起'OpenGood开源公益'行动，获评'2024年中国开放科学优秀行动'。参与《开源大模型应用指南1.0》编写。",
    position: "left"
  },
  {
    year: "2025",
    title: "主权AI圆桌 & 醒源大讲堂",
    description: "受邀作为Linux基金会'主权AI圆桌'亚太区代表。发起'醒源大讲堂'系列线上专题讲座。",
    position: "right"
  }
];

// 荣誉墙数据
export const honorsData: Honor[] = [
  {
    image: "/img/about/honor-osi.webp",
    title: "OSI首家中国成员",
    date: "2016年1月",
    description: "开源社加入Open Source Initiative(OSI)，成为OSI联盟的首家中国成员"
  },
  {
    image: "/img/about/honor-community.webp", 
    title: "年度开源社区",
    date: "2023年",
    description: "获选'开源创新榜单-年度开源社区'，由中国科协科学技术传播中心等联合评选"
  },
  {
    image: "/img/about/honor-mulan.webp",
    title: "木兰许可证通过OSI认证",
    date: "2020年",
    description: "推动木兰宽松许可证MulanPSL v2通过OSI认证，被批准为国际类别开源许可证"
  },
  {
    image: "/img/about/honor-opengood.webp",
    title: "中国开放科学优秀行动",
    date: "2024年",
    description: "OpenGood开源公益行动获评'2024年中国开放科学优秀行动'"
  },
  {
    image: "/img/about/honor-coscon.webp",
    title: "最受开发者欢迎技术活动",
    date: "连续多年",
    description: "COSCon中国开源年会连续多年荣获思否评选的'中国最受开发者欢迎的技术活动'"
  },
  {
    image: "/img/about/honor-sovereign-ai.webp",
    title: "主权AI圆桌亚太区代表",
    date: "2025年",
    description: "受邀作为Linux基金会'主权AI圆桌'的亚太区代表，参与国际议题对话"
  }
];