import React from 'react';

export default class ChatPane extends React.Component {
  render() {
    return (
      <div className="chat-window">
        <div className="side-pane">
          <div className="team-name">
            Slaqer
          </div>

          <div className="green-circle">
          </div>
          <div className="my nickname">
            Ken
          </div>

          <div className="channels">
            <div className="header">
              CHANNELS
              <span className="number">(1)</span>
            </div>
            <div className="channelList">
              <div className="channel selected">
                <div className="hashtag"> # </div>
                <div className="channelName">
                  general
                </div>
              </div>
            </div>
          </div>

          <div className="users">
            <div className="header">
              USERS
              <span className="number">(204)</span>
            </div>
            <div className="user-status">
              <div className="green-circle"></div>
              <div className="nickname">marco</div>
            </div>
            <div className="user-status">
              <div className="green-circle"></div>
              <div className="nickname">ken</div>
            </div>
            <div className="user-status">
              <div className="inactive-circle"></div>
              <div className="nickname inactive">takehiro</div>
            </div>
          </div>
        </div>

        <div className="pull-left">
          <h2 className="text-center">Hello Signed In User</h2>
          <p onClick={() => { this.props.signOut(); }}>Sign Out</p>
        </div>
      </div>
    );
  }
}