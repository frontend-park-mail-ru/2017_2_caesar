class State {
  init(initData) {
    this.coinHeight = initData.coinHeight;
    this.coinWidth = initData.coinWidth;
    this.countOfBonuses = initData.countOfBonuses;

    this.groundHeight = initData.groundHeight;
    this.groundWidth = initData.groundWidth;

    this.playerHeight = initData.playerHeight;
    this.playerWidth = initData.playerWidth;
    this.playerX = initData.playerX;
    this.playerY = initData.playerY;

    this.energy = initData.startEnergy;
    this.money = initData.startMoney;

    this.worldHeight = initData.worldHeight;
    this.worldWidth = initData.worldWidth;

    this.positionGround = initData.positionGround;
    this.bonusPosition = initData.bonusPosition;
  }

  change(state) {
    for (const key in state) {
      this[key] = state[key];
    }
  }
}

export default State;
