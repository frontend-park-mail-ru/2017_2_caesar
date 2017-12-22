import Block from 'Components/block/index';
import Base from 'Views/base/index';

class Shop extends Base {
  constructor() {
    super('div', ['shop'], 'shop');

    this.drill = Block.create('div', {}, ['shop__drill']);
    this.drill.text = Block.create('div', {}, ['shop__upgrade-text'], 'Бур');
    this.drill.img = Block.create('div', {}, ['shop__drill-img']);
    this.drill.sum = Block.create('div', {}, [], '20');

    this.battery = Block.create('div', {}, ['shop__battery']);
    this.battery.text = Block.create('div', {}, ['shop__upgrade-text'], 'Энергия');
    this.battery.img = Block.create('div', {}, ['shop__battery-img']);
    this.battery.sum = Block.create('div', {}, [], '50');

    this.radar = Block.create('div', {}, ['shop__radar']);
    this.radar.text = Block.create('div', {}, ['shop__upgrade-text'], 'Радар');
    this.radar.img = Block.create('div', {}, ['shop__radar-img']);
    this.radar.sum = Block.create('div', {}, [], '10');

    this.money = Block.create('div', {}, ['shop__money-text'], '');

    this.button = Block.create('div', {}, ['action'], 'Новый день');

    this.render();
  }

  update(money) {
    this.money.setHTML(`Осталось денег: ${money}`);
  }

  render() {
    this.drill
      .append(this.drill.text)
      .append(this.drill.img)
      .append(this.drill.sum);

    this.battery
      .append(this.battery.text)
      .append(this.battery.img)
      .append(this.battery.sum);

    this.radar
      .append(this.radar.text)
      .append(this.radar.img)
      .append(this.radar.sum);

    this
      .append(this.drill)
      .append(this.battery)
      .append(this.radar)
      .append(this.money)
      .append(this.button);
  }
}

export default Shop;
