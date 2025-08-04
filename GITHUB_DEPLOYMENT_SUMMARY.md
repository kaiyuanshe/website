# 🚀 GitHub Pages 部署快速指南

## 📋 已创建的文件

### GitHub Actions 工作流
- `.github/workflows/deploy.yml` - 自动部署工作流
- `.github/workflows/deploy-manual.yml` - 手动部署工作流

### 部署脚本
- `scripts/deploy-github-pages.sh` - Linux/Mac 部署脚本
- `scripts/deploy-github-pages.bat` - Windows 部署脚本

### GitHub 模板文件
- `.github/ISSUE_TEMPLATE/bug_report.md` - Bug 报告模板
- `.github/ISSUE_TEMPLATE/feature_request.md` - 功能请求模板
- `.github/pull_request_template.md` - PR 模板
- `.github/FUNDING.yml` - 赞助配置

### 配置文件
- `static/CNAME` - 自定义域名配置
- `DEPLOYMENT.md` - 详细部署文档

## ⚡ 快速部署步骤

### 第一次部署 (需要创建仓库)

如果 `https://github.com/kaiyuanshe/website` 还不存在：

1. **创建 GitHub 仓库**:
   - 前往 https://github.com/orgs/kaiyuanshe/repositories
   - 点击 "New repository"
   - Repository name: `website`
   - 设置为 Public
   - 选择初始化文件

2. **推送代码到 GitHub**:
```bash
# 如果仓库已有初始文件
git clone https://github.com/kaiyuanshe/website.git temp-website
cd temp-website
cp -r /path/to/current/project/* .
cp -r /path/to/current/project/.github .
git add .
git commit -m "feat: 初始化开源社官网 - Docusaurus 重构版"
git push origin main

# 如果是空仓库
git init
git remote add origin https://github.com/kaiyuanshe/website.git
git add .
git commit -m "feat: 初始化开源社官网 - Docusaurus 重构版"
git branch -M main
git push -u origin main
```

### 后续部署 (仓库已存在)

```bash
git add .
git commit -m "Update website"
git push origin main
```

### 启用 GitHub Pages
1. 前往仓库 `Settings` → `Pages`
2. Source 选择 `GitHub Actions`
3. 等待自动部署完成

### 自定义域名 (可选)
1. 修改 `static/CNAME` 文件
2. 更新 `docusaurus.config.ts` 中的 URL
3. 配置 DNS CNAME 记录

## 🔧 配置说明

### baseUrl 配置
```typescript
// 自定义域名
url: 'https://yourdomain.com',
baseUrl: '/',

// GitHub Pages 子路径
url: 'https://username.github.io', 
baseUrl: '/repository-name/',
```

## 📱 快速测试

部署成功后访问：
- 自定义域名: `https://yourdomain.com`
- GitHub 域名: `https://username.github.io/repository-name/`

## 🛠️ 故障排查

1. **检查 Actions 状态**: 仓库 → Actions 页面
2. **验证 Pages 设置**: Settings → Pages
3. **确认权限配置**: Settings → Actions → General

---

💡 **提示**: 首次部署可能需要几分钟时间，请耐心等待！