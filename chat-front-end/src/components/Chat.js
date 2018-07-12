import React, { Component } from 'react';
import '../assets/Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';

export default class Chat extends Component {
  render() {
    const { activeUser, messages } = this.props;

    return (
      <div className="chat">
        <ChatHeader user={activeUser} />
        {
          (!!messages && messages.length > 0)
          ? messages.map(msg => {
              return <Message key={msg.number} message={msg} />
            })
          : <div>No conversation history...</div>
        }
      </div>
    );
  }
}