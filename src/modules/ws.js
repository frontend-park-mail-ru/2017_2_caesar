import Mediator from 'Modules/mediator';

const baseUrl = 'ws://localhost:8081/game';

class Ws {
  constructor() {
    if (Ws.instance) {
      return Ws.instance;
    }

    this.mediator = new Mediator();

    this.ws = new WebSocket(baseUrl);

    this.ws.onopen = () => {
      console.log('Connection opened...');
    };

    this.ws.onmessage = (message) => {
      console.log('on: ');
      console.log(message);

      this.mediator.emit(message.class, message);
    };

    Ws.instance = this;
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
