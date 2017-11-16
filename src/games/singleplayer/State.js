const VOLUME_OF_ENERGY = 100;
const COIN = 10;
const ENERGY = 1;

class State {
  constructor() {
    this.coins = 0;
    this.counterCoins = 0;
    this.energy = VOLUME_OF_ENERGY;
  }

  increaseCoins() {
    this.coins += COIN;
    this.counterCoins++;
  }

  decreaseEnergy() {
    this.energy -= ENERGY;
  }
}

export default State;
