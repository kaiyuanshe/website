import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ActivityMap from '@site/src/components/ActivityMap';

import styles from './index.module.css';

// Enhanced Hero Section with gmonad.cc style
function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={clsx('hero', styles.hero)}>
      <div className={clsx('hero__inner', styles.heroInner, isVisible && styles.heroVisible)}>
        <div className="hero__badge">
          🎆 中国首个开源公益组织
        </div>
        <Heading as="h1" className="hero__title">
          <span className="hero__title-primary">开源社</span>
          <br />
          <span className="hero__title-secondary">中国开发者的家</span>
        </Heading>
        <p className="hero__subtitle">
          加入我们，与开发者一起了解、参与、构建开源世界，
          推动中国开源事业的发展与繁荣
        </p>
        <div className={styles.heroActions}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            🎆 了解开源社
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/activities">
            📅 查看活动
          </Link>
        </div>
      </div>
    </section>
  );
}

// Vision, Mission, Principles Component with enhanced styling
function VisionMissionPrinciples() {
  return (
    <section className="section section--primary vision-mission-principles">
      <div className="container">
        <Heading as="h2" className="section-title">
          愿景、使命与原则
        </Heading>
        <div className="vmp-grid">
          <div className="vmp-card">
            <h3>🎆 愿景</h3>
            <ul>
              <li>成为中国最大的开源技术社区</li>
              <li>推动开源文化在中国的普及</li>
              <li>为中国开发者提供世界级的技术平台</li>
            </ul>
          </div>
          <div className="vmp-card">
            <h3>🎯 使命</h3>
            <ul>
              <li>连接全球开源项目与中国开发者</li>
              <li>提供优质的开源技术分享与学习平台</li>
              <li>建设开放、包容、共享的技术社区</li>
            </ul>
          </div>
          <div className="vmp-card">
            <h3>⚙️ 原则</h3>
            <ul>
              <li>开放透明：所有活动和决策公开透明</li>
              <li>平等包容：尊重不同背景的参与者</li>
              <li>共同成长：与社区一起学习和发展</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Projects Showcase with gmonad.cc style
function ProjectsShowcase() {
  const projects = [
    {
      name: '开源社官网',
      description: '开源社官方网站，提供最新的社区动态、活动信息和资源分享',
      imageUrl: 'https://placehold.co/64x64/6E54FF/white?text=OS',
      category: '平台',
      link: 'https://kaiyuanshe.cn/'
    },
    {
      name: 'OpenBuild',
      description: '一个围绕开源和 Web3 的全球开发者社区，为开发者提供学习和合作平台',
      imageUrl: 'https://placehold.co/64x64/6366F1/white?text=OB',
      category: '社区',
      link: 'https://openbuild.xyz/'
    },
    {
      name: '开源社投',
      description: '开源科技创业的投资促进和项目孵化平台',
      imageUrl: 'https://placehold.co/64x64/8b73ff/white?text=投',
      category: '投资',
      link: '#'
    },
    {
      name: 'COSCon',
      description: '中国开源年会，中国最大的开源技术大会',
      imageUrl: 'https://placehold.co/64x64/a293ff/white?text=CC',
      category: '会议',
      link: 'https://coscon.kaiyuanshe.cn/'
    },
    {
      name: '开源之夏',
      description: '面向高校学生的暑期开源活动，帮助学生走进开源世界',
      imageUrl: 'https://placehold.co/64x64/c4b5fd/white?text=夏',
      category: '教育',
      link: 'https://summer-ospp.ac.cn/'
    },
    {
      name: '开源指南',
      description: '为开源新手提供全面的开源入门指南和最佳实践',
      imageUrl: 'https://placehold.co/64x64/5b47d1/white?text=指',
      category: '指南',
      link: '#'
    },
    {
      name: 'Apache 中文社区',
      description: '中国 Apache 软件基金会的中文社区，推广 Apache 项目',
      imageUrl: 'https://placehold.co/64x64/4338ca/white?text=AP',
      category: '社区',
      link: 'https://apache.org/'
    },
    {
      name: '开源电子书',
      description: '整理和翻译各种开源相关的书籍和文档',
      imageUrl: 'https://placehold.co/64x64/3730a3/white?text=书',
      category: '文档',
      link: '#'
    }
  ];

  return (
    <section className="section section--secondary projects-section">
      <div className="container">
        <Heading as="h2" className="section-title">
          🚀 生态项目
        </Heading>
        <p className="text-center" style={{marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--ifm-color-content-secondary)', maxWidth: '600px', margin: '0 auto 3rem'}}>
          探索我们正在构建和维护的开源项目，与全球开发者一起创造更美好的技术世界
        </p>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.name} />
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Link className="button button--outline button--sm" to={project.link}>
                了解详情 →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center" style={{marginTop: '3rem'}}>
          <Link className="button button--primary button--lg" to="/projects">
            查看更多项目 →
          </Link>
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
      date: '2024年12月',
      location: '北京 中关村国家自主创新示范区',
      status: '进行中',
      image: 'https://placehold.co/400x200/6E54FF/ffffff?text=COSCon+2024',
      link: 'https://coscon.kaiyuanshe.cn/'
    },
    {
      title: '开源之夏 2024',
      date: '2024年7-9月',
      location: '线上',
      status: '已结束',
      image: 'https://placehold.co/400x200/6366F1/ffffff?text=开源之夏',
      link: 'https://summer-ospp.ac.cn/'
    },
    {
      title: 'COSCUP 2024 大陆讲师团',
      date: '2024年7月',
      location: '台北 台湾科技大学',
      status: '已结束',
      image: 'https://placehold.co/400x200/8b73ff/ffffff?text=COSCUP+2024',
      link: '#'
    }
  ];

  return (
    <section className="section section--primary">
      <div className="container">
        <Heading as="h2" className="section-title">
          📅 最新活动
        </Heading>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card card">
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
                <span className={`activity-status activity-status--${activity.status === '进行中' ? 'active' : 'ended'}`}>
                  {activity.status}
                </span>
              </div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <div className="activity-meta">
                  <span className="activity-date">📅 {activity.date}</span>
                  <span className="activity-location">📍 {activity.location}</span>
                </div>
                <Link className="button button--primary button--sm" to={activity.link}>
                  了解详情
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{marginTop: '3rem'}}>
          <Link className="button button--outline button--lg" to="/activities">
            查看所有活动 →
          </Link> 
        </div>
      </div>
    </section>
  );
}

