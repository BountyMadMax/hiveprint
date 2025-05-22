package models

import "gorm.io/gorm"

type Model struct {
	gorm.Model
	Name        string
	Description string
	ModelParts  []*ModelPart `gorm:"many2many:model_model_parts;"`
}
