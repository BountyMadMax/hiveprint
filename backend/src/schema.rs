// @generated automatically by Diesel CLI.

diesel::table! {
    storages (id) {
        id -> Serial,
        name -> Varchar,
        description -> Nullable<Text>,
        hostname -> Nullable<Varchar>,
        ip -> Nullable<Varchar>,
        path -> Nullable<Text>,
        user -> Nullable<Varchar>,
        password -> Nullable<Varchar>,
        protocol -> Nullable<Int4>,
        protocol_version -> Nullable<Int4>,
    }
}
