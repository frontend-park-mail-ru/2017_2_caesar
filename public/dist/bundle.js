/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _loginForm = __webpack_require__(1);\n\nvar _loginForm2 = _interopRequireDefault(_loginForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar login = new _loginForm2.default();\ndocument.body.appendChild(login.get());\n\n// const application = document.querySelector('#application');\n//\n// const loginForm = document.forms.loginForm;\n// const signupForm = document.forms.signup;\n//\n// const signupButtonFromLogin = loginForm.querySelector('.button-signup');\n// const loginButtonFromLogin = loginForm.querySelector('.button-loginForm');\n// const loginButtonFromSignup = signupForm.querySelector('.button-loginForm');\n// const signupButtonFromSignup = signupForm.querySelector('.button-signup');\n//\n// const menuForm = document.querySelector('.js-menu');\n// const profileForm = document.querySelector('.js-profile');\n//\n// const loginButtonFromMenu = document.querySelector('.js-menu .button-loginForm');\n// const profileButtonFromMenu = document.querySelector('.js-menu .button-profile');\n// const menuButtonFromProfile = document.querySelector('.js-profile .button-menu');\n//\n// signupButtonFromLogin.addEventListener('click', (event) = > {\n//   loginForm.hidden = true;\n// signupForm.hidden = false;\n//\n// loginForm.reset();\n// })\n// ;\n//\n// loginButtonFromLogin.addEventListener('click', (event) = > {\n//   const username = loginForm.elements.username;\n// const password = loginForm.elements.password;\n//\n// if (!username || !password) {\n//   alert(`Заполните все поля!`);\n//   return;\n// }\n//\n// submitForm(username.value, password.value, '/loginForm', function (err, res) {\n//   if (+err.status === 400) {\n//     return alert(`Пользователь не зарегистрирован!`);\n//   }\n//\n//   if (+err.status === 401) {\n//     return alert(`Неверный логин и/или пароль!`);\n//   }\n//\n//   loginForm.hidden = true;\n//   menuForm.hidden = false;\n//\n//   loginForm.reset();\n// });\n// })\n// ;\n//\n// loginButtonFromSignup.addEventListener('click', (event) = > {\n//   loginForm.hidden = false;\n// signupForm.hidden = true;\n//\n// signupForm.reset();\n// })\n// ;\n//\n// signupButtonFromSignup.addEventListener('click', (event) = > {\n//   const username = signupForm.elements.username;\n// const password = signupForm.elements.password;\n// const repeatPassword = signupForm.elements['repeat-password'];\n//\n// if (!username || !password || !repeatPassword) {\n//   alert(`Заполните все поля!`);\n//   return;\n// }\n//\n// if (password.value != repeatPassword.value) {\n//   alert(`Пароли не совпадают!`);\n//   return;\n// }\n//\n// submitForm(username.value, password.value, '/signup', function (err, res) {\n//   if (+err.status === 400) {\n//     return alert(`Пользователь зарегистрирован!`);\n//   }\n//\n//   loginForm.hidden = false;\n//   signupForm.hidden = true;\n//\n//   loginForm.username.value = res.username;\n//\n//   signupForm.reset();\n// });\n// })\n// ;\n//\n// loginButtonFromMenu.addEventListener('click', (event) = > {\n//   loginForm.hidden = false;\n// menuForm.hidden = true;\n// })\n// ;\n//\n// profileButtonFromMenu.addEventListener('click', (event) = > {\n//   profileForm.hidden = false;\n// menuForm.hidden = true;\n//\n// myProfile(function (err, resp) {\n//   if (+err.status === 401) {\n//     return alert(`AUTH Error: ${err.status}`);\n//   }\n//\n//   document.querySelector('.js-profile .profile-username').innerHTML = resp.username;\n// });\n// })\n// ;\n//\n// menuButtonFromProfile.addEventListener('click', (event) = > {\n//   menuForm.hidden = false;\n// profileForm.hidden = true;\n// })\n// ;\n//\n// function submitForm(username, password, url, callback) {\n//   const xhr = new XMLHttpRequest();\n//   xhr.open('POST', url, true);\n//   xhr.withCredentials = true;\n//\n//   const user = {username, password};\n//   const body = JSON.stringify(user);\n//\n//   xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');\n//\n//   xhr.onreadystatechange = function () {\n//     if (xhr.readyState !== 4) return;\n//     if (+xhr.status !== 200) {\n//       return callback(xhr, null);\n//     }\n//\n//     const response = JSON.parse(xhr.responseText);\n//     callback(xhr, response);\n//   };\n//\n//   xhr.send(body);\n// }\n//\n// function myProfile(callback) {\n//   const xhr = new XMLHttpRequest();\n//   xhr.open('POST', '/profile', true);\n//   xhr.withCredentials = true;\n//\n//   xhr.onreadystatechange = function () {\n//     if (xhr.readyState !== 4) return;\n//     if (+xhr.status !== 200) {\n//       return callback(xhr, null);\n//     }\n//\n//     const response = JSON.parse(xhr.responseText);\n//     callback(xhr, response);\n//   };\n//\n//   xhr.send();\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvbWFpbi5qcz9mYTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luRm9ybSc7XHJcblxyXG5jb25zdCBsb2dpbiA9IG5ldyBMb2dpbkZvcm0oKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dpbi5nZXQoKSk7XHJcblxyXG4vLyBjb25zdCBhcHBsaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBsaWNhdGlvbicpO1xyXG4vL1xyXG4vLyBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5mb3Jtcy5sb2dpbkZvcm07XHJcbi8vIGNvbnN0IHNpZ251cEZvcm0gPSBkb2N1bWVudC5mb3Jtcy5zaWdudXA7XHJcbi8vXHJcbi8vIGNvbnN0IHNpZ251cEJ1dHRvbkZyb21Mb2dpbiA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXNpZ251cCcpO1xyXG4vLyBjb25zdCBsb2dpbkJ1dHRvbkZyb21Mb2dpbiA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWxvZ2luRm9ybScpO1xyXG4vLyBjb25zdCBsb2dpbkJ1dHRvbkZyb21TaWdudXAgPSBzaWdudXBGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbG9naW5Gb3JtJyk7XHJcbi8vIGNvbnN0IHNpZ251cEJ1dHRvbkZyb21TaWdudXAgPSBzaWdudXBGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc2lnbnVwJyk7XHJcbi8vXHJcbi8vIGNvbnN0IG1lbnVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1lbnUnKTtcclxuLy8gY29uc3QgcHJvZmlsZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJvZmlsZScpO1xyXG4vL1xyXG4vLyBjb25zdCBsb2dpbkJ1dHRvbkZyb21NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1lbnUgLmJ1dHRvbi1sb2dpbkZvcm0nKTtcclxuLy8gY29uc3QgcHJvZmlsZUJ1dHRvbkZyb21NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1lbnUgLmJ1dHRvbi1wcm9maWxlJyk7XHJcbi8vIGNvbnN0IG1lbnVCdXR0b25Gcm9tUHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9maWxlIC5idXR0b24tbWVudScpO1xyXG4vL1xyXG4vLyBzaWdudXBCdXR0b25Gcm9tTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0gPiB7XHJcbi8vICAgbG9naW5Gb3JtLmhpZGRlbiA9IHRydWU7XHJcbi8vIHNpZ251cEZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbi8vXHJcbi8vIGxvZ2luRm9ybS5yZXNldCgpO1xyXG4vLyB9KVxyXG4vLyA7XHJcbi8vXHJcbi8vIGxvZ2luQnV0dG9uRnJvbUxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9ID4ge1xyXG4vLyAgIGNvbnN0IHVzZXJuYW1lID0gbG9naW5Gb3JtLmVsZW1lbnRzLnVzZXJuYW1lO1xyXG4vLyBjb25zdCBwYXNzd29yZCA9IGxvZ2luRm9ybS5lbGVtZW50cy5wYXNzd29yZDtcclxuLy9cclxuLy8gaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuLy8gICBhbGVydChg0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyFgKTtcclxuLy8gICByZXR1cm47XHJcbi8vIH1cclxuLy9cclxuLy8gc3VibWl0Rm9ybSh1c2VybmFtZS52YWx1ZSwgcGFzc3dvcmQudmFsdWUsICcvbG9naW5Gb3JtJywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XHJcbi8vICAgaWYgKCtlcnIuc3RhdHVzID09PSA0MDApIHtcclxuLy8gICAgIHJldHVybiBhbGVydChg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC90LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9IWApO1xyXG4vLyAgIH1cclxuLy9cclxuLy8gICBpZiAoK2Vyci5zdGF0dXMgPT09IDQwMSkge1xyXG4vLyAgICAgcmV0dXJuIGFsZXJ0KGDQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0Lgv0LjQu9C4INC/0LDRgNC+0LvRjCFgKTtcclxuLy8gICB9XHJcbi8vXHJcbi8vICAgbG9naW5Gb3JtLmhpZGRlbiA9IHRydWU7XHJcbi8vICAgbWVudUZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbi8vXHJcbi8vICAgbG9naW5Gb3JtLnJlc2V0KCk7XHJcbi8vIH0pO1xyXG4vLyB9KVxyXG4vLyA7XHJcbi8vXHJcbi8vIGxvZ2luQnV0dG9uRnJvbVNpZ251cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPSA+IHtcclxuLy8gICBsb2dpbkZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbi8vIHNpZ251cEZvcm0uaGlkZGVuID0gdHJ1ZTtcclxuLy9cclxuLy8gc2lnbnVwRm9ybS5yZXNldCgpO1xyXG4vLyB9KVxyXG4vLyA7XHJcbi8vXHJcbi8vIHNpZ251cEJ1dHRvbkZyb21TaWdudXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0gPiB7XHJcbi8vICAgY29uc3QgdXNlcm5hbWUgPSBzaWdudXBGb3JtLmVsZW1lbnRzLnVzZXJuYW1lO1xyXG4vLyBjb25zdCBwYXNzd29yZCA9IHNpZ251cEZvcm0uZWxlbWVudHMucGFzc3dvcmQ7XHJcbi8vIGNvbnN0IHJlcGVhdFBhc3N3b3JkID0gc2lnbnVwRm9ybS5lbGVtZW50c1sncmVwZWF0LXBhc3N3b3JkJ107XHJcbi8vXHJcbi8vIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkIHx8ICFyZXBlYXRQYXNzd29yZCkge1xyXG4vLyAgIGFsZXJ0KGDQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPIWApO1xyXG4vLyAgIHJldHVybjtcclxuLy8gfVxyXG4vL1xyXG4vLyBpZiAocGFzc3dvcmQudmFsdWUgIT0gcmVwZWF0UGFzc3dvcmQudmFsdWUpIHtcclxuLy8gICBhbGVydChg0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCIWApO1xyXG4vLyAgIHJldHVybjtcclxuLy8gfVxyXG4vL1xyXG4vLyBzdWJtaXRGb3JtKHVzZXJuYW1lLnZhbHVlLCBwYXNzd29yZC52YWx1ZSwgJy9zaWdudXAnLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcclxuLy8gICBpZiAoK2Vyci5zdGF0dXMgPT09IDQwMCkge1xyXG4vLyAgICAgcmV0dXJuIGFsZXJ0KGDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9IWApO1xyXG4vLyAgIH1cclxuLy9cclxuLy8gICBsb2dpbkZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbi8vICAgc2lnbnVwRm9ybS5oaWRkZW4gPSB0cnVlO1xyXG4vL1xyXG4vLyAgIGxvZ2luRm9ybS51c2VybmFtZS52YWx1ZSA9IHJlcy51c2VybmFtZTtcclxuLy9cclxuLy8gICBzaWdudXBGb3JtLnJlc2V0KCk7XHJcbi8vIH0pO1xyXG4vLyB9KVxyXG4vLyA7XHJcbi8vXHJcbi8vIGxvZ2luQnV0dG9uRnJvbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0gPiB7XHJcbi8vICAgbG9naW5Gb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4vLyBtZW51Rm9ybS5oaWRkZW4gPSB0cnVlO1xyXG4vLyB9KVxyXG4vLyA7XHJcbi8vXHJcbi8vIHByb2ZpbGVCdXR0b25Gcm9tTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPSA+IHtcclxuLy8gICBwcm9maWxlRm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuLy8gbWVudUZvcm0uaGlkZGVuID0gdHJ1ZTtcclxuLy9cclxuLy8gbXlQcm9maWxlKGZ1bmN0aW9uIChlcnIsIHJlc3ApIHtcclxuLy8gICBpZiAoK2Vyci5zdGF0dXMgPT09IDQwMSkge1xyXG4vLyAgICAgcmV0dXJuIGFsZXJ0KGBBVVRIIEVycm9yOiAke2Vyci5zdGF0dXN9YCk7XHJcbi8vICAgfVxyXG4vL1xyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9maWxlIC5wcm9maWxlLXVzZXJuYW1lJykuaW5uZXJIVE1MID0gcmVzcC51c2VybmFtZTtcclxuLy8gfSk7XHJcbi8vIH0pXHJcbi8vIDtcclxuLy9cclxuLy8gbWVudUJ1dHRvbkZyb21Qcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9ID4ge1xyXG4vLyAgIG1lbnVGb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4vLyBwcm9maWxlRm9ybS5oaWRkZW4gPSB0cnVlO1xyXG4vLyB9KVxyXG4vLyA7XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHN1Ym1pdEZvcm0odXNlcm5hbWUsIHBhc3N3b3JkLCB1cmwsIGNhbGxiYWNrKSB7XHJcbi8vICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4vLyAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4vL1xyXG4vLyAgIGNvbnN0IHVzZXIgPSB7dXNlcm5hbWUsIHBhc3N3b3JkfTtcclxuLy8gICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbi8vXHJcbi8vICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0ZjgnKTtcclxuLy9cclxuLy8gICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbi8vICAgICBpZiAoK3hoci5zdGF0dXMgIT09IDIwMCkge1xyXG4vLyAgICAgICByZXR1cm4gY2FsbGJhY2soeGhyLCBudWxsKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuLy8gICAgIGNhbGxiYWNrKHhociwgcmVzcG9uc2UpO1xyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgeGhyLnNlbmQoYm9keSk7XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gbXlQcm9maWxlKGNhbGxiYWNrKSB7XHJcbi8vICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgeGhyLm9wZW4oJ1BPU1QnLCAnL3Byb2ZpbGUnLCB0cnVlKTtcclxuLy8gICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuLy9cclxuLy8gICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbi8vICAgICBpZiAoK3hoci5zdGF0dXMgIT09IDIwMCkge1xyXG4vLyAgICAgICByZXR1cm4gY2FsbGJhY2soeGhyLCBudWxsKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuLy8gICAgIGNhbGxiYWNrKHhociwgcmVzcG9uc2UpO1xyXG4vLyAgIH07XHJcbi8vXHJcbi8vICAgeGhyLnNlbmQoKTtcclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL21haW4uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(3);\n\nvar _block2 = _interopRequireDefault(_block);\n\nvar _form = __webpack_require__(2);\n\nvar _form2 = _interopRequireDefault(_form);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginForm = function (_Form) {\n  _inherits(LoginForm, _Form);\n\n  function LoginForm() {\n    _classCallCheck(this, LoginForm);\n\n    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, 'login', ['app-form']));\n\n    _this.username = new _block2.default('input', {\n      type: 'text',\n      name: 'username',\n      placeholder: 'Имя пользователя',\n      required: 'required'\n    }, ['app-form-input', 'form-control']);\n\n    _this.password = new _block2.default('input', {\n      type: 'password',\n      name: 'password',\n      placeholder: 'Пароль',\n      required: 'required'\n    }, ['app-form-input', 'form-control']);\n\n    _this.submit = new _block2.default('input', {\n      type: 'submit'\n    }, ['btn', 'btn-default']);\n\n    _this.render();\n    return _this;\n  }\n\n  _createClass(LoginForm, [{\n    key: 'render',\n    value: function render() {\n      this.get().appendChild(this.username.get());\n      this.get().appendChild(this.password.get());\n      this.get().appendChild(this.submit.get());\n    }\n  }]);\n\n  return LoginForm;\n}(_form2.default);\n\nexports.default = LoginForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvY29tcG9uZW50cy9sb2dpbkZvcm0vaW5kZXguanM/ZTNhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2sgZnJvbSAnLi4vYmxvY2snO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9mb3JtJztcclxuXHJcbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIEZvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoJ2xvZ2luJywgWydhcHAtZm9ybSddKTtcclxuXHJcbiAgICB0aGlzLnVzZXJuYW1lID0gbmV3IEJsb2NrKCdpbnB1dCcsIHtcclxuICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICBuYW1lOiAndXNlcm5hbWUnLFxyXG4gICAgICBwbGFjZWhvbGRlcjogJ9CY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8nLFxyXG4gICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgIH0sIFsnYXBwLWZvcm0taW5wdXQnLCAnZm9ybS1jb250cm9sJ10pO1xyXG5cclxuICAgIHRoaXMucGFzc3dvcmQgPSBuZXcgQmxvY2soJ2lucHV0Jywge1xyXG4gICAgICB0eXBlOiAncGFzc3dvcmQnLFxyXG4gICAgICBuYW1lOiAncGFzc3dvcmQnLFxyXG4gICAgICBwbGFjZWhvbGRlcjogJ9Cf0LDRgNC+0LvRjCcsXHJcbiAgICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgfSwgWydhcHAtZm9ybS1pbnB1dCcsICdmb3JtLWNvbnRyb2wnXSk7XHJcblxyXG4gICAgdGhpcy5zdWJtaXQgPSBuZXcgQmxvY2soJ2lucHV0Jywge1xyXG4gICAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgIH0sIFsnYnRuJywgJ2J0bi1kZWZhdWx0J10pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmdldCgpLmFwcGVuZENoaWxkKHRoaXMudXNlcm5hbWUuZ2V0KCkpO1xyXG4gICAgdGhpcy5nZXQoKS5hcHBlbmRDaGlsZCh0aGlzLnBhc3N3b3JkLmdldCgpKTtcclxuICAgIHRoaXMuZ2V0KCkuYXBwZW5kQ2hpbGQodGhpcy5zdWJtaXQuZ2V0KCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2NvbXBvbmVudHMvbG9naW5Gb3JtL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQXJCQTtBQXNCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _block = __webpack_require__(3);\n\nvar _block2 = _interopRequireDefault(_block);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Form = function (_Block) {\n  _inherits(Form, _Block);\n\n  function Form(name) {\n    var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    _classCallCheck(this, Form);\n\n    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, 'form', { name: name }, classes));\n  }\n\n  _createClass(Form, [{\n    key: 'onSubmit',\n    value: function onSubmit(callback) {\n      var _this2 = this;\n\n      this.on('submit', function (event) {\n        event.preventDefault();\n\n        var formData = {};\n        var elements = _this2.elements;\n\n        elements.forEach(function (name) {\n          formData[name] = elements[name].value;\n        });\n\n        callback(formData);\n      });\n    }\n  }, {\n    key: 'reset',\n    value: function reset() {\n      this.reset();\n    }\n  }]);\n\n  return Form;\n}(_block2.default);\n\nexports.default = Form;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvY29tcG9uZW50cy9mb3JtL2luZGV4LmpzPzQxMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2NrIGZyb20gJy4uL2Jsb2NrJztcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBCbG9jayB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgY2xhc3NlcyA9IFtdKSB7XHJcbiAgICBzdXBlcignZm9ybScsIHsgbmFtZSB9LCBjbGFzc2VzKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0ge307XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcclxuXHJcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICBmb3JtRGF0YVtuYW1lXSA9IGVsZW1lbnRzW25hbWVdLnZhbHVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGZvcm1EYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHVibGljL2NvbXBvbmVudHMvZm9ybS9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Block = function () {\n  function Block(tag) {\n    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n\n    _classCallCheck(this, Block);\n\n    this.element = document.createElement(tag);\n    this.setAttrs(attrs);\n    this.setClasses(classes);\n  }\n\n  _createClass(Block, [{\n    key: 'setAttrs',\n    value: function setAttrs() {\n      var _this = this;\n\n      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      Object.keys(attrs).forEach(function (name) {\n        _this.element.setAttribute(name, attrs[name]);\n      });\n    }\n  }, {\n    key: 'setClasses',\n    value: function setClasses() {\n      var _this2 = this;\n\n      var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      classes.forEach(function (item) {\n        return _this2.element.classList.add(item);\n      });\n    }\n  }, {\n    key: 'removeClasses',\n    value: function removeClasses() {\n      var _this3 = this;\n\n      var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      classes.forEach(function (item) {\n        return _this3.element.classList.remove(item);\n      });\n    }\n  }, {\n    key: 'hide',\n    value: function hide() {\n      this.element.setAttribute('hidden', 'hidden');\n    }\n  }, {\n    key: 'show',\n    value: function show() {\n      this.element.removeAttribute('hidden');\n    }\n  }, {\n    key: 'on',\n    value: function on(name, callback) {\n      this.element.addEventListener(name, callback);\n    }\n  }, {\n    key: 'get',\n    value: function get() {\n      return this.element;\n    }\n  }]);\n\n  return Block;\n}();\n\nexports.default = Block;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9wdWJsaWMvY29tcG9uZW50cy9ibG9jay9pbmRleC5qcz82MjU5Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJsb2NrIHtcclxuICBjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzID0ge30sIGNsYXNzZXMgPSBbXSkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgdGhpcy5zZXRBdHRycyhhdHRycyk7XHJcbiAgICB0aGlzLnNldENsYXNzZXMoY2xhc3Nlcyk7XHJcbiAgfVxyXG5cclxuICBzZXRBdHRycyhhdHRycyA9IHt9KSB7XHJcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW25hbWVdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NlcyhjbGFzc2VzID0gW10pIHtcclxuICAgIGNsYXNzZXMuZm9yRWFjaChpdGVtID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNsYXNzZXMoY2xhc3NlcyA9IFtdKSB7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goaXRlbSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgb24obmFtZSwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGdldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9jaztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHB1YmxpYy9jb21wb25lbnRzL2Jsb2NrL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);