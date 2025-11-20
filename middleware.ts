import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

/**
 * 路由守卫中间件
 * 检查 /new 和 /edit 路径是否具有 event:write 权限
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 调试日志
  console.log('Middleware triggered for path:', pathname);
  
  // 检查是否是需要权限检查的路径
  const needsPermissionCheck = pathname.includes('/new') || pathname.includes('/edit');
  
  console.log('Needs permission check:', needsPermissionCheck);
  
  if (!needsPermissionCheck) {
    return NextResponse.next();
  }

  try {
    // 获取用户的 JWT token
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    });

    // 如果没有登录，重定向到登录页面
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // 检查是否有 event:write 权限
    const permissions = token.permissions as string[] || [];
    const hasEventWritePermission = permissions.includes('event:write');

    if (!hasEventWritePermission) {
      // 如果没有权限，返回 403 状态码或重定向到无权限页面
      const noPermissionUrl = new URL('/403', request.url);
      return NextResponse.redirect(noPermissionUrl);
    }

    // 有权限，继续请求
    return NextResponse.next();
    
  } catch (error) {
    console.error('Middleware error:', error);
    // 发生错误时重定向到登录页面
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
}

// 配置中间件匹配的路径
export const config = {
  matcher: [
    // 匹配所有页面路径，但排除API、静态文件等
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};