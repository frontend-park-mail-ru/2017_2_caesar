import 'pixi';
import 'p2';
import 'phaser';

import Ws from 'Modules/ws';

class Creator {
  constructor(game, state) {
    this.game = game;
    this.state = state;

    this.ws = new Ws();
  }

  load() {
    this.game.load.image('sky', 'sprites/BG.png');
    this.game.load.image('free', 'sprites/free.png');
    this.game.load.image('ground', 'sprites/ground.png');
    this.game.load.image('ground-top', 'sprites/ground-top.png');
    this.game.load.spritesheet('dude', 'sprites/dude.png', 32, 48);
    this.game.load.image('coin', 'sprites/coin.png');
    this.game.load.image('energy', 'sprites/energy.png');
  }

  createBg() {
    this.bg = this.game.add.sprite(0, 0, 'sky');
    this.bg.width = this.state.worldWidth;
    this.bg.height = this.state.worldHeight;

    this.free = this.game.add.sprite(0, this.state.positionGround, 'free');
    this.free.width = this.game.world.width;
    this.free.height = this.game.world.height - this.state.positionGround;
  }

  createPlayer(x, y) {
    this.player = this.game.add.sprite(x + this.state.playerWidth / 2, y - this.state.playerHeight / 2, 'dude');
    this.player.width = this.state.playerWidth;
    this.player.height = this.state.playerHeight;
    this.game.camera.follow(this.player);
    this.game.physics.arcade.enable(this.player);

    this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    return this.player;
  }

  createCoins() {
    this.coins = this.game.add.group();
    for (let i = 0; i < this.state.countOfBonuses; i++) {
      this.coin = this.game.add.sprite(this.state.bonusPosition[i].x + this.state.coinWidth / 2,
        this.state.bonusPosition[i].y - this.state.coinHeight / 2, 'coin');
      this.coin.width = this.state.coinWidth;
      this.coin.height = this.state.coinHeight;
      this.game.physics.arcade.enable(this.coin);
      this.coins.add(this.coin);
    }

    return this.coins;
  }

  createPlatforms() {
    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    for (let i = 0; i < this.game.world.width; i += this.state.groundWidth) {
      for (let j = this.state.positionGround; j < this.game.world.height; j += this.state.groundHeight) {
        j === this.state.positionGround ?
          this.ground = this.platforms.create(i, j, 'ground-top') :
          this.ground = this.platforms.create(i, j, 'ground');

        this.ground.width = this.state.groundWidth;
        this.ground.height = this.state.groundHeight;
        this.ground.body.immovable = true;
        this.ground.inputEnabled = true;
        this.ground.input.useHandCursor = true;
        this.ground.events.onInputDown.add((sprite, event) => {
          this.ws.send('ClientSnap', {
            mouse: {
              x: event.x,
              y: event.y,
            },
            moveTo: {
              keyDown: 'NOTHING',
            },
            isDrill: true,
            isJump: false,
            isMove: false,
            frameTime: 50,
          });
        }, this);
      }
    }

    return this.platforms;
  }
}

export default Creator;
