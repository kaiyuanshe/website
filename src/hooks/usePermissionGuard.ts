import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface UsePermissionGuardResult {
  isLoading: boolean;
  hasPermission: boolean;
  isAuthenticated: boolean;
}

/**
 * 权限守卫 Hook
 * 检查用户是否有特定权限，如果没有权限或未登录则重定向
 */
export function usePermissionGuard(
  requiredPermission: string,
  redirectTo: string = '/login'
): UsePermissionGuardResult {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      return; // 还在加载中，等待
    }

    const checkPermission = async () => {
      console.log('🔍 Checking permission:', requiredPermission);
      console.log('📝 Session:', session);
      
      // 如果未登录，重定向到登录页
      if (!session) {
        console.log('❌ No session found, redirecting to login');
        const callbackUrl = encodeURIComponent(router.asPath);
        await router.replace(`${redirectTo}?callbackUrl=${callbackUrl}`);
        return;
      }

      // 检查权限
      const permissions = (session.user as any)?.permissions || [];
      const hasRequiredPermission = permissions.includes(requiredPermission);
      
      console.log('👤 User permissions:', permissions);
      console.log('✅ Has required permission:', hasRequiredPermission);

      if (!hasRequiredPermission) {
        console.log('❌ Access denied - insufficient permissions');
        // 可以重定向到无权限页面或首页
        await router.replace('/403'); 
        return;
      }

      setIsChecking(false);
    };

    checkPermission();
  }, [session, status, router, requiredPermission, redirectTo]);

  return {
    isLoading: status === 'loading' || isChecking,
    hasPermission: !!session && 
      ((session.user as any)?.permissions || []).includes(requiredPermission),
    isAuthenticated: !!session
  };
}