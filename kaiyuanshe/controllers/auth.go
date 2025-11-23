package controllers

import (
	"encoding/json"
	"fmt"
	"kaiyuanshe/config"
	"kaiyuanshe/logger"
	"kaiyuanshe/models"
	"kaiyuanshe/services"
	"kaiyuanshe/utils"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func HandleLogin(c *gin.Context) {
	var req SignRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		logger.Log.Errorf("Invalid request: %v", err)
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid request. Please try again later.", nil)
		return
	}

	var accessRequest AccessTokenRequest
	accessRequest.ClientId = viper.GetString("oauth.clientId")
	accessRequest.ClientSecret = viper.GetString("oauth.clientSecret")
	accessRequest.Code = req.Code
	accessRequest.RedirectURI = viper.GetString("oauth.redireceUrl")

	var reqArgs utils.HTTPRequestParams
	reqArgs.URL = viper.GetString("oauth.accessApi")
	reqArgs.Method = "POST"
	reqArgs.Body = accessRequest
	var headers = make(map[string]string)
	headers["Accept"] = "application/json"
	reqArgs.Headers = headers

	var result string
	var err error
	result, err = utils.SendHTTPRequest(reqArgs)
	if err != nil {
		logger.Log.Errorf("ServerError: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Network error, please try again later.", nil)
		return
	}

	var tokenResp AccessTokenResponseV2

	err = json.Unmarshal([]byte(result), &tokenResp)
	if err != nil {
		logger.Log.Errorf("ServerError: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Network error, please try again later.", nil)
		return
	}

	accessToken := tokenResp.AccessToken
	reqArgs.URL = viper.GetString("oauth.getUser")
	reqArgs.Method = "GET"

	header := make(map[string]string)
	header["Authorization"] = fmt.Sprintf("Bearer %s", accessToken)
	reqArgs.Headers = header

	userResult, err := utils.SendHTTPRequest(reqArgs)
	if err != nil {
		logger.Log.Errorf("SendHTTPRequest err: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Network error, please try again later.", nil)
		return
	}

	var resp GetUserResponseV2
	err = json.Unmarshal([]byte(userResult), &resp)
	if err != nil {
		logger.Log.Errorf("Unmarshal err: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Network error, please try again later.", nil)
		return
	}

	var user *models.User

	user, err = models.GetUserByEmail(resp.Email)
	if err == nil {
		// user.Avatar = resp.Data.Avatar
		// user.Username = resp.Data.UserName
		user.Email = resp.Email
		user.Github = resp.Login
		user.Avatar = resp.AvatarURL
		err = models.UpdateUser(user)
	} else {
		var u models.User
		u.Uid = uint(resp.ID)
		u.Avatar = resp.AvatarURL
		u.Github = resp.Login
		u.Email = resp.Email
		u.Username = resp.Name
		u.IsVerified = true
		user = &u
		err = models.CreateUser(user)
	}

	if err != nil {
		logger.Log.Errorf("ServerError: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Network error, please try again later.", nil)
		return
	}

	// TODO: gocache?
	perms, err := models.GetUserWithPermissions(user.ID)
	if err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "get permissions error", nil)
		return
	}

	var loginResp LoginResponse
	loginResp.User = *user
	loginResp.Permissions = perms

	token, err := utils.GenerateToken(user.ID, user.Email, user.Avatar, user.Username, user.Github, perms)
	if err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "generate token error", nil)
		return
	}
	loginResp.Token = token
	utils.SuccessResponse(c, http.StatusOK, "success", loginResp)
}

