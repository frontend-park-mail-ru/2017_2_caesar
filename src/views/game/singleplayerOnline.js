import Shop from 'Views/shop';
import Online from 'Game/singleplayer/Online';
import Ws from 'Modules/ws';
import Mediator from 'Modules/mediator';

class GameView {
  constructor() {
    this.shop = new Shop();

    this.shop.drill.on('click', () => {
      this.ws.send('Upgrade', {
        drill: true,
        energy: false,
        radiusRadar: false,
      });
    });

    this.shop.battery.on('click', () => {
      this.ws.send('Upgrade', {
        drill: false,
        energy: true,
        radiusRadar: false,
      });
    });

    this.shop.radar.on('click', () => {
      this.ws.send('Upgrade', {
        drill: false,
        energy: false,
        radiusRadar: true,
      });
    });

    this.shop.button.on('click', () => {
      this.ws.send('StartNewDay', {});
    });
  }

  show() {
    document.getElementById('game').hidden = false;

    this.ws = new Ws();
    this.mediator = new Mediator();

    this.ws.connect(() => {
      console.log('connect opened');
      this.ws.send('JoinGame', {
        typeOfGame: 'single',
      });
    });

    this.play = false;

    this.shop.visible = false;

    this.mediator.on('Upgrade$Response', (data) => {
      if (data.successfully === true) {
        this.init.energy = data.energy;
        this.init.radiusRadar = data.radiusRadar;
        this.game.state.money = data.money;
        this.shop.update(data.money);
      }
    });

    this.mediator.on('StartNewDay$Response', () => {
      this.shop.hide();
      this.shop.visible = false;
      this.game.destructor();
      this.game = new Online(this.init);
    });

    this.mediator.on('InitGameSinglePlayer$Response', (data) => {
      if (!this.play) {
        this.ws.userId = data.userId;
        this.init = data;
        this.game = new Online(this.init);
        this.play = true;
      }
    });

    this.mediator.on('FinishDay$Request', () => {
      this.shop.show();
      this.shop.update(this.game.state.money);
      this.shop.visible = true;
    });
  }

  hide() {
    this.ws.send('FinishGame$Request', {
      userId: this.ws.userId,
    });

    if (this.shop.visible) {
      this.shop.hide();
    }

    document.getElementById('game').hidden = true;

    this.play = false;

    this.mediator.offAll();

    this.game.destructor();
  }
}

export default GameView;
