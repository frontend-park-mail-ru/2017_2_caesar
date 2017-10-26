/* eslint-disable no-undef */
import 'pixi';
import 'p2';
import 'phaser';

import Router from 'Modules/router';
import State from './State';

const WORLD_WIDTH = window.innerWidth;
const WORLD_HEIGHT = window.innerHeight;

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

const PLAYER_ITEM_WIDTH = 64;
const PLAYER_ITEM_HEIGHT = 64;
const PLAYER_X = WORLD_WIDTH / 2;
const PLAYER_Y = GROUND_Y - PLAYER_ITEM_HEIGHT;
const PLAYER_VELOCITY_X = 150;
const PLAYER_VELOCITY_Y = -250;

const COINS_ICON_WIDTH = 32;
const COINS_ICON_HEIGHT = 32;

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
    this.game.load.image('ground', 'sprites/ground.png');
    this.game.load.image('dude', 'sprites/Skeleton.png');
    this.game.load.image('coin', 'sprites/coin.png');
    this.game.load.image('energy', 'sprites/energy.png');
    this.game.load.image('home', 'sprites/home.png');
  }

  create() {
    const router = new Router();

    this.state = new State();

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.bg = this.game.add.sprite(0, 0, 'sky');
    this.bg.width = this.game.world.width;
    this.bg.height = this.game.world.height;

    this.coins = this.game.add.group();

    for (let i = 0; i < COINS; i++) {
      this.coin = this.game.add.sprite(this.game.rnd.integerInRange(GROUND_X, WORLD_WIDTH), this.game.rnd.integerInRange(GROUND_Y, WORLD_HEIGHT), 'coin');
      this.coin.width = COINS_ICON_WIDTH;
      this.coin.height = COINS_ICON_HEIGHT;
      this.game.physics.arcade.enable(this.coin);
      this.coins.add(this.coin);
    }

    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    this.home = this.game.add.sprite(0, 0, 'home');
    this.home.width = ICON_WIDTH;
    this.home.height = ICON_HEIGHT;
    this.home.inputEnabled = true;
    this.home.events.onInputDown.add(() => {
      router.go('/');
    }, this);

    for (let i = GROUND_X; i < this.game.world.width; i += GROUND_ITEM_WIDTH) {
      for (let j = GROUND_Y; j < this.game.world.height; j += GROUND_ITEM_HEIGHT) {
        this.ground = this.platforms.create(i, j, 'ground');
        this.ground.width = GROUND_ITEM_WIDTH;
        this.ground.height = GROUND_ITEM_HEIGHT;
        this.ground.body.immovable = true;
        this.ground.inputEnabled = true;
        this.ground.input.useHandCursor = true;
        this.ground.events.onInputDown.add((sprite) => {
          sprite.destroy();
          this.state.decreaseEnergy();
        }, this);
      }
    }

    this.player = this.game.add.sprite(PLAYER_X, PLAYER_Y, 'dude');
    this.player.width = PLAYER_ITEM_WIDTH;
    this.player.height = PLAYER_ITEM_HEIGHT;
    this.game.physics.arcade.enable(this.player);

    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.styleText = { font: 'bold 32px Arial', fill: '#fff', boundsAlignH: 'center', boundsAlignV: 'middle' };

    this.textCoin = this.game.add.text(TEXT_COINS_X, TEXT_COINS_Y,
      this.state.coins, this.styleText);

    this.iconCoin = this.game.add.sprite(TEXT_COINS_ICON_X, TEXT_COINS_Y, 'coin');
    this.iconCoin.width = TEXT_COINS_ICON_WIDTH;
    this.iconCoin.height = TEXT_COINS_ICON_HEIGHT;

    this.textEnergy = this.game.add.text(TEXT_ENERGY_X, TEXT_ENERGY_Y,
      this.state.energy, this.styleText);

    this.iconEnergy = this.game.add.sprite(TEXT_ENERGY_ICON_X, TEXT_ENERGY_Y, 'energy');
    this.iconEnergy.width = TEXT_ENERGY_ICON_WIDTH;
    this.iconEnergy.height = TEXT_ENERGY_ICON_HEIGHT;
  }

  update() {
    this.textEnergy.destroy();
    this.textEnergy = this.game.add.text(TEXT_ENERGY_X, TEXT_ENERGY_Y,
      this.state.energy, this.styleText);

    this.player.body.velocity.x = 0;

    this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);

    this.game.physics.arcade.overlap(this.player, this.coins, (player, coin) => {
      coin.kill();
      this.state.increaseCoins();
      this.textCoin.destroy();
      this.textCoin = this.game.add.text(TEXT_COINS_X, TEXT_COINS_Y,
        this.state.coins, this.styleText);
    });

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -PLAYER_VELOCITY_X;
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = PLAYER_VELOCITY_X;
    }

    if (this.cursors.up.isDown && this.player.body.touching.down && this.hitPlatform) {
      this.player.body.velocity.y = PLAYER_VELOCITY_Y;
    }
  }

  destructor() {
    Game.isPlayed = false;

    window.removeEventListener('keydown', this.pause);

    this.game.destroy();
  }
}

export default Game;
