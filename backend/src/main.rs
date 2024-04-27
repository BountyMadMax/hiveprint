use axum::{
    routing::{get, post},
    Router
};
use hiveforge::establish_connection;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/storage", post(create_storage))
        .route("/storage", get(show_storages));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn create_storage() {
    let connection = &mut establish_connection();

    hiveforge::create_storage(connection, &String::from("First storage"));
}

async fn show_storages() {
}
