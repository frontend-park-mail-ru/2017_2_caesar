import Ws from 'Modules/ws';

class Router {
  constructor() {
    if (Router.instance) {
      return Router.instance;
    }

    this.routes = {};

    this.loginned = false;

    Router.instance = this;
  }

  register(route, view) {
    this.routes[route] = view;
  }

  getViewByRoute(href) {
    return this.routes[href];
  }

  start() {
    window.onpopstate = () => {
      this.onRoute(window.location.pathname);
    };

    this.onRoute(window.location.pathname);
  }

  go(path) {
    if (this.onRoute(path)) {
      window.history.pushState({}, '', path);
    }
  }

  onRoute(path) {
    // if (!this.loginned) {
    //   if (path !== '/login/' && path !== '/signup/') {
    //     path = '/login/';
    //     window.history.pushState({}, '', path);
    //   }
    // }

    const view = this.getViewByRoute(path);

    if (!view) {
      return false;
    }

    if (this.currentView === view) {
      return true;
    }

    if (this.currentView) {
      this.currentView.hide();
    }

    this.currentView = view;
    this.currentView.show();

    return true;
  }

  login() {
    this.ws = new Ws();

    this.loginned = true;
  }

  unlogin() {
    this.loginned = false;
  }

  isLoginned() {
    return this.loginned;
  }
}

export default Router;
