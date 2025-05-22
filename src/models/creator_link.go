package models

import "gorm.io/gorm"

type CreatorLink struct {
	gorm.Model
	Link      string
	Creator   Creator
	CreatorID int
	Subtype   CreatorLinkSubtype
	SubtypeID int
}

type CreatorLinkSubtype struct {
	gorm.Model
	Name    string
	IconSrc string
}
