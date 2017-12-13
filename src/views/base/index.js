import Block from 'Components/block/';

class BaseView extends Block {
  constructor(tag, classes, parent) {
    const element = document.createElement(tag);
    super(element);

    this.addClasses(classes);

    this.parent = new Block(document.getElementById(parent || 'block'));
  }

  show() {
    document.querySelector('.title').hidden = false;
    this.parent.append(this);
  }

  hide() {
    document.querySelector('.title').hidden = true;
    this.parent.remove(this);
  }
}

export default BaseView;
