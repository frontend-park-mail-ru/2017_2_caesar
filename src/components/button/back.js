import Block from 'Components/block/index';

class BackButton extends Block {
  constructor() {
    const element = document.createElement('div');
    super(element);

    this.addClasses(['btn', 'btn-default', 'button-back']);
    this.setHTML('<span class="glyphicon glyphicon-chevron-left">');
  }
}

export default BackButton;
