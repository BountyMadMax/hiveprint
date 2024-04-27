use diesel::prelude::*;
use crate::schema::storages;

#[derive(Queryable, Selectable)]
#[diesel(table_name = storages)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Storage {
  pub id: i32,
  pub name: String,
  pub description: Option<String>,
  pub hostname: Option<String>,
  pub ip: Option<ipnet::IpNet>,
  pub user: Option<String>,
  pub password: Option<String>,
  pub protocol: Option<i16>,
  pub protocol_version: Option<i16>
}

#[derive(Insertable)]
#[diesel(table_name = storages)]
pub struct NewStorage<'a> {
  pub name: &'a str,
}
