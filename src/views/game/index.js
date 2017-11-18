import Game from 'Game/singleplayer/Game';
import Ws from 'Modules/ws';

class GameView {
  show() {
    this.ws = new Ws();

    this.ws.send('JoinGame', {
      typeOfGame: 'single',
    });

    this.game = new Game();
  }

  hide() {
    this.game.destructor();
  }
}

export default GameView;
