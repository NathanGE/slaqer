import React from 'react';
import SidePane from './SidePane';

export default class ChatPane extends React.Component {
  render() {
    return (
      <div className="chat-window">
        <SidePane users={this.props.users} />
        <div className="pull-left">
          <h2 className="text-center">Hello Signed In User</h2>
          <p onClick={() => { this.props.signOut(); }}>Sign Out</p>
        </div>
      </div>
    );
  }
}
