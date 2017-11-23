import Mediator from 'Modules/mediator';

const baseUrl = 'ws://localhost:8081/game';

class Ws {
  constructor() {
    if (Ws.instance) {
      return Ws.instance;
    }

    this.mediator = new Mediator();

    this.data = {};

    Ws.instance = this;
  }

  connect() {
    this.ws = new WebSocket(baseUrl);

    this.ws.onmessage = (message) => {
      const data = JSON.parse(message.data);

      if (data.mapSnap && this.data.mapSnap && this.data.mapSnap.destroyedTiles[0] !== data.mapSnap.destroyedTiles[0]) {
        console.log('on: ');
        console.log(data.mapSnap ? data.mapSnap.destroyedTiles : '');

        this.data = data;
      }

      this.mediator.emit(data.class, data);
    };

    return this.ws;
  }

  send(type, payload) {
    console.log('send: ');
    console.log(type);
    console.log(payload);

    this.ws.send(JSON.stringify(Object.assign({}, {
      class: type,
    }, payload)));
  }
}

export default Ws;
