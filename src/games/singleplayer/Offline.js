import 'pixi';
import 'p2';
import 'phaser';

import Router from 'Modules/router';

import Creator from 'Game/Creator';
import Info from 'Game/Info';
import * as constants from 'Game/constants';

import State from '../State';

class Game {
  constructor() {
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game', {
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.update.bind(this),
    });

    this.state = new State();
    this.creator = new Creator(this.game, this.state);

    this.router = new Router();

    window.onresize = () => {
      this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    };

    this.exit = (event) => {
      if (event.keyCode === 27) {
        this.router.go('/');
      }
    };

    window.addEventListener('keydown', this.exit);
  }

  preload() {
    this.creator.load();
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
    window.removeEventListener('keydown', this.exit);

    window.onresize = null;

    this.game.destroy();
  }
}

export default Game;
