import React, { Component } from "react";
import "../assets/Main.css";
import Empty from "./Empty";
import Chat from "./Chat";

export default class Main extends Component {
  render() {
    const { activeUser, messages, user } = this.props;

    return (
      <main className="main">
        {activeUser ? (
          <Chat activeUser={activeUser} messages={messages} />
        ) : (
          <Empty user={user} />
        )}
      </main>
    );
  }
}
