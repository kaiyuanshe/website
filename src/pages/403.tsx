import React from 'react';
import { useRouter } from 'next/router';
import { Button, Result } from 'antd';
import { LockKeyhole } from 'lucide-react';

/**
 * 403 无权限页面
 */
export default function UnauthorizedPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Result
        icon={<LockKeyhole className="text-red-500" size={64} />}
        status="403"
        title="403"
        subTitle="抱歉，您没有权限访问此页面。需要 管理员 权限才能创建或编辑内容。"
        extra={
          <div className="space-x-4">
            <Button type="primary" onClick={handleGoHome}>
              返回首页
            </Button>
            <Button onClick={handleGoBack}>
              返回上一页
            </Button>
          </div>
        }
      />
    </div>
  );
}