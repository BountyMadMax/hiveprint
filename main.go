package main

import (
	"context"
	"hiveprint/src/views"
	"hiveprint/src/views/pages"
	"hiveprint/src/views/pages/models"
	"net/http"

	"github.com/a-h/templ"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func addStaticFiles(e *echo.Echo) {
	// HTMX
	e.File("/static/js/htmx.min.js", "static/js/htmx.min.js")
	// CSS
	e.File("/static/css/main.css", "static/css/main.css")
	// Font
	e.File("/static/font/inter.css", "node_modules/@fontsource-variable/inter/index.css")
	e.Static("/static/font/files/", "node_modules/@fontsource-variable/inter/files/")
	// Icons
	e.Static("/static/icons/", "node_modules/lucide-static/font/")
}

func main() {
	e := echo.New()

	// Middleware

	e.Use(middleware.Secure())

	// Routes

	addStaticFiles(e)

	e.GET("/", func(c echo.Context) error {
		return render(c, http.StatusOK, pages.Home())
	})
	e.GET("/setup", func(c echo.Context) error {
		return render(c, http.StatusOK, pages.Home())
	})

	groupModels := e.Group("/models")

	groupModels.GET("/:id", func(c echo.Context) error {
		return render(c, http.StatusOK, models.Show())
	})

	// Start

	e.Logger.Fatal(e.Start(":8080"))
}

// Renders the given templ.Component.
func render(ctx echo.Context, HTTPStatus int, t templ.Component) error {
	// See https://htmx.org/docs/#caching
	ctx.Response().Writer.Header().Add("Vary", "HX-Request")

	ctx.Response().Writer.WriteHeader(HTTPStatus)

	var err error
	// Only return the fragment (the given Component) on a HTMX request, else wrap it in the layout.
	if ctx.Request().Header.Get("HX-Request") == "true" {
		err = t.Render(context.Background(), ctx.Response().Writer)
	} else {
		wrapped := templ.WithChildren(context.Background(), t)
		err = views.Layout().Render(wrapped, ctx.Response().Writer)
	}

	if err != nil {
		return ctx.String(http.StatusInternalServerError, "failed to render response")
	}

	return nil
}
