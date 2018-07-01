import React, { Component } from 'react';
import '../assets/Sidebar.css';
import Contact from './Contact';

export default class Sidebar extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <aside className="sidebar">
        {
          (contacts && contacts.length > 0)
            ? contacts.map((contact) => {
                return <Contact user={contact} key={contact.userId} />
              })
            : <p>No active cntact is found...</p>
        }
      </aside>
    );
  }
}