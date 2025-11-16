/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import {
  Typography,
  App as AntdApp
} from 'antd'
import styles from './index.module.css'
import { useAuth } from '@/contexts/AuthContext'
import AvatarEdit from '@/components/settings/AvatarEdit'
import NicknameEdit from '@/components/settings/NicknameEdit'
import { updateUser } from '../api/user'
import { useSession } from 'next-auth/react'

const { Text } = Typography 

export default function DashboardPage() {
  const { message } = AntdApp.useApp()
  const { session } = useAuth()
  const { update } = useSession()


  const profileData = {
    name: session?.user?.username || '',
    email: session?.user?.email || '',
    avatar: session?.user?.avatar || ''
  }

  const handleAvatarSave = async (avatarUrl: string) => {
    try {
      const result = await updateUser(session?.user?.uid as unknown as number, {
        email: session?.user?.email ?? '',
        avatar: avatarUrl,
        github: session?.user?.github ?? '',
        username: session?.user?.username ?? ''
      })

      if (result.success) {
        message.success('头像更新成功')
        console.log('头像更新成功:', avatarUrl)

        // 刷新session，更新用户信息
        await update({
          ...session,
          user: {
            ...session?.user,
            avatar: avatarUrl
          }
        })
      } else {
        console.error('头像更新失败:', result.message)
        return Promise.reject(result.message)
      }
    } catch (error: any) {
      console.error('头像更新异常:', error)
    }
  }

  const handleNicknameSave = async (nickname: string) => {
    try {
      const result = await updateUser(session?.user?.uid as unknown as number, {
        email: session?.user?.email ?? '',
        avatar: session?.user?.avatar ?? '',
        github: session?.user?.github ?? '',
        username: nickname
      })

      if (result.success) {
        message.success('昵称修改成功')

        // 刷新session，更新用户信息
        await update({
          ...session,
          user: {
            ...session?.user,
            username: nickname,
            name: nickname // 同时更新name字段
          }
        })
      } else {
        message.error('昵称修改失败')
        console.error('昵称修改失败:', result.message)
      }
    } catch (error: any) {
      message.error('昵称修改异常')
      console.error('昵称修改异常:', error)
    }
  }


  if (!session) {
    return (
      <div className={styles.emptyState}>
        <Image src="/meme1.gif" width={300} height={200} className={styles.emptyImage} alt="登录提示图片" />
        <p>请先登录以查看个人中心</p>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <div className={styles.profileInfo}>
          <AvatarEdit
            currentAvatar={session?.user?.avatar}
            userName={session?.user?.name || ''}
            onSave={handleAvatarSave}
          />
          <div className={styles.profileDetails}>
            <NicknameEdit
              currentNickname={profileData.name}
              onSave={handleNicknameSave}
            />
            <Text className={styles.subtitle}>
              Email: {profileData.email}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
