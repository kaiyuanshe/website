#!/bin/bash

# 开源社官网 GitHub Pages 部署脚本
# 使用方法: ./scripts/deploy-github-pages.sh

set -e

echo "🚀 开始部署开源社官网到 GitHub Pages..."

# 检查是否在项目根目录
if [[ ! -f "package.json" ]]; then
    echo "❌ 错误: 请在项目根目录执行此脚本"
    exit 1
fi

# 检查是否有未提交的更改
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  警告: 存在未提交的更改"
    read -p "是否继续部署? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ 部署已取消"
        exit 1
    fi
fi

# 确保在主分支
current_branch=$(git branch --show-current)
if [[ "$current_branch" != "main" && "$current_branch" != "master" ]]; then
    echo "⚠️  警告: 当前不在主分支 (当前: $current_branch)"
    read -p "是否继续部署? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ 部署已取消"
        exit 1
    fi
fi

# 安装依赖
echo "📦 安装依赖..."
npm ci

# 运行构建
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [[ ! -d "build" ]]; then
    echo "❌ 错误: 构建失败，未找到 build 目录"
    exit 1
fi

echo "✅ 构建完成!"

# 推送到 GitHub 触发自动部署
echo "🚀 推送代码到 GitHub..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "没有新的更改需要提交"
git push origin $current_branch

echo "🎉 代码已推送到 GitHub!"
echo "💡 GitHub Actions 将自动构建和部署网站"
echo "📍 请访问仓库的 Actions 页面查看部署状态"
echo "🌐 部署完成后可通过以下地址访问:"

# 读取配置文件获取 URL
if [[ -f "static/CNAME" ]]; then
    domain=$(cat static/CNAME)
    echo "   https://$domain"
else
    echo "   https://<username>.github.io/<repository-name>/"
fi

echo ""
echo "✨ 部署脚本执行完成!"