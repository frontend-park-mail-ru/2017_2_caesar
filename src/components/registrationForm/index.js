import Block from '../block/index';
import Form from '../form/index';

class RegistrationForm extends Form {
  constructor() {
    super('registration', ['app-form']);

    this.email = Block.create('input', {
      type: 'email',
      name: 'email',
      placeholder: 'Почта',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.username = Block.create('input', {
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.password = Block.create('input', {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.passwordRepeat = Block.create('input', {
      type: 'password',
      name: 'passwordRepeat',
      placeholder: 'Повторите пароль',
      required: 'required',
    }, ['app-form-input', 'form-control']);

    this.submit = Block.create('input', {
      type: 'submit',
    }, ['btn', 'btn-default', 'app-form-button']);

    this.render();
  }

  onSubmit(callback) {
    this.on('submit', (event) => {
      event.preventDefault();

      this.password.removeClasses(['error']);
      this.passwordRepeat.removeClasses(['error']);

      const formData = this.checkFields();

      if (formData) {
        callback(formData);
      } else {
        this.password.addClasses(['error']);
        this.passwordRepeat.addClasses(['error']);
      }
    });
  }

  checkFields() {
    const fields = this.getFields(['email', 'username', 'password', 'passwordRepeat']);

    if (fields.password === fields.passwordRepeat) {
      return { email: fields.email, username: fields.username, password: fields.password };
    }

    return null;
  }

  render() {
    this.append(this.email);
    this.append(this.username);
    this.append(this.password);
    this.append(this.passwordRepeat);
    this.append(this.submit);
  }
}

export default RegistrationForm;
