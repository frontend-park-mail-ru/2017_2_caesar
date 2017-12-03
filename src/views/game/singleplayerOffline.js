import Offline from 'Game/singleplayer/Offline';

const data = {
  bonusPosition: [],
  coinHeight: 32,
  coinWidth: 32,
  countOfBonuses,
  groundHeight,
  groundWidth,
  playerHeigth,
  playerWidth,
  positionGround,
  radiusRadar: 200,
  startEnergy: 100,
  startMoney: 0,
  worldHeight: 2000,
  worldWidth: 1600,
};

class GameView {
  show() {
    this.game = new Offline(data);
  }

  hide() {
    this.game.destructor();
  }
}

export default GameView;
