package controllers

import (
	"fmt"
	"kaiyuanshe/models"
	"kaiyuanshe/utils"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreatMember(c *gin.Context) {
	var req CreateMemberRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		fmt.Println(err)
		utils.ErrorResponse(c, http.StatusBadRequest, "invalid args", nil)
		return
	}

	var member = models.Member{
		Name:   req.Name,
		Avatar: req.Avatar,
		Title:  req.Title,
	}

	if req.CommunityId != 0 {
		var community = new(models.Community)
		community.ID = req.CommunityId

		err := community.GetByID(req.CommunityId)
		if err != nil {
			utils.ErrorResponse(c, http.StatusBadRequest, "community is not exist", nil)
			return
		}
		member.CommunityID = &community.ID

	}

	uid, ok := c.Get("uid")
	if !ok {
		utils.ErrorResponse(c, http.StatusUnauthorized, "unauthorized", nil)
		return
	}

	userId, ok := uid.(uint)
	if !ok {
		utils.ErrorResponse(c, http.StatusUnauthorized, "unauthorized", nil)
		return
	}

	member.UserId = userId

	// 创建数据库记录
	if err := member.Create(); err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	utils.SuccessResponse(c, http.StatusOK, "create success", member)
}

func GetMember(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid ID", nil)
		return
	}

	var member models.Member
	member.ID = uint(id)

	if err = member.GetByID(uint(id)); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid member", nil)
		return
	}

	utils.SuccessResponse(c, http.StatusOK, "success", member)
}

func DeleteMember(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid ID", nil)
		return
	}
	var member models.Member
	member.ID = uint(id)

	if err = member.GetByID(uint(id)); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid Member", nil)
		return
	}

	if err := member.Delete(); err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Failed to delete member", nil)
		return
	}
	utils.SuccessResponse(c, http.StatusOK, "delete success", nil)
}

func UpdateMember(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid ID", nil)
		return
	}

	var req UpdateMemberRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid input data", nil)
		return
	}

	var member models.Member
	member.ID = uint(id)

	if err = member.GetByID(uint(id)); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid Member", nil)
		return
	}

	member.Name = req.Name
	member.Avatar = req.Avatar
	member.Title = req.Title

	if err := member.Update(); err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Failed to update member", nil)
		return
	}
	utils.SuccessResponse(c, http.StatusOK, "success", member)
}

// 获取社区成员列表
func QueryMembers(c *gin.Context) {
	communityId, _ := strconv.Atoi(c.Query("community_id"))
	// 获取查询参数
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	pageSize, _ := strconv.Atoi(c.DefaultQuery("page_size", "10"))
	order := c.DefaultQuery("order", "desc")

	// 构建查询条件
	filter := models.MemberFilter{
		CommunityID: uint(communityId),
		Page:        page,
		PageSize:    pageSize,
		OrderDesc:   order == "desc",
	}

	members, total, err := models.QueryMembers(filter)
	if err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	var response = QueryMembersResponse{
		Members:  members,
		Page:     page,
		PageSize: pageSize,
		Total:    total,
	}
	utils.SuccessResponse(c, http.StatusOK, "query success", response)
}
