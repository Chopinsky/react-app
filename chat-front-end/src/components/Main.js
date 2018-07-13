import React, { Component } from "react";
import "../assets/Main.css";
import Empty from "./Empty";
import Chat from "./Chat";

export default class Main extends Component {
  render() {
    const { activeUser, user } = this.props;

    return (
      <main className="main">
        {activeUser ? (
          <Chat {...this.props} />
        ) : (
          <Empty user={user} />
        )}
      </main>
    );
  }
}
