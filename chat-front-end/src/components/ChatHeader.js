import React from 'react';
import '../assets/ChatHeader.css';

const ChatHeader = ({ user }) => {
  const { name, status } = user;

  return (
    <header className="header">
      <h1 className="headerName">{name}</h1>
      <p className="headerStatus">{status}</p>
    </header>
  );
};

export default ChatHeader;