import React from 'react';
import UserStatus from './UserStatus';

export default class SidePane extends React.Component {
  render() {
    return (
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
          <UserStatus status="active" nickname="marco"/>
          <UserStatus status="active" nickname="ken"/>
          <UserStatus status="inactive" nickname="takehiro"/>
        </div>

      </div>
    );
  }
}
