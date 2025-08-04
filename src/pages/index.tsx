import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ActivityMap from '@site/src/components/ActivityMap';

import styles from './index.module.css';

// Vision, Mission, Principles component
function VisionMissionPrinciples() {
  return (
    <section className="vision-mission-principles">
      <div className="container">
        <div className="vmp-grid">
          <div className="vmp-card">
            <h3>Our Vision</h3>
            <ul>
              <li>Contribute to and promote open source as a new way of life to the world</li>
            </ul>
          </div>
          <div className="vmp-card">
            <h3>Our Mission</h3>
            <ul>
              <li>Open Source Governance</li>
              <li>Global Bridging</li>
              <li>Community Development</li>
              <li>Project Incubation</li>
            </ul>
          </div>
          <div className="vmp-card">
            <h3>Our Principles</h3>
            <ul>
              <li>Contribution</li>
              <li>Consensus</li>
              <li>Collegiality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects showcase component
function ProjectsShowcase() {
  const projects = [
    {
      title: '新冠援助平台',
      description: '新冠援助平台项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=COVID',
      link: 'https://wuhan2020.kaiyuanshe.cn/#'
    },
    {
      title: '开源社官网',
      description: '开源社官网项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=WEB',
      link: 'https://kaiyuanshe.cn/'
    },
    {
      title: 'OSS.Chat',
      description: 'OSS.Chat 项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=CHAT',
      link: 'https://github.com/kaiyuanshe/osschat'
    },
    {
      title: '中国开源地图',
      description: '中国开源地图项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=MAP',
      link: 'https://kaiyuanshe.cn/organization'
    },
    {
      title: 'KToken',
      description: 'KToken 项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=TOKEN',
      link: 'https://github.com/kaiyuanshe/KToken'
    },
    {
      title: '小源机器人',
      description: '小源机器人项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=BOT',
      link: 'https://github.com/kaiyuanshe/xiaoyuan'
    },
    {
      title: '中国开源年度报告',
      description: '中国开源年度报告项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=REPORT',
      link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd'
    },
    {
      title: '开放黑客松',
      description: '开放黑客松项目组',
      image: 'https://placehold.co/64x64/1890ff/ffffff?text=HACK',
      link: 'https://hackathon.kaiyuanshe.cn/'
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Latest Activities component
function LatestActivities() {
  const activities = [
    {
      title: '中国开源年会 2024',
      location: '北京 中关村国家自主创新示范区-会议中心，北京市海淀区新建宫门路2号',
      image: 'https://placehold.co/600x200/1890ff/ffffff?text=COSCon+2024',
      link: 'https://kaiyuanshe.cn/activity/COSCon-2024'
    },
    {
      title: 'COSCUP 2024 大陆讲师团',
      location: '臺北市 台湾科技大学，台湾省台湾省台湾省',
      image: 'https://placehold.co/600x200/1890ff/ffffff?text=COSCUP+2024',
      link: 'https://kaiyuanshe.cn/activity/COSCUP-2024'
    },
    {
      title: '2023 第八届中国开源年会',
      location: '成都 菁蓉汇，四川省成都市武侯区天府五街200号',
      image: 'https://placehold.co/600x200/1890ff/ffffff?text=COSCon+2023',
      link: 'https://kaiyuanshe.cn/activity/coscon-2023'
    }
  ];

  return (
    <div>
      <h3 className="section-title">Latest Activity</h3>
      {activities.map((activity, index) => (
        <div key={index} className="activity-card">
          <img src={activity.image} alt={activity.title} />
          <div className="content">
            <h3>
              <a href={activity.link} target="_blank" rel="noopener noreferrer">
                {activity.title}
              </a>
            </h3>
            <div className="activity-location">{activity.location}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Latest News component
function LatestNews() {
  const news = [
    {
      title: '2024 开源社年度评选',
      author: "COSCon'24 组委会",
      image: 'https://placehold.co/600x200/1890ff/ffffff?text=Awards+2024',
      link: 'https://kaiyuanshe.cn/article/2024_kaiyuanshe_annual_awards'
    },
    {
      title: "COSCon'24媒体和社区合作伙伴全亮相，感谢广大社区的支持!",
      author: "COSCon'24 组委会",
      image: 'https://placehold.co/600x200/1890ff/ffffff?text=Partners+2024',
      link: 'https://kaiyuanshe.cn/article/COSCon_24_media_and_community_partners%20_all_appeared'
    },
    {
      title: '论坛介绍 | 开源硬件论坛',
      author: "COSCon'24 组委会",
      image: 'https://placehold.co/600x200/1890ff/ffffff?text=Hardware+Forum',
      link: 'https://kaiyuanshe.cn/article/coscon24_open_source_hardware%20_forum'
    }
  ];

  return (
    <div>
      <h3 className="section-title">Latest News</h3>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
        KAIYUANSHE - The Home of Open-Sourcers
      </p>
      {news.map((newsItem, index) => (
        <div key={index} className="news-card">
          <img src={newsItem.image} alt={newsItem.title} />
          <div className="content">
            <h3>
              <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                {newsItem.title}
              </a>
            </h3>
            <div className="news-author">{newsItem.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
}



// Homepage Header
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/projects">
            探索我们的项目
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/about"
            style={{ marginLeft: '1rem' }}>
            了解更多
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎访问${siteConfig.title}`}
      description="开源社 - 致力于在中国推广开源理念、建设开源社区、推动开源项目发展">
      <HomepageHeader />
      <main>
        <VisionMissionPrinciples />
        <ProjectsShowcase />
        <section className="activities-news-section">
          <div className="container">
            <div className="activities-news-grid">
              <LatestActivities />
              <LatestNews />
            </div>
          </div>
        </section>
        <ActivityMap />
      </main>
    </Layout>
  );
}