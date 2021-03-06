import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

const render = () => {
  return ReactDOM.render(<App />, document.getElementById('root'));
}

render();
store.subscribe(render);

registerServiceWorker();