// Latest News component
function LatestNews() {
  const news = [
    {
      title: '开源社成立十周年庆典圆满举办',
      excerpt: '2024年12月，开源社迎来了成立十周年的里程碑，举办了盛大的庆典活动...',
      date: '2024-12-15',
      author: '开源社',
      image: 'https://placehold.co/300x150/6E54FF/ffffff?text=十周年',
      link: '#'
    },
    {
      title: '中国开源年度报告 2024 正式发布',
      excerpt: '这份报告全面分析了中国开源生态的发展现状，展现了中国开源力量的崛起...',
      date: '2024-11-20',
      author: '开源年度报告项目组',
      image: 'https://placehold.co/300x150/6366F1/ffffff?text=2024报告',
      link: '#'
    },
    {
      title: 'OpenBuild 全球开发者大会成功举办',
      excerpt: '汇聚全球顶尖开发者，探讨开源技术的未来发展方向和创新应用...',
      date: '2024-10-25',
      author: 'OpenBuild',
      image: 'https://placehold.co/300x150/8b73ff/ffffff?text=OpenBuild',
      link: '#'
    }
  ];

  return (
    <section className="section section--secondary">
      <div className="container">
        <Heading as="h2" className="section-title">
          📰 最新资讯
        </Heading>
        <div className="news-grid">
          {news.map((item, index) => (
            <article key={index} className="news-card card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="news-meta">
                  <span className="news-author">✍️ {item.author}</span>
                  <span className="news-date">📅 {item.date}</span>
                </div>
                <Link className="button button--outline button--sm" to={item.link}>
                  阅读全文
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center" style={{marginTop: '3rem'}}>
          <Link className="button button--primary button--lg" to="/blog">
            查看更多资讯 →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Activity Map Section
function ActivityMapSection() {
  return (
    <section className="section section--primary">
      <div className="container">
        <Heading as="h2" className="section-title">
          🗺️ 活动地图
        </Heading>
        <p className="text-center" style={{marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--ifm-color-content-secondary)'}}>
          探索全国各地的开源社区活动分布
        </p>
        <div className="activity-map-container">
          <ActivityMap />
        </div>
      </div>
    </section>
  );
}

// Main Home component
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="中国开发者的家 - 开源社官网">
      <main className="main-wrapper">
        <Hero />
        <VisionMissionPrinciples />
        <ProjectsShowcase />
        <LatestActivities />
        <LatestNews />
        <ActivityMapSection />
      </main>
    </Layout>
  );
}