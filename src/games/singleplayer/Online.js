import 'pixi';
import 'p2';
import 'phaser';

import Router from 'Modules/router';

import Creator from 'Game/Creator';
import Info from 'Game/Info';
import Ws from 'Modules/ws';
import Mediator from 'Modules/mediator';

import State from 'Game/State';

class Game {
  constructor(initData) {
    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game', {
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.update.bind(this),
    });

    this.ws = new Ws();
    this.mediator = new Mediator();

    this.mediator.on('ServerSnap', (data) => {
      // console.log(data);
      this.state.playerX = data.firstUser.positionPartSnap.position.x;
      this.state.playerY = data.firstUser.positionPartSnap.position.y;

      this.state.money = data.firstUser.mechanicPartSnap.money;
      this.state.energy = data.firstUser.mechanicPartSnap.energy;

      if (data.mapSnap.destroyedTiles[0] !== null) {
        for (let i = 0; i < data.mapSnap.destroyedTiles.length; i++) {
          this.free = this.creator.createFree(data.mapSnap.destroyedTiles[i].x,
            data.mapSnap.destroyedTiles[i].y);
          this.game.physics.arcade.overlap(this.free, this.platforms, (free, platform) => {
            free.kill();
            platform.kill();
          });
        }
      }
      if (data.mapSnap.destroyedTiles[0] !== null) {
        for (let i = 0; i < data.mapSnap.destroyedBonus.length; i++) {
          this.free = this.creator.createFree(data.mapSnap.destroyedBonus[i].x,
            data.mapSnap.destroyedBonus[i].y);
          this.game.physics.arcade.overlap(this.free, this.coins, (free, coin) => {
            console.log(coin);
            free.kill();
            coin.kill();
          });
        }
      }
    });

    this.state = new State();
    this.creator = new Creator(this.game, this.state);

    this.router = new Router();

    this.state.init(initData);

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
    this.game.world.setBounds(0, 0, this.state.worldWidth, this.state.worldHeight);

    this.creator.createBg();

    this.coins = this.creator.createCoins(this.state.countOfBonuses);
    this.platforms = this.creator.createPlatforms();
    this.player = this.creator.createPlayer(this.state.playerX, this.state.playerY, true);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.showCoins = () => {
      this.game.world.bringToTop(this.platforms);
    };

    this.search = () => {
      this.coins.forEach((coin) => {
        if (Math.sqrt((coin.x - this.player.x) * (coin.x - this.player.x)
            + (coin.y - this.player.y) * (coin.y - this.player.y)) < this.state.radiusRadar) {
          this.game.world.bringToTop(coin);
          console.log(coin);
        }
      });
      this.game.time.events.add(Phaser.Timer.SECOND, this.showCoins, this);
    };

    this.keySearch = this.game.input.keyboard.addKey(Phaser.Keyboard.E);
    this.keySearch.onDown.add(this.search, this);

    this.info = new Info(this.game, this.state.money, this.state.energy);
  }

  update() {
    this.player.x = this.state.playerX;
    this.player.y = this.state.playerY;

    this.info.update(this.state.money, this.state.energy);

    const sendData = {
      mouse: {
        x: 0,
        y: 0,
      },
      moveTo: {
        keyDown: 'NOTHING',
      },
      isDrill: false,
      isJump: false,
      isMove: false,
      frameTime: 50,
    };
    if (this.cursors.left.isDown) {
      sendData.isMove = true;
      sendData.moveTo.keyDown = 'LEFT';
      this.ws.send('ClientSnap', sendData);
      this.player.animations.play('left');
    } else if (this.cursors.right.isDown) {
      sendData.isMove = true;
      sendData.moveTo.keyDown = 'RIGHT';
      this.ws.send('ClientSnap', sendData);
      this.player.animations.play('right');
    } else {
      this.player.animations.stop();
      this.player.frame = 4;
    }

    if (this.cursors.up.isDown) {
      sendData.isJump = true;
      this.ws.send('ClientSnap', sendData);
    }
  }

  stop() {
    this.game.paused = true;
  }

  destructor() {
    window.removeEventListener('keydown', this.exit);

    window.onresize = null;

    this.game.destroy();
  }
}

export default Game;
