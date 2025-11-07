export interface AnnualReport {
  id: string
  title: string
  year: number
  description: string
  coverImage: string
  publishDate: string
  pdfUrl: string
}

// 模拟年度报告数据
export const mockReports: AnnualReport[] = [
  {
    id: '2022',
    title: '2022年开源社年度报告',
    year: 2022,
    description: '展示2022年开源社在推动中国开源生态发展方面的卓越贡献。报告涵盖了重大开源项目孵化、社区活动组织、人才网络建设等多个维度的成就。',
    coverImage: '/img/report/report2022.png',
    publishDate: '2022-02-20',
    pdfUrl: '/report/2022开源社年度报告.pdf'
  },
  {
    id: '2021',
    title: '2021年开源社年度报告',
    year: 2021,
    description: '记录2021年开源社在疫情挑战下继续推进开源事业的坚韧历程。重点展示了线上活动创新、数字化转型以及国际合作的重要进展。',
    coverImage: '/img/report/report2021.png',
    publishDate: '2021-03-10',
    pdfUrl: '/report/2021开源社年度报告.pdf'
  },
   {
    id: '2020',
    title: '2020年开源社年度报告',
    year: 2020,
    description: '记录2020年开源社在疫情挑战下继续推进开源事业的坚韧历程。重点展示了线上活动创新、数字化转型以及国际合作的重要进展。',
    coverImage: '/img/report/report2020.png',
    publishDate: '2020-03-10',
    pdfUrl: '/report/2020开源社年度报告.pdf'
  }
]