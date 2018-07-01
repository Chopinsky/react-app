import React, { Component } from 'react';
import '../assets/Main.css';
import Empty from './Empty';

export default class Main extends Component {
  render() {

    return (
      <main className="main">
        <Empty user={this.props.user}/>
      </main>
    );
  }
}