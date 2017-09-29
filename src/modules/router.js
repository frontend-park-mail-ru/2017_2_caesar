class Router {
  constructor() {
    if (Router.instance) {
      return Router.instance;
    }

    this.routes = {};

    Router.instance = this;
  }

  register(route, view) {
    this.routes[route] = view;
  }

  getViewByRoute(href) {
    return this.routes[href];
  }

  start() {
    this.go(window.location.pathname);
  }

  go(path) {
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
}

export default Router;
