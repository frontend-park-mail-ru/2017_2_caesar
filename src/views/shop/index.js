import Block from 'Components/block/index';
import Base from 'Views/base/index';

class Shop extends Base {
  constructor() {
    super('div', ['shop'], 'shop');

    this.battery = Block.create('div', {}, ['shop__battery']);
    this.battery.text = Block.create('div', {}, ['shop__upgrade-text'], 'Батарея');
    this.battery.img = Block.create('div', {}, ['shop__battery-img']);

    this.radar = Block.create('div', {}, ['shop__radar']);
    this.radar.text = Block.create('div', {}, ['shop__upgrade-text'], 'Радар');
    this.radar.img = Block.create('div', {}, ['shop__radar-img']);

    this.button = Block.create('div', {}, ['action'], 'Новый день');

    this.render();
  }

  render() {
    this.battery
      .append(this.battery.text)
      .append(this.battery.img);

    this.radar
      .append(this.radar.text)
      .append(this.radar.img);

    this
      .append(this.battery)
      .append(this.radar)
      .append(this.button);
  }
}

export default Shop;
