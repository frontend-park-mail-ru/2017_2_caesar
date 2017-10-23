class Background {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.img = new Image(this.canvas.width, this.canvas.height);
    this.img.src = 'sprites/BG.png';
  }

  render() {
    this.img.onload = () => {
      this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
    };
  }
}

export default Background;
