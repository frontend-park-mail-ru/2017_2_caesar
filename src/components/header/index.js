import Block from 'Components/block/index';
import BackButton from 'Components/button/back';

class Header extends Block {
  constructor(text) {
    const element = document.createElement('div');
    super(element);

    this.addClasses(['block-form-header']);

    this.button = new BackButton();
    this.text = Block.create('div', {}, ['header-text'], text);

    this.render();
  }

  onBack(callback) {
    this.button.on('click', callback);
  }

  render() {
    this
      .append(this.button)
      .append(this.text);
  }
}

export default Header;
