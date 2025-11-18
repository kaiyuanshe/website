export interface Partner {
  title: string
  organization: string
  person: string
  year: string
  level: string
  link: string
  logo: string
  tag: string
}

// 合作伙伴数据
export const partnersRawData: Partner[] = [
  {
    title: '蚂蚁开源',
    organization: '蚂蚁集团',
    person: '',
    year: '2025',
    level: '白金合作',
    link: 'https://opensource.antgroup.com/',
    logo: '/img/partners/ant.jpg',
    tag: '累计合作3年'
  },
  {
    title: '原力灵机',
    organization: '原力灵机',
    person: '',
    year: '2025',
    level: '金牌合作',
    link: 'https://dexmal.hjwtest.com',
    logo: '/img/partners/dexmal.png',
    tag: ''
  },
  {
    title: '华为',
    organization: '华为',
    person: '',
    year: '2025',
    level: '银牌合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: '累计合作9年'
  },
  {
    title: '字节跳动',
    organization: '字节跳动',
    person: '',
    year: '2025',
    level: '银牌合作',
    link: 'https://opensource.bytedance.com',
    logo: '/img/partners/bytedance.webp',
    tag: '累计合作2年'
  },
  {
    title: 'GOSIM',
    organization: 'GOSIM',
    person: '',
    year: '2025',
    level: '银牌合作',
    link: 'https://gosim.org',
    logo: '/img/partners/gosim-logo2025.png',
    tag: '累计合作2年'
  },
  {
    title: '百度文心大模型',
    organization: '百度',
    person: '',
    year: '2025',
    level: '银牌合作',
    link: 'https://wenxin.baidu.com',
    logo: '/img/partners/wenxin.png',
    tag: ''
  },
  {
    title: '商汤大装置',
    organization: '商汤',
    person: '',
    year: '2025',
    level: '银牌合作',
    link: 'https://www.sensecore.cn',
    logo: '/img/partners/sensecore.png',
    tag: ''
  },
  {
    title: 'openKylin',
    organization: '麒麟软件',
    person: '',
    year: '2025',
    level: '银牌合作',
    link: 'https://www.openkylin.top',
    logo: '/img/partners/openkylin.png',
    tag: '累计合作2年'
  },
  {
    title: 'OceanBase',
    organization: 'OceanBase',
    person: '',
    year: '2025',
    level: '银牌合作',
    link: 'https://open.oceanbase.com',
    logo: '/img/partners/oceanbase.png',
    tag: '累计合作4年'
  },
  {
    title: '龙蜥社区',
    organization: '龙蜥社区',
    person: '',
    year: '2025',
    level: '星牌合作',
    link: 'https://openanolis.cn/',
    logo: '/img/partners/openanolis.png',
    tag: ''
  },
  {
    title: '迪玛科技',
    organization: '迪玛科技',
    person: '',
    year: '2025',
    level: '星牌合作',
    link: 'https://www.dimatec.com.cn/cn/index.html',
    logo: '/img/partners/dima.png',
    tag: '累计合作6年'
  },
  {
    title: 'Seafile',
    organization: 'Seafile',
    person: '',
    year: '2025',
    level: '星牌合作',
    link: 'https://www.seafile.com/home/',
    logo: '/img/partners/seafile.svg',
    tag: '累计合作4年'
  },
  {
    title: '醋溜科技',
    organization: '醋溜科技',
    person: '',
    year: '2025',
    level: '星牌合作',
    link: 'https://www.culiutech.com/',
    logo: '/img/partners/culiu.png',
    tag: '累计合作3年'
  },
  {
    title: '立创开源硬件平台',
    organization: '嘉立创',
    person: '',
    year: '2025',
    level: '星牌合作',
    link: 'https://oshwhub.com/',
    logo: '/img/partners/oshwhub.png',
    tag: '累计合作2年'
  },
  {
    title: '安势科技',
    organization: '安势科技',
    person: '',
    year: '2025',
    level: '星牌合作',
    link: 'https://www.sectrend.com.cn/',
    logo: '/img/partners/sectrend.png',
    tag: '累计合作2年'
  },
  {
    title: '大成律所',
    organization: '北京大成（上海）律师事务所',
    person: '',
    year: '2025',
    level: '星牌合作',
    link: 'https://shanghai.dacheng.com/',
    logo: '/img/partners/dntons.png',
    tag: '累计合作2年'
  },
  {
    title: '浪潮 KaiwuDB & KWDB 社区',
    organization: '浪潮集团',
    person: '',
    year: '2024',
    level: '白金合作',
    link: 'https://www.kaiwudb.com',
    logo: '/img/partners/kaiwuDB.webp',
    tag: '累计合作3年'
  },
  {
    title: '2024 金牌合作 华为',
    organization: '华为',
    person: '',
    year: '2024',
    level: '金牌合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2024 银牌合作 蚂蚁开源',
    organization: '蚂蚁开源',
    person: '',
    year: '2024',
    level: '银牌合作',
    link: 'https://opensource.antgroup.com/',
    logo: '/img/partners/ant.jpg',
    tag: ''
  },
  {
    title: '2024 银牌合作 亚马逊云科技',
    organization: '亚马逊云科技',
    person: '',
    year: '2024',
    level: '银牌合作',
    link: 'https://dev.amazoncloud.cn/',
    logo: '/img/partners/amazoncloud.webp',
    tag: '累计合作4年'
  },
  {
    title: '2024 银牌合作 OceanBase',
    organization: 'OceanBase',
    person: '',
    year: '2024',
    level: '银牌合作',
    link: 'https://open.oceanbase.com',
    logo: '/img/partners/oceanbase.png',
    tag: '累计合作3年'
  },
  {
    title: '2024 银牌合作 openKylin',
    organization: 'openKylin',
    person: '',
    year: '2024',
    level: '银牌合作',
    link: 'https://www.openkylin.top',
    logo: '/img/partners/openkylin.png',
    tag: ''
  },
  {
    title: '2024 星牌合作 安势信息',
    organization: '安势信息',
    person: '',
    year: '2024',
    level: '星牌合作',
    link: 'https://www.sectrend.com.cn',
    logo: '/img/partners/sectrend.png',
    tag: ''
  },
  {
    title: '2024 星牌合作 醋溜科技',
    organization: '醋溜科技',
    person: '',
    year: '2024',
    level: '星牌合作',
    link: '/img/partners/culiu.png',
    logo: '/img/partners/culiu.png',
    tag: '累计合作2年'
  },
  {
    title: '2024 星牌合作 北京大成（上海）律师事务所',
    organization: '北京大成（上海）律师事务所',
    person: '',
    year: '2024',
    level: '星牌合作',
    link: '',
    logo: '/img/partners/dntons.png',
    tag: ''
  },
  {
    title: '2024 星牌合作 迪码科技',
    organization: '迪码科技',
    person: '',
    year: '2024',
    level: '星牌合作',
    link: 'https://www.dimatec.com.cn/portal/aboutus.html',
    logo: '/img/partners/dima.png',
    tag: ''
  },
  {
    title: '2024 星牌合作 立创开源硬件平台',
    organization: '嘉立创',
    person: '',
    year: '2024',
    level: '星牌合作',
    link: 'https://oshwhub.com/',
    logo: '/img/partners/oshwhub.png',
    tag: ''
  },
  {
    title: '2024 星牌合作 Seafile',
    organization: 'Seafile',
    person: '',
    year: '2024',
    level: '星牌合作',
    link: 'https://www.seafile.com/home/',
    logo: '/img/partners/seafile.svg',
    tag: ''
  },
  {
    title: '2024 战略合作社区 SegmentFault 思否',
    organization: 'SegmentFault 思否',
    person: '',
    year: '2024',
    level: '战略合作社区',
    link: 'https://segmentfault.com/',
    logo: '/logo.png',
    tag: '累计合作5年'
  },
  {
    title: '2024 协办单位 北京中关村创业大街科技服务有限公司',
    organization: '北京中关村创业大街科技服务有限公司',
    person: '',
    year: '2024',
    level: '协办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2024 个人赞助 ',
    organization: '',
    person: '崔晨洋',
    year: '2024',
    level: '个人赞助',
    link: '',
    logo: '',
    tag: ''
  },
  {
    title: '2023 星牌合作 Redoop',
    organization: 'Redoop',
    person: '',
    year: '2023',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 星牌合作 Zilliz',
    organization: 'Zilliz',
    person: '',
    year: '2023',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 星牌合作 安势信息',
    organization: '安势信息',
    person: '',
    year: '2023',
    level: '星牌合作',
    link: 'https://www.sectrend.com.cn',
    logo: '/img/partners/sectrend.png',
    tag: ''
  },
  {
    title: '2023 白金合作 浪潮',
    organization: '浪潮',
    person: '',
    year: '2023',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 银牌合作 NEAR',
    organization: 'NEAR',
    person: '',
    year: '2023',
    level: '银牌合作',
    link: 'https://github.com/near\nhttps://near.org',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 银牌合作 亚马逊云科技',
    organization: '亚马逊云科技',
    person: '',
    year: '2023',
    level: '银牌合作',
    link: 'https://dev.amazoncloud.cn/',
    logo: '/img/partners/amazoncloud.webp',
    tag: ''
  },
  {
    title: '2023 铜牌合作 Seafile',
    organization: 'Seafile',
    person: '',
    year: '2023',
    level: '铜牌合作',
    link: 'https://www.seafile.com/home/',
    logo: '/img/partners/seafile.svg',
    tag: ''
  },
  {
    title: '2023 白金合作 华为',
    organization: '华为',
    person: '',
    year: '2023',
    level: '白金合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2023 银牌合作 OceanBase',
    organization: 'OceanBase',
    person: '',
    year: '2023',
    level: '银牌合作',
    link: 'https://open.oceanbase.com',
    logo: '/img/partners/oceanbase.png',
    tag: ''
  },
  {
    title: '2023 铜牌合作 迪码科技',
    organization: '迪码科技',
    person: '',
    year: '2023',
    level: '铜牌合作',
    link: 'https://www.dimatec.com.cn/portal/aboutus.html',
    logo: '/img/partners/dima.png',
    tag: ''
  },
  {
    title: '2023 铜牌合作 云启资本',
    organization: '云启资本',
    person: '',
    year: '2023',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 特别支持 百度',
    organization: '百度',
    person: '',
    year: '2023',
    level: '特别支持',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 指导单位 成都市高新区科技创新局',
    organization: '成都市高新区科技创新局',
    person: '',
    year: '2023',
    level: '指导单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 协办单位 电子科技大学',
    organization: '电子科技大学',
    person: '',
    year: '2023',
    level: '协办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 协办单位 成都傲世信息技术有限公司',
    organization: '成都傲世信息技术有限公司',
    person: '',
    year: '2023',
    level: '协办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 银牌合作 麒麟软件有限公司',
    organization: '麒麟软件有限公司',
    person: '',
    year: '2023',
    level: '银牌合作',
    link: 'https://www.kylinos.cn/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 星牌合作 Greptime 格睿科技',
    organization: 'Greptime 格睿科技',
    person: '',
    year: '2023',
    level: '星牌合作',
    link: 'https://greptime.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 银牌合作 蚂蚁开源',
    organization: '蚂蚁开源',
    person: '',
    year: '2023',
    level: '银牌合作',
    link: 'https://opensource.antgroup.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 金牌合作 GOSIM',
    organization: 'GOSIM',
    person: '',
    year: '2023',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 铜牌合作 ONLYOFFICE',
    organization: 'ONLYOFFICE',
    person: '',
    year: '2023',
    level: '铜牌合作',
    link: 'https://www.onlyoffice.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 星牌合作 醋溜科技',
    organization: '醋溜科技',
    person: '',
    year: '2023',
    level: '星牌合作',
    link: 'https://www.culiu-tech.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2023 个人赞助 ',
    organization: '',
    person: '崔晨洋',
    year: '2023',
    level: '个人赞助',
    link: '',
    logo: '',
    tag: ''
  },
  {
    title: '2022 白金合作 百度开源',
    organization: '百度开源',
    person: '',
    year: '2022',
    level: '白金合作',
    link: 'https://opensource.baidu.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 白金合作 字节跳动',
    organization: '字节跳动',
    person: '',
    year: '2022',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 白金合作 华为',
    organization: '华为',
    person: '',
    year: '2022',
    level: '白金合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2022 白金合作 开务数据库',
    organization: '开务数据库',
    person: '',
    year: '2022',
    level: '白金合作',
    link: 'https://mp.weixin.qq.com/s/cRCrFBzvxWiCj4jTvC2GIw',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 白金合作 VMWare',
    organization: 'VMWare',
    person: '',
    year: '2022',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 白金合作 微众银行',
    organization: '微众银行',
    person: '',
    year: '2022',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 金牌合作 亚马逊云科技',
    organization: '亚马逊云科技',
    person: '',
    year: '2022',
    level: '金牌合作',
    link: 'https://dev.amazoncloud.cn/',
    logo: '/img/partners/amazoncloud.webp',
    tag: ''
  },
  {
    title: '2022 金牌合作 微软',
    organization: '微软',
    person: '',
    year: '2022',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 银牌合作 NEAR',
    organization: 'NEAR',
    person: '',
    year: '2022',
    level: '银牌合作',
    link: 'https://github.com/near\nhttps://near.org',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 银牌合作 优麒麟',
    organization: '优麒麟',
    person: '',
    year: '2022',
    level: '银牌合作',
    link: 'https://www.ubuntukylin.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 铜牌合作 迪码科技',
    organization: '迪码科技',
    person: '',
    year: '2022',
    level: '铜牌合作',
    link: 'https://www.dimatec.com.cn/portal/aboutus.html',
    logo: '/img/partners/dima.png',
    tag: ''
  },
  {
    title: '2022 媒体伙伴 CSDN（中国开发者网络）',
    organization: 'CSDN（中国开发者网络）',
    person: '',
    year: '2022',
    level: '媒体伙伴',
    link: 'https://www.csdn.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 媒体伙伴 开源中国',
    organization: '开源中国',
    person: '',
    year: '2022',
    level: '媒体伙伴',
    link: 'https://www.oschina.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 媒体伙伴 Linux CN（Linux 中国）',
    organization: 'Linux CN（Linux 中国）',
    person: '',
    year: '2022',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 媒体伙伴 infoQ',
    organization: 'infoQ',
    person: '',
    year: '2022',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 媒体伙伴 稀土掘金',
    organization: '稀土掘金',
    person: '',
    year: '2022',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 星牌合作 河南数创院',
    organization: '河南数创院',
    person: '',
    year: '2022',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 星牌合作 OceanBase',
    organization: 'OceanBase',
    person: '',
    year: '2022',
    level: '星牌合作',
    link: 'https://open.oceanbase.com',
    logo: '/img/partners/oceanbase.png',
    tag: ''
  },
  {
    title: '2022 星牌合作 SphereEx',
    organization: 'SphereEx',
    person: '',
    year: '2022',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 星牌合作 云杉网络',
    organization: '云杉网络',
    person: '',
    year: '2022',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 星牌合作 Zilliz',
    organization: 'Zilliz',
    person: '',
    year: '2022',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 战略合作媒体 SegmentFault 思否',
    organization: 'SegmentFault 思否',
    person: '',
    year: '2022',
    level: '战略合作媒体',
    link: 'https://segmentfault.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2022 元宇宙会场合作 网易瑶台',
    organization: '网易瑶台',
    person: '',
    year: '2022',
    level: '元宇宙会场合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 战略合作 腾源会',
    organization: '腾源会',
    person: '',
    year: '2021',
    level: '战略合作',
    link: 'https://mp.weixin.qq.com/s/KEsFaVKrNr7vQTkyBcvH-w\nhttps://cloud.tencent.com/act/pro/weopen-home',
    logo: '/img/partners/tengyuan.png',
    tag: ''
  },
  {
    title: '2021 白金合作 华为',
    organization: '华为',
    person: '',
    year: '2021',
    level: '白金合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2021 白金合作 百度开源',
    organization: '百度开源',
    person: '',
    year: '2021',
    level: '白金合作',
    link: 'https://opensource.baidu.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 白金合作 浪潮',
    organization: '浪潮',
    person: '',
    year: '2021',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 白金合作 SphereEx',
    organization: 'SphereEx',
    person: '',
    year: '2021',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 白金合作 微众银行',
    organization: '微众银行',
    person: '',
    year: '2021',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 白金合作 微软',
    organization: '微软',
    person: '',
    year: '2021',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 金牌合作 云启资本',
    organization: '云启资本',
    person: '',
    year: '2021',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 金牌合作 亚马逊云科技',
    organization: '亚马逊云科技',
    person: '',
    year: '2021',
    level: '金牌合作',
    link: 'https://dev.amazoncloud.cn/',
    logo: '/img/partners/amazoncloud.webp',
    tag: ''
  },
  {
    title: '2021 银牌合作 NEAR',
    organization: 'NEAR',
    person: '',
    year: '2021',
    level: '银牌合作',
    link: 'https://github.com/near\nhttps://near.org',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 银牌合作 优麒麟',
    organization: '优麒麟',
    person: '',
    year: '2021',
    level: '银牌合作',
    link: 'https://www.ubuntukylin.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 铜牌合作 欧若数网',
    organization: '欧若数网',
    person: '',
    year: '2021',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 铜牌合作 迪码科技',
    organization: '迪码科技',
    person: '',
    year: '2021',
    level: '铜牌合作',
    link: 'https://www.dimatec.com.cn/portal/aboutus.html',
    logo: '/img/partners/dima.png',
    tag: ''
  },
  {
    title: '2021 媒体伙伴 CSDN（中国开发者网络）',
    organization: 'CSDN（中国开发者网络）',
    person: '',
    year: '2021',
    level: '媒体伙伴',
    link: 'https://www.csdn.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 媒体伙伴 infoQ',
    organization: 'infoQ',
    person: '',
    year: '2021',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 媒体伙伴 Linux CN（Linux 中国）',
    organization: 'Linux CN（Linux 中国）',
    person: '',
    year: '2021',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 媒体伙伴 开源中国',
    organization: '开源中国',
    person: '',
    year: '2021',
    level: '媒体伙伴',
    link: 'https://www.oschina.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 媒体伙伴 稀土掘金',
    organization: '稀土掘金',
    person: '',
    year: '2021',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 媒体伙伴 AI科技评论',
    organization: 'AI科技评论',
    person: '',
    year: '2021',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 星牌合作 Zilliz',
    organization: 'Zilliz',
    person: '',
    year: '2021',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2021 战略合作媒体 SegmentFault 思否',
    organization: 'SegmentFault 思否',
    person: '',
    year: '2021',
    level: '战略合作媒体',
    link: 'https://segmentfault.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 战略合作 华为',
    organization: '华为',
    person: '',
    year: '2020',
    level: '战略合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2020 战略合作 微软',
    organization: '微软',
    person: '',
    year: '2020',
    level: '战略合作',
    link: '',
    logo: '/img/partners/microsoft.jpg',
    tag: ''
  },
  {
    title: '2020 白金合作 微众银行',
    organization: '微众银行',
    person: '',
    year: '2020',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 白金合作 京东云',
    organization: '京东云',
    person: '',
    year: '2020',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 白金合作 滴滴',
    organization: '滴滴',
    person: '',
    year: '2020',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 金牌合作 优麒麟',
    organization: '优麒麟',
    person: '',
    year: '2020',
    level: '金牌合作',
    link: 'https://www.ubuntukylin.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 金牌合作 Github',
    organization: 'Github',
    person: '',
    year: '2020',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 媒体伙伴 Linux CN（Linux 中国）',
    organization: 'Linux CN（Linux 中国）',
    person: '',
    year: '2020',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 媒体伙伴 Unitimes',
    organization: 'Unitimes',
    person: '',
    year: '2020',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 媒体伙伴 开源中国',
    organization: '开源中国',
    person: '',
    year: '2020',
    level: '媒体伙伴',
    link: 'https://www.oschina.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 星牌合作 迪码科技',
    organization: '迪码科技',
    person: '',
    year: '2020',
    level: '星牌合作',
    link: 'https://www.dimatec.com.cn/portal/aboutus.html',
    logo: '/img/partners/dima.png',
    tag: ''
  },
  {
    title: '2020 星牌合作 Zilliz',
    organization: 'Zilliz',
    person: '',
    year: '2020',
    level: '星牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 战略合作媒体 SegmentFault 思否',
    organization: 'SegmentFault 思否',
    person: '',
    year: '2020',
    level: '战略合作媒体',
    link: 'https://segmentfault.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 战略合作媒体 HyperAI 超神经',
    organization: 'HyperAI 超神经',
    person: '',
    year: '2020',
    level: '战略合作媒体',
    link: 'https://hyper.ai/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 战略合作媒体 CSDN（中国开发者网络）',
    organization: 'CSDN（中国开发者网络）',
    person: '',
    year: '2020',
    level: '战略合作媒体',
    link: 'https://www.csdn.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2020 个人赞助 ',
    organization: '',
    person: '王小虎',
    year: '2020',
    level: '个人赞助',
    link: '',
    logo: '',
    tag: ''
  },
  {
    title: '2020 个人赞助 ',
    organization: '',
    person: '孙振华',
    year: '2020',
    level: '个人赞助',
    link: '',
    logo: '',
    tag: ''
  },
  {
    title: '2019 战略合作 华为',
    organization: '华为',
    person: '',
    year: '2019',
    level: '战略合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2019 白金合作 阿里巴巴',
    organization: '阿里巴巴',
    person: '',
    year: '2019',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 白金合作 微软',
    organization: '微软',
    person: '',
    year: '2019',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 白金合作 Synopsys',
    organization: 'Synopsys',
    person: '',
    year: '2019',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 白金合作 腾讯云',
    organization: '腾讯云',
    person: '',
    year: '2019',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 白金合作 微众银行',
    organization: '微众银行',
    person: '',
    year: '2019',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 金牌合作 京东云',
    organization: '京东云',
    person: '',
    year: '2019',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 金牌合作 在乎',
    organization: '在乎',
    person: '',
    year: '2019',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 银牌合作 滴滴',
    organization: '滴滴',
    person: '',
    year: '2019',
    level: '银牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 银牌合作 优麒麟',
    organization: '优麒麟',
    person: '',
    year: '2019',
    level: '银牌合作',
    link: 'https://www.ubuntukylin.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 银牌合作 偶数科技',
    organization: '偶数科技',
    person: '',
    year: '2019',
    level: '银牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 铜牌合作 秘猿科技',
    organization: '秘猿科技',
    person: '',
    year: '2019',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 铜牌合作 NebulaGraph Community',
    organization: 'NebulaGraph Community',
    person: '',
    year: '2019',
    level: '铜牌合作',
    link: 'https://nebula-graph.com.cn/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 铜牌合作 中标软件',
    organization: '中标软件',
    person: '',
    year: '2019',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 铜牌合作 鹏城汇智',
    organization: '鹏城汇智',
    person: '',
    year: '2019',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 媒体伙伴 CSDN（中国开发者网络）',
    organization: 'CSDN（中国开发者网络）',
    person: '',
    year: '2019',
    level: '媒体伙伴',
    link: 'https://www.csdn.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 媒体伙伴 infoQ',
    organization: 'infoQ',
    person: '',
    year: '2019',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 媒体伙伴 开源中国',
    organization: '开源中国',
    person: '',
    year: '2019',
    level: '媒体伙伴',
    link: 'https://www.oschina.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 媒体伙伴 GitChat',
    organization: 'GitChat',
    person: '',
    year: '2019',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 媒体伙伴 Linux CN（Linux 中国）',
    organization: 'Linux CN（Linux 中国）',
    person: '',
    year: '2019',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 媒体伙伴 HyperAI 超神经',
    organization: 'HyperAI 超神经',
    person: '',
    year: '2019',
    level: '媒体伙伴',
    link: 'https://hyper.ai/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 主办单位 开源社',
    organization: '开源社',
    person: '',
    year: '2019',
    level: '主办单位',
    link: 'https://kaiyuanshe.cn/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 主办单位 华东师范大学',
    organization: '华东师范大学',
    person: '',
    year: '2019',
    level: '主办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2019 主办单位 云计算标准和开源推进委员会',
    organization: '云计算标准和开源推进委员会',
    person: '',
    year: '2019',
    level: '主办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 战略合作 华为',
    organization: '华为',
    person: '',
    year: '2018',
    level: '战略合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2018 白金合作 腾讯开源',
    organization: '腾讯开源',
    person: '',
    year: '2018',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 白金合作 百度开源',
    organization: '百度开源',
    person: '',
    year: '2018',
    level: '白金合作',
    link: 'https://opensource.baidu.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 白金合作 京东云',
    organization: '京东云',
    person: '',
    year: '2018',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 白金合作 微软',
    organization: '微软',
    person: '',
    year: '2018',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 白金合作 云计算开源产业联盟',
    organization: '云计算开源产业联盟',
    person: '',
    year: '2018',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 金牌合作 阿里云',
    organization: '阿里云',
    person: '',
    year: '2018',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 金牌合作 优麒麟',
    organization: '优麒麟',
    person: '',
    year: '2018',
    level: '金牌合作',
    link: 'https://www.ubuntukylin.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 金牌合作 偶数科技',
    organization: '偶数科技',
    person: '',
    year: '2018',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 银牌合作 秘猿科技',
    organization: '秘猿科技',
    person: '',
    year: '2018',
    level: '银牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 铜牌合作 BYTOM',
    organization: 'BYTOM',
    person: '',
    year: '2018',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 国际讲师差旅赞助 华为',
    organization: '华为',
    person: '',
    year: '2018',
    level: '国际讲师差旅赞助',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2018 国际讲师差旅赞助 百度开源',
    organization: '百度开源',
    person: '',
    year: '2018',
    level: '国际讲师差旅赞助',
    link: 'https://opensource.baidu.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 报名平台伙伴 活动行',
    organization: '活动行',
    person: '',
    year: '2018',
    level: '报名平台伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 视频直播伙伴 IT大咖说',
    organization: 'IT大咖说',
    person: '',
    year: '2018',
    level: '视频直播伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 大会合作单位 云计算开源产业联盟',
    organization: '云计算开源产业联盟',
    person: '',
    year: '2018',
    level: '大会合作单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 媒体伙伴 开源中国',
    organization: '开源中国',
    person: '',
    year: '2018',
    level: '媒体伙伴',
    link: 'https://www.oschina.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 媒体伙伴 Linux CN（Linux 中国）',
    organization: 'Linux CN（Linux 中国）',
    person: '',
    year: '2018',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 媒体伙伴 稀土掘金',
    organization: '稀土掘金',
    person: '',
    year: '2018',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 媒体伙伴 CSDN（中国开发者网络）',
    organization: 'CSDN（中国开发者网络）',
    person: '',
    year: '2018',
    level: '媒体伙伴',
    link: 'https://www.csdn.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 媒体伙伴 GitChat',
    organization: 'GitChat',
    person: '',
    year: '2018',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 媒体伙伴 巴比特',
    organization: '巴比特',
    person: '',
    year: '2018',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 主办单位 开源社',
    organization: '开源社',
    person: '',
    year: '2018',
    level: '主办单位',
    link: 'https://kaiyuanshe.cn/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2018 网站支持 上线了',
    organization: '上线了',
    person: '',
    year: '2018',
    level: '网站支持',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 金牌合作 优麒麟',
    organization: '优麒麟',
    person: '',
    year: '2017',
    level: '金牌合作',
    link: 'https://www.ubuntukylin.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 金牌合作 NEO',
    organization: 'NEO',
    person: '',
    year: '2017',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 金牌合作 原本',
    organization: '原本',
    person: '',
    year: '2017',
    level: '金牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 银牌合作 微软',
    organization: '微软',
    person: '',
    year: '2017',
    level: '银牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 银牌合作 华为',
    organization: '华为',
    person: '',
    year: '2017',
    level: '银牌合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2017 铜牌合作 阿里巴巴',
    organization: '阿里巴巴',
    person: '',
    year: '2017',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 铜牌合作 秘猿科技',
    organization: '秘猿科技',
    person: '',
    year: '2017',
    level: '铜牌合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 报名平台伙伴 活动行',
    organization: '活动行',
    person: '',
    year: '2017',
    level: '报名平台伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 视频直播伙伴 IT大咖说',
    organization: 'IT大咖说',
    person: '',
    year: '2017',
    level: '视频直播伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 大会合作单位 云计算开源产业联盟',
    organization: '云计算开源产业联盟',
    person: '',
    year: '2017',
    level: '大会合作单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 媒体伙伴 infoQ',
    organization: 'infoQ',
    person: '',
    year: '2017',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 媒体伙伴 SegmentFault 思否',
    organization: 'SegmentFault 思否',
    person: '',
    year: '2017',
    level: '媒体伙伴',
    link: 'https://segmentfault.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 媒体伙伴 Linux CN（Linux 中国）',
    organization: 'Linux CN（Linux 中国）',
    person: '',
    year: '2017',
    level: '媒体伙伴',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 主办单位 开源社',
    organization: '开源社',
    person: '',
    year: '2017',
    level: '主办单位',
    link: 'https://kaiyuanshe.cn/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 主办单位 中国计算机学会上海分会',
    organization: '中国计算机学会上海分会',
    person: '',
    year: '2017',
    level: '主办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 协办单位 上海交通大学计算机系',
    organization: '上海交通大学计算机系',
    person: '',
    year: '2017',
    level: '协办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 承办单位 Topgeek',
    organization: 'Topgeek',
    person: '',
    year: '2017',
    level: '承办单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 讲师合作 华为',
    organization: '华为',
    person: '',
    year: '2017',
    level: '讲师合作',
    link: 'https://www.huawei.com/cn/open-source',
    logo: '/img/partners/huawei.png',
    tag: ''
  },
  {
    title: '2017 讲师合作 禅道',
    organization: '禅道',
    person: '',
    year: '2017',
    level: '讲师合作',
    link: 'https://www.zentao.net/\nhttps://www.zentao.net/index.html',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 讲师合作 Kyligence',
    organization: 'Kyligence',
    person: '',
    year: '2017',
    level: '讲师合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 讲师合作 青云科技',
    organization: '青云科技',
    person: '',
    year: '2017',
    level: '讲师合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2017 讲师合作 eaby',
    organization: 'eaby',
    person: '',
    year: '2017',
    level: '讲师合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 白金合作 微软',
    organization: '微软',
    person: '',
    year: '2016',
    level: '白金合作',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 银牌合作 优麒麟',
    organization: '优麒麟',
    person: '',
    year: '2016',
    level: '银牌合作',
    link: 'https://www.ubuntukylin.com/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 铜牌合作 Seafile',
    organization: 'Seafile',
    person: '',
    year: '2016',
    level: '铜牌合作',
    link: 'https://www.seafile.com/home/',
    logo: '/img/partners/seafile.svg',
    tag: ''
  },
  {
    title: '2016 亮点赞助 51Aspx',
    organization: '51Aspx',
    person: '',
    year: '2016',
    level: '亮点赞助',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 亮点赞助 CANONICAL',
    organization: 'CANONICAL',
    person: '',
    year: '2016',
    level: '亮点赞助',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 亮点赞助 可可空间',
    organization: '可可空间',
    person: '',
    year: '2016',
    level: '亮点赞助',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 亮点赞助 安迪思',
    organization: '安迪思',
    person: '',
    year: '2016',
    level: '亮点赞助',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 成员赞助 禅道',
    organization: '禅道',
    person: '',
    year: '2016',
    level: '成员赞助',
    link: 'https://www.zentao.net/\nhttps://www.zentao.net/index.html',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 成员赞助 轻元科技',
    organization: '轻元科技',
    person: '',
    year: '2016',
    level: '成员赞助',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 成员赞助 数人云',
    organization: '数人云',
    person: '',
    year: '2016',
    level: '成员赞助',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 指导单位 COPU',
    organization: 'COPU',
    person: '',
    year: '2016',
    level: '指导单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 大会合作单位 云计算开源产业联盟',
    organization: '云计算开源产业联盟',
    person: '',
    year: '2016',
    level: '大会合作单位',
    link: '',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 媒体伙伴 CSDN（中国开发者网络）',
    organization: 'CSDN（中国开发者网络）',
    person: '',
    year: '2016',
    level: '媒体伙伴',
    link: 'https://www.csdn.net/',
    logo: '/logo.png',
    tag: ''
  },
  {
    title: '2016 主办单位 开源社',
    organization: '开源社',
    person: '',
    year: '2016',
    level: '主办单位',
    link: 'https://kaiyuanshe.cn/',
    logo: '/logo.png',
    tag: ''
  }
]

