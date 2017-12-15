import Block from 'Components/block/index';

class BackButton extends Block {
  constructor() {
    const element = document.createElement('div');
    super(element);

    this.addClasses(['form__button']);
    this.setHTML('Меню');
  }
}

export default BackButton;
