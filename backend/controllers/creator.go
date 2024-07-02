package controllers

import (
	"github.com/bountymadmax/hiveprint/models"
	"github.com/bountymadmax/hiveprint/models/protos"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetCreators(c *gin.Context) {
	var creators []protos.Creator
	models.DB.Find(&creators)

	c.JSON(http.StatusOK, gin.H{"data": creators})
}
