import React, { Component } from 'react';
import '../assets/Contact.css';
import store from '../store/index';
import { setActiveUser } from '../store/action';

export default class Contact extends Component {
  handleUserClick = (user) => {
    store.dispatch(setActiveUser(user));
  };

  render() {
    const { name, profileURL, status } = this.props.user;

    return (
      <div className="user" onClick={_ => this.handleUserClick(this.props.user)}>
        <img src={profileURL} alt={name} className="userPic" />
        <div className="userDetails">
          <p className="userName">{name}</p>
          <p className="userStatus">{status}</p>
        </div>
      </div>
    );
  }
}