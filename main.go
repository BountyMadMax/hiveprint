package main

import (
	"context"
	"hiveprint/src/views"
	"net/http"

	"github.com/a-h/templ"
	"github.com/labstack/echo/v4"
)

func render(ctx echo.Context, status int, t templ.Component) error {
	ctx.Response().Writer.WriteHeader(status)

	err := t.Render(context.Background(), ctx.Response().Writer)
	if err != nil {
		return ctx.String(http.StatusInternalServerError, "failed to render response")
	}

	return nil
}

func main() {
	e := echo.New()

	// HTMX
	e.File("/static/js/htmx.min.js", "static/js/htmx.min.js")
	// CSS
	e.File("/static/css/main.css", "static/css/main.css")
	// Font
	e.File("/static/font/inter.css", "node_modules/@fontsource-variable/inter/index.css")
	e.Static("/static/font/files/", "node_modules/@fontsource-variable/inter/files/")
	// Icons
	e.Static("/static/icons/", "node_modules/lucide-static/font/")

	e.GET("/", func(c echo.Context) error {
		return render(c, http.StatusOK, views.Index())
	})

	e.Logger.Fatal(e.Start(":8080"))
}
