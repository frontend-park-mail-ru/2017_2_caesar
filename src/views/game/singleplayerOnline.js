import Shop from 'Views/shop';
import Online from 'Game/singleplayer/Online';
import Ws from 'Modules/ws';
import Mediator from 'Modules/mediator';

class GameView {
  show() {
    this.ws = new Ws();
    this.mediator = new Mediator();

    this.data = {
      drill: false,
      energy: false,
      radiusRadar: false,
    };

    this.ws.connect(() => {
      console.log('connect opened');
      this.ws.send('JoinGame', {
        typeOfGame: 'single',
      });
    });

    this.shop = new Shop();

    this.shop.battery.on('click', () => {
      this.data.energy = true;
      this.ws.send('Upgrade', this.data);
    });

    this.shop.radar.on('click', () => {
      this.data.radiusRadar = true;
      this.ws.send('Upgrade', this.data);
    });

    this.shop.button.on('click', () => {
      this.ws.send('StartNewDay', {});
    });

    // this.shop.show();

    this.mediator.on('Upgrade.Response', (data) => {
      if (data.successfully === true) {
        this.init.energy = data.energy;
        this.init.radiusRadar = data.radiusRadar;
      }
    });

    this.mediator.on('StartNewDay.Response', () => {
      this.game = new Online(this.init);
    });

    this.mediator.on('InitGameSinglePlayer$Response', (data) => {
      this.ws.userId = data.userId;
      this.init = data;
      this.game = new Online(this.init);
    });

    this.mediator.on('FinishDay$Request', () => {
      this.shop.show();
      this.game.destructor();
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
