'use strict'

const application = document.querySelector('#application');

const loginForm = document.querySelector('.js-login');
const signupForm = document.querySelector('.js-signup');
const menuForm = document.querySelector('.js-menu');
const profileForm = document.querySelector('.js-profile');

const signupButtonFromLogin = document.querySelector('.js-login .button-signup');
const loginButtonFromLogin = document.querySelector('.js-login .button-login');
const loginButtonFromSignup = document.querySelector('.js-signup .button-login');
const signupButtonFromSignup = document.querySelector('.js-signup .button-signup');
const loginButtonFromMenu = document.querySelector('.js-menu .button-login');
const profileButtonFromMenu = document.querySelector('.js-menu .button-profile');
const menuButtonFromProfile = document.querySelector('.js-profile .button-menu');

signupButtonFromLogin.addEventListener('click', (event) => {
    loginForm.hidden = true;
    signupForm.hidden = false;
});

loginButtonFromLogin.addEventListener('click', (event) => {
    const username = loginForm.querySelector('.input-login');
    const password = loginForm.querySelector('.input-password');

    username.classList.remove('error');
    password.classList.remove('error');
    if (validateLogin(username, password)) {
        loginForm.hidden = true;
        menuForm.hidden = false;

        auth(username.value, password.value, function (err, resp) {
            if (err) {
                return alert(`AUTH Error: ${err.status}`);
            }

            loginForm.reset();
        });
    }
});

loginButtonFromSignup.addEventListener('click', (event) => {
    loginForm.hidden = false;
    signupForm.hidden = true;
});

signupButtonFromSignup.addEventListener('click', (event) => {
    menuForm.hidden = false;
    signupForm.hidden = true;
});

loginButtonFromMenu.addEventListener('click', (event) => {
    loginForm.hidden = false;
    menuForm.hidden = true;
});

profileButtonFromMenu.addEventListener('click', (event) => {
    profileForm.hidden = false;
    menuForm.hidden = true;

    myProfile(function (err, resp) {
        if (err) {
            return alert(`AUTH Error: ${err.status}`);
        }

        document.querySelector('.js-profile .profile-username').textContent = resp.username;
    });
});

menuButtonFromProfile.addEventListener('click', (event) => {
    menuForm.hidden = false;
    profileForm.hidden = true;
});

function auth(username, password, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/auth', true);
    xhr.withCredentials = true;

    const user = {username, password};
    const body = JSON.stringify(user);

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (+xhr.status !== 200) {
            return callback(xhr, null);
        }

        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };

    xhr.send(body);
}

function myProfile(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/profile', true);
    xhr.withCredentials = true;

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (+xhr.status !== 200) {
            return callback(xhr, null);
        }

        const response = JSON.parse(xhr.responseText);
        callback(null, response);
    };

    xhr.send();
}

function validateLogin(username, password) {
    if (username.value && password.value) {
        return true;
    }

    if (!username.value) {
        loginForm.querySelector('.input-login').classList.add('error');
    }

    if (!password.value) {
        loginForm.querySelector('.input-password').classList.add('error');
    }

    return false;
}