import 'pixi';
import 'p2';
import 'phaser';

import * as constants from 'Game/constants';

class Creator {
  constructor(game, state) {
    this.game = game;
    this.state = state;
  }

  createBg() {
    this.bg = this.game.add.sprite(0, 0, 'sky');
    this.bg.width = this.game.world.width;
    this.bg.height = this.game.world.height;

    this.free = this.game.add.sprite(constants.GROUND_X, constants.GROUND_Y, 'free');
    this.free.width = this.game.world.width - constants.GROUND_X;
    this.free.height = constants.WORLD_HEIGHT - constants.GROUND_Y;
  }

  createPlayer(x, y) {
    this.player = this.game.add.sprite(x, y, 'dude');
    this.player.width = constants.PLAYER_ITEM_WIDTH;
    this.player.height = constants.PLAYER_ITEM_HEIGHT;
    this.game.camera.follow(this.player);
    this.game.physics.arcade.enable(this.player);

    this.player.body.bounce.y = constants.PLAYER_BOUNCE;
    this.player.body.gravity.y = constants.PLAYER_GRAVITY;
    this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    return this.player;
  }

  createCoins(coins) {
    this.coins = this.game.add.group();
    for (let i = 0; i < coins; i++) {
      this.coin = this.game.add.sprite(
        this.game.rnd.integerInRange(constants.GROUND_X, constants.WORLD_WIDTH),
        this.game.rnd.integerInRange(constants.GROUND_Y, constants.WORLD_HEIGHT), 'coin');
      this.coin.width = constants.COINS_ICON_WIDTH;
      this.coin.height = constants.COINS_ICON_HEIGHT;
      this.game.physics.arcade.enable(this.coin);
      this.coins.add(this.coin);
    }

    return this.coins;
  }

  createPlatforms() {
    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    for (let i = constants.GROUND_X; i < this.game.world.width; i += constants.GROUND_ITEM_WIDTH) {
      for (let j = constants.GROUND_Y; j < this.game.world.height; j += constants.GROUND_ITEM_HEIGHT) {
        j === constants.GROUND_Y ?
          this.ground = this.platforms.create(i, j, 'ground-top') :
          this.ground = this.platforms.create(i, j, 'ground');

        this.ground.width = constants.GROUND_ITEM_WIDTH;
        this.ground.height = constants.GROUND_ITEM_HEIGHT;
        this.ground.body.immovable = true;
        this.ground.inputEnabled = true;
        this.ground.input.useHandCursor = true;
        this.ground.events.onInputDown.add((sprite, event) => {
          console.log(event);
          if (Math.abs(sprite.centerX - this.player.centerX) < 2 * constants.PLAYER_ITEM_WIDTH &&
            Math.abs(sprite.centerY - this.player.centerY) < 2 * constants.PLAYER_ITEM_HEIGHT) {
            sprite.destroy();
            this.state.decreaseEnergy();
          }
        }, this);
      }
    }

    return this.platforms;
  }
}

export default Creator;
