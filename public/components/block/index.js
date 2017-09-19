class Block {
  constructor(tag, attrs = {}, classes = []) {
    this.element = document.createElement(tag);
    this.setAttrs(attrs);
    this.setClasses(classes);
  }

  setAttrs(attrs = {}) {
    Object.keys(attrs).forEach((name) => {
      this.element.setAttribute(name, attrs[name]);
    });
  }

  setClasses(classes = []) {
    classes.forEach(item => this.element.classList.add(item));
  }

  removeClasses(classes = []) {
    classes.forEach(item => this.element.classList.remove(item));
  }

  hide() {
    this.element.setAttribute('hidden', 'hidden');
  }

  show() {
    this.element.removeAttribute('hidden');
  }

  on(name, callback) {
    this.element.addEventListener(name, callback);
  }

  get() {
    return this.element;
  }
}

export default Block;
