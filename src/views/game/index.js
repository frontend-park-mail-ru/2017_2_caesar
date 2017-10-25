import Game from 'Game/singleplayer/Game';

class GameView {
  show() {
    this.game = new Game();
  }

  hide() {
    this.game.destructor();
  }
}

export default GameView;