class Entity {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.img = new Image();
    this.img.src = 'sprites/Skeleton.png';
  }

  renderPlayer(pos) {
    this.img.onload = () => {
      this.ctx.drawImage(this.img, pos.x, pos.y);
    };

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.img, pos.x, pos.y);
  }
}

export default Entity;
