export interface CarouselImage {
  src: string
  detailUrl: string
  openInNewTab: boolean
  alt?: string
}

/**
 * 首页轮播
 * src 图片地址
 * detailUrl 详情地址
 * openInNewTab 是否浏览器新标签打开
 * alt 图片描述
 */
export const carouselImages: CarouselImage[] = [
  {
    src: '/img/rotation/activity1.png',
    detailUrl: 'https://baidu.com/',
    openInNewTab: true,
    alt: 'Activity 1'
  },
  {
    src: '/img/rotation/activity2.png',
    detailUrl: '/events/activity2',
    openInNewTab: false,
    alt: 'Activity 2'
  },
  {
    src: '/img/rotation/activity3.png',
    detailUrl: '/events/activity3',
    openInNewTab: false,
    alt: 'Activity 3'
  },
  {
    src: '/img/rotation/activity4.png',
    detailUrl: '/events/activity4',
    openInNewTab: false,
    alt: 'Activity 4'
  },
  {
    src: '/img/rotation/activity5.png',
    detailUrl: '/events/activity5',
    openInNewTab: false,
    alt: 'Activity 5'
  }
]