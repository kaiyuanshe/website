package config

import (
	"time"

	"github.com/spf13/viper"
)

// EmailConfig 邮件配置结构体
type EmailConfig struct {
	SMTPHost    string
	SMTPPort    int
	Username    string
	Password    string
	FromEmail   string
	FromName    string
	SSL         bool
	TLS         bool
	Timeout     time.Duration
	RedirectUrl string
}

var Email *EmailConfig

// InitEmailConfig 初始化邮件配置
func InitEmailConfig() {
	Email = &EmailConfig{
		SMTPHost:    viper.GetString("email.smtp_host"),
		SMTPPort:    viper.GetInt("email.smtp_port"),
		Username:    viper.GetString("email.username"),
		Password:    viper.GetString("email.password"),
		FromEmail:   viper.GetString("email.from_email"),
		FromName:    viper.GetString("email.from_name"),
		SSL:         viper.GetBool("email.ssl"),
		TLS:         viper.GetBool("email.tls"),
		Timeout:     viper.GetDuration("email.timeout") * time.Second,
		RedirectUrl: viper.GetString("email.redirectUrl"),
	}

}
