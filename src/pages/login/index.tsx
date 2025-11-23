'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Form, Input, Button, App as AntdApp, Modal } from 'antd'
import { signIn } from 'next-auth/react'
import styles from './index.module.css'
import { useRouter } from 'next/router'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { registerUser } from '../api/login'
// import { sendVerificationCode, verifyCode } from '../api/verification'
import GitHubLoginButton from '@/components/GitHubLoginButton'
import AuthManager from '@/lib/authManager'
import { useAuth } from '@/contexts/AuthContext'
import Captcha, { type CaptchaRef } from '@/components/Captcha'

type LoginFieldType = {
  email?: string
  password?: string
}

type RegisterFieldType = {
  email?: string
  password?: string
  confirmPassword?: string
  username?: string
  captcha?: string
  // verificationCode?: string
}

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [registerLoading, setRegisterLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [captchaId, setCaptchaId] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const captchaRef = useRef<CaptchaRef>(null)
  // const [registerStep, setRegisterStep] = useState<
  //   'email' | 'verification' | 'password'
  // >('email')
  // const [countdown, setCountdown] = useState(0)
  // const [verificationToken, setVerificationToken] = useState<string>('')
  // const [tempEmail, setTempEmail] = useState<string>('')
  // 使用简化的认证上下文，利用 NextAuth 内置缓存机制
  const { session } = useAuth();
  const router = useRouter()
  const { code, uid, token } = router.query;
  const hasTriedLogin = useRef(false); // 防止重复登录

  const { set, get } = useLocalStorage('user')
  const { message } = AntdApp.useApp()
  const initialValues = {
    email: (get() as { email?: string } | null)?.email
  }


  // 页面初次加载时检测 query 中的 code 或 uid/token 并尝试登录
  useEffect(() => {
    const tryLogin = async () => {
      // 如果已经尝试过登录、已有session、没有code且没有uid/token，则跳过
      if (hasTriedLogin.current || session || (!code && (!uid || !token))) {
        return;
      }

      hasTriedLogin.current = true;
      setLoading(true);

      try {
        const authManager = AuthManager.getInstance();

        let res: any;
        // 如果有 uid 和 token，则使用注册验证登录
        if (uid && token) {
          res = await authManager.ensureLogin(async () => {
            return await signIn('register-verify', {
              redirect: false,
              uid: uid as string,
              token: token as string,
            });
          });
        } 
        // 否则使用 code 登录
        else if (code) {
          res = await authManager.ensureLogin(async () => {
            return await signIn('code-login', {
              redirect: false,
              code: code as string,
            });
          });
        }

        if (res) {
          // 防止 React Strict Mode 导致的重复消息显示
          if (authManager.shouldShowSuccessMessage()) {
            if (uid && token) {
              message.success('邮箱验证成功，欢迎登录');
            } else {
              message.success('登录成功');
            }
            router.push("/");
          }
          // 清除 URL 中的参数，NextAuth 会自动更新 session 状态
          router.replace(router.pathname, undefined, { shallow: true });
        } else {
          if (uid && token) {
            message.warning('邮箱验证失败，链接可能已过期...');
          } else {
            message.warning('登录失败...');
          }
          hasTriedLogin.current = false; // 允许重试
        }
      } catch (error) {
        console.error('Login error:', error);
        message.error('网络错误...');
        hasTriedLogin.current = false; // 允许重试
      } finally {
        setLoading(false);
      }
    };

    // 延迟执行，避免 React Strict Mode 导致的重复调用
    const timer = setTimeout(tryLogin, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [code, uid, token, session, router, message]);


  const onLoginFinish = async (values: LoginFieldType) => {
    try {
      const { email, password } = values
      setLoading(true)

      const res = await signIn('email-login', {
        redirect: false,
        email,
        password
      })

      if (res?.ok) {
        set({
          email: email
        })
        router.push('/')
      } else {
        message.warning('登录失败...')
      }
    } catch {
      message.error('网络错误...')
    } finally {
      setLoading(false)
    }
  }

  // // 发送验证码
  // const handleSendCode = async (email: string) => {
  //   try {
  //     setLoading(true)
  //     const res = await sendVerificationCode({
  //       email,
  //       type: 'register'
  //     })

  //     if (res.success) {
  //       message.success('验证码已发送到您的邮箱')
  //       setTempEmail(email)
  //       setRegisterStep('verification')
  //       setCountdown(60)

  //       // 倒计时
  //       const timer = setInterval(() => {
  //         setCountdown(prev => {
  //           if (prev <= 1) {
  //             clearInterval(timer)
  //             return 0
  //           }
  //           return prev - 1
  //         })
  //       }, 1000)
  //     } else {
  //       message.error(res.message || '发送验证码失败')
  //     }
  //   } catch {
  //     message.error('网络错误...')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // // 验证验证码
  // const handleVerifyCode = async (code: string) => {
  //   try {
  //     setLoading(true)
  //     const res = await verifyCode({
  //       email: tempEmail,
  //       code,
  //       type: 'register'
  //     })

  //     if (res.success && res.data?.token) {
  //       message.success('验证成功')
  //       setVerificationToken(res.data.token)
  //       setRegisterStep('password')
  //     } else {
  //       message.error(res.message || '验证码错误')
  //     }
  //   } catch {
  //     message.error('网络错误...')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const onRegisterFinish = async (values: RegisterFieldType) => {
    try {
      const { email, password, username, captcha } = values
      if (!email || !password || !username) {
        message.error('请填写完整信息')
        return
      }

      if (!captcha) {
        message.error('请输入验证码')
        return
      }

      // 验证验证码
      if (!captchaId) {
        message.error('请先获取验证码')
        return
      }

      setRegisterLoading(true)

      // 调用后端验证验证码
      const verifyResponse = await fetch('/api/captcha/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          captchaId,
          captcha
        })
      })

      const verifyResult = await verifyResponse.json()
      if (!verifyResult.success) {
        message.error(verifyResult.message || '验证码错误')
        // 刷新验证码
        captchaRef.current?.refreshCaptcha?.()
        return
      }

      const res = await registerUser({
        email,
        password,
        username,
        // verificationToken: '' // 暂时不需要验证码
      })

      if (res.success) {
        setShowSuccessModal(true)
      } else {
        message.error(res.message || '注册失败')
        // 刷新验证码
        captchaRef.current?.refreshCaptcha?.()
      }
    } catch {
      message.error('网络错误...')
      // 刷新验证码
      captchaRef.current?.refreshCaptcha?.()
    } finally {
      setRegisterLoading(false)
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>{isRegister ? '欢迎注册' : '欢迎登录'}</h2>

        {isRegister ? (
          <Form layout="vertical" onFinish={onRegisterFinish}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '请输入有效的邮箱地址' }
              ]}
            >
              <Input placeholder="邮箱" />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                { required: true, message: '请输入用户名' },
                { min: 2, message: '用户名至少2个字符' },
                { max: 20, message: '用户名最多20个字符' }
              ]}
            >
              <Input placeholder="用户名" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: '请输入密码' },
                { min: 6, message: '密码至少6位' }
              ]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: '请确认密码' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('两次输入的密码不一致'))
                  }
                })
              ]}
            >
              <Input.Password placeholder="确认密码" />
            </Form.Item>

            <Form.Item style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Form.Item
                  name="captcha"
                  style={{ flex: 1, marginBottom: 0 }}
                  rules={[{ required: true, message: '请输入验证码' }]}
                >
                  <Input placeholder="验证码" />
                </Form.Item>
                <Captcha 
                  ref={captchaRef}
                  onChange={setCaptchaId}
                  width={120}
                  height={20}
                />
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginButton}
                block
                loading={registerLoading}
              >
                立即注册
              </Button>
            </Form.Item>

            <div className={styles.divider}>
              <div className={styles.dividerLine} />
              <span className={styles.dividerText}>或</span>
            </div>

            <GitHubLoginButton loading={loading} onLoading={setLoading} />
          </Form>
        ) : (
          <Form
            initialValues={initialValues}
            layout="vertical"
            onFinish={onLoginFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '请输入有效的邮箱地址' }
              ]}
            >
              <Input placeholder="邮箱" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginButton}
                block
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>

            <div className={styles.divider}>
              <div className={styles.dividerLine} />
              <span className={styles.dividerText}>或</span>
            </div>

            <GitHubLoginButton loading={loading} onLoading={setLoading} />
          </Form>
        )}

        <div className={styles.link}>
          {isRegister ? '已有账号？' : '还没有账号？'}
          <a
            onClick={() => {
              setIsRegister(!isRegister)
              // 切换到注册模式时刷新验证码
              if (!isRegister) {
                setTimeout(() => {
                  captchaRef.current?.refreshCaptcha?.()
                }, 100)
              }
            }}
            className={styles.switchLink}
          >
            {isRegister ? '立即登录' : '立即注册'}
          </a>
        </div>
      </div>

      {/* 注册成功模态框 */}
      <Modal
        title="注册成功"
        open={showSuccessModal}
        onOk={() => {
          setShowSuccessModal(false)
          setIsRegister(false)
        }}
        onCancel={() => {
          setShowSuccessModal(false)
          setIsRegister(false)
        }}
        okText="去登录"
        cancelText="关闭"
      >
        <p>恭喜您注册成功！</p>
        <p>请前往您的邮箱查看激活邮件，点击邮件中的链接激活您的账户。</p>
        <p>激活后即可正常登录使用。</p>
      </Modal>
    </div>
  )
}

export default LoginPage
