// @generated automatically by Diesel CLI.

diesel::table! {
    storages (id) {
        id -> Int4,
        name -> Varchar,
        description -> Nullable<Text>,
        hostname -> Nullable<Varchar>,
        ip -> Nullable<Inet>,
        user -> Nullable<Varchar>,
        password -> Nullable<Varchar>,
        protocol -> Nullable<Int2>,
        protocol_version -> Nullable<Int2>,
    }
}
