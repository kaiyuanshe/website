package utils

import (
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"time"
)

// VerificationToken 验证令牌结构
type VerificationToken struct {
	Token     string    `json:"token"`
	ExpiresAt time.Time `json:"expires_at"`
}

// GenerateEmailVerificationToken 生成邮箱验证令牌（包含过期时间）
func GenerateEmailVerificationToken(expireHours int) (*VerificationToken, error) {
	// 生成32字节的安全随机令牌
	tokenBytes := make([]byte, 32)
	if _, err := rand.Read(tokenBytes); err != nil {
		return nil, err
	}

	// 使用URL安全的base64编码
	token := base64.URLEncoding.EncodeToString(tokenBytes)

	return &VerificationToken{
		Token:     token,
		ExpiresAt: time.Now().Add(time.Duration(expireHours) * time.Hour),
	}, nil
}

// ValidateEmailVerificationToken 验证邮箱验证令牌
func ValidateEmailVerificationToken(token, storedToken string, expiresAt time.Time) error {
	// 检查令牌是否为空
	if token == "" || storedToken == "" {
		return fmt.Errorf("token is empty")
	}

	// 检查令牌是否匹配
	if token != storedToken {
		return fmt.Errorf("token mismatch")
	}

	// 检查令牌格式
	_, err := base64.URLEncoding.DecodeString(token)
	if err != nil {
		return fmt.Errorf("invalid token format")
	}

	// 检查是否过期
	if time.Now().After(expiresAt) {
		return fmt.Errorf("token has expired")
	}

	return nil
}
