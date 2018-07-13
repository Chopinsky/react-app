import React from 'react';
import '../assets/Message.css';

const Message = ({ message }) => {
  const { text, isUserMsg } = message;
  const cssClass = isUserMsg ? "message userMsg" : "message";

  return (
    <span className={cssClass}>
      {text}
    </span>
  );
};

export default Message;