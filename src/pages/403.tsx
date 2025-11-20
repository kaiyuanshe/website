import React from 'react';
import { useRouter } from 'next/router';
import { LockKeyhole } from 'lucide-react';
import styles from '../styles/403.module.css';

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
    <div className={styles.container}>
      <div className={styles.errorCard}>
        <div className={styles.iconWrapper}>
          <LockKeyhole className={styles.icon} size={64} />
        </div>
        <h1 className={styles.errorCode}>403</h1>
        <h2 className={styles.title}>访问被拒绝</h2>
        <p className={styles.subtitle}>
          抱歉，您没有权限访问此页面。需要 管理员 权限才能创建或编辑内容。
        </p>
        <div className={styles.buttonGroup}>
          <button 
            className={styles.primaryButton} 
            onClick={handleGoHome}
          >
            返回首页
          </button>
          <button 
            className={styles.secondaryButton} 
            onClick={handleGoBack}
          >
            返回上一页
          </button>
        </div>
      </div>
    </div>
  );
}