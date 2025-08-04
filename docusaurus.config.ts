import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '开源社',
  tagline: 'KAIYUANSHE - The Home of Open-Sourcers',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Custom metadata for the website
  customFields: {
    description: 'KAIYUANSHE - The Home of Open-Sourcers. 致力于在中国推广开源理念、建设开源社区、推动开源项目发展。',
  },

  // Set the production url of your site here
  url: 'https://kaiyuanshe.cn', // 生产环境域名
  // Set the /<baseUrl>/ pathname under which your site is served 
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // 如果使用自定义域名则为 '/'，如果使用 github.io 则改为 '/website/'

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaiyuanshe', // GitHub organization name
  projectName: 'website', // Repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kaiyuanshe/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kaiyuanshe/website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/kaiyuanshe-social-card.jpg',
    navbar: {
      title: '开源社',
      logo: {
        alt: '开源社 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: '首页',
          position: 'left',
        },
        {
          to: '/projects',
          label: '项目',
          position: 'left',
        },
        {
          to: '/activities',
          label: '活动',
          position: 'left',
        },
        {
          to: '/blog',
          label: '新闻',
          position: 'left',
        },
        {
          to: '/about',
          label: '关于我们',
          position: 'left',
        },
        {
          href: 'https://github.com/kaiyuanshe',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '组织',
          items: [
            {
              label: '关于开源社',
              to: '/about',
            },
            {
              label: '我们的项目',
              to: '/projects',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '微信群',
              href: '#',
            },
            {
              label: 'Telegram',
              href: '#',
            },
            {
              label: 'QQ群',
              href: '#',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '活动',
              to: '/activities',
            },
            {
              label: '新闻',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kaiyuanshe',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 开源社 (Kaiyuan Society). Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;