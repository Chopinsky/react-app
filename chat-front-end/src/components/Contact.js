import React, { Component } from 'react';
import '../assets/Contact.css';

export default class Contact extends Component {
  render() {
    const { name, profileURL, status } = this.props.user;

    return (
      <div className="user">
        <img src={profileURL} alt={name} className="userPic" />
        <div className="userDetails">
          <p className="userName">{name}</p>
          <p className="userStatus">{status}</p>
        </div>
      </div>
    );
  }
}