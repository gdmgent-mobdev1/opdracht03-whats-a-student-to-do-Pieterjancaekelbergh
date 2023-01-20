import Component from '../lib/Component';
import Elements from '../lib/Elements';

class LoginComponent extends Component {
  constructor() {
    super({
      name: 'Login',
      model: {},
    });
  }
}


render() {
  const loginContainer = document.createElement('div');
  loginContainer.appendChild(
    Elements.createHeader({
      textContent: 'welkom to this page',
    }),
  );
  return loginContainer;
}

export default LoginComponent;