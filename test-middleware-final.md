# 中间件测试说明

## 测试方法

1. **启动开发服务器**
   ```bash
   npm run dev
   ```

2. **测试路径保护**
   访问以下路径，应该会被中间件拦截：
   - `/events/new`
   - `/blogs/new` 
   - `/osreports/new`
   - `/kysreports/new`
   - `/events/1/edit`
   - `/blogs/1/edit`
   - `/osreports/1/edit`
   - `/kysreports/1/edit`

3. **检查控制台日志**
   在浏览器开发者工具或服务器控制台中应该能看到：
   ```
   Middleware triggered for path: /events/new
   Needs permission check: true
   ```

4. **验证重定向行为**
   - 未登录用户：应该重定向到 `/login?callbackUrl=/events/new`
   - 已登录但无权限用户：应该重定向到 `/403`
   - 有 `event:write` 权限的用户：可以正常访问

## 排除的路径
以下路径应该不会被中间件处理：
- `/api/*` - API路由
- `/_next/*` - Next.js 内部文件
- `/favicon.ico` - 网站图标

## 问题排查

如果中间件没有工作：
1. 检查是否正确重启了开发服务器
2. 确认 `NEXTAUTH_SECRET` 环境变量已设置
3. 查看服务器控制台是否有错误信息
4. 检查浏览器网络面板的请求状态

## 权限说明
中间件检查用户是否具有 `管理员` 权限（根据403页面显示的信息）。