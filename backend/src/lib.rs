pub mod schema;
pub mod models;

use diesel::pg::PgConnection;
use diesel::prelude::*;
use dotenvy::dotenv;
use std::env;
use crate::models::storage::*;

pub fn establish_connection() -> PgConnection {
  dotenv().ok();

  let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
  PgConnection::establish(&database_url)
    .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn create_storage(conn: &mut PgConnection, name: &str) -> Storage {
  use crate::schema::storages;

  let new_storage = NewStorage { name };

  diesel::insert_into(storages::table)
    .values(&new_storage)
    .returning(Storage::as_returning())
    .get_result(conn)
    .expect("Error saving new storage")
}
