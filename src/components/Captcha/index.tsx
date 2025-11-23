'use client'
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import Image from 'next/image'
import { RefreshCw } from 'lucide-react'
import styles from './index.module.css'

interface CaptchaProps {
  width?: number
  height?: number
  onChange?: (captchaId: string) => void
  onRefresh?: () => void
}

interface CaptchaData {
  captchaId: string
  imageData: string
}

export interface CaptchaRef {
  refreshCaptcha: () => void
}

const Captcha = forwardRef<CaptchaRef, CaptchaProps>(({
  width = 120,
  height = 40,
  onChange,
  onRefresh
}, ref) => {
  const imgRef = useRef<HTMLDivElement>(null)
  const [captchaData, setCaptchaData] = useState<CaptchaData | null>(null)
  const [loading, setLoading] = useState(false)

  // 获取验证码
  const fetchCaptcha = React.useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/captcha/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const result = await response.json()

      if (result.success && result.data) {
        setCaptchaData(result.data)
        onChange?.(result.data.captchaId)
      } else {
        console.error('获取验证码失败:', result.message)
      }
    } catch (error) {
      console.error('获取验证码异常:', error)
    } finally {
      setLoading(false)
    }
  }, [onChange])

  // 刷新验证码
  const refreshCaptcha = () => {
    fetchCaptcha()
    onRefresh?.()
  }

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    refreshCaptcha
  }), [])

  // 初始化
  useEffect(() => {
    fetchCaptcha()
  }, [fetchCaptcha])

  return (
    <div className={styles.captchaContainer}>
      {captchaData ? (
        <div 
          ref={imgRef}
          className={styles.captchaCanvas}
          onClick={refreshCaptcha}
          style={{ cursor: 'pointer', width, height }}
        >
          <Image
            src={captchaData.imageData}
            alt="验证码"
            width={width}
            height={height}
            unoptimized
          />
        </div>
      ) : (
        <div 
          className={styles.captchaCanvas}
          style={{ 
            width, 
            height, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            color: '#999'
          }}
        >
          {loading ? '加载中...' : '点击获取'}
        </div>
      )}
      <button
        type="button"
        className={styles.refreshButton}
        onClick={refreshCaptcha}
        title="点击刷新验证码"
        disabled={loading}
      >
        <RefreshCw size={16} />
      </button>
    </div>
  )
})

Captcha.displayName = 'Captcha'

export default Captcha