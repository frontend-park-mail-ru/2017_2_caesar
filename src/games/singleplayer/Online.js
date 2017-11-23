import 'pixi';
import 'p2';
import 'phaser';

import Creator from 'Game/Creator';
import Info from 'Game/Info';
import Ws from 'Modules/ws';
import Mediator from 'Modules/mediator';

import State from 'Game/State';

class Game {
  constructor(initData) {
    if (Game.instance) {
      return Game.instance;
    }

    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game', {
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.update.bind(this),
    });

    this.ws = new Ws();
    this.mediator = new Mediator();

    this.mediator.on('ServerSnap', (data) => {
      this.state.playerX = data.mapSnap.userPosition[0].x;
      this.state.playerY = data.mapSnap.userPosition[0].y;
    });

    this.state = new State();
    this.creator = new Creator(this.game, this.state);

    this.state.init(initData);

    Game.instance = this;
  }

  preload() {
    this.creator.load();
  }

  create() {
    this.game.world.setBounds(0, 0, this.state.worldWidth, this.state.worldHeight);

    this.creator.createBg();

    this.coins = this.creator.createCoins(this.state.countOfBonuses);
    this.platforms = this.creator.createPlatforms();
    this.player = this.creator.createPlayer(this.state.playerX, this.state.playerY);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

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

    this.info = new Info(this.game, this.state.money, this.state.energy);
  }

  update() {
    this.player.centerX = this.state.playerX;
    this.player.centerY = this.state.playerY;

    this.info.update(this.state.money, this.state.energy);

    if (this.cursors.left.isDown) {
      this.ws.send('ClientSnap', {
        mouse: {
          x: 0,
          y: 0,
        },
        move: {
          keyDown: 'LEFT',
        },
        isDrill: false,
        isBonus: false,
        frameTime: 50,
      });
      this.player.animations.play('left');
    } else if (this.cursors.right.isDown) {
      this.ws.send('ClientSnap', {
        mouse: {
          x: 0,
          y: 0,
        },
        move: {
          keyDown: 'RIGHT',
        },
        isDrill: false,
        isBonus: false,
        frameTime: 50,
      });
      this.player.animations.play('right');
    } else if (this.cursors.up.isDown) {
      this.ws.send('ClientSnap', {
        mouse: {
          x: 0,
          y: 0,
        },
        move: {
          keyDown: 'UP',
        },
        isDrill: false,
        isBonus: false,
        frameTime: 50,
      });
    } else if (this.cursors.down.isDown) {
      this.ws.send('ClientSnap', {
        mouse: {
          x: 0,
          y: 0,
        },
        move: {
          keyDown: 'DOWN',
        },
        isDrill: false,
        isBonus: false,
        frameTime: 50,
      });
    }
  }

  destructor() {
    this.game.destroy();
  }
}

export default Game;
