package main

import (
	router "hiveprint/src"
	"hiveprint/src/middleware"

	"github.com/labstack/echo/v4"
	echoMiddleware "github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	// Middleware

	e.Use(echoMiddleware.Logger())

	e.Use(echoMiddleware.Secure())
	e.Use(middleware.Database())

	// Routes

	router.Router(e)

	// Start

	e.Logger.Fatal(e.Start(":8080"))
}
