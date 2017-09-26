import Http from '../modules/http.js';

class UserService {
  signup(userData) {
    return Http.post('/reg', userData);
  }

  login(userData) {
    return Http.post('/auth', userData);
  }

  logout() {
    return Http.post('/logout', {});
  }

  getData() {
    return Http.post('/info', {});
  }

  loadUsersList() {
    return Http.post('/allUsers');
  }
}

export default UserService;
