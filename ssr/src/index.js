import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const bundle = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.hydrate(
  bundle, 
  document.getElementById('root')
);

registerServiceWorker();
