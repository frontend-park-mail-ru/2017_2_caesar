import Block from 'Components/block/index';

class Form extends Block {
  constructor(name, classes = []) {
    const form = document.createElement('form');
    super(form);

    this.errorMessage = Block.create('div');
    this.append(this.errorMessage);

    this.setAttrs({ name });
    this.addClasses(classes);
  }

  getFields(fields = []) {
    const formData = {};
    const elements = this.element.elements;

    fields.forEach(name => formData[name] = elements[name].value);

    return formData;
  }

  setErrorMessage(text) {
    this.errorMessage.setText(text);
  }

  reset() {
    this.element.reset();
  }
}

export default Form;
