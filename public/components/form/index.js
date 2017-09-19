import Block from '../block';

class Form extends Block {
  constructor(name, classes = []) {
    super('form', { name }, classes);
  }

  onSubmit(callback) {
    this.on('submit', (event) => {
      event.preventDefault();

      const formData = {};
      const elements = this.get().elements;

      for (const name in elements) {
        formData[name] = elements[name].value;
      }

      callback(formData);
    });
  }

  reset() {
    this.reset();
  }
}

export default Form;
