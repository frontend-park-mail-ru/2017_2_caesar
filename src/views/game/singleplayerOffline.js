import Offline from 'Game/singleplayer/Offline';

class GameView {
  show() {
    this.game = new Offline();
  }

  hide() {
    this.game.destructor();
  }
}

export default GameView;
