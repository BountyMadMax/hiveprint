fn main() {
  let mut prost_build = prost_build::Config::new();
  prost_build.protoc_arg("--experimental_allow_proto3_optional");
  prost_build.message_attribute("storage.Storage", "#[derive(diesel::Queryable, diesel::Selectable, diesel::Insertable)] #[diesel(table_name = crate::schema::storages)] #[diesel(check_for_backend(diesel::pg::Pg))]");
  prost_build.compile_protos(
    &["../protobuffers/storage.proto"], 
    &["../protobuffers/"],
  ).expect("Protobuf compilation failed");
}
