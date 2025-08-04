# 🚀 GitHub Actions 工作流设置指南

## ❗ 权限问题说明

由于GitHub安全限制，通过Git推送创建`.github/workflows/`文件需要特殊的`workflows`权限。我们采用以下方法解决：

## 📋 方案：通过GitHub网页界面添加工作流

### 步骤1: 访问仓库
前往: https://github.com/kaiyuanshe/website

### 步骤2: 创建工作流目录和文件

1. 点击 **"Add file"** → **"Create new file"**
2. 在文件名输入框中输入: `.github/workflows/deploy.yml`
3. GitHub会自动创建所需的目录结构

### 步骤3: 添加自动部署工作流内容

将以下内容粘贴到文件编辑器中:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 步骤4: 创建手动部署工作流

再次点击 **"Add file"** → **"Create new file"**，文件名: `.github/workflows/deploy-manual.yml`

```yaml
name: Manual Deploy

on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Deployment environment'
        required: true
        default: 'production'
        type: choice
        options:
          - production
          - staging

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 步骤5: 启用GitHub Pages

1. 前往仓库 **Settings** → **Pages**
2. **Source** 选择 **"GitHub Actions"**
3. 点击 **Save**

### 步骤6: 触发首次部署

提交以上文件后，GitHub Actions会自动开始构建和部署流程。

## 🔧 本地同步工作流文件

如果您想在本地也保存这些工作流文件，可以执行：

```bash
git pull origin master
```

这会将GitHub上创建的工作流文件同步到本地。

## 📊 部署状态监控

- 前往仓库的 **Actions** 标签查看部署状态
- 部署完成后，网站将在以下地址可用：
  - 默认地址: https://kaiyuanshe.github.io/website/
  - 自定义域名: https://kaiyuanshe.cn (如已配置CNAME)

## ⚡ 快速部署检查清单

- [ ] ✅ 代码已推送到GitHub
- [ ] 🔧 通过网页界面添加了deploy.yml工作流
- [ ] 🔧 通过网页界面添加了deploy-manual.yml工作流  
- [ ] ⚙️ 在Settings → Pages中启用了GitHub Actions部署
- [ ] 🚀 检查Actions标签页确认部署成功
- [ ] 🌐 访问部署地址验证网站功能

## 🎯 下一步

一旦工作流文件设置完成，您的开源社官网将自动部署，任何对master分支的推送都会触发自动更新！