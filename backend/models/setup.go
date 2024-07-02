package models

import (
	"github.com/bountymadmax/hiveprint/models/protos"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	database, err := gorm.Open(sqlite.Open("hiveprint.db"), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	err = database.AutoMigrate(&protos.StorageCredentials{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.Storage{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.Model{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.ModelPart{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.Creator{})
	if err != nil {
		return
	}

	DB = database
}
