// @generated automatically by Diesel CLI.

diesel::table! {
    storages (id) {
        id -> Int4,
        name -> Varchar,
        description -> Text,
        hostname -> Inet,
        user -> Varchar,
        password -> Varchar,
        protocol -> Int2,
        protocol_major_version -> Int2,
        protocol_minor_version -> Int2,
    }
}
