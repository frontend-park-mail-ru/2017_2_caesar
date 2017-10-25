import 'pixi';
import 'p2';
import 'phaser';

class Game {
  constructor() {
    if (Game.instance && Game.isPlayed) {
      return Game.instance;
    }

    this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game',
      { preload: this.preload, create: this.create, update: this.update });

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
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.bg = this.game.add.sprite(0, 0, 'sky');
    this.bg.width = this.game.world.width;
    this.bg.height = this.game.world.height;

    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;

    for (let i = 0; i < window.innerWidth; i += 32) {
      for (let j = 160; j < window.innerHeight; j += 32) {
        this.ground = this.platforms.create(i, j, 'ground');
        this.ground.width = 32;
        this.ground.height = 32;
        this.ground.body.immovable = true;
        this.ground.inputEnabled = true;
        this.ground.input.useHandCursor = true;
        this.ground.events.onInputDown.add(sprite => sprite.destroy(), this);
      }
    }

    this.player = this.game.add.sprite(32, 32, 'dude');
    this.game.physics.arcade.enable(this.player);

    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    this.hitPlatform = this.game.physics.arcade.collide(this.player, this.platforms);

    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -150;
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 150;
    } else {
      this.player.animations.stop();
    }

    if (this.cursors.up.isDown && this.player.body.touching.down && this.hitPlatform) {
      this.player.body.velocity.y = -350;
    }
  }

  destructor() {
    Game.isPlayed = false;

    window.removeEventListener('keydown', this.pause);

    this.game.destroy();
  }
}

export default Game;
