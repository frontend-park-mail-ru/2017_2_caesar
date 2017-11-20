import * as constants from 'Game/constants';

class State {
  init(initData) {
    this.coinHeight = initData.coinHeight;
    this.coinWidth = initData.coinWidth;
    this.countOfBonuses = initData.countOfBonuses;
    this.groundHeight = initData.groundHeight;
    this.groundWidth = initData.groundWidth;
    this.map = initData.map;
    this.playerHeight = initData.playerHeight;
    this.playerWidth = initData.playerWidth;
    this.playerX = initData.playerX;
    this.playerY = initData.playerY;
    this.startEnergy = initData.startEnergy;
    this.startMoney = initData.startMoney;
    this.worldHeight = initData.worldHeight;
    this.worldWidth = initData.worldWidth;

    this.gravity = constants.PLAYER_GRAVITY;
    this.groundX = constants.GROUND_X;
    this.groundY = constants.GROUND_Y;
  }

  change(state) {
    for (let key in state) {
      this[key] = state[key];
    }
  }
}

export default State;
