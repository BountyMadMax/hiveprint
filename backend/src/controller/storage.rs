use axum::extract::Query;
use super::Pagination;
use crate::establish_connection;
use diesel::prelude::*;
use prost::Message;

pub async fn get_storages(mut params: Query<Pagination>) -> Vec<u8> {
  use crate::schema::storages::dsl::storages;

  let connection = &mut establish_connection();

  if params.page.is_none() {
    params.page = Some(0);
  }

  let mut list = crate::storage::StorageList::default();
  list.storages = storages
  .select(crate::storage::Storage::as_select())
  .limit(i64::from(params.page_size))
  .offset(i64::from(params.page.expect("Expect page with value 0")))
  .get_results(connection)
  .expect("Error loading storages");

  crate::storage::StorageList::encode_to_vec(&list)
}

pub async fn get_storage() {

}
