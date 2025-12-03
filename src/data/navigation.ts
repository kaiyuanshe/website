export interface MenuItem {
  key: string
  labelKey: string // 翻译键
  href?: string
  descriptionKey?: string // 描述翻译键
  children?: MenuItem[]
  group?: string
  target?: string
  hot?: boolean
}

/**
 * 主导航菜单配置数据
 * 所有文本内容使用翻译键，通过 useTranslation hook 进行国际化
 */
export const mainNavItems: MenuItem[] = [
  {
    key: 'about',
    labelKey: 'navigation.about_us',
    children: [
      {
        key: 'intro',
        labelKey: 'navigation.intro',
        href: '/about',
        descriptionKey: 'navigation.intro_description',
        group: 'basic'
      },
      {
        key: 'board',
        labelKey: 'navigation.governance.board',
        href: '/department/board',
        descriptionKey: 'navigation.board_description',
        group: 'basic'
      },
      {
        key: 'advisory',
        labelKey: 'navigation.governance.advisory',
        href: '/department/advisory',
        descriptionKey: 'navigation.advisory_description',
        group: 'basic'
      },
      {
        key: 'legal',
        labelKey: 'navigation.governance.legal',
        href: '/department/legal',
        descriptionKey: 'navigation.legal_description',
        group: 'basic'
      },
      {
        key: 'executive',
        labelKey: 'navigation.executive',
        href: '/department/executive',
        descriptionKey: 'navigation.executive_description',
        group: 'brand'
      },
      {
        key: 'project-committee',
        labelKey: 'navigation.project_committee',
        href: '/department/project',
        descriptionKey: 'navigation.project_committee_description',
        group: 'brand'
      },
      {
        key: 'brand',
        labelKey: 'navigation.brand_resources',
        href: '/brand',
        descriptionKey: 'navigation.brand_resources_description',
        group: 'brand'
      }
    ]
  },
  {
    key: 'governance',
    labelKey: 'navigation.governance.title',
    children: [
      {
        key: 'charter',
        labelKey: 'navigation.charter',
        href: '/charter',
        descriptionKey: 'navigation.charter_description',
        group: 'basic'
      },
      {
        key: 'open-source-manifesto',
        labelKey: 'navigation.open_source_manifesto',
        href: '/governance/open-source-manifesto',
        descriptionKey: 'navigation.open_source_manifesto_description',
        group: 'basic'
      },
      {
        key: 'code-of-conduct',
        labelKey: 'navigation.code_of_conduct',
        href: '/governance/code-of-conduct',
        descriptionKey: 'navigation.code_of_conduct_description',
        group: 'policies'
      },
      {
        key: 'annual-report',
        labelKey: 'navigation.annual_report_full',
        href: '/kysreports',
        descriptionKey: 'navigation.annual_report_description',
        group: 'policies',
        hot: true
      }
    ]
  },
  {
    key: 'community-development',
    labelKey: 'navigation.community_development',
    children: [
      {
        key: 'partners',
        labelKey: 'navigation.partners',
        href: '/partners',
        descriptionKey: 'navigation.partners_description',
        group: 'recognition'
      },
      {
        key: 'members',
        labelKey: 'navigation.governance.formal_members',
        href: '/department/members',
        descriptionKey: 'navigation.formal_members_description',
        group: 'recognition'
      },
      {
        key: 'star',
        labelKey: 'navigation.honors.open_source_star',
        href: '/community/star',
        descriptionKey: 'navigation.open_source_star_description',
        group: 'recognition'
      },
      {
        key: 'volunteers',
        labelKey: 'navigation.honors.annual_volunteer',
        href: '/community/volunteer',
        descriptionKey: 'navigation.annual_volunteer_description',
        group: 'recognition'
      },
      {
        key: 'coscon-star',
        labelKey: 'navigation.honors.coscon_star',
        href: '/community/coscon',
        descriptionKey: 'navigation.coscon_star_description',
        group: 'cooperation'
      },
      {
        key: 'cooperation-star',
        labelKey: 'navigation.honors.community_cooperation_star',
        href: '/community/cooperation',
        descriptionKey: 'navigation.community_cooperation_star_description',
        group: 'cooperation'
      },
      {
        key: 'kcc',
        labelKey: 'navigation.governance.kcc',
        href: '/community',
        descriptionKey: 'navigation.kcc_description',
        group: 'cooperation'
      },
      {
        key: 'china-oss-report',
        labelKey: 'navigation.knowledge.china_open_source_annual_report',
        href: '/osreports',
        descriptionKey: 'navigation.china_oss_report_description',
        group: 'reports',
        hot: true
      },
      {
        key: 'china-oss-pioneer',
        labelKey: 'navigation.honors.china_open_source_pioneer',
        href: '/community/pioneer',
        descriptionKey: 'navigation.china_oss_pioneer_description',
        group: 'reports',
        hot: true
      },
      {
        key: 'china-oss-power',
        labelKey: 'navigation.honors.china_open_source_power_list',
        href: 'https://opensource.win/',
        descriptionKey: 'navigation.china_oss_power_description',
        group: 'reports',
        target: '_blank'
      }
    ]
  },
  {
    key: 'events',
    labelKey: 'navigation.activities.title',
    children: [
      {
        key: 'coscon',
        labelKey: 'navigation.china_open_source_conference',
        href: '/events/coscon',
        descriptionKey: 'navigation.china_open_source_conference_description',
        group: 'annual',
        hot: true
      },
      {
        key: 'cooperation-activities',
        labelKey: 'navigation.cooperation_activities',
        href: '/events',
        descriptionKey: 'navigation.cooperation_activities_description',
        group: 'annual'
      },
      {
        key: 'calendar',
        labelKey: 'navigation.activities.activity_calendar',
        href: '/events/calendar',
        descriptionKey: 'navigation.activity_calendar_description',
        group: 'calendar'
      }
    ]
  },
  {
    key: 'articles-media',
    labelKey: 'navigation.blogs_announcements',
    children: [
      {
        key: 'articles',
        labelKey: 'navigation.blogs',
        href: '/blogs',
        descriptionKey: 'navigation.blogs_description',
        group: 'content'
      },
      {
        key: 'notice',
        labelKey: 'navigation.announcements',
        href: '/announcement',
        descriptionKey: 'navigation.announcements_description',
        group: 'brand'
      }
    ]
  }
]