import Block from 'Components/block/index';
import Form from 'Components/form/base/index';

const LENGTH_MIN_LOGIN = 8;
const LENGTH_MIN_PASSWORD = 8;

class LoginForm extends Form {
  constructor() {
    super('login');

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

    this.submit = Block.create('input', {
      type: 'submit',
    }, ['btn', 'btn-default', 'app-form-button']);

    this.addListener();
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

  addListener() {
    this.username.on('input', () => {
      if (this.username.element.value.length < LENGTH_MIN_LOGIN) {
        console.log(`Имя пользователя должно быть не менее ${LENGTH_MIN_LOGIN}`);
      } else {
        console.log(`+`);
      }
    });

    this.password.on('input', () => {
      if (this.password.element.value.length < LENGTH_MIN_PASSWORD) {
        console.log(`Пароль должен быть не менее ${LENGTH_MIN_PASSWORD}`);
      } else {
        console.log(`+`);
      }
    });
  }
}

export default LoginForm;
