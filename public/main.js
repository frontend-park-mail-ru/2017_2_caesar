import RegistrationView from './views/registration';
import Http from './modules/http.js';

const register = () => Http.Post('/reg', { email: 'seva@mail.ru', username: 'kek', password: '1830' }, (err, res) => {
  if (err) {
    console.log(+err.status);
  }
  console.log(res);
});

const registration = new RegistrationView(register);

document.body.appendChild(registration.get());
