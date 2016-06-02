import React from 'react';
import avatar from '../../img/avatar.png';

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

          {/* hard coded messages */}
          <div className="messageList row container-fluid">
            
            <div className="message row">
              <div className="avatar">
                <img src={avatar} />
              </div>
              <div className="text">
                <div className="top-message">
                  marco
                  <span className="time">
                    11:15AM
                  </span>
                </div>
              </div>
              <p>
                Happy Monday Everyone
              </p>
              <p>
                Hope everyone is awesome
              </p>
            </div>
            
            <div className="message row">
              <div className="avatar">
                <img src={avatar} />
              </div>
              <div className="text">
                <div className="top-message">
                  ken
                  <span className="time">
                    11:16AM
                  </span>
                </div>
              </div>
              <p>
                Sup, Marco?
              </p>
            </div>

            <div className="message row">
              <div className="avatar">
                <img src={avatar} />
              </div>
              <div className="text">
                <div className="top-message">
                  takehiro
                  <span className="time">
                    11:19AM
                  </span>
                </div>
              </div>
              <p>
                Hello Everyone
              </p>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
