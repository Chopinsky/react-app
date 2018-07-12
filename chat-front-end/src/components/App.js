import React, { Component } from 'react';
import '../assets/App.css';
import store from '../store/index';
import { getMessages } from '../store/action';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  render() {
    const state = store.getState();
    var messages = [];

    if (state.messages && state.activeUser)
    {
      messages = state.messages[state.activeUser.userId];
    }

    return (
      <div className="app">
        <Sidebar contacts={state.contacts} />
        <Main user={state.user} activeUser={state.activeUser} messages={messages} />
      </div>
    );
  }
}

export default App;
