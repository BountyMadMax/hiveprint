package models

import "gorm.io/gorm"

type StorageLocation int

const (
	LocationLocal StorageLocation = iota
	LocationNfs
)

type Storage struct {
	gorm.Model
	Name        string
	Description string
	Location    StorageLocation
	Path        string
}
