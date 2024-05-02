export default class WebSocketService {

  constructor() {
    this._ws = null;
  }
  
  subscribe() {
    if (!this._ws) this._connect();

    console.log('sub');
    this._ws.send(JSON.stringify({ channel: 'testChannel' }));
  }

  _connect() {
    this._ws = new WebSocket('http://localhost:3000');
  }
}
