import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Projects(): ReactNode {
  const projects = [
    {
      title: '新冠援助平台',
      description: '新冠援助平台项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=COVID',
      link: 'https://wuhan2020.kaiyuanshe.cn/#'
    },
    {
      title: '开源社官网',
      description: '开源社官网项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=WEB',
      link: 'https://kaiyuanshe.cn/'
    },
    {
      title: 'OSS.Chat',
      description: 'OSS.Chat 项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=CHAT',
      link: 'https://github.com/kaiyuanshe/osschat'
    },
    {
      title: '中国开源地图',
      description: '中国开源地图项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=MAP',
      link: 'https://kaiyuanshe.cn/organization'
    },
    {
      title: 'KToken',
      description: 'KToken 项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=TOKEN',
      link: 'https://github.com/kaiyuanshe/KToken'
    },
    {
      title: '小源机器人',
      description: '小源机器人项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=BOT',
      link: 'https://github.com/kaiyuanshe/xiaoyuan'
    },
    {
      title: '中国开源年度报告',
      description: '中国开源年度报告项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=REPORT',
      link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd'
    },
    {
      title: '开放黑客松',
      description: '开放黑客松项目组',
      image: 'https://placehold.co/200x150/1890ff/ffffff?text=HACK',
      link: 'https://hackathon.kaiyuanshe.cn/'
    }
  ];

  return (
    <Layout
      title="项目"
      description="开源社项目展示">
      <div className="container margin-vert--lg">
        <Heading as="h1">我们的项目</Heading>
        <p>开源社致力于推动各类开源项目的发展，以下是我们主要的项目：</p>
        
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="card__footer">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button button--primary button--block"
                  >
                    访问项目
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}