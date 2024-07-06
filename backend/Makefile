generate:
	protoc --experimental_allow_proto3_optional --proto_path=$(GOPATH)/pkg/mod/github.com/infobloxopen/protoc-gen-gorm@v1.1.4/proto/ --proto_path=../protobuffers/ --go_out=. --gorm_out=. ../protobuffers/*.proto
