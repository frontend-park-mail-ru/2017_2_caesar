class Block {
  constructor(tag, attrs = {}, classes = [], text = '') {
    this.element = document.createElement(tag);
    this.setAttrs(attrs);
    this.setClasses(classes);
    this.setText(text);
  }

  setAttrs(attrs = {}) {
    Object.keys(attrs).forEach((name) => {
      this.element.setAttribute(name, attrs[name]);
    });
  }

  setClasses(classes = []) {
    classes.forEach(item => this.element.classList.add(item));
  }

  setText(text) {
    this.element.textContent = text;
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

  append(block) {
    this.element.appendChild(block.element);
    return this;
  }

  on(name, callback) {
    this.element.addEventListener(name, callback);
  }

  get() {
    return this.element;
  }
}

export default Block;
