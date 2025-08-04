# 🚀 创建 GitHub 仓库和部署指南

由于 `https://github.com/kaiyuanshe/website` 仓库还不存在，你需要按照以下步骤创建仓库并配置部署。

## 📝 前提条件

1. **GitHub 账号**: 确保你有 `kaiyuanshe` 组织的管理员权限
2. **项目代码**: 当前 Docusaurus 项目已完成开发

## 🏗️ 第一步: 创建 GitHub 仓库

### 方法1: 在 GitHub 网页创建

1. **登录 GitHub** 并切换到 `kaiyuanshe` 组织
2. **创建新仓库**:
   - 前往 https://github.com/orgs/kaiyuanshe/repositories
   - 点击 "New repository"
   - Repository name: `website`
   - Description: `开源社官网 - KAIYUANSHE Official Website`
   - Visibility: `Public` (推荐)
   - ✅ Add a README file
   - ✅ Add .gitignore (选择 `Node`)
   - License: 根据需要选择 (推荐 `MIT`)

3. **创建完成后** 你会得到仓库地址: `https://github.com/kaiyuanshe/website`

### 方法2: 使用命令行创建 (需要 GitHub CLI)

```bash
# 安装 GitHub CLI (如果还没有)
# https://cli.github.com/

# 登录 GitHub CLI
gh auth login

# 在 kaiyuanshe 组织下创建仓库
gh repo create kaiyuanshe/website --public --description "开源社官网 - KAIYUANSHE Official Website"
```

## 📤 第二步: 推送代码到 GitHub

### 如果使用方法1创建的仓库 (已有初始文件)

```bash
# 1. 克隆新创建的仓库
git clone https://github.com/kaiyuanshe/website.git temp-website
cd temp-website

# 2. 复制当前项目文件到仓库目录 (保留 .git 目录)
cp -r /path/to/current/project/* . 
cp -r /path/to/current/project/.github .
cp /path/to/current/project/.gitignore .

# 3. 添加并提交所有文件
git add .
git commit -m "feat: 初始化开源社官网 - Docusaurus 重构版"

# 4. 推送到 GitHub
git push origin main
```

### 如果使用方法2创建的仓库 (空仓库)

```bash
# 在当前项目目录下
# 1. 初始化 git 仓库 (如果还没有)
git init

# 2. 添加远程仓库
git remote add origin https://github.com/kaiyuanshe/website.git

# 3. 添加所有文件
git add .
git commit -m "feat: 初始化开源社官网 - Docusaurus 重构版"

# 4. 推送到 GitHub
git branch -M main
git push -u origin main
```

## ⚙️ 第三步: 配置 GitHub Pages

### 启用 GitHub Pages

1. **前往仓库设置**:
   - 访问 https://github.com/kaiyuanshe/website
   - 点击 `Settings` 选项卡

2. **配置 Pages**:
   - 在左侧边栏找到 `Pages`
   - Source 选择 `GitHub Actions`
   - 保存设置

### 配置仓库权限

1. **Actions 权限**:
   - Settings → Actions → General
   - Workflow permissions: 选择 `Read and write permissions`
   - ✅ Allow GitHub Actions to create and approve pull requests

2. **Pages 权限**:
   - Settings → Environments → github-pages (如果存在)
   - 确认部署权限正确设置

## 🎯 第四步: 配置域名 (可选)

### 使用自定义域名 `kaiyuanshe.cn`

当前配置已设置为使用自定义域名。如果要启用:

1. **DNS 配置**:
   ```
   类型: CNAME
   名称: @ (或 www)
   值: kaiyuanshe.github.io
   ```

2. **GitHub Pages 设置**:
   - Settings → Pages → Custom domain
   - 输入: `kaiyuanshe.cn`
   - ✅ Enforce HTTPS

### 使用 GitHub 默认域名

如果暂时使用 `kaiyuanshe.github.io/website/`:

更新 `docusaurus.config.ts`:
```typescript
url: 'https://kaiyuanshe.github.io',
baseUrl: '/website/',
```

删除 `static/CNAME` 文件:
```bash
rm static/CNAME
```

## 🚀 第五步: 触发首次部署

推送代码后，GitHub Actions 会自动触发部署:

1. **检查部署状态**:
   - 前往 https://github.com/kaiyuanshe/website/actions
   - 查看 "Deploy to GitHub Pages" 工作流

2. **访问网站**:
   - 自定义域名: https://kaiyuanshe.cn
   - GitHub 域名: https://kaiyuanshe.github.io/website/

## 🛠️ 故障排查

### 部署失败
```bash
# 本地测试构建
npm run build

# 检查是否有语法错误
npm run start
```

### 权限问题
- 确保你有 `kaiyuanshe` 组织的 admin 权限
- 检查 Actions 和 Pages 权限设置

### 域名解析问题
- 检查 DNS 配置是否正确
- 等待 DNS 传播 (可能需要几小时)

## 📋 部署清单

完成以下检查项:

- [ ] ✅ 创建 `kaiyuanshe/website` 仓库
- [ ] ✅ 推送代码到 GitHub
- [ ] ✅ 启用 GitHub Pages (Source: GitHub Actions)
- [ ] ✅ 配置仓库权限
- [ ] ✅ 首次部署成功
- [ ] ✅ 网站可正常访问
- [ ] ✅ 自定义域名配置 (如需要)
- [ ] ✅ HTTPS 证书生效 (如使用自定义域名)

## 🎉 完成后

一旦完成设置，你就可以:

- 📝 通过推送代码到 `main` 分支自动部署
- 📊 在 Actions 页面监控部署状态  
- 🌐 通过 https://kaiyuanshe.cn 访问网站
- 📱 享受完全响应式的现代化官网

---

如果遇到问题，请参考 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取更多详细信息。