# 开源社官网 - Docusaurus 重构版

基于 Docusaurus 重构的开源社（KAIYUANSHE）官方网站，使用 React + TypeScript 构建。

## 🌟 特性

- 📱 **响应式设计**: 完美适配桌面、平板和手机设备
- 🗺️ **交互式地图**: 使用 Leaflet 展示全国各地活动分布
- 🌍 **中文本地化**: 完整的中文界面和内容支持
- ⚡ **高性能**: 基于 Docusaurus 的静态站点生成
- 🎨 **现代化设计**: 简洁美观的用户界面
- 🔧 **TypeScript**: 完整的类型安全支持

## 🏗️ 网站结构

### 主要页面
- **首页** (`/`): 展示愿景、使命、原则、项目、活动、新闻和地图
- **项目页面** (`/projects`): 展示开源社的8个主要项目
- **活动页面** (`/activities`): 展示最新活动和历史活动
- **关于我们** (`/about`): 详细介绍开源社的历史和理念
- **新闻博客** (`/blog`): 最新新闻和文章

### 核心功能模块

#### 1. 组织介绍 (Vision, Mission, Principles)
```typescript
// 展示开源社的愿景、使命和原则
- Our Vision: 推广开源作为新的生活方式
- Our Mission: 开源治理、全球桥梁、社区发展、项目孵化
- Our Principles: 贡献、共识、同事关系
```

#### 2. 项目展示 (8个主要项目)
```typescript
const projects = [
  '新冠援助平台', '开源社官网', 'OSS.Chat', '中国开源地图',
  'KToken', '小源机器人', '中国开源年度报告', '开放黑客松'
]
```

#### 3. 最新活动展示
- 中国开源年会 2024 (北京)
- COSCUP 2024 大陆讲师团 (台北)
- 2023 第八届中国开源年会 (成都)

#### 4. 最新新闻展示
- 2024 开源社年度评选
- COSCon'24媒体和社区合作伙伴
- 开源硬件论坛介绍

#### 5. 活动地图展示
基于 Leaflet 的交互式地图，展示全国各地活动分布：
- 成都(4个活动) | 北京(3个活动) | 台北(3个活动) | 上海(2个活动) | 深圳(1个活动)

## 🚀 技术栈

- **框架**: Docusaurus 3.x
- **语言**: TypeScript + React 18
- **样式**: CSS Modules + Custom CSS
- **地图**: Leaflet + React-Leaflet
- **字体**: Noto Sans SC (中文字体支持)
- **图标**: 使用占位符图片服务 (placehold.co)

## 🛠️ 开发环境搭建

### 前置要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发运行
```bash
npm start
```
访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
```

### 本地预览生产版本
```bash
npm run serve
```

## 📁 项目结构

```
├── src/
│   ├── components/           # 自定义组件
│   │   └── ActivityMap/      # 活动地图组件
│   ├── css/                  # 全局样式
│   │   └── custom.css        # 自定义样式和主题
│   └── pages/                # 页面组件
│       ├── index.tsx         # 首页
│       ├── projects.tsx      # 项目页面
│       ├── activities.tsx    # 活动页面
│       └── about.tsx         # 关于页面
├── static/                   # 静态资源
├── docs/                     # 文档内容
├── blog/                     # 博客文章
├── docusaurus.config.ts      # Docusaurus 配置
└── README.md
```

## 🎨 设计系统

### 色彩主题
```css
/* 主色调 */
--ifm-color-primary: #1890ff;         /* 开源社蓝 */
--ifm-color-primary-dark: #096dd9;
--ifm-color-primary-darker: #0050b3;

/* 字体 */
--ifm-font-family-base: 'Noto Sans SC', system-ui, ...;
```

### 响应式断点
- **桌面**: > 996px
- **平板**: 768px - 996px  
- **手机**: < 768px
- **小屏手机**: < 480px

## 🚀 部署指南

### ✅ 当前部署状态

🎉 **代码推送完成**: 所有网站文件已成功推送到 https://github.com/kaiyuanshe/website

### ⚠️ GitHub Actions 权限解决方案

由于GitHub安全限制，工作流文件需要通过网页界面手动添加：

**📖 详细设置指南**: 请查看 [`WORKFLOW_SETUP_GUIDE.md`](./WORKFLOW_SETUP_GUIDE.md)

**🚀 快速操作**:
1. 访问 https://github.com/kaiyuanshe/website
2. 通过"Add file"创建 `.github/workflows/deploy.yml`
3. 通过"Add file"创建 `.github/workflows/deploy-manual.yml`
4. 在 Settings → Pages 中启用"GitHub Actions"
5. 等待自动部署完成

**📍 部署地址**:
- 主域名: https://kaiyuanshe.cn (需配置CNAME)
- GitHub地址: https://kaiyuanshe.github.io/website/

### 🔄 后续更新流程

工作流设置完成后，任何代码更新都会自动部署：
```bash
git add .
git commit -m "更新网站内容"
git push origin master  # 自动触发重新部署
```

#### ⚙️ 自定义域名配置
1. 修改 `static/CNAME` 文件为你的域名
2. 更新 `docusaurus.config.ts` 中的 `url` 配置
3. 在域名提供商配置 CNAME 记录指向 `<username>.github.io`

详细部署文档请查看：[DEPLOYMENT.md](./DEPLOYMENT.md)

### 其他平台部署
构建后的 `build/` 目录也可以部署到：
- Netlify
- Vercel  
- 阿里云 OSS
- 腾讯云 COS

```bash
# 构建生产版本
npm run build
# build/ 目录包含所有静态文件
```

## 🔧 配置说明

### 环境配置文件
```yaml
# .environments.yaml
run_command: npm start
dependency_command: npm install  
compile_command: npm run build
```

### 主要配置项
- **语言设置**: 中文简体 (zh-Hans)
- **网站标题**: 开源社
- **标语**: KAIYUANSHE - The Home of Open-Sourcers
- **导航菜单**: 首页、项目、活动、新闻、关于我们

## 🐛 问题排查

### 常见问题

1. **地图不显示**
   ```bash
   # 检查 Leaflet 依赖是否正确安装
   npm list leaflet react-leaflet
   ```

2. **中文字体不显示**
   ```bash
   # 检查网络连接，确保能访问 Google Fonts
   # 或在 custom.css 中添加本地字体
   ```

3. **构建失败**
   ```bash
   # 检查是否有页面链接错误
   npm run build --verbose
   ```

## 📝 内容管理

### 添加新项目
编辑 `src/pages/index.tsx` 中的 `projects` 数组：
```typescript
const projects = [
  {
    title: '新项目名称',
    description: '项目描述',  
    image: '项目图标URL',
    link: '项目链接'
  }
]
```

### 添加新活动
编辑 `src/pages/index.tsx` 中的 `activities` 数组，或在 `src/pages/activities.tsx` 中添加。

### 更新地图数据
编辑 `src/components/ActivityMap/index.tsx` 中的 `activityLocations` 数组。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)  
5. 创建 Pull Request

## 📄 许可证

本项目基于开源协议发布，具体许可证信息请查看项目根目录。

## 📞 联系我们

- **官网**: https://kaiyuanshe.cn
- **GitHub**: https://github.com/kaiyuanshe
- **邮箱**: contact@kaiyuanshe.cn

---

**KAIYUANSHE - The Home of Open-Sourcers**

*致力于在中国推广开源理念、建设开源社区、推动开源项目发展的非营利组织*