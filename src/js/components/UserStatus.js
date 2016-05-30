import React from 'react';

export default class UserStatus extends React.Component {
  render() {
    const circleClass = this.props.status === 'active' ? 'green-circle' : 'inactive-circle';
    const nicknameClass = this.props.status === 'active' ? 'nickname' : 'nickname inactive';

    return (
      <div className="user-status">
        <div className={circleClass}></div>
        <div className={nicknameClass}>{this.props.nickname}</div>
      </div>
    );
  }
}
