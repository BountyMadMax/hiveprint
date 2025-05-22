package controllers

import (
	"fmt"
	"hiveprint/src/models"
	viewModel "hiveprint/src/views/pages/models"
	"net/http"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

func ModelCreate(c echo.Context, db *gorm.DB) error {
	name := c.FormValue("name")
	description := c.FormValue("description")

	model := models.Model{Name: name, Description: description}

	result := db.Create(&model)

	if result.Error != nil {
		// TODO.
	} else {
		return c.Redirect(http.StatusSeeOther, fmt.Sprintf("/models/%v", model.ID))
	}

	return nil
}

func ModelShow(c echo.Context, db *gorm.DB) error {
	id := c.Param("id")

	model := models.Model{}

	result := db.First(&model, id)

	if result.Error != nil {
		models := []models.Model{}
		db.Find(&models)
		return Render(c, http.StatusNotFound, viewModel.Index(models))
	}

	return Render(c, http.StatusOK, viewModel.Show(model))
}

func ModelIndex(c echo.Context, db *gorm.DB) error {
	models := []models.Model{}

	db.Find(&models)

	return Render(c, http.StatusOK, viewModel.Index(models))
}

func ModelDelete(c echo.Context, db *gorm.DB) error {
	id := c.Param("id")

	db.Delete(&models.Model{}, id)

	return c.Redirect(http.StatusSeeOther, "/models")
}
