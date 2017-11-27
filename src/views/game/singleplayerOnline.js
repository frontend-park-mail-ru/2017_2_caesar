import Online from 'Game/singleplayer/Online';
import Ws from 'Modules/ws';
import Mediator from 'Modules/mediator';

class GameView {
  show() {
    this.ws = new Ws();
    this.mediator = new Mediator();

    this.ws.connect(() => {
      this.ws.send('JoinGame', {
        typeOfGame: 'single',
      });
    });

    this.mediator.on('InitGameSinglePlayer$Response', (data) => {
      this.ws.userId = data.userId;
      this.game = new Online(data);
    });
  }

  hide() {
    this.ws.send('FinishGame$Request', {
      userId: this.ws.userId,
    });

    this.game.destructor();
  }
}

export default GameView;
