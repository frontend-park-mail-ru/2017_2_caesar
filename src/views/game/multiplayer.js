import Shop from 'Views/shop';
import Game from 'Game/multiplayer/';
import Ws from 'Modules/ws';
import Mediator from 'Modules/mediator';

class GameView {
  show() {
    document.getElementById('game').hidden = false;

    this.ws = new Ws();
    this.mediator = new Mediator();

    this.ws.connect(() => {
      document.getElementById('wait').hidden = false;

      this.ws.send('JoinGame', {
        typeOfGame: 'multi',
      });
    });

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

    this.shop.visible = false;

    this.mediator.on('Upgrade$Response', (data) => {
      if (data.successfully === true) {
        this.init.energy = data.energy;
        this.init.radiusRadar = data.radiusRadar;
      }
    });

    this.mediator.on('StartNewDay$Response', () => {
      this.shop.hide();
      this.shop.visible = false;
      this.game.destructor();
      this.game = new Game(this.init);
    });

    this.mediator.on('InitGameMultiPlayer$Response', (data) => {
      document.getElementById('wait').hidden = true;
      this.ws.userId = data.userId;
      this.init = data;
      this.game = new Game(data);
    });

    this.mediator.on('FinishDay$Request', () => {
      this.shop.show();
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
