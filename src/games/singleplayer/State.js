const COIN = 10;
const ENERGY = 1;

class State {
  constructor() {
    this.coins = 0;
    this.energy = 100;
  }

  increaseCoins() {
    this.coins += COIN;
  }

  decreaseEnergy() {
    this.energy -= ENERGY;
  }
}

export default State;
