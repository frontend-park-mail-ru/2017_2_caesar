class State {
  constructor() {
    this.coins = 0;
    this.counterCoins = 0;
    this.energy = 100;
  }

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

    this.userId = initData.userId;
    this.radiusRadar = initData.radiusRadar;

    this.otherPlayerX = initData.playerX;
    this.otherPlayerY = initData.playerY;

    this.otherEnergy = initData.otherEnergy;
    this.otherMoney = initData.otherMoney;

    this.radarRadius = 640;
  }

  increaseCoins() {
    this.coins += 10;
    this.counterCoins++;
  }

  decreaseEnergy() {
    this.energy -= 1;
  }
}

export default State;
