package models

import (
	"github.com/bountymadmax/hiveprint/models/protos/storage"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	db, err := gorm.Open(sqlite.Open("hiveprint.db"), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	err = db.AutoMigrate(&storage.Storage{})

	if err != nil {
		return
	}

	DB = db
}
