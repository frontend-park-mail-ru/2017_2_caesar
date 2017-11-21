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
    this.positionGround = initData.positionGround;
    this.bonusPosition = initData.bonusPosition;

    this.gravity = constants.PLAYER_GRAVITY;
  }

  change(state) {
    for (let key in state) {
      this[key] = state[key];
    }
  }
}

export default State;
