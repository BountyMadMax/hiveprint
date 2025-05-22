package router

import (
	"context"
	"hiveprint/src/controllers"
	"hiveprint/src/views"
	"hiveprint/src/views/pages"
	"hiveprint/src/views/pages/models"
	"net/http"

	"github.com/a-h/templ"
	"github.com/labstack/echo/v4"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func Router(e *echo.Echo) {
	addStaticFiles(e)

	e.GET("/", func(c echo.Context) error {
		return Render(c, http.StatusOK, pages.Home())
	})
	e.GET("/setup", func(c echo.Context) error {
		return Render(c, http.StatusOK, pages.Home())
	})

	addModelRoutes(e.Group("/models"))
}

func addModelRoutes(g *echo.Group) {
	// Index
	g.GET("", func(c echo.Context) error {
		return controllers.ModelIndex(c, openDB())
	})

	// New
	g.GET("/new", func(c echo.Context) error {
		return Render(c, http.StatusOK, models.New())
	})
	g.POST("/new", func(c echo.Context) error {
		return controllers.ModelCreate(c, openDB())
	})
	g.GET("/new/add-model-part", func(c echo.Context) error {
		return Render(c, http.StatusOK, models.NewAddModelPart())
	})

	// Show
	g.GET("/:id", func(c echo.Context) error {
		return controllers.ModelShow(c, openDB())
	})
	g.DELETE("/:id", func(c echo.Context) error {
		return controllers.ModelDelete(c, openDB())
	})

	// Edit
	g.GET("/:id/edit", func(c echo.Context) error {
		return Render(c, http.StatusOK, models.Edit())
	})
}

func openDB() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("db/dev.sqlite"), &gorm.Config{})
	if err != nil {
		panic("Error opening db")
	}

	return db
}

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

// Renders the given templ.Component.
func Render(ctx echo.Context, HTTPStatus int, t templ.Component) error {
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
