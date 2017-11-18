import 'pixi';
import 'p2';
import 'phaser';

import Creator from 'Game/creator';
import Info from 'Game/info';
import * as constants from 'Game/constants';

import State from './State';

class Game {
  constructor() {
    if (Game.instance) {
      return Game.instance;
    }

    this.ws = new WebSocket('ws://localhost:8081/game');

    this.ws.onopen = () => {
      console.log('Connection opened...');
      setTimeout(() => this.ws.send({ seva: 'seva' }), 1000);
    };

    this.ws.onmessage = (event) => {
      console.log(event);
    };

    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game', {
      preload: this.preload,
      create: this.create,
      update: this.update,
    });

    Game.instance = this;
  }

  preload() {
    window.onresize = () => {
      this.game.width = window.innerWidth;
      this.game.height = window.innerHeight;
    };

    this.state = new State();

    this.creator = new Creator(this.game, this.state);

    this.game.load.image('sky', 'sprites/BG.png');
    this.game.load.image('free', 'sprites/free.png');
    this.game.load.image('ground', 'sprites/ground.png');
    this.game.load.image('ground-top', 'sprites/ground-top.png');
    this.game.load.spritesheet('dude', 'sprites/dude.png', 32, 48);
    this.game.load.image('coin', 'sprites/coin.png');
    this.game.load.image('energy', 'sprites/energy.png');
  }

  create() {
    this.game.world.setBounds(0, 0, constants.WORLD_WIDTH, constants.WORLD_HEIGHT);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.creator.createBg();

    this.coins = this.creator.createCoins(constants.COINS);
    this.platforms = this.creator.createPlatforms();
    this.player = this.creator.createPlayer(constants.PLAYER_X, constants.PLAYER_Y);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.showCoins = () => {
      this.game.world.bringToTop(this.platforms);
    };

    this.search = () => {
      this.game.world.bringToTop(this.coins);
      this.game.time.events.add(Phaser.Timer.SECOND, this.showCoins, this);
    };

    this.keySearch = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
    this.keySearch.onDown.add(this.search, this);

    this.info = new Info(this.game, this.state.coins, this.state.energy);
  }

  update() {
    console.log(this.game.input.mousePointer);

    this.info.update(this.state.coins, this.state.energy);

    this.player.body.velocity.x = 0;

    this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);

    this.game.physics.arcade.overlap(this.player, this.coins, (player, coin) => {
      coin.kill();
      this.state.increaseCoins();
    });

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -constants.PLAYER_VELOCITY_X;
      this.player.animations.play('left');
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = constants.PLAYER_VELOCITY_X;
      this.player.animations.play('right');
    } else {
      this.player.animations.stop();
      this.player.frame = 4;
    }

    if (this.cursors.up.isDown && this.player.body.touching.down && this.hitPlatform) {
      this.player.body.velocity.y = constants.PLAYER_VELOCITY_Y;
    }
  }

  destructor() {
    this.game.destroy();
  }
}

export default Game;
