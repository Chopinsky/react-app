import React, { Component } from 'react';
import '../assets/Input.css';
import store from '../store/index';
import { sendNewMessage, setTypingValue } from '../store/action';

export default class input extends Component {
  handleTyping = (evt) => {
    store.dispatch(setTypingValue(evt.target.value));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    store.dispatch(sendNewMessage(this.props.value, this.props.activeUserId, true));
  };

  render() {  
    return (
      <form className="input" onSubmit={this.handleSubmit}>
        <input
          className="field"
          placeholder="Write a message..."
          onChange={this.handleTyping}
          value={this.props.value}
        />
      </form>
    );
  }
}
