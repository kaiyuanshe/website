package services

import (
	"fmt"
	"kaiyuanshe/config"
	"time"

	"gopkg.in/gomail.v2"
)

type EmailService struct {
	config config.EmailConfig
	dialer *gomail.Dialer
}

func NewEmailService(cfg config.EmailConfig) *EmailService {
	dialer := gomail.NewDialer(cfg.SMTPHost, cfg.SMTPPort, cfg.Username, cfg.Password)
	if cfg.SSL {
		dialer.SSL = true
	}

	return &EmailService{
		config: cfg,
		dialer: dialer,
	}
}

// SendEmail 使用 gomail 发送邮件
func (es *EmailService) SendEmail(to []string, subject, body string) error {
	m := gomail.NewMessage()

	// 设置发件人
	m.SetHeader("From", es.config.FromEmail)
	m.SetAddressHeader("From", es.config.FromEmail, es.config.FromName)

	// 设置收件人
	m.SetHeader("To", to...)

	// 设置主题
	m.SetHeader("Subject", subject)

	// 设置邮件正文（HTML格式）
	m.SetBody("text/html", body)

	// 发送邮件
	if err := es.dialer.DialAndSend(m); err != nil {
		return fmt.Errorf("发送邮件失败: %v", err)
	}

	return nil
}

// SendVerificationEmail 发送验证邮件
func (es *EmailService) SendVerificationEmail(toEmail, username, token string, uid uint, expiresAt time.Time) error {
	subject := "欢迎加入开源社，请验证您的邮箱!"

	body := fmt.Sprintf(`
	    <p>感谢您在开源社网站注册账号，%s！</p>
	    <p>您的验证令牌：%s</p>
	    <p>该验证链接将在 %s 过期</p>
	`, username, fmt.Sprintf("%s?uid=%d&token=%s", config.Email.RedirectUrl, uid, token), expiresAt.Format("2006-01-02 15:04:05"))

	return es.SendEmail([]string{toEmail}, subject, body)
}
