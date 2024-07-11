package controllers

import (
	"net/http"

	"github.com/bountymadmax/hiveprint/models"
	"github.com/bountymadmax/hiveprint/models/protos"
	"github.com/gin-gonic/gin"
	"google.golang.org/protobuf/proto"
)

func GetStorages(c *gin.Context) {
	var storages []protos.Storage
	models.DB.Find(&storages)

	c.JSON(http.StatusOK, gin.H{"data": storages})
}

func GetStorage(c *gin.Context) {
	id := c.Param("id")

	if id == "" {
		c.AbortWithStatus(http.StatusBadRequest)
	}
	var storage protos.Storage
	models.DB.First(&storage, id)

	c.JSON(http.StatusOK, gin.H{"data": &storage})
}

func NewStorage(c *gin.Context) {
	var body []byte
	c.Request.Body.Read(body)
	storage := &protos.Storage{}
	err := proto.Unmarshal(body, storage)

	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
	}

	c.JSON(http.StatusOK, gin.H{"data": "TODO"})
}
