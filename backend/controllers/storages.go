package controllers

import (
	"github.com/bountymadmax/hiveprint/models"
	"github.com/bountymadmax/hiveprint/models/protos"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetStorages(c *gin.Context) {
	var storages []protos.Storage
	models.DB.Find(&storages)

	c.JSON(http.StatusOK, gin.H{"data": storages})
}