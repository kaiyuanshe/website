package models

import (
	"errors"

	"gorm.io/gorm"
)

type Member struct {
	gorm.Model
	Name        string     `json:"name"`    // 嘉宾姓名
	Avatar      string     `json:"avatar"`  // 头像URL
	Title       string     `json:"title"`   // 职位/头衔
	Company     string     `json:"company"` // 公司/组织
	CommunityID *uint      `json:"community_id"`
	Community   *Community `gorm:"foreignKey:CommunityID" json:"community"`
	UserId      uint       `json:"user_id"`
	User        *User      `gorm:"foreignKey:UserId" json:"user"`
}

func (m *Member) Create() error {
	return db.Create(m).Error
}

func (m *Member) GetByID(id uint) error {
	return db.First(m, id).Error
}

func (m *Member) GetByCommunityID(communityID uint) ([]Member, error) {
	var members []Member
	err := db.Where("community_id = ?", communityID).Find(&members).Error
	return members, err
}

func (m *Member) Update() error {
	if m.ID == 0 {
		return errors.New("missing member ID")
	}
	return db.Save(m).Error
}

func (m *Member) Delete() error {
	if m.ID == 0 {
		return errors.New("missing member ID")
	}
	return db.Delete(m).Error
}

func DeleteMemberByCommunityID(communityID uint) error {
	return db.Where("community_id = ?", communityID).Delete(&Member{}).Error
}

type MemberFilter struct {
	Keyword     string // 标题或描述关键词
	CommunityID uint
	OrderDesc   bool // 是否按创建时间倒序
	Page        int  // 当前页码，从 1 开始
	PageSize    int  // 每页数量，建议默认 10
}

func QueryMembers(filter MemberFilter) ([]Member, int64, error) {
	var members []Member
	var total int64

	query := db.Model(&Member{})

	if filter.Keyword != "" {
		likePattern := "%" + filter.Keyword + "%"
		query = query.Where("name ILIKE ? OR title ILIKE ?", likePattern, likePattern)
	}

	if filter.CommunityID != 0 {
		query = query.Where("community_id", filter.CommunityID)
	}

	// 统计总数（不加 limit 和 offset）
	query.Count(&total)

	// 排序
	if filter.OrderDesc {
		query = query.Order("created_at desc")
	} else {
		query = query.Order("created_at asc")
	}

	// 分页
	if filter.Page < 1 {
		filter.Page = 1
	}
	if filter.PageSize <= 0 {
		filter.PageSize = 10
	}
	offset := (filter.Page - 1) * filter.PageSize
	query = query.Offset(offset).Limit(filter.PageSize)

	err := query.Find(&members).Error
	return members, total, err
}
