package middleware

import (
	"hiveprint/src/models"

	"github.com/labstack/echo/v4"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func Database() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			db, err := gorm.Open(sqlite.Open("db/dev.sqlite"), &gorm.Config{})
			if err != nil {
				panic("failed to connect database")
			}

			migrate(db)

			return next(c)
		}
	}
}

func migrate(db *gorm.DB) {
	db.AutoMigrate(
		&models.Model{},
		&models.ModelPart{},
		&models.Creator{},
		&models.CreatorLink{},
		&models.CreatorLinkSubtype{},
	)
}
