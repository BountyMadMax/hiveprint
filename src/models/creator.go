package models

import "gorm.io/gorm"

type Creator struct {
	gorm.Model
	Name        string
	Description string
	ModelParts  []*ModelPart `gorm:"many2many:creator_model_parts;"`
}