// Function to organize partners by level
export const organizePartnersByLevel = (
  data: Partner[]
): { [level: string]: Partner[] } => {
  const organized: { [level: string]: Partner[] } = {}

  data.forEach(partner => {
    const level = partner.level
    if (!organized[level]) {
      organized[level] = []
    }
    organized[level].push(partner)
  })

  return organized
}

// 合作等级
export const levelOrder = [
  '主办单位',
  '指导单位',
  '协办单位',
  '承办单位',
  '战略合作',
  '白金合作',
  '金牌合作',
  '银牌合作',
  '铜牌合作',
  '星牌合作',
  '个人赞助',
  '亮点赞助',
  '成员赞助',
  '战略合作媒体',
  '媒体伙伴',
  '战略合作社区',
  '大会合作单位',
  '特别支持',
  '讲师合作',
  '国际讲师差旅赞助',
  '报名平台伙伴',
  '视频直播伙伴',
  '网站支持',
  '元宇宙会场合作',
  '开源集市',
  '合作社区'
]

// Function to organize partners by year
export const organizePartnersByYear = (
  data: Partner[]
): { [year: string]: Partner[] } => {
  const organized: { [year: string]: Partner[] } = {}

  data.forEach(partner => {
    const year = partner.year
    if (!organized[year]) {
      organized[year] = []
    }
    organized[year].push(partner)
  })

  // Sort years in descending order (newest first)
  const sortedYears: { [year: string]: Partner[] } = {}
  Object.keys(organized)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .forEach(year => {
      sortedYears[year] = organized[year]
    })

  return sortedYears
}

// Get organized partners data
export const partnersData = organizePartnersByLevel(partnersRawData)
export const partnersByYear = organizePartnersByYear(partnersRawData)
