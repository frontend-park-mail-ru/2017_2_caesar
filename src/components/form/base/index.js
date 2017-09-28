import Block from '../../block/index';

class Form extends Block {
  constructor(name, classes = []) {
    const form = document.createElement('form');
    super(form);

    this.setAttrs({ name });
    this.addClasses(classes);
  }

  getFields(fields = []) {
    const formData = {};
    const elements = this.element.elements;

    fields.forEach(name => formData[name] = elements[name].value);

    return formData;
  }

  reset() {
    this.element.reset();
  }
}

export default Form;
