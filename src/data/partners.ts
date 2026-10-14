export const levelOrder = [
  "主办单位",
  "指导单位",
  "协办单位",
  "承办单位",
  "战略合作",
  "白金合作",
  "金牌合作",
  "银牌合作",
  "铜牌合作",
  "星牌合作",
  "个人赞助",
  "亮点赞助",
  "成员赞助",
  "战略合作媒体",
  "合作媒体",
  "战略合作社区",
  "大会合作单位",
  "特别支持",
  "讲师合作",
  "国际讲师差旅赞助",
  "报名平台伙伴",
  "视频直播伙伴",
  "网站支持",
  "元宇宙会场合作",
  "开源集市",
  "合作社区",
] as const;

export type PartnerLevel = (typeof levelOrder)[number];
export type SponsorType = "organization" | "person";

export interface Sponsor {
  type: SponsorType;
  name: string;
}

export interface PartnerProfile {
  id: string;
  title: string;
  sponsor: Sponsor;
  link: string;
  logo: string;
}

export interface AnnualCooperation {
  level: PartnerLevel;
  tag?: string;
  title?: string;
  link?: string;
  logo?: string;
}

export interface PartnerEntry {
  profile: PartnerProfile;
  years: Record<string, AnnualCooperation[]>;
}

export interface Partner {
  id: string;
  title: string;
  sponsor: Sponsor;
  year: string;
  level: PartnerLevel;
  link: string;
  logo: string;
  tag: string;
}