func HandleRegister(c *gin.Context) {
	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		logger.Log.Errorf("Invalid register request: %v", err)
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid input data", nil)
		return
	}

	_, err := models.GetUserByEmail(req.Email)
	if err == nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Email already registered", nil)
		return
	}

	hashedPassword, err := utils.HashPassword(req.Password)
	if err != nil {
		logger.Log.Errorf("Hash password error: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Internal server error", nil)
		return
	}

	verifyToken, err := utils.GenerateEmailVerificationToken(24)
	if err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Internal server error", nil)
	}

	user := models.User{
		Username:    req.Username,
		Email:       req.Email,
		Password:    hashedPassword,
		IsVerified:  false,
		VerifyToken: verifyToken.Token,
		TokenExpiry: &verifyToken.ExpiresAt,
	}

	if err := models.CreateUser(&user); err != nil {
		logger.Log.Errorf("Create user error: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not create user", nil)
		return
	}

	// send email
	emailService := services.NewEmailService(*config.Email)
	if err := emailService.SendVerificationEmail(user.Email, user.Username, verifyToken.Token, user.ID, verifyToken.ExpiresAt); err != nil {
		logger.Log.Errorf("发送验证邮件失败: %v", err)
		// 可以选择继续返回成功，但记录错误
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not send email", nil)
	}

	utils.SuccessResponse(c, http.StatusOK, "Registration successful", nil)
}

func HandleLoginV2(c *gin.Context) {
	var req LoginRequestV2
	if err := c.ShouldBindJSON(&req); err != nil {
		logger.Log.Errorf("Invalid login request: %v", err)
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid input data", nil)
		return
	}

	user, err := models.GetUserByEmail(req.Email)
	if err != nil || user == nil {
		logger.Log.Warnf("User not found: %s", req.Email)
		utils.ErrorResponse(c, http.StatusUnauthorized, "Invalid email or password", nil)
		return
	}

	if !utils.CheckPasswordHash(req.Password, user.Password) {
		logger.Log.Warnf("Wrong password for user: %s", req.Email)
		utils.ErrorResponse(c, http.StatusUnauthorized, "Invalid email or password", nil)
		return
	}

	perms, err := models.GetUserWithPermissions(user.ID)
	if err != nil {
		logger.Log.Errorf("get permissions error: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Failed to load permissions", nil)
		return
	}

	if !user.IsVerified {
		utils.ErrorResponse(c, http.StatusUnauthorized, "请登录邮箱完成注册验证！", nil)
		return
	}

	var loginResp LoginResponse
	loginResp.User = *user
	loginResp.Permissions = perms

	token, err := utils.GenerateToken(user.ID, user.Email, user.Avatar, user.Username, user.Github, perms)
	if err != nil {
		logger.Log.Errorf("Generate token error: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Token generation failed", nil)
		return
	}

	loginResp.Token = token

	utils.SuccessResponse(c, http.StatusOK, "success", loginResp)
}

func HandleLoginVerify(c *gin.Context) {
	var req LoginVerifyReqesut
	if err := c.ShouldBindJSON(&req); err != nil {
		logger.Log.Errorf("Invalid login request: %v", err)
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid input data", nil)
		return
	}

	user, err := models.GetUserById(req.Uid)
	if err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid user id", nil)
		return
	}

	if user.IsVerified {
		utils.ErrorResponse(c, http.StatusBadRequest, "user is  verified", nil)
		return
	}

	if err := utils.ValidateEmailVerificationToken(req.Token, user.VerifyToken, *user.TokenExpiry); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, err.Error(), nil)
		return
	}

	user.IsVerified = true
	if err := models.UpdateUser(user); err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	perms, err := models.GetUserWithPermissions(user.ID)
	if err != nil {
		logger.Log.Errorf("get permissions error: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Failed to load permissions", nil)
		return
	}

	var loginResp LoginResponse
	loginResp.User = *user
	loginResp.Permissions = perms

	token, err := utils.GenerateToken(user.ID, user.Email, user.Avatar, user.Username, user.Github, perms)
	if err != nil {
		logger.Log.Errorf("Generate token error: %v", err)
		utils.ErrorResponse(c, http.StatusInternalServerError, "Token generation failed", nil)
		return
	}

	loginResp.Token = token

	utils.SuccessResponse(c, http.StatusOK, "success", loginResp)
}
