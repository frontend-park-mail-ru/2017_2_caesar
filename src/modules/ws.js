import Mediator from 'Modules/mediator';

const baseUrl = 'https://tp-2017-2-caesar-backend.herokuapp.com/game'; // 'ws://localhost:8081/game';

class Ws {
  constructor() {
    if (Ws.instance) {
      return Ws.instance;
    }

    this.mediator = new Mediator();

    Ws.instance = this;
  }

  connect(callback) {
    this.ws = new WebSocket(baseUrl);

    this.ws.onopen = callback;

    this.ws.onmessage = (message) => {
      const data = JSON.parse(message.data);
      this.mediator.emit(data.class, data);
    };

    return this.ws;
  }

  send(type, payload) {
    // console.log(type, payload);

    this.ws.send(JSON.stringify(Object.assign({}, {
      class: type,
    }, payload)));
  }
}

export default Ws;
