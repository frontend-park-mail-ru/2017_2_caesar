import Http from './modules/http.js';
import Block from './components/block';
import RegistrationForm from './components/registrationForm';
import LoginForm from './components/loginForm';

const registration = new Block('div', { hidden: 'hidden' }, ['block', 'registration-block']);
const registrationHeader = new Block('h2', {}, ['app-form-header'], 'Регистрация');
const registrationForm = new RegistrationForm();

registration.append(registrationHeader);
registration.append(registrationForm);

const login = new Block('div', { hidden: 'hidden' }, ['block', 'login-block']);
const loginHeader = new Block('h2', {}, ['app-form-header'], 'Регистрация');
const loginForm = new LoginForm();

login.append(loginHeader);
login.append(loginForm);

document.body.appendChild(registration.get());
document.body.appendChild(login.get());

registration.show();

const register = body => Http.Post('/reg', { email: 'seva@mail.ru', username: 'kek', password: '1830' }, (err, res) => {
  if (err) {
    console.log(+err.status);
  } else {
    registration.hide();
    login.show();
  }

  console.log(body);
  console.log(res);
});

const auth = body => Http.Post('/auth', { username: 'kek', password: '1830' }, (err, res) => {
  if (err) {
    console.log(+err.status);
  } else {
    login.hide();
    console.log('YES');
  }

  console.log(body);
  console.log(res);
});

registrationForm.onSubmit(body => register(body));
loginForm.onSubmit(body => auth(body));

