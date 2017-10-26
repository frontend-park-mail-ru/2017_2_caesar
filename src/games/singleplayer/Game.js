/* eslint-disable no-undef */
import 'pixi';
import 'p2';
import 'phaser';

import Router from 'Modules/router';
import State from './State';

const WORLD_WIDTH = window.innerWidth;
const WORLD_HEIGHT = window.innerHeight;
const WORLD_DEEP = 2000;

const COINS = 40;
const TEXT_COINS_X = WORLD_WIDTH - 120;
const TEXT_COINS_Y = 0;
const TEXT_COINS_ICON_X = WORLD_WIDTH - 40;
const TEXT_COINS_ICON_WIDTH = 32;
const TEXT_COINS_ICON_HEIGHT = 32;

const TEXT_ENERGY_X = WORLD_WIDTH - 120;
const TEXT_ENERGY_Y = 40;
const TEXT_ENERGY_ICON_X = WORLD_WIDTH - 40;
const TEXT_ENERGY_ICON_WIDTH = 32;
const TEXT_ENERGY_ICON_HEIGHT = 32;

const GROUND_X = 0;
const GROUND_Y = 200;
const GROUND_ITEM_WIDTH = 32;
const GROUND_ITEM_HEIGHT = 32;

const PLAYER_ITEM_WIDTH = 32;
const PLAYER_ITEM_HEIGHT = 32;
const PLAYER_X = WORLD_WIDTH / 2;
const PLAYER_Y = GROUND_Y - PLAYER_ITEM_HEIGHT;
const PLAYER_VELOCITY_X = 150;
const PLAYER_VELOCITY_Y = -250;
const PLAYER_BOUNCE = 0;
const PLAYER_GRAVITY = 300;

const COINS_ICON_WIDTH = 32;
const COINS_ICON_HEIGHT = 32;
const COINS_ICON_X = 0;
const COINS_ICON_Y = 0;

const ICON_WIDTH = 64;
const ICON_HEIGHT = 64;

class Game {
  constructor() {
    if (Game.instance && Game.isPlayed) {
      return Game.instance;
    }

    this.game = new Phaser.Game(WORLD_WIDTH, WORLD_HEIGHT, Phaser.AUTO, 'game', {
      preload: this.preload,
      create: this.create,
      update: this.update,
    });

    this.pause = (event) => {
      if (Game.isPlayed && event.keyCode === 27) {
        this.game.paused = !this.game.paused;
      }
    };

    window.addEventListener('keydown', this.pause);

    Game.isPlayed = true;

    Game.instance = this;
  }

  preload() {
    this.game.load.image('sky', 'sprites/BG.png');
    this.game.load.image('free', 'sprites/free.png');
    this.game.load.image('ground', 'sprites/ground.png');
    this.game.load.image('ground-top', 'sprites/ground-top.png');
    this.game.load.spritesheet('dude', 'sprites/dude.png', 32, 48);
    // this.game.load.image('dude', 'sprites/dude.png');
    this.game.load.image('coin', 'sprites/coin.png');
    this.game.load.image('energy', 'sprites/energy.png');
    this.game.load.image('home', 'sprites/home.png');
  }

