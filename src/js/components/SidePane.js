import React from 'react';
import UserStatus from './UserStatus';

export default class SidePane extends React.Component {
  render() {
    const usersJsx = this.props.users.map((user, index) => {
      return (
        <UserStatus 
          status={user.status}
          nickname={user.nickname}
          key={user.id}
        />
      );
    });

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
          {usersJsx}
        </div>
      </div>
    );
  }
}
