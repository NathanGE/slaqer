import React from 'react';

export default class ChatWindow extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Hello, Signed In User</h2>
        <p onClick={() => { this.signOut(); }}>Sign Out</p>
      </div>
    );
  }

  signOut() {
    localStorage.removeItem("currentUser");
  }
}
