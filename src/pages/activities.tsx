import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Activities(): ReactNode {
  const activities = [
    {
      title: '中国开源年会 2024',
      description: '一年一度的中国开源界盛会，聚集来自全球的开源项目维护者、贡献者和爱好者',
      date: '2024年10月',
      location: '北京 中关村国家自主创新示范区-会议中心',
      image: 'https://placehold.co/400x200/1890ff/ffffff?text=COSCon+2024',
      link: 'https://kaiyuanshe.cn/activity/COSCon-2024'
    },
    {
      title: 'COSCUP 2024 大陆讲师团',
      description: '参与台湾开源人年会，增进两岸开源社群交流',
      date: '2024年8月',
      location: '臺北市 台湾科技大学',
      image: 'https://placehold.co/400x200/1890ff/ffffff?text=COSCUP+2024',
      link: 'https://kaiyuanshe.cn/activity/COSCUP-2024'
    },
    {
      title: '2023 第八届中国开源年会',
      description: '以"开源雨林，生态共荣"为主题的年度开源技术盛会',
      date: '2023年10月',
      location: '成都 菁蓉汇',
      image: 'https://placehold.co/400x200/1890ff/ffffff?text=COSCon+2023',
      link: 'https://kaiyuanshe.cn/activity/coscon-2023'
    }
  ];

  return (
    <Layout
      title="活动"
      description="开源社活动展示">
      <div className="container margin-vert--lg">
        <Heading as="h1">我们的活动</Heading>
        <p>开源社定期举办各类活动，推动开源理念传播和社区建设：</p>
        
        <div className="row">
          {activities.map((activity, index) => (
            <div key={index} className="col col--12 margin-bottom--lg">
              <div className="card">
                <div className="row">
                  <div className="col col--4">
                    <div className="card__image">
                      <img src={activity.image} alt={activity.title} />
                    </div>
                  </div>
                  <div className="col col--8">
                    <div className="card__body">
                      <h3>{activity.title}</h3>
                      <p>{activity.description}</p>
                      <div>
                        <p><strong>时间:</strong> {activity.date}</p>
                        <p><strong>地点:</strong> {activity.location}</p>
                      </div>
                    </div>
                    <div className="card__footer">
                      <a 
                        href={activity.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="button button--primary"
                      >
                        了解更多
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="margin-top--xl">
          <h2>活动地图</h2>
          <p>我们在全国各地都有活动足迹，点击地图了解各地活动情况。</p>
          <div style={{ 
            height: '300px', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.1rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p>活动分布统计</p>
              <p>成都(4) | 北京(3) | 臺北市(3) | 上海(2) | 深圳(1)</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}