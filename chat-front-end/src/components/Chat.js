import React, { Component } from 'react';
import '../assets/Chat.css';

export default class Chat extends Component {
  render() {
    const { activeUserId } = this.props;

    return (
      <div className="chat">
        Conversation for user id: {activeUserId}
      </div>
    );
  }
}