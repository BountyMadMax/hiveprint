package main

import (
	"net/http"

	"github.com/bountymadmax/hiveprint/controllers"
	"github.com/bountymadmax/hiveprint/models"
	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()

	models.ConnectDatabase()

	engine.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"data": "hello world"})
	})
	engine.GET("/storages", controllers.GetStorages)
	engine.GET("/storages/:id", controllers.GetStorage)
	engine.POST("/storages/new", controllers.NewStorage)

	engine.SetTrustedProxies([]string{"0.0.0.0/5137"})

	engine.Run(":3000")
}