// 合作伙伴主档与届度合作记录。新增合作届份时，只需要在对应伙伴的 years 中添加一届。
export const partnerEntries: PartnerEntry[] = [
  {
    profile: {
      id: "antgroup",
      title: "蚂蚁开源",
      sponsor: {
        type: "organization",
        name: "蚂蚁集团",
      },
      link: "https://opensource.antgroup.com/",
      logo: "/img/partners/ant.jpg",
    },
    years: {
      "2025": [
        {
          level: "白金合作",
          tag: "累计合作3届",
        },
      ],
      "2024": [
        {
          level: "银牌合作",
        },
      ],
      "2023": [
        {
          level: "银牌合作",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "dexmal",
      title: "原力灵机",
      sponsor: {
        type: "organization",
        name: "原力灵机",
      },
      link: "https://dev.dexmal.com/",
      logo: "/img/partners/dexmal.png",
    },
    years: {
      "2026": [
        {
          level: "金牌合作",
          tag: "累计合作2届",
        },
      ],
      "2025": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "huawei",
      title: "华为",
      sponsor: {
        type: "organization",
        name: "华为",
      },
      link: "https://www.huawei.com/cn/open-source",
      logo: "/img/partners/huawei.png",
    },
    years: {
      "2025": [
        {
          level: "银牌合作",
          tag: "累计合作9届",
        },
      ],
      "2024": [
        {
          level: "金牌合作",
        },
      ],
      "2023": [
        {
          level: "白金合作",
        },
      ],
      "2022": [
        {
          level: "白金合作",
        },
      ],
      "2021": [
        {
          level: "白金合作",
        },
      ],
      "2020": [
        {
          level: "战略合作",
        },
      ],
      "2019": [
        {
          level: "战略合作",
        },
      ],
      "2018": [
        {
          level: "战略合作",
        },
        {
          level: "国际讲师差旅赞助",
        },
      ],
      "2017": [
        {
          level: "银牌合作",
        },
        {
          level: "讲师合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "bytedance",
      title: "字节跳动",
      sponsor: {
        type: "organization",
        name: "字节跳动",
      },
      link: "https://opensource.bytedance.com",
      logo: "/img/partners/bytedance.webp",
    },
    years: {
      "2025": [
        {
          level: "银牌合作",
          tag: "累计合作2届",
        },
      ],
      "2022": [
        {
          level: "白金合作",
          link: "",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "gosim",
      title: "GOSIM",
      sponsor: {
        type: "organization",
        name: "GOSIM",
      },
      link: "https://gosim.org",
      logo: "/img/partners/gosim-logo2025.png",
    },
    years: {
      "2025": [
        {
          level: "银牌合作",
          tag: "累计合作2届",
        },
      ],
      "2023": [
        {
          level: "金牌合作",
          link: "",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "baidu-wenxin",
      title: "百度文心大模型",
      sponsor: {
        type: "organization",
        name: "百度",
      },
      link: "https://wenxin.baidu.com",
      logo: "/img/partners/wenxin.png",
    },
    years: {
      "2025": [
        {
          level: "银牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "sensecore",
      title: "商汤大装置",
      sponsor: {
        type: "organization",
        name: "商汤",
      },
      link: "https://www.sensecore.cn",
      logo: "/img/partners/sensecore.png",
    },
    years: {
      "2025": [
        {
          level: "银牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "openkylin",
      title: "openKylin",
      sponsor: {
        type: "organization",
        name: "openKylin",
      },
      link: "https://www.openkylin.top",
      logo: "/img/partners/openkylin.png",
    },
    years: {
      "2026": [
        {
          level: "银牌合作",
          tag: "累计合作3届",
        },
      ],
      "2025": [
        {
          level: "银牌合作",
          tag: "累计合作2届",
        },
      ],
      "2024": [
        {
          level: "银牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "oceanbase",
      title: "OceanBase",
      sponsor: {
        type: "organization",
        name: "OceanBase",
      },
      link: "https://open.oceanbase.com",
      logo: "/img/partners/oceanbase.png",
    },
    years: {
      "2026": [
        {
          level: "银牌合作",
          tag: "累计合作5届",
        },
      ],
      "2025": [
        {
          level: "银牌合作",
          tag: "累计合作4届",
        },
      ],
      "2024": [
        {
          level: "银牌合作",
          tag: "累计合作3届",
        },
      ],
      "2023": [
        {
          level: "银牌合作",
        },
      ],
      "2022": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "dimatec",
      title: "迪码科技",
      sponsor: {
        type: "organization",
        name: "迪码科技",
      },
      link: "https://www.dimatec.com.cn/cn/index.html",
      logo: "/img/partners/dima.png",
    },
    years: {
      "2025": [
        {
          level: "星牌合作",
          tag: "累计合作6届",
        },
      ],
      "2024": [
        {
          level: "星牌合作",
          link: "https://www.dimatec.com.cn/portal/aboutus.html",
        },
      ],
      "2023": [
        {
          level: "铜牌合作",
          link: "https://www.dimatec.com.cn/portal/aboutus.html",
        },
      ],
      "2022": [
        {
          level: "铜牌合作",
          link: "https://www.dimatec.com.cn/portal/aboutus.html",
        },
      ],
      "2021": [
        {
          level: "铜牌合作",
          link: "https://www.dimatec.com.cn/portal/aboutus.html",
        },
      ],
      "2020": [
        {
          level: "星牌合作",
          link: "https://www.dimatec.com.cn/portal/aboutus.html",
        },
      ],
    },
  },
  {
    profile: {
      id: "seafile",
      title: "Seafile",
      sponsor: {
        type: "organization",
        name: "Seafile",
      },
      link: "https://www.seafile.com/home/",
      logo: "/img/partners/seafile.svg",
    },
    years: {
      "2025": [
        {
          level: "星牌合作",
          tag: "累计合作4届",
        },
      ],
      "2024": [
        {
          level: "星牌合作",
        },
      ],
      "2023": [
        {
          level: "铜牌合作",
        },
      ],
      "2016": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "culiu",
      title: "醋溜科技",
      sponsor: {
        type: "organization",
        name: "醋溜科技",
      },
      link: "https://www.culiutech.com/",
      logo: "/img/partners/culiu.png",
    },
    years: {
      "2026": [
        {
          level: "星牌合作",
          tag: "累计合作4届",
        },
      ],
      "2025": [
        {
          level: "星牌合作",
          tag: "累计合作3届",
        },
      ],
      "2024": [
        {
          level: "星牌合作",
          tag: "累计合作2届",
        },
      ],
      "2023": [
        {
          level: "星牌合作",
          link: "https://www.culiu-tech.com/",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "oshwhub",
      title: "立创开源硬件平台",
      sponsor: {
        type: "organization",
        name: "嘉立创",
      },
      link: "https://oshwhub.com/",
      logo: "/img/partners/oshwhub.png",
    },
    years: {
      "2026": [
        {
          level: "星牌合作",
          tag: "累计合作3届",
        },
      ],
      "2025": [
        {
          level: "星牌合作",
          tag: "累计合作2届",
        },
      ],
      "2024": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "vivo",
      title: "vivo",
      sponsor: {
        type: "organization",
        name: "vivo",
      },
      link: "https://www.vivo.com/",
      logo: "/img/partners/vivo.png",
    },
    years: {
      "2026": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
    {
    profile: {
      id: "zstack",
      title: "ZStack",
      sponsor: {
        type: "organization",
        name: "ZStack",
      },
      link: "https://www.zstack.io/",
      logo: "/img/partners/ZstackLogo.svg",
    },
    years: {
      "2026": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "sectrend",
      title: "安势科技",
      sponsor: {
        type: "organization",
        name: "安势科技",
      },
      link: "https://www.sectrend.com.cn/",
      logo: "/img/partners/sectrend.png",
    },
    years: {
      "2025": [
        {
          level: "星牌合作",
          tag: "累计合作2届",
        },
      ],
      "2024": [
        {
          level: "星牌合作",
          title: "安势信息",
          link: "https://www.sectrend.com.cn",
        },
      ],
      "2023": [
        {
          level: "星牌合作",
          title: "安势信息",
          link: "https://www.sectrend.com.cn",
        },
      ],
    },
  },
  {
    profile: {
      id: "dacheng",
      title: "大成律所",
      sponsor: {
        type: "organization",
        name: "北京大成（上海）律师事务所",
      },
      link: "https://shanghai.dacheng.com/",
      logo: "/img/partners/dntons.png",
    },
    years: {
      "2025": [
        {
          level: "星牌合作",
          tag: "累计合作2届",
        },
      ],
      "2024": [
        {
          level: "星牌合作",
          title: "北京大成（上海）律师事务所",
        },
      ],
    },
  },
  {
    profile: {
      id: "openanolis",
      title: "龙蜥社区",
      sponsor: {
        type: "organization",
        name: "龙蜥社区",
      },
      link: "https://openanolis.cn/",
      logo: "/img/partners/openanolis.png",
    },
    years: {
      "2025": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "csdn",
      title: "CSDN",
      sponsor: {
        type: "organization",
        name: "CSDN",
      },
      link: "https://www.csdn.net/",
      logo: "/img/media/csdn.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
      "2022": [
        {
          level: "合作媒体",
          title: "CSDN（中国开发者网络）",
          logo: "/logo.png",
        },
      ],
      "2021": [
        {
          level: "合作媒体",
          title: "CSDN（中国开发者网络）",
          logo: "/logo.png",
        },
      ],
      "2020": [
        {
          level: "战略合作媒体",
          title: "CSDN（中国开发者网络）",
          logo: "/logo.png",
        },
      ],
      "2019": [
        {
          level: "合作媒体",
          title: "CSDN（中国开发者网络）",
          logo: "/logo.png",
        },
      ],
      "2018": [
        {
          level: "合作媒体",
          title: "CSDN（中国开发者网络）",
          logo: "/logo.png",
        },
      ],
      "2016": [
        {
          level: "合作媒体",
          title: "CSDN（中国开发者网络）",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "qbitai",
      title: "量子位",
      sponsor: {
        type: "organization",
        name: "量子位",
      },
      link: "https://www.qbitai.com/",
      logo: "/img/media/liangziwei.jpg",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "infoq",
      title: "infoQ 极客传媒",
      sponsor: {
        type: "organization",
        name: "infoQ 极客传媒",
      },
      link: "https://www.infoq.cn/",
      logo: "/img/media/infoq.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
      "2022": [
        {
          level: "合作媒体",
          title: "infoQ",
          link: "",
          logo: "/logo.png",
        },
      ],
      "2021": [
        {
          level: "合作媒体",
          title: "infoQ",
          link: "",
          logo: "/logo.png",
        },
      ],
      "2019": [
        {
          level: "合作媒体",
          title: "infoQ",
          link: "",
          logo: "/logo.png",
        },
      ],
      "2017": [
        {
          level: "合作媒体",
          title: "infoQ",
          link: "",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "segmentfault",
      title: "SegmentFault 思否",
      sponsor: {
        type: "organization",
        name: "SegmentFault 思否",
      },
      link: "https://segmentfault.com/",
      logo: "/img/media/segmentfault.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
      "2024": [
        {
          level: "战略合作媒体",
          tag: "累计合作5届",
        },
      ],
      "2022": [
        {
          level: "战略合作媒体",
        },
      ],
      "2021": [
        {
          level: "战略合作媒体",
        },
      ],
      "2020": [
        {
          level: "战略合作媒体",
        },
      ],
      "2017": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "gui-xing-ren",
      title: "硅星人",
      sponsor: {
        type: "organization",
        name: "硅星人",
      },
      link: "https://www.zhihu.com/org/pingwest-pin-wan",
      logo: "/img/media/gxr.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "dbaplus",
      title: "dbaplus",
      sponsor: {
        type: "organization",
        name: "dbaplus",
      },
      link: "https://dbaplus.cn/",
      logo: "/img/media/dbaplus.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "oschina",
      title: "OSCHINA",
      sponsor: {
        type: "organization",
        name: "开源中国",
      },
      link: "https://www.oschina.net/",
      logo: "/img/media/oschina.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
      "2022": [
        {
          level: "合作媒体",
          title: "开源中国",
          logo: "/logo.png",
        },
      ],
      "2021": [
        {
          level: "合作媒体",
          title: "开源中国",
          logo: "/logo.png",
        },
      ],
      "2020": [
        {
          level: "合作媒体",
          title: "开源中国",
          logo: "/logo.png",
        },
      ],
      "2019": [
        {
          level: "合作媒体",
          title: "开源中国",
          logo: "/logo.png",
        },
      ],
      "2018": [
        {
          level: "合作媒体",
          title: "开源中国",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "juejin",
      title: "稀土掘金",
      sponsor: {
        type: "organization",
        name: "稀土掘金",
      },
      link: "https://juejin.cn/",
      logo: "/img/media/juejin.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
      "2022": [
        {
          level: "合作媒体",
          link: "",
          logo: "/logo.png",
        },
      ],
      "2021": [
        {
          level: "合作媒体",
          link: "",
          logo: "/logo.png",
        },
      ],
      "2018": [
        {
          level: "合作媒体",
          link: "",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "51cto",
      title: "51CTO",
      sponsor: {
        type: "organization",
        name: "51CTO",
      },
      link: "https://www.51cto.com/",
      logo: "/img/media/51cto.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "itpub",
      title: "ITPUB",
      sponsor: {
        type: "organization",
        name: "ITPUB",
      },
      link: "https://www.itpub.net/",
      logo: "/img/media/itpub.png",
    },
    years: {
      "2025": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "inspur",
      title: "浪潮 KaiwuDB",
      sponsor: {
        type: "organization",
        name: "浪潮集团",
      },
      link: "https://www.kaiwudb.com",
      logo: "/img/partners/kaiwuDB.webp",
    },
    years: {
      "2024": [
        {
          level: "白金合作",
          tag: "累计合作3届",
        },
      ],
      "2023": [
        {
          level: "白金合作",
          link: "",
          logo: "/logo.png",
        },
      ],
      "2022": [
        {
          level: "白金合作",
          link: "https://mp.weixin.qq.com/s/cRCrFBzvxWiCj4jTvC2GIw",
          logo: "/logo.png",
        },
      ],
      "2021": [
        {
          level: "白金合作",
          link: "",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "amazoncloud",
      title: "亚马逊云科技",
      sponsor: {
        type: "organization",
        name: "亚马逊云科技",
      },
      link: "https://dev.amazoncloud.cn/",
      logo: "/img/partners/amazoncloud.webp",
    },
    years: {
      "2024": [
        {
          level: "银牌合作",
          tag: "累计合作4届",
        },
      ],
      "2023": [
        {
          level: "银牌合作",
        },
      ],
      "2022": [
        {
          level: "金牌合作",
        },
      ],
      "2021": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "bei-jing-zhong-guan-cun-chuang-ye-da-jie-ke-ji-fu-wu-you-xian-gong-si",
      title: "北京中关村创业大街科技服务有限公司",
      sponsor: {
        type: "organization",
        name: "北京中关村创业大街科技服务有限公司",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2024": [
        {
          level: "协办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "person-cui-chen-yang",
      title: "个人赞助",
      sponsor: {
        type: "person",
        name: "崔晨洋",
      },
      link: "",
      logo: "",
    },
    years: {
      "2024": [
        {
          level: "个人赞助",
          title: "2024 个人赞助",
        },
      ],
      "2023": [
        {
          level: "个人赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "redoop",
      title: "Redoop",
      sponsor: {
        type: "organization",
        name: "Redoop",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "zilliz",
      title: "Zilliz",
      sponsor: {
        type: "organization",
        name: "Zilliz",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "星牌合作",
        },
      ],
      "2022": [
        {
          level: "星牌合作",
        },
      ],
      "2021": [
        {
          level: "星牌合作",
        },
      ],
      "2020": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "near",
      title: "NEAR",
      sponsor: {
        type: "organization",
        name: "NEAR",
      },
      link: "https://near.org",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "银牌合作",
        },
      ],
      "2022": [
        {
          level: "银牌合作",
        },
      ],
      "2021": [
        {
          level: "银牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "yun-qi-zi-ben",
      title: "云启资本",
      sponsor: {
        type: "organization",
        name: "云启资本",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "铜牌合作",
        },
      ],
      "2021": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "baidu",
      title: "百度",
      sponsor: {
        type: "organization",
        name: "百度",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "特别支持",
        },
      ],
      "2022": [
        {
          level: "白金合作",
          title: "百度开源",
          link: "https://opensource.baidu.com/",
        },
      ],
      "2021": [
        {
          level: "白金合作",
          title: "百度开源",
          link: "https://opensource.baidu.com/",
        },
      ],
      "2018": [
        {
          level: "白金合作",
          title: "百度开源",
          link: "https://opensource.baidu.com/",
        },
        {
          level: "国际讲师差旅赞助",
          title: "百度开源",
          link: "https://opensource.baidu.com/",
        },
      ],
    },
  },
  {
    profile: {
      id: "cheng-du-shi-gao-xin-qu-ke-ji-chuang-xin-ju",
      title: "成都市高新区科技创新局",
      sponsor: {
        type: "organization",
        name: "成都市高新区科技创新局",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "指导单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "dian-zi-ke-ji-da-xue",
      title: "电子科技大学",
      sponsor: {
        type: "organization",
        name: "电子科技大学",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "协办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "cheng-du-ao-shi-xin-xi-ji-shu-you-xian-gong-si",
      title: "成都傲世信息技术有限公司",
      sponsor: {
        type: "organization",
        name: "成都傲世信息技术有限公司",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "协办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "kylin-software",
      title: "麒麟软件",
      sponsor: {
        type: "organization",
        name: "麒麟软件",
      },
      link: "https://www.kylinos.cn/",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "银牌合作",
          title: "麒麟软件有限公司",
        },
      ],
    },
  },
  {
    profile: {
      id: "greptime",
      title: "Greptime 格睿科技",
      sponsor: {
        type: "organization",
        name: "Greptime 格睿科技",
      },
      link: "https://greptime.com/",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "onlyoffice",
      title: "ONLYOFFICE",
      sponsor: {
        type: "organization",
        name: "ONLYOFFICE",
      },
      link: "https://www.onlyoffice.com/",
      logo: "/logo.png",
    },
    years: {
      "2023": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "vmware",
      title: "VMWare",
      sponsor: {
        type: "organization",
        name: "VMWare",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "白金合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "wei-zhong-yin-xing",
      title: "微众银行",
      sponsor: {
        type: "organization",
        name: "微众银行",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "白金合作",
        },
      ],
      "2021": [
        {
          level: "白金合作",
        },
      ],
      "2020": [
        {
          level: "白金合作",
        },
      ],
      "2019": [
        {
          level: "白金合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "microsoft",
      title: "微软",
      sponsor: {
        type: "organization",
        name: "微软",
      },
      link: "",
      logo: "/img/partners/microsoft.jpg",
    },
    years: {
      "2022": [
        {
          level: "金牌合作",
          logo: "/logo.png",
        },
      ],
      "2021": [
        {
          level: "白金合作",
          logo: "/logo.png",
        },
      ],
      "2020": [
        {
          level: "战略合作",
          logo: "/img/partners/microsoft.jpg",
        },
      ],
      "2019": [
        {
          level: "白金合作",
          logo: "/logo.png",
        },
      ],
      "2018": [
        {
          level: "白金合作",
          logo: "/logo.png",
        },
      ],
      "2017": [
        {
          level: "银牌合作",
          logo: "/logo.png",
        },
      ],
      "2016": [
        {
          level: "白金合作",
          logo: "/logo.png",
        },
      ],
    },
  },
  {
    profile: {
      id: "ubuntukylin",
      title: "优麒麟",
      sponsor: {
        type: "organization",
        name: "优麒麟",
      },
      link: "https://www.ubuntukylin.com/",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "银牌合作",
        },
      ],
      "2021": [
        {
          level: "银牌合作",
        },
      ],
      "2020": [
        {
          level: "金牌合作",
        },
      ],
      "2019": [
        {
          level: "银牌合作",
        },
      ],
      "2018": [
        {
          level: "金牌合作",
        },
      ],
      "2017": [
        {
          level: "金牌合作",
        },
      ],
      "2016": [
        {
          level: "银牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "linuxcn",
      title: "LinuxCN",
      sponsor: {
        type: "organization",
        name: "LinuxCN",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "合作媒体",
          title: "LinuxCN（Linux中国）",
        },
      ],
      "2021": [
        {
          level: "合作媒体",
          title: "LinuxCN（Linux 中国）",
        },
      ],
      "2020": [
        {
          level: "合作媒体",
          title: "Linux CN（Linux 中国）",
        },
      ],
      "2019": [
        {
          level: "合作媒体",
          title: "Linux CN（Linux 中国）",
        },
      ],
      "2018": [
        {
          level: "合作媒体",
          title: "Linux CN（Linux 中国）",
        },
      ],
      "2017": [
        {
          level: "合作媒体",
          title: "Linux CN（Linux 中国）",
        },
      ],
    },
  },
  {
    profile: {
      id: "he-nan-shu-chuang-yuan",
      title: "河南数创院",
      sponsor: {
        type: "organization",
        name: "河南数创院",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "sphereex",
      title: "SphereEx",
      sponsor: {
        type: "organization",
        name: "SphereEx",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "星牌合作",
        },
      ],
      "2021": [
        {
          level: "白金合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "yun-shan-wang-luo",
      title: "云杉网络",
      sponsor: {
        type: "organization",
        name: "云杉网络",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "星牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "wang-yi-yao-tai",
      title: "网易瑶台",
      sponsor: {
        type: "organization",
        name: "网易瑶台",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2022": [
        {
          level: "元宇宙会场合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "teng-yuan-hui",
      title: "腾源会",
      sponsor: {
        type: "organization",
        name: "腾源会",
      },
      link: "https://mp.weixin.qq.com/s/KEsFaVKrNr7vQTkyBcvH-w\\nhttps://cloud.tencent.com/act/pro/weopen-home",
      logo: "/img/partners/tengyuan.png",
    },
    years: {
      "2021": [
        {
          level: "战略合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "ou-ruo-shu-wang",
      title: "欧若数网",
      sponsor: {
        type: "organization",
        name: "欧若数网",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2021": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "ai-ke-ji-ping-lun",
      title: "AI科技评论",
      sponsor: {
        type: "organization",
        name: "AI科技评论",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2021": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "jing-dong-yun",
      title: "京东云",
      sponsor: {
        type: "organization",
        name: "京东云",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2020": [
        {
          level: "白金合作",
        },
      ],
      "2019": [
        {
          level: "金牌合作",
        },
      ],
      "2018": [
        {
          level: "白金合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "di-di",
      title: "滴滴",
      sponsor: {
        type: "organization",
        name: "滴滴",
      },
      link: "https://opensource.didiglobal.com/home",
      logo: "/img/partners/didi.svg",
    },
    years: {
       "2026": [
        {
          level: "白金合作",
          tag: "累计合作3届",
        },
      ],
      "2020": [
        {
          level: "白金合作",
        },
      ],
      "2019": [
        {
          level: "银牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "github",
      title: "Github",
      sponsor: {
        type: "organization",
        name: "Github",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2020": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "unitimes",
      title: "Unitimes",
      sponsor: {
        type: "organization",
        name: "Unitimes",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2020": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "hyperai",
      title: "HyperAI 超神经",
      sponsor: {
        type: "organization",
        name: "HyperAI 超神经",
      },
      link: "https://hyper.ai/",
      logo: "/logo.png",
    },
    years: {
      "2020": [
        {
          level: "战略合作媒体",
        },
      ],
      "2019": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "person-wang-xiao-hu",
      title: "个人赞助",
      sponsor: {
        type: "person",
        name: "王小虎",
      },
      link: "",
      logo: "",
    },
    years: {
      "2020": [
        {
          level: "个人赞助",
          title: "2020 个人赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "person-sun-zhen-hua",
      title: "个人赞助",
      sponsor: {
        type: "person",
        name: "孙振华",
      },
      link: "",
      logo: "",
    },
    years: {
      "2020": [
        {
          level: "个人赞助",
          title: "2020 个人赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "a-li-ba-ba",
      title: "阿里巴巴",
      sponsor: {
        type: "organization",
        name: "阿里巴巴",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "白金合作",
        },
      ],
      "2017": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "synopsys",
      title: "Synopsys",
      sponsor: {
        type: "organization",
        name: "Synopsys",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "白金合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "teng-xun-yun",
      title: "腾讯云",
      sponsor: {
        type: "organization",
        name: "腾讯云",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "白金合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "zai-hu",
      title: "在乎",
      sponsor: {
        type: "organization",
        name: "在乎",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "ou-shu-ke-ji",
      title: "偶数科技",
      sponsor: {
        type: "organization",
        name: "偶数科技",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "银牌合作",
        },
      ],
      "2018": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "mi-yuan-ke-ji",
      title: "秘猿科技",
      sponsor: {
        type: "organization",
        name: "秘猿科技",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "铜牌合作",
        },
      ],
      "2018": [
        {
          level: "银牌合作",
        },
      ],
      "2017": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "nebulagraph-community",
      title: "NebulaGraph Community",
      sponsor: {
        type: "organization",
        name: "NebulaGraph Community",
      },
      link: "https://nebula-graph.com.cn/",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "zhong-biao-ruan-jian",
      title: "中标软件",
      sponsor: {
        type: "organization",
        name: "中标软件",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "peng-cheng-hui-zhi",
      title: "鹏城汇智",
      sponsor: {
        type: "organization",
        name: "鹏城汇智",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "gitchat",
      title: "GitChat",
      sponsor: {
        type: "organization",
        name: "GitChat",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "合作媒体",
        },
      ],
      "2018": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "kai-yuan-she",
      title: "开源社",
      sponsor: {
        type: "organization",
        name: "开源社",
      },
      link: "https://kaiyuanshe.cn/",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "主办单位",
        },
      ],
      "2018": [
        {
          level: "主办单位",
        },
      ],
      "2017": [
        {
          level: "主办单位",
        },
      ],
      "2016": [
        {
          level: "主办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "hua-dong-shi-fan-da-xue",
      title: "华东师范大学",
      sponsor: {
        type: "organization",
        name: "华东师范大学",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "主办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "yun-ji-suan-biao-zhun-he-kai-yuan-tui-jin-wei-yuan-hui",
      title: "云计算标准和开源推进委员会",
      sponsor: {
        type: "organization",
        name: "云计算标准和开源推进委员会",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2019": [
        {
          level: "主办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "teng-xun-kai-yuan",
      title: "腾讯开源",
      sponsor: {
        type: "organization",
        name: "腾讯开源",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "白金合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "yun-ji-suan-kai-yuan-chan-ye-lian-meng",
      title: "云计算开源产业联盟",
      sponsor: {
        type: "organization",
        name: "云计算开源产业联盟",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "白金合作",
        },
        {
          level: "大会合作单位",
        },
      ],
      "2017": [
        {
          level: "大会合作单位",
        },
      ],
      "2016": [
        {
          level: "大会合作单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "a-li-yun",
      title: "阿里云",
      sponsor: {
        type: "organization",
        name: "阿里云",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "bytom",
      title: "BYTOM",
      sponsor: {
        type: "organization",
        name: "BYTOM",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "铜牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "huo-dong-xing",
      title: "活动行",
      sponsor: {
        type: "organization",
        name: "活动行",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "报名平台伙伴",
        },
      ],
      "2017": [
        {
          level: "报名平台伙伴",
        },
      ],
    },
  },
  {
    profile: {
      id: "it-da-ka-shuo",
      title: "IT大咖说",
      sponsor: {
        type: "organization",
        name: "IT大咖说",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "视频直播伙伴",
        },
      ],
      "2017": [
        {
          level: "视频直播伙伴",
        },
      ],
    },
  },
  {
    profile: {
      id: "ba-bi-te",
      title: "巴比特",
      sponsor: {
        type: "organization",
        name: "巴比特",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "合作媒体",
        },
      ],
    },
  },
  {
    profile: {
      id: "shang-xian-le",
      title: "上线了",
      sponsor: {
        type: "organization",
        name: "上线了",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2018": [
        {
          level: "网站支持",
        },
      ],
    },
  },
  {
    profile: {
      id: "neo",
      title: "NEO",
      sponsor: {
        type: "organization",
        name: "NEO",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "yuan-ben",
      title: "原本",
      sponsor: {
        type: "organization",
        name: "原本",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "金牌合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "ccfshanghai",
      title: "中国计算机学会上海分会",
      sponsor: {
        type: "organization",
        name: "中国计算机学会上海分会",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "主办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "shang-hai-jiao-tong-da-xue-ji-suan-ji-xi",
      title: "上海交通大学计算机系",
      sponsor: {
        type: "organization",
        name: "上海交通大学计算机系",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "协办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "topgeek",
      title: "Topgeek",
      sponsor: {
        type: "organization",
        name: "Topgeek",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "承办单位",
        },
      ],
    },
  },
  {
    profile: {
      id: "zentao",
      title: "禅道",
      sponsor: {
        type: "organization",
        name: "禅道",
      },
      link: "https://www.zentao.net/\\nhttps://www.zentao.net/index.html",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "讲师合作",
        },
      ],
      "2016": [
        {
          level: "成员赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "kyligence",
      title: "Kyligence",
      sponsor: {
        type: "organization",
        name: "Kyligence",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "讲师合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "qing-yun-ke-ji",
      title: "青云科技",
      sponsor: {
        type: "organization",
        name: "青云科技",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "讲师合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "eaby",
      title: "eaby",
      sponsor: {
        type: "organization",
        name: "eaby",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2017": [
        {
          level: "讲师合作",
        },
      ],
    },
  },
  {
    profile: {
      id: "51aspx",
      title: "51Aspx",
      sponsor: {
        type: "organization",
        name: "51Aspx",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2016": [
        {
          level: "亮点赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "canonical",
      title: "CANONICAL",
      sponsor: {
        type: "organization",
        name: "CANONICAL",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2016": [
        {
          level: "亮点赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "ke-ke-kong-jian",
      title: "可可空间",
      sponsor: {
        type: "organization",
        name: "可可空间",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2016": [
        {
          level: "亮点赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "an-di-si",
      title: "安迪思",
      sponsor: {
        type: "organization",
        name: "安迪思",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2016": [
        {
          level: "亮点赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "qing-yuan-ke-ji",
      title: "轻元科技",
      sponsor: {
        type: "organization",
        name: "轻元科技",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2016": [
        {
          level: "成员赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "shu-ren-yun",
      title: "数人云",
      sponsor: {
        type: "organization",
        name: "数人云",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2016": [
        {
          level: "成员赞助",
        },
      ],
    },
  },
  {
    profile: {
      id: "copu",
      title: "COPU",
      sponsor: {
        type: "organization",
        name: "COPU",
      },
      link: "",
      logo: "/logo.png",
    },
    years: {
      "2016": [
        {
          level: "指导单位",
        },
      ],
    },
  },
];

// 将规范化数据展开为页面现有的届度合作记录格式。
export const partnersRawData: Partner[] = partnerEntries.flatMap(
  ({ profile, years }) =>
    Object.entries(years).flatMap(([year, records]) =>
      records.map((record) => ({
        id: profile.id,
        title: record.title ?? profile.title,
        sponsor: profile.sponsor,
        year,
        level: record.level,
        link: record.link ?? profile.link,
        logo: record.logo ?? profile.logo,
        tag: record.tag ?? "",
      })),
    ),
);

export const partnerProfiles = partnerEntries.map(({ profile }) => profile);

export const organizePartnersByLevel = (
  data: Partner[],
): Record<string, Partner[]> => {
  return data.reduce<Record<string, Partner[]>>((organized, partner) => {
    organized[partner.level] ??= [];
    organized[partner.level].push(partner);
    return organized;
  }, {});
};

export const organizePartnersByYear = (
  data: Partner[],
): Record<string, Partner[]> => {
  const organized = data.reduce<Record<string, Partner[]>>(
    (result, partner) => {
      result[partner.year] ??= [];
      result[partner.year].push(partner);
      return result;
    },
    {},
  );

  return Object.fromEntries(
    Object.entries(organized).sort(([a], [b]) => Number(b) - Number(a)),
  );
};

export const partnersData = organizePartnersByLevel(partnersRawData);
export const partnersByYear = organizePartnersByYear(partnersRawData);
