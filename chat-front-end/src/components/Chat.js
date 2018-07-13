import React, { Component } from 'react';
import '../assets/Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import Input from './Input';

export default class Chat extends Component {
  chatRefs = React.createRef();

  scrollToBottom = () => {
    this.chatRefs.current.scrollTop = this.chatRefs.current.scrollHeight;
  };
  
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { activeUser, messages, typing } = this.props;

    return (
      <div className="chat">
        <ChatHeader user={activeUser} />
        <div className="chats" ref={this.chatRefs}>
          {
            (!!messages && messages.length > 0)
            ? messages.map(msg => {
                return <Message key={msg.number} message={msg} />
              })
            : <div>No conversation history...</div>
          }
        </div>
        <div className="input">
          <Input activeUserId={activeUser.userId} value={typing} />
        </div>
      </div>
    );
  }
}