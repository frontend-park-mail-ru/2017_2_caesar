import 'pixi';
import 'p2';
import 'phaser';

class Creator {
  constructor(game, state) {
    this.game = game;
    this.state = state;
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

    // this.free = this.game.add.sprite(constants.GROUND_X, constants.GROUND_Y, 'free');
    // this.free.width = this.game.world.width - constants.GROUND_X;
    // this.free.height = constants.WORLD_HEIGHT - constants.GROUND_Y;
  }

  createPlayer(x, y) {
    this.player = this.game.add.sprite(x, y, 'dude');
    this.player.width = this.state.playerWidth;
    this.player.height = this.state.playerHeight;
    this.game.camera.follow(this.player);
    this.game.physics.arcade.enable(this.player);

    // this.player.body.gravity.y = this.state.gravity;
    this.player.body.collideWorldBounds = true;

    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    return this.player;
  }

  createCoins(countOfBonuses) {
    this.coins = this.game.add.group();
    for (let i = 0; i < countOfBonuses; i++) {
      this.coin = this.game.add.sprite(
        this.game.rnd.integerInRange(this.state.groundX, this.state.worldWidth),
        this.game.rnd.integerInRange(this.state.groundY, this.state.worldHeight), 'coin');
      this.coin.width = this.state.coinWidth;
      this.coin.height = this.state.coinHeight;
      this.game.physics.arcade.enable(this.coin);
      this.coins.add(this.coin);
    }

    return this.coins;
  }

  // createPlatforms() {
  //   this.platforms = this.game.add.group();
  //   this.platforms.enableBody = true;
  //
  //   for (let i = constants.GROUND_X; i < this.game.world.width; i += constants.GROUND_ITEM_WIDTH) {
  //     for (let j = constants.GROUND_Y; j < this.game.world.height; j += constants.GROUND_ITEM_HEIGHT) {
  //       j === constants.GROUND_Y ?
  //         this.ground = this.platforms.create(i, j, 'ground-top') :
  //         this.ground = this.platforms.create(i, j, 'ground');
  //
  //       this.ground.width = constants.GROUND_ITEM_WIDTH;
  //       this.ground.height = constants.GROUND_ITEM_HEIGHT;
  //       this.ground.body.immovable = true;
  //       this.ground.inputEnabled = true;
  //       this.ground.input.useHandCursor = true;
  //       this.ground.events.onInputDown.add((sprite, event) => {
  //         console.log(event);
  //         if (Math.abs(sprite.centerX - this.player.centerX) < 2 * constants.PLAYER_ITEM_WIDTH &&
  //           Math.abs(sprite.centerY - this.player.centerY) < 2 * constants.PLAYER_ITEM_HEIGHT) {
  //           sprite.destroy();
  //           this.state.decreaseEnergy();
  //         }
  //       }, this);
  //     }
  //   }
  //
  //   return this.platforms;
  // }
}

export default Creator;
