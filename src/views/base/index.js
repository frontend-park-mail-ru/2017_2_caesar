import Block from 'Components/block/';

class BaseView extends Block {
  constructor(tag, classes) {
    const element = document.createElement(tag);
    super(element);

    this.addClasses(classes);

    this.parent = new Block(document.getElementById('block'));
  }

  show() {
    this.parent.append(this);
  }

  hide() {
    this.parent.remove(this);
  }
}

export default BaseView;