  create() {
    this.game.world.setBounds(0, 0, this.game.world.width, WORLD_DEEP);

    this.state = new State();

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.bg = this.game.add.sprite(0, 0, 'sky');
    this.bg.width = this.game.world.width;
    this.bg.height = this.game.world.height;

    this.free = this.game.add.sprite(GROUND_X, GROUND_Y, 'free');
    this.free.width = this.game.world.width - GROUND_X;
    this.free.height = WORLD_DEEP - GROUND_Y;

    this.coins = this.game.add.group();
    for (let i = 0; i < COINS; i++) {
      this.coin = this.game.add.sprite(this.game.rnd.integerInRange(GROUND_X, WORLD_WIDTH), this.game.rnd.integerInRange(GROUND_Y, WORLD_DEEP), 'coin');
      this.coin.width = COINS_ICON_WIDTH;
      this.coin.height = COINS_ICON_HEIGHT;
      this.game.physics.arcade.enable(this.coin);
      this.coins.add(this.coin);
    }

    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;
    for (let i = GROUND_X; i < this.game.world.width; i += GROUND_ITEM_WIDTH) {
      for (let j = GROUND_Y; j < this.game.world.height; j += GROUND_ITEM_HEIGHT) {
        j === GROUND_Y ? this.ground = this.platforms.create(i, j, 'ground-top') : this.ground = this.platforms.create(i, j, 'ground');
        this.ground.width = GROUND_ITEM_WIDTH;
        this.ground.height = GROUND_ITEM_HEIGHT;
        this.ground.body.immovable = true;
        this.ground.inputEnabled = true;
        this.ground.input.useHandCursor = true;
        this.ground.events.onInputDown.add((sprite) => {
          if (sprite.centerX - this.player.centerX < 2 * PLAYER_ITEM_WIDTH && sprite.centerY - this.player.centerY < 2 * PLAYER_ITEM_HEIGHT) {
            sprite.destroy();
            this.state.decreaseEnergy();
          }
        }, this);
      }
    }

    this.player = this.game.add.sprite(PLAYER_X, PLAYER_Y, 'dude');
    this.player.width = PLAYER_ITEM_WIDTH;
    this.player.height = PLAYER_ITEM_HEIGHT;
    this.game.camera.follow(this.player);
    this.game.physics.arcade.enable(this.player);

    this.player.body.bounce.y = PLAYER_BOUNCE;
    this.player.body.gravity.y = PLAYER_GRAVITY;
    this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.styleText = { font: 'bold 32px Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle' };

    this.textCoin = this.game.add.text(TEXT_COINS_X, TEXT_COINS_Y,
      this.state.coins, this.styleText);
    this.textCoin.fixedToCamera = true;

    this.iconCoin = this.game.add.sprite(TEXT_COINS_ICON_X, TEXT_COINS_Y, 'coin');
    this.iconCoin.width = TEXT_COINS_ICON_WIDTH;
    this.iconCoin.height = TEXT_COINS_ICON_HEIGHT;
    this.iconCoin.fixedToCamera = true;

    this.textEnergy = this.game.add.text(TEXT_ENERGY_X, TEXT_ENERGY_Y,
      this.state.energy, this.styleText);
    this.textEnergy.fixedToCamera = true;

    this.iconEnergy = this.game.add.sprite(TEXT_ENERGY_ICON_X, TEXT_ENERGY_Y, 'energy');
    this.iconEnergy.width = TEXT_ENERGY_ICON_WIDTH;
    this.iconEnergy.height = TEXT_ENERGY_ICON_HEIGHT;
    this.iconEnergy.fixedToCamera = true;

    this.home = this.game.add.sprite(COINS_ICON_X, COINS_ICON_Y, 'home');
    this.home.width = ICON_WIDTH;
    this.home.height = ICON_HEIGHT;
    this.home.inputEnabled = true;
    this.home.fixedToCamera = true;
    this.home.events.onInputDown.add(() => {
      const router = new Router();
      router.go('/');
    }, this);

    this.showCoins = () => {
      this.game.world.bringToTop(this.platforms);
    };

    this.search = () => {
      this.game.world.bringToTop(this.coins);
      this.game.time.events.add(Phaser.Timer.SECOND, this.showCoins, this);
    };

    this.keySearch = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
    this.keySearch.onDown.add(this.search, this);

    console.log(this.textCoin);
  }

  update() {
    this.textEnergy.setText(this.state.energy);
    this.textCoin.setText(this.state.coins);

    this.player.body.velocity.x = 0;

    if (Game.isPlayed) {
      this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);

      this.game.physics.arcade.overlap(this.player, this.coins, (player, coin) => {
        coin.kill();
        this.state.increaseCoins();
      });

      if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -PLAYER_VELOCITY_X;
        this.player.animations.play('left');
      } else if (this.cursors.right.isDown) {
        this.player.body.velocity.x = PLAYER_VELOCITY_X;
        this.player.animations.play('right');
      } else {
        this.player.animations.stop();
        this.player.frame = 4;
      }

      if (this.cursors.up.isDown && this.player.body.touching.down && this.hitPlatform) {
        this.player.body.velocity.y = PLAYER_VELOCITY_Y;
      }
    }
  }

  destructor() {
    Game.isPlayed = false;

    window.removeEventListener('keydown', this.pause);

    this.game.destroy();
  }
}

export default Game;
