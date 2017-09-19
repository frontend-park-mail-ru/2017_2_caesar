class Login {
  constructor(domNode) {
    this.domNode = domNode;

    console.log('yes_no');
  }

  hide() {
    this.domNode.setAttribute('hidden', 'hidden');
  }

  show() {
    this.domNode.removeAttribute('hidden');
  }
}

export default Login;
