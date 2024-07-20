generate:
	protoc --experimental_allow_proto3_optional --proto_path=$(GOPATH)/pkg/mod/github.com/infobloxopen/protoc-gen-gorm@v1.1.4/proto/ --proto_path=. --go_out=../backend --gorm_out=../backend *.proto

generate_doc:
	sudo docker run --rm \
		-v $(pwd)/doc:/out \
		-v $(pwd)/.:/protos \
		-v $(GOPATH)/pkg/mod/github.com/infobloxopen/protoc-gen-gorm@v1.1.4/proto/:/deps \
		pseudomuto/protoc-gen-doc --proto_path=/protos --proto_path=/deps --doc_out=/out --doc_opt=html,index.html ./*.proto
