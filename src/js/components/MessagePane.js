import React from 'react';
import Message from './Message';
import avatar from '../../img/avatar.png';

export default class MessagePane extends React.Component {
  render() {

    const messageJsx = this.props.messages.map((message, index) => {
      return (
        <Message
          nickname={message.nickname}
          time={message.time}
          messages={message.messages}
          key={index}
          avatar_url={message.avatar_url}
        />
      );
    });

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

          <div className="messageList row container-fluid">
            {messageJsx}
          </div>
        </div>
      </div>
    );
  }
}
