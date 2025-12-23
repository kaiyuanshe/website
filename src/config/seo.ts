export const seoConfig = {
  '/charter': {
    title: '开源社章程 - 开源社',
    description:
      '开源社章程 2025年修订版。开源社是由志愿贡献于开源事业的个人志愿者，依贡献、共识、共治原则所组成的开源社区。了解开源社的愿景、使命、宗旨、治理结构和成员权利义务。',
    keywords:
      '开源社,章程,开源治理,社区发展,开源社区,KAIYUANSHE,开源人宣言,治理机构',
    ogTitle: '开源社章程 - 开源社',
    ogDescription: '开源社章程 2025年修订版 - 推动开源成为新时代的生活方式'
  },
  '/governance/code-of-conduct':{
    title: '开源社行为守则｜社区规范｜开源社',
    description:
      '开源社行为守则 2025年修订版。开源社是由志愿贡献于开源事业的个人志愿者，依贡献、共识、共治原则所组成的开源社区。了解开源社的愿景、使命、宗旨、治理结构和成员权利义务。',
    keywords:
      '开源社,行为守则,开源治理,社区发展,开源社区,KAIYUANSHE,开源人宣言,治理机构',
    ogTitle: '开源社行为守则 - 开源社',
    ogDescription: '开源社行为守则 2025年修订版 - 开源人的家,推动开源成为新时代的生活方式'
  }
} as const

export type SeoConfig = typeof seoConfig
export type RoutePath = keyof SeoConfig
