import React from 'react';
import Message from './Message';
import avatar from '../../img/avatar.png';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default class MessagePane extends React.Component {
  render() {
    return (
      <div className="message-pane container-fluid">
        <div className="header row">
          <span className="hashtag">#</span>
          <div className="channelName">
            general
          </div>
          <div className="right-side">
            <i className="glyphicon glyphicon-user"></i>
            <span className="activeUsers">{this.props.userCount}</span>
            <i className="glyphicon glyphicon-log-out" onClick={() => {this.props.signOut();}}></i>
          </div>

          <MessageList
            messages={this.props.messages}
          />
        </div>
        <MessageInput 
          addMessage={this.props.addMessage}
        />
      </div>
    );
  }
}
