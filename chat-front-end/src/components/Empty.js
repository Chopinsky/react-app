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
      </div>
    );
  }
}
