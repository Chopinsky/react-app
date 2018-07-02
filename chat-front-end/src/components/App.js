import React, { Component } from 'react';
import '../assets/App.css';
import store from '../store/index';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  render() {
    const state = store.getState();

    return (
      <div className="app">
        <Sidebar contacts={state.contacts} />
        <Main user={state.user} activeUserId={state.activeUserId} />
      </div>
    );
  }
}

export default App;
