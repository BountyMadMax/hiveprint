generate:
	protoc --experimental_allow_proto3_optional --proto_path=$(GOPATH)/pkg/mod/github.com/infobloxopen/protoc-gen-gorm@v1.1.4/proto/ --proto_path=. --go_out=../backend --gorm_out=../backend *.proto

generate_doc:
	docker run --rm \
		-v ./docs:/out \
		-v ./:/protos \
		-v $(GOPATH)/pkg/mod/github.com/infobloxopen/protoc-gen-gorm@v1.1.4/proto/:/deps \
		pseudomuto/protoc-gen-doc --proto_path=/deps
