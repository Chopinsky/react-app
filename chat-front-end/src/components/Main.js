import React, { Component } from 'react';
import '../assets/Main.css';
import Empty from './Empty';
import Chat from './Chat';

export default class Main extends Component {
  render() {
    const { activeUserId, user } = this.props;

    return (
      <main className="main">
        {
          activeUserId
            ? <Chat activeUserId={activeUserId} />
            : <Empty user={user}/>
        }        
      </main>
    );
  }
}