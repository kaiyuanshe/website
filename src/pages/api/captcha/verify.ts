import { NextApiRequest, NextApiResponse } from 'next'
import { verifyCaptcha } from './generate'

export interface VerifyCaptchaRequest {
  captchaId: string
  captcha: string
}

export interface VerifyCaptchaResponse {
  success: boolean
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<VerifyCaptchaResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    const { captchaId, captcha }: VerifyCaptchaRequest = req.body

    if (!captchaId || !captcha) {
      return res.status(400).json({
        success: false,
        message: '验证码ID和验证码不能为空'
      })
    }

    const isValid = verifyCaptcha(captchaId, captcha)

    if (isValid) {
      res.status(200).json({
        success: true,
        message: '验证码验证成功'
      })
    } else {
      res.status(400).json({
        success: false,
        message: '验证码错误或已过期'
      })
    }
  } catch (error) {
    console.error('Verify captcha error:', error)
    res.status(500).json({
      success: false,
      message: '服务器内部错误'
    })
  }
}