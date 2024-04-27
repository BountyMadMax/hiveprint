fn main() {
  let mut prost_build = prost_build::Config::new();
  prost_build.protoc_arg("--experimental_allow_proto3_optional");
  prost_build.compile_protos(
    &["../protobuffers/storage.proto"], 
    &["../protobuffers/"],
  ).expect("Protobuf compilation failed");
}
