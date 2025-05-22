package models

import "gorm.io/gorm"

type ModelPart struct {
	gorm.Model
	Name        string
	Description string
	Models      []*Model   `gorm:"many2many:model_model_parts;"`
	Creators    []*Creator `gorm:"many2many:creator_model_parts;"`
}
