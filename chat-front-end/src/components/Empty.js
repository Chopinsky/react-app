import React, { Component } from "react";
import "../assets/Empty.css";

export default class Empty extends Component {
  render() {
    const { name, profileURL, status } = this.props.user;
    const firstName = name.split(" ")[0];

    return (
      <div className="empty">
        <h1 className="name">Welcome, {firstName}</h1>
        <img className="profile" src={profileURL} alt={name} />
        <p className="status">
          <b>Status: </b>
          {status}
        </p>
        <button className="button">
          Start a conversation
          <p className="info">
            Search for someone to start chatting with or go to Contacts to see
            who is available
          </p>
        </button>
      </div>
    );
  }
}
