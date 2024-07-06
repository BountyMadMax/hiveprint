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

	err = database.AutoMigrate(&protos.StorageCredentialsORM{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.StorageORM{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.ModelORM{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.ModelPartORM{})
	if err != nil {
		return
	}

	err = database.AutoMigrate(&protos.CreatorORM{})
	if err != nil {
		return
	}

	DB = database
}
