import React, { Component } from 'react';
import '../assets/App.css';
import logo from '../assets/logo.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);

    var start = new Date().getTime(), expire = 1000 + start;
    while (new Date().getTime() < expire) { }

    console.log("Loading done...");
  } 

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React Playground</h1>
        </header>
      </div>
    );
  }
}