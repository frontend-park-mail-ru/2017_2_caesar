import 'pixi';
import 'p2';
import 'phaser';

import * as constants from 'Game/constants';

class Info {
  constructor(game, coins, energy) {
    this.game = game;

    this.styleText = { font: 'bold 32px Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle' };

    this.textCoin = this.game.add.text(constants.TEXT_COINS_X, constants.TEXT_COINS_Y,
      coins, this.styleText);
    this.textCoin.fixedToCamera = true;

    this.iconCoin = this.game.add.sprite(constants.TEXT_COINS_ICON_X, constants.TEXT_COINS_Y, 'coin');
    this.iconCoin.width = constants.TEXT_COINS_ICON_WIDTH;
    this.iconCoin.height = constants.TEXT_COINS_ICON_HEIGHT;
    this.iconCoin.fixedToCamera = true;

    this.textEnergy = this.game.add.text(constants.TEXT_ENERGY_X, constants.TEXT_ENERGY_Y,
      energy, this.styleText);
    this.textEnergy.fixedToCamera = true;

    this.iconEnergy = this.game.add.sprite(constants.TEXT_ENERGY_ICON_X, constants.TEXT_ENERGY_Y, 'energy');
    this.iconEnergy.width = constants.TEXT_ENERGY_ICON_WIDTH;
    this.iconEnergy.height = constants.TEXT_ENERGY_ICON_HEIGHT;
    this.iconEnergy.fixedToCamera = true;
  }

  update(coins, energy) {
    this.game.world.bringToTop(this.textCoin);
    this.game.world.bringToTop(this.iconCoin);
    this.game.world.bringToTop(this.textEnergy);
    this.game.world.bringToTop(this.iconEnergy);

    this.textCoin.setText(coins);
    this.textEnergy.setText(energy);
  }
}

export default Info;
