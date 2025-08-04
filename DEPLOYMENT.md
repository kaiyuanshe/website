# 🚀 GitHub Pages 部署指南

本文档指导如何将开源社官网部署到 GitHub Pages。

## 📋 前置条件

1. **GitHub 仓库**: 项目已推送到 GitHub 仓库
2. **GitHub Pages**: 仓库已启用 GitHub Pages 功能
3. **权限设置**: 仓库具有 Pages 和 Actions 权限

## ⚙️ 部署设置

### 1. 启用 GitHub Pages

1. 前往你的 GitHub 仓库
2. 点击 **Settings** 选项卡
3. 在左侧边栏找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**

### 2. 配置仓库权限

在仓库设置中，确保以下权限已启用：

1. **Actions** → **General**:
   - ✅ 允许所有操作和可重用工作流
   
2. **Actions** → **General** → **Workflow permissions**:
   - ✅ 读取和写入权限
   - ✅ 允许 GitHub Actions 创建和批准拉取请求

## 🔄 自动部署

### 默认自动部署
项目已配置自动部署工作流 (`.github/workflows/deploy.yml`)：

- **触发条件**: 推送到 `main` 或 `master` 分支
- **部署流程**: 自动构建 → 部署到 GitHub Pages
- **访问地址**: `https://<username>.github.io/<repository-name>/`

### 手动部署 
如需手动触发部署：

1. 前往仓库的 **Actions** 选项卡
2. 点击 **Manual Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow** 按钮
4. 选择部署环境后点击 **Run workflow**

## 🌐 域名配置

### 使用自定义域名

1. 在仓库根目录创建 `static/CNAME` 文件：
   ```
   kaiyuanshe.cn
   ```

2. 更新 `docusaurus.config.ts` 中的 URL 配置：
   ```typescript
   const config: Config = {
     url: 'https://kaiyuanshe.cn', // 你的域名
     baseUrl: '/',
   };
   ```

3. 在域名提供商处配置 DNS：
   ```
   类型: CNAME
   名称: www (或 @)
   值: <username>.github.io
   ```

### 使用 GitHub 提供的域名

如果使用默认的 `github.io` 域名：

1. 更新 `docusaurus.config.ts`：
   ```typescript
   const config: Config = {
     url: 'https://<username>.github.io',
     baseUrl: '/<repository-name>/',
   };
   ```

## 📁 部署文件结构

部署后的文件结构：
```
GitHub Pages
├── index.html                 # 首页
├── projects/index.html         # 项目页面
├── activities/index.html       # 活动页面  
├── about/index.html           # 关于页面
├── blog/                      # 博客文章
├── assets/                    # 静态资源
│   ├── css/
│   ├── js/
│   └── images/
└── sitemap.xml               # 站点地图
```

## 🔍 部署状态检查

### 检查部署状态
1. 前往仓库 **Actions** 选项卡
2. 查看最新的工作流运行状态
3. 点击具体的工作流查看详细日志

### 常见部署状态
- ✅ **成功**: 网站已成功部署
- ❌ **失败**: 部署过程中出现错误  
- 🟡 **进行中**: 部署正在进行

## 🐛 常见问题排查

### 1. 部署失败
```bash
# 检查构建是否成功
npm run build

# 检查是否有语法错误
npm run start
```

### 2. 页面 404 错误
- 检查 `docusaurus.config.ts` 中的 `baseUrl` 配置
- 确认页面文件路径正确

### 3. 静态资源加载失败
- 确认 `url` 和 `baseUrl` 配置正确
- 检查静态文件是否在 `static/` 目录下

### 4. 地图不显示
- 确认网络可以访问 Leaflet CDN
- 检查浏览器控制台是否有 JavaScript 错误

## 📝 部署日志示例

成功的部署日志应包含：
```
✓ [SUCCESS] Generated static files in "build".
✓ Upload artifact
✓ Deploy to GitHub Pages
✓ Live URL: https://<username>.github.io/<repo>/
```

## 🚨 安全注意事项

1. **敏感信息**: 不要在代码中包含 API 密钥或敏感信息
2. **权限控制**: 定期检查仓库权限设置
3. **依赖更新**: 保持依赖包的最新版本

## 📞 获取帮助

如果遇到部署问题：

1. 查看 [GitHub Pages 官方文档](https://docs.github.com/pages)
2. 查看 [Docusaurus 部署文档](https://docusaurus.io/docs/deployment)
3. 在仓库中创建 Issue 报告问题
4. 联系开源社技术团队

---

**部署成功后，你的开源社官网将在几分钟内生效！** 🎉