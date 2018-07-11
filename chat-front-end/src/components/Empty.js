import React, { Component } from "react";
import "../assets/Empty.css";

export default class Empty extends Component {
  render() {
    const { name, profileURL, status } = this.props.user;
    const firstName = name.split(" ")[0];

    return (
      <div className="empty">
        <h1 className="emptyName">Welcome, {firstName}</h1>
        <img className="emptyProfile" src={profileURL} alt={name} />
        <p className="emptyStatus">
          <b>Status: </b>{status}
        </p>
        <button className="emptyBtn">Start a conversation</button>
        <p className="emptyInfo">
          Search for someone to start chatting with or go to Contacts to see who is available
        </p>
      </div>
    );
  }
}
