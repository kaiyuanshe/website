@echo off
echo 🚀 开始部署开源社官网到 GitHub Pages...

REM 检查是否在项目根目录
if not exist package.json (
    echo ❌ 错误: 请在项目根目录执行此脚本
    pause
    exit /b 1
)

REM 检查 Git 状态
for /f %%i in ('git status --porcelain') do (
    echo ⚠️  警告: 存在未提交的更改
    set /p continue="是否继续部署? (y/N): "
    if /i not "!continue!"=="y" (
        echo ❌ 部署已取消
        pause
        exit /b 1
    )
)

REM 获取当前分支
for /f %%i in ('git branch --show-current') do set current_branch=%%i

if not "%current_branch%"=="main" if not "%current_branch%"=="master" (
    echo ⚠️  警告: 当前不在主分支 (当前: %current_branch%)
    set /p continue="是否继续部署? (y/N): "
    if /i not "!continue!"=="y" (
        echo ❌ 部署已取消
        pause
        exit /b 1
    )
)

REM 安装依赖
echo 📦 安装依赖...
call npm ci
if errorlevel 1 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

REM 运行构建
echo 🔨 构建项目...
call npm run build
if errorlevel 1 (
    echo ❌ 构建失败
    pause
    exit /b 1
)

REM 检查构建是否成功
if not exist build (
    echo ❌ 错误: 构建失败，未找到 build 目录
    pause
    exit /b 1
)

echo ✅ 构建完成!

REM 推送到 GitHub
echo 🚀 推送代码到 GitHub...
git add .

REM 生成时间戳
for /f "tokens=1-4 delims=/ " %%i in ("%date%") do (
    for /f "tokens=1-2 delims=: " %%m in ("%time%") do (
        set timestamp=%%l-%%k-%%j %%m:%%n
    )
)

git commit -m "Deploy: %timestamp%" 2>nul || echo 没有新的更改需要提交

git push origin %current_branch%
if errorlevel 1 (
    echo ❌ 推送失败
    pause
    exit /b 1
)

echo 🎉 代码已推送到 GitHub!
echo 💡 GitHub Actions 将自动构建和部署网站
echo 📍 请访问仓库的 Actions 页面查看部署状态
echo 🌐 部署完成后可通过以下地址访问:

REM 读取 CNAME 文件
if exist static\CNAME (
    set /p domain=<static\CNAME
    echo    https://!domain!
) else (
    echo    https://^<username^>.github.io/^<repository-name^>/
)

echo.
echo ✨ 部署脚本执行完成!
pause