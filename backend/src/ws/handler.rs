use std::{net::SocketAddr, ops::ControlFlow, borrow::Cow};
use axum::{
  extract::{ws::{Message, WebSocket, CloseFrame}, WebSocketUpgrade, connect_info::ConnectInfo}, response::IntoResponse
};
use axum_extra::TypedHeader;
use futures::{sink::SinkExt, stream::StreamExt};

/// Handle switch from HTTP to WS.
pub async fn ws_handler(
  ws: WebSocketUpgrade,
  user_agent: Option<TypedHeader<headers::UserAgent>>,
  ConnectInfo(addr): ConnectInfo<SocketAddr>,
) -> impl IntoResponse {
  let user_agent = if let Some(TypedHeader(user_agent)) = user_agent {
      user_agent.to_string()
  } else {
      String::from("Unknown browser")
  };
  println!("`{user_agent}` at {addr} connected.");

  ws.on_upgrade(move |socket| handle_socket(socket, addr))
}

/// Handle WebSocket.
async fn handle_socket(mut socket: WebSocket, who: SocketAddr) {
  if socket.send(Message::Ping(vec![1, 2, 3])).await.is_ok() {
      println!("Pinged {who}...");
  } else {
      println!("Could not send ping {who}!");
      return;
  }

  if let Some(msg) = socket.recv().await {
      if let Ok(msg) = msg {
          if process_message(msg, who).is_break() {
              return;
          }
      } else {
          println!("client {who} abruptly disconnected");
          return;
      }
  }

  for i in 1..5 {
      if socket
          .send(Message::Text(format!("Hi {i} times!")))
          .await
          .is_err()
      {
          println!("client {who} abruptly disconnected");
          return;
      }
      tokio::time::sleep(std::time::Duration::from_millis(100)).await;
  }

  let (mut sender, mut receiver) = socket.split();

  let mut send_task = tokio::spawn(async move {
      let n_msg = 20;
      for i in 0..n_msg {
          if sender
              .send(Message::Text(format!("Server message {i} ...")))
              .await
              .is_err()
          {
              return i;
          }

          tokio::time::sleep(std::time::Duration::from_millis(300)).await;
      }

      println!("Sending close to {who}...");
      if let Err(e) = sender
          .send(Message::Close(Some(CloseFrame {
              code: axum::extract::ws::close_code::NORMAL,
              reason: Cow::from("Goodbye"),
          })))
          .await
      {
          println!("Could not send Close du to {e}, probably it is ok?");
      }
      n_msg
  });

  let mut recv_task = tokio::spawn(async move {
      let mut cnt = 0;
      while let Some(Ok(msg)) = receiver.next().await {
          cnt += 1;

          if process_message(msg, who).is_break() {
              break;
          }
      }
      cnt
  });

  tokio::select! {
      rv_a = (&mut send_task) => {
          match rv_a {
              Ok(a) => println!("{a} messages sent to {who}"),
              Err(a) => println!("Error sending messages {a:?}")
          }
          recv_task.abort();
      },
      rv_b = (&mut recv_task) => {
          match rv_b {
              Ok(b) => println!("Received {b} messages"),
              Err(b) => println!("Error receiving messages {b:?}")
          }
          send_task.abort();
      }
  }

  println!("Websocket context {who} destroyed");
}

fn process_message(msg: Message, who: SocketAddr) -> ControlFlow<(), ()> {
  match msg {
      Message::Text(t) => {
          println!(">>> {who} send str: {t:?}");
      }
      Message::Binary(d) => {
          println!(">>> {} send {} bytes: {:?}", who, d.len(), d);
      }
      Message::Close(c) => {
          if let Some(cf) = c {
              println!(
                  ">>> {} sent close with code {} and reason `{}`",
                  who, cf.code, cf.reason
              );
          } else {
              println!(">>> {who} somehow sent close message without CloseFrame");
          }
          return ControlFlow::Break(());
      }

      Message::Pong(v) => {
          println!(">>> {who} sent pong with {v:?}");
      }
      Message::Ping(v) => {
          println!(">>> {who} sent ping with {v:?}");
      }
  }
  ControlFlow::Continue(())
}
