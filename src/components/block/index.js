class Block {
  constructor(element) {
    this.element = element;
  }

  static create(tag, attrs = {}, classes = [], text = '') {
    const element = document.createElement(tag);

    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, attrs[name]);
    });

    classes.forEach(item => element.classList.add(item));

    if (text) {
      element.textContent = text;
    }

    return new Block(element);
  }

  setAttrs(attrs = {}) {
    Object.keys(attrs).forEach((name) => {
      this.element.setAttribute(name, attrs[name]);
    });
  }

  addClasses(classes = []) {
    classes.forEach(item => this.element.classList.add(item));
  }

  removeClasses(classes = []) {
    classes.forEach(item => this.element.classList.remove(item));
  }

  setHTML(text) {
    this.element.innerHTML = text;
  }

  setText(text) {
    this.element.textContent = text;
  }

  clear() {
    this.element.innerHTML = '';
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

  remove(block) {
    this.element.removeChild(block.element);
  }

  on(name, callback) {
    this.element.addEventListener(name, callback);
  }
}

export default Block;
