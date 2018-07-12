import React, { Component } from 'react';
import '../assets/Message.css';

const Message = ({ message }) => {
  console.log(message);
  return (
    <header className="message">
      {message.text}
    </header>
  );
};

export default Message;