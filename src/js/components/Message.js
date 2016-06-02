import React from 'react';

export default class Message extends React.Component {
  render() {
    const messageJsx = this.props.messages.map((message, index) => {
      return <p key={index}>{message}</p>;
    });
    return (
      <div className="message row">
        <div className="avatar">
          <img src={this.props.avatar_url}/>
        </div>

        <div className="text">
          <div className="top-message">
            {this.props.nickname}
            <span className="time">
              {this.props.time}
            </span>
          </div>
        </div>
        {messageJsx}
      </div>
    );
  }
}