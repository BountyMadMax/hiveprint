use axum::{
    extract::Path, routing::{get, post}, Router
};
use hiveprint::establish_connection;
use prost::Message;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/storage", post(create_storage))
        .route("/storage", get(show_storages))
        .route("/storage/:id", get(get_storage));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn create_storage() {
    let connection = &mut establish_connection();

    //hiveprint::create_storage(connection, &String::from("First storage"));
}

async fn show_storages() {
}

async fn get_storage(Path(id): Path<i32>) {
    let connection = &mut establish_connection();
    let storage = hiveprint::load_storage(connection, id);
    let mut buf = vec![];
    hiveprint::storage::Storage::encode(&storage, &mut buf).expect("Could not encode storage")
}
