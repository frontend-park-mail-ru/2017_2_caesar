import Block from '../block/index';

class Form extends Block {
  constructor(name, classes = []) {
    super('form', { name }, classes);
  }

  onSubmit(callback, fields = []) {
    this.on('submit', (event) => {
      event.preventDefault();

      const formData = {};
      const elements = this.element.elements;

      fields.forEach(name => formData[name] = elements[name].value);

      callback(formData);
    });
  }

  reset() {
    this.element.reset();
  }
}

export default Form;
