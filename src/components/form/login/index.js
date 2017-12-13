import Block from 'Components/block/index';
import Form from 'Components/form/base/index';

class LoginForm extends Form {
  constructor() {
    super('login');

    this.username = Block.create('input', {
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя',
      required: 'required',
    }, ['form__input', 'form-control']);

    this.password = Block.create('input', {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      required: 'required',
    }, ['form__input', 'form-control']);

    this.submit = Block.create('input', {
      type: 'submit',
    }, ['btn', 'btn-default', 'button', 'form__button']);

    this.render();
  }

  onSubmit(callback) {
    this.on('submit', (event) => {
      event.preventDefault();

      this.errorMessage.clear();
      this.errorMessage.hide();

      const formData = this.getFields(['username', 'password']);

      if (formData) {
        callback(formData);
      }
    });
  }

  render() {
    this.append(this.username);
    this.append(this.password);
    this.append(this.submit);
  }

  reset() {
    this.errorMessage.clear();
    this.errorMessage.hide();

    super.reset();
  }
}

export default LoginForm;
