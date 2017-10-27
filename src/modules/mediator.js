class Mediator {
  constructor() {
    if (Mediator.instance) {
      return Mediator.instance;
    }

    this.listeners = {};

    Mediator.instance = this;
  }

  on(type, listener) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }

    if (this.listeners[type].includes(listener)) {
      return;
    }

    this.listeners[type].push(listener);
  }

  off(type, listener) {
    if (this.listeners[type]) {
      for (let i = 0; i < this.listeners[type].length; i++) {
        if (this.listeners[type][i] === listener) {
          this.listeners[type].splice(i, 1);
          return;
        }
      }
    }
  }

  emit(type, data) {
    const sliceChar = `${type.slice(0, type.indexOf(':'))}:*`;

    if (this.listeners[sliceChar]) {
      this.listeners[sliceChar].forEach(listener => listener.call(null, data, type));
    }

    if (this.listeners['*']) {
      this.listeners['*'].forEach(listener => listener.call(null, data, type));
    }

    if (this.listeners[type]) {
      this.listeners[type].forEach(listener => listener.call(null, data, type));
    }
  }
}

export default new Mediator();
