import { NextApiRequest, NextApiResponse } from 'next'

export interface CaptchaResponse {
  success: boolean
  data?: {
    captchaId: string
    imageData: string
  }
  message?: string
}

const captchaStorage = new Map<string, { text: string; expires: number }>()

// 生成随机字符串
function generateCaptchaText(length: number = 4): string {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefhijkmnpqrstuvwxyz23456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// 生成验证码图片 (SVG格式)
function generateCaptchaImage(text: string, width: number = 120, height: number = 40): string {
  const chars = text.split('')
  const fontSize = Math.floor(height * 0.6)
  
  // 生成SVG
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`
  
  // 背景
  svg += `<rect width="${width}" height="${height}" fill="#f0f0f0"/>`
  
  // 干扰线
  for (let i = 0; i < 3; i++) {
    const x1 = Math.random() * width
    const y1 = Math.random() * height
    const x2 = Math.random() * width
    const y2 = Math.random() * height
    const hue = Math.random() * 360
    svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="hsl(${hue}, 50%, 70%)" stroke-width="1"/>`
  }
  
  // 干扰点
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * width
    const y = Math.random() * height
    const hue = Math.random() * 360
    svg += `<circle cx="${x}" cy="${y}" r="1" fill="hsl(${hue}, 50%, 70%)"/>`
  }
  
  // 文字
  chars.forEach((char, index) => {
    const x = (width / chars.length) * index + (width / chars.length) / 2
    const y = height / 2
    const angle = (Math.random() - 0.5) * 30 // 旋转角度
    const hue = Math.random() * 360
    
    svg += `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="hsl(${hue}, 60%, 40%)" text-anchor="middle" dominant-baseline="middle" transform="rotate(${angle}, ${x}, ${y})">${char}</text>`
  })
  
  svg += '</svg>'
  
  return svg
}

// 清理过期的验证码
function cleanExpiredCaptchas() {
  const now = Date.now()
  for (const [id, data] of captchaStorage.entries()) {
    if (data.expires < now) {
      captchaStorage.delete(id)
    }
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<CaptchaResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    })
  }

  try {
    // 清理过期验证码
    cleanExpiredCaptchas()
    
    // 生成验证码
    const captchaText = generateCaptchaText()
    const captchaId = Math.random().toString(36).substr(2, 9)
    const expires = Date.now() + 5 * 60 * 1000 // 5分钟过期
    
    // 存储验证码
    captchaStorage.set(captchaId, {
      text: captchaText,
      expires
    })
    
    // 生成图片
    const svgData = generateCaptchaImage(captchaText)
    const base64Data = Buffer.from(svgData).toString('base64')
    const imageData = `data:image/svg+xml;base64,${base64Data}`
    
    res.status(200).json({
      success: true,
      data: {
        captchaId,
        imageData
      }
    })
  } catch (error) {
    console.error('Generate captcha error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

// 导出验证函数供其他API使用
export function verifyCaptcha(captchaId: string, userInput: string): boolean {
  const captchaData = captchaStorage.get(captchaId)
  
  if (!captchaData) {
    return false // 验证码不存在
  }
  
  if (captchaData.expires < Date.now()) {
    captchaStorage.delete(captchaId)
    return false // 验证码已过期
  }
  
  const isValid = captchaData.text.toLowerCase() === userInput.toLowerCase()
  
  if (isValid) {
    // 验证成功后删除验证码（一次性使用）
    captchaStorage.delete(captchaId)
  }
  
  return isValid
}