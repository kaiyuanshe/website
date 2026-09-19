package models

import (
	"errors"
	"time"

	"gorm.io/gorm"
)

type Community struct {
	gorm.Model
	City          string     `json:"city"`
	Intro         string     `json:"intro"`
	Cover         string     `json:"cover"`
	Active        uint       `json:"active"`
	StartDate     *time.Time `json:"start_date"`
	RegisterLink  string     `json:"register_link"`
	Events        []Event    `gorm:"foreignKey:CommunityID" json:"events"`
	Members       []Member   `gorm:"foreignKey:CommunityID" json:"members"`
	UserId        uint       `json:"user_id"`
	User          *User      `gorm:"foreignKey:UserId" json:"user"`
	Locale        string     `gorm:"size:10;not null;default:zh-CN;index;uniqueIndex:idx_community_translation_locale" json:"locale"`
	TranslationOf *uint      `gorm:"index;uniqueIndex:idx_community_translation_locale" json:"translation_of,omitempty"`
}

func (c *Community) Create() error {
	return db.Create(c).Error
}

func (c *Community) GetByID(id uint) error {
	return db.Preload("Members").Preload("Events").First(c, id).Error
}

func (c *Community) GetLocalizedByID(id uint, locale string) error {
	var original Community
	if err := db.Preload("Members").Preload("Events").First(&original, id).Error; err != nil {
		return err
	}

	resolved := original
	if original.Locale != locale {
		rootID := original.ID
		if original.TranslationOf != nil {
			rootID = *original.TranslationOf
		}

		var translation Community
		err := db.Preload("Members").Preload("Events").
			Where("locale = ? AND (id = ? OR translation_of = ?)", locale, rootID, rootID).
			First(&translation).Error
		if err == nil {
			resolved = translation
		} else if !errors.Is(err, gorm.ErrRecordNotFound) {
			return err
		}
	}

	*c = resolved
	return nil
}

func GetCommunityByCity(city string) (Community, error) {
	var community Community
	err := db.Model(&Community{}).Where("city = ?", city).First(&community).Error
	if err != nil {
		return community, err
	}
	return community, nil

}

func (c *Community) Update() error {
	if c.ID == 0 {
		return errors.New("missing community ID")
	}
	return db.Save(c).Error
}

func (c *Community) Delete() error {
	if c.ID == 0 {
		return errors.New("missing Community ID")
	}
	return db.Delete(c).Error
}

type CommunityFilter struct {
	Keyword   string // 标题或描述关键词
	City      string
	OrderDesc bool // 是否按创建时间倒序
	Page      int  // 当前页码，从 1 开始
	PageSize  int  // 每页数量，建议默认 10
	Locale    string
}

func QueryCommunitys(filter CommunityFilter) ([]Community, int64, error) {
	var communitys []Community
	var total int64

	query := db.Model(&Community{})

	if filter.Keyword != "" {
		likePattern := "%" + filter.Keyword + "%"
		query = query.Where("title ILIKE ? OR description ILIKE ?", likePattern, likePattern)
	}

	if filter.City != "" {
		query = query.Where("city = ?", filter.City)
	}

	if filter.Locale != "" {
		query = query.Where(
			`communities.locale = ? OR (
				communities.translation_of IS NULL AND NOT EXISTS (
					SELECT 1 FROM communities translations
					WHERE translations.translation_of = communities.id
					AND translations.locale = ?
					AND translations.deleted_at IS NULL
				)
			)`,
			filter.Locale,
			filter.Locale,
		)
	}

	// 统计总数（不加 limit 和 offset）
	query.Count(&total)

	// 排序
	if filter.OrderDesc {
		query = query.Order("start_date desc")
	} else {
		query = query.Order("start_date asc")
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

	err := query.Find(&communitys).Error
	return communitys, total, err
}
