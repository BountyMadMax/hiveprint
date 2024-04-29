pub mod schema;

use diesel::pg::PgConnection;
use diesel::prelude::*;
use dotenvy::dotenv;
use std::env;

pub mod hiveprint {
  pub mod storage {
    include!(concat!(env!("OUT_DIR"), "/hiveprint.storage.rs"));
  }
}

use hiveprint::storage::*;

/* pub fn create_storage_new() -> storage_new::Storage {
  let mut st = storage_new::Storage::default();
  st.name = String::from("Hello");
  st
} */

pub fn establish_connection() -> PgConnection {
  dotenv().ok();

  let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
  PgConnection::establish(&database_url)
    .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

/* pub fn create_storage(conn: &mut PgConnection, name: &str) -> Storage {
  use crate::schema::storages;
  let new_storage = NewStorage { name };

  diesel::insert_into(storages::table)
    .values(&new_storage)
    .returning(Storage::as_returning())
    .get_result(conn)
    .expect("Error saving new storage")
}

pub fn show_storages(conn: &mut PgConnection) -> Vec<Storage> {
  use crate::schema::storages::dsl::*;

  storages
    .limit(5)
    .select(Storage::as_select())
    .load(conn)
    .expect("Error loading storages")
} */

pub fn save_storage(connection: &mut PgConnection, storage: Storage) -> Storage {
  use crate::schema::storages;

  diesel::insert_into(storages::table)
    .values(&storage)
    .returning(Storage::as_returning())
    .get_result(connection)
    .expect("Error saving new storage")
}

pub fn save_storages(connection: &mut PgConnection, storages: Vec<Storage>) -> Vec<Storage> {
  use crate::schema::storages;

  diesel::insert_into(storages::table)
    .values(storages)
    .returning(Storage::as_returning())
    .get_results(connection)
    .expect("Error saving new storages")
}

pub fn update_storage(connection: &mut PgConnection, storage: Storage) /* -> Storage */ {

}

pub fn delete_storage(connection: &mut PgConnection, storage_id: i32) {
  use crate::schema::storages::dsl::*;
  diesel::delete(storages.filter(id.eq(storage_id))).execute(connection).expect("Error deleting storage");
}

pub fn load_storage(connection: &mut PgConnection, id: i32) -> Storage {
  use crate::schema::storages::dsl::storages;

  storages.find(id).first(connection).expect("Error finding storage")
}

pub fn query_storages(connection: &mut PgConnection, query: &StorageQuery) -> StorageQueryResponse {
  use crate::schema::storages::dsl::*;

  let results = storages
    .select(Storage::as_select())
    .limit(i64::from(query.limit))
    .offset(i64::from(query.offset))
    .load(connection)
    .expect("Error loading storages");

  StorageQueryResponse { results }
}
