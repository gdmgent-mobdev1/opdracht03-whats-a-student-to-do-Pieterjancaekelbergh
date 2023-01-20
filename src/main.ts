import './css/style.css';
import { LoginComponent } from './Components';
import './lib/firebase';

const login = new LoginComponent();
const appContainer = document.querySelector<HTMLDivElement>('#app')!;

appContainer.appendChild(login.render());
