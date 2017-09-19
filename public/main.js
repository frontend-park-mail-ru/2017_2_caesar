import Login from './components/login';

// eslint-disable-next-line no-unused-vars
const login = new Login(document);

// const application = document.querySelector('#application');
//
// const loginForm = document.forms.login;
// const signupForm = document.forms.signup;
//
// const signupButtonFromLogin = loginForm.querySelector('.button-signup');
// const loginButtonFromLogin = loginForm.querySelector('.button-login');
// const loginButtonFromSignup = signupForm.querySelector('.button-login');
// const signupButtonFromSignup = signupForm.querySelector('.button-signup');
//
// const menuForm = document.querySelector('.js-menu');
// const profileForm = document.querySelector('.js-profile');
//
// const loginButtonFromMenu = document.querySelector('.js-menu .button-login');
// const profileButtonFromMenu = document.querySelector('.js-menu .button-profile');
// const menuButtonFromProfile = document.querySelector('.js-profile .button-menu');
//
// signupButtonFromLogin.addEventListener('click', (event) = > {
//   loginForm.hidden = true;
// signupForm.hidden = false;
//
// loginForm.reset();
// })
// ;
//
// loginButtonFromLogin.addEventListener('click', (event) = > {
//   const username = loginForm.elements.username;
// const password = loginForm.elements.password;
//
// if (!username || !password) {
//   alert(`Заполните все поля!`);
//   return;
// }
//
// submitForm(username.value, password.value, '/login', function (err, res) {
//   if (+err.status === 400) {
//     return alert(`Пользователь не зарегистрирован!`);
//   }
//
//   if (+err.status === 401) {
//     return alert(`Неверный логин и/или пароль!`);
//   }
//
//   loginForm.hidden = true;
//   menuForm.hidden = false;
//
//   loginForm.reset();
// });
// })
// ;
//
// loginButtonFromSignup.addEventListener('click', (event) = > {
//   loginForm.hidden = false;
// signupForm.hidden = true;
//
// signupForm.reset();
// })
// ;
//
// signupButtonFromSignup.addEventListener('click', (event) = > {
//   const username = signupForm.elements.username;
// const password = signupForm.elements.password;
// const repeatPassword = signupForm.elements['repeat-password'];
//
// if (!username || !password || !repeatPassword) {
//   alert(`Заполните все поля!`);
//   return;
// }
//
// if (password.value != repeatPassword.value) {
//   alert(`Пароли не совпадают!`);
//   return;
// }
//
// submitForm(username.value, password.value, '/signup', function (err, res) {
//   if (+err.status === 400) {
//     return alert(`Пользователь зарегистрирован!`);
//   }
//
//   loginForm.hidden = false;
//   signupForm.hidden = true;
//
//   loginForm.username.value = res.username;
//
//   signupForm.reset();
// });
// })
// ;
//
// loginButtonFromMenu.addEventListener('click', (event) = > {
//   loginForm.hidden = false;
// menuForm.hidden = true;
// })
// ;
//
// profileButtonFromMenu.addEventListener('click', (event) = > {
//   profileForm.hidden = false;
// menuForm.hidden = true;
//
// myProfile(function (err, resp) {
//   if (+err.status === 401) {
//     return alert(`AUTH Error: ${err.status}`);
//   }
//
//   document.querySelector('.js-profile .profile-username').innerHTML = resp.username;
// });
// })
// ;
//
// menuButtonFromProfile.addEventListener('click', (event) = > {
//   menuForm.hidden = false;
// profileForm.hidden = true;
// })
// ;
//
// function submitForm(username, password, url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', url, true);
//   xhr.withCredentials = true;
//
//   const user = {username, password};
//   const body = JSON.stringify(user);
//
//   xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');
//
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) return;
//     if (+xhr.status !== 200) {
//       return callback(xhr, null);
//     }
//
//     const response = JSON.parse(xhr.responseText);
//     callback(xhr, response);
//   };
//
//   xhr.send(body);
// }
//
// function myProfile(callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/profile', true);
//   xhr.withCredentials = true;
//
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) return;
//     if (+xhr.status !== 200) {
//       return callback(xhr, null);
//     }
//
//     const response = JSON.parse(xhr.responseText);
//     callback(xhr, response);
//   };
//
//   xhr.send();
// }
