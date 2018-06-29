import React, { Component } from 'react';
import '../assets/App.css';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
