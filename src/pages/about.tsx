import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): ReactNode {
  return (
    <Layout
      title="关于我们"
      description="关于开源社 - KAIYUANSHE">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">关于开源社</Heading>
            
            <div className="margin-bottom--lg">
              <h2>我们的愿景 (Our Vision)</h2>
              <p className="text--large">
                Contribute to and promote open source as a new way of life to the world
              </p>
              <p>
                致力于推广开源作为一种新的生活方式，让开源理念在全世界得到传播和发展。
              </p>
            </div>
            
            <div className="margin-bottom--lg">
              <h2>我们的使命 (Our Mission)</h2>
              <ul>
                <li><strong>开源治理 (Open Source Governance):</strong> 推动建立健全的开源治理机制</li>
                <li><strong>全球桥梁 (Global Bridging):</strong> 搭建中外开源社区交流的桥梁</li>
                <li><strong>社区发展 (Community Development):</strong> 促进开源社区的健康发展</li>
                <li><strong>项目孵化 (Project Incubation):</strong> 扶持优秀开源项目成长</li>
              </ul>
            </div>
            
            <div className="margin-bottom--lg">
              <h2>我们的原则 (Our Principles)</h2>
              <ul>
                <li><strong>贡献 (Contribution):</strong> 鼓励每个人为开源做出贡献</li>
                <li><strong>共识 (Consensus):</strong> 通过协商达成社区共识</li>
                <li><strong>同事关系 (Collegiality):</strong> 建立平等友好的合作关系</li>
              </ul>
            </div>
            
            <div className="margin-bottom--lg">
              <h2>关于开源社</h2>
              <p>
                开源社（英文名：KAIYUANSHE）是由中国开源软件推进联盟（COPU）发起，联合国内外众多
                个人、高等院校、科研院所、企业、政府、社会团体、开源社区、开源基金会等共同创立的，
                致力于在中国推广开源理念、建设开源社区、推动开源项目发展的非营利组织。
              </p>
              
              <p>
                作为开源界的连接者，开源社不仅在国内推动开源发展，也积极参与国际开源社区建设，
                促进中外开源社区的交流合作。我们通过举办各类技术活动、开源项目孵化、社区治理研究等方式，
                为开源生态的繁荣发展贡献力量。
              </p>
              
              <h3>我们的活动</h3>
              <p>
                开源社每年举办中国开源年会（COSCon），这是中国开源界最具影响力的年度盛会之一。
                此外，我们还定期举办技术沙龙、社区聚会、开源项目路演等活动，
                为开源爱好者提供交流学习的平台。
              </p>
              
              <h3>我们的项目</h3>
              <p>
                开源社孵化和支持了多个开源项目，包括但不限于：
                新冠援助平台、OSS.Chat、中国开源地图、KToken、小源机器人等。
                这些项目不仅具有技术价值，更体现了开源精神的社会价值。
              </p>
              
              <h3>加入我们</h3>
              <p>
                如果你热爱开源，希望为开源事业贡献力量，欢迎加入开源社！
                我们欢迎来自各个领域的开源爱好者，无论你是开发者、设计师、项目经理，
                还是对开源感兴趣的学生或者企业，都可以在这里找到属于你的位置。
              </p>
              
              <div className="margin-top--lg text--center">
                <h3>联系我们</h3>
                <p>
                  <a href="https://github.com/kaiyuanshe" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {' | '}
                  <a href="mailto:contact@kaiyuanshe.cn">
                    邮箱联系
                  </a>
                </p>
                <p className="text--italic">
                  KAIYUANSHE - The Home of Open-Sourcers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}