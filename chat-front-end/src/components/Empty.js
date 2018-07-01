import React, { Component } from 'react';
import '../assets/Empty.css';

export default class Empty extends Component {
  render() {
    const { name } = this.props.user;

    return (
      <div>
        {name}, there's nothing to see here...
      </div>
    );
  }
}