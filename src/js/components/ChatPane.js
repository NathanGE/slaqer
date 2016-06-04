import React from 'react';
import SidePane from './SidePane';
import MessagePane from './MessagePane';

export default class ChatPane extends React.Component {
  render() {
    return (
      <div className="chat-window">
        <SidePane 
          users={this.props.users}
          currentUser={this.props.currentUser}
        />
        <MessagePane
          signOut={this.props.signOut}
          userCount={this.props.users.length}
          messages={this.props.messages}
          addMessage={this.props.addMessage}
        />
      </div>
    );
  }
}
