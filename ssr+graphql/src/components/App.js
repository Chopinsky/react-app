import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import { Main } from "./Main";
import ControlButton from "./ControlButton";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React Playground</h1>
        </header>
        <Main className="app-intro">
          <ControlButton
            isPrimary={true}
            message={"You clicked the primary button!"}
          />
          <ControlButton 
            isPrimary={false}
            message={"You clicked the secondary button!"}
          />
        </Main>
      </div>
    );
  }
}

export default App;
