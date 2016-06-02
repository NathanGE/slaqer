import React from 'react';
import {connect} from 'react-redux';
import signOut from '../actions/signOut';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import history from '../helpers/history';
import ChatPane from '../components/ChatPane';
import avatar from '../../img/avatar.png';

const mapStateToProps = (state) => {
  return {
    "currentUser": state.currentUser,
    "users": state.users
  }
};

@connect(mapStateToProps,
  dispatch => ({
    ... bindActionCreators({signOut}, dispatch)
  })
)

export default class ChatWindow extends React.Component {
  render() {
    const messages = [
      {
        id: 1,
        nickname: "marco",
        time: "11:15AM",
        messages: ["Happy Monday Everyone", "Hope everyone is awesome"],
        avatar_url: avatar
      },
      {
        id: 2,
        nickname: "ken",
        time: "11:16AM",
        messages: ["Sup, Marco?"],
        avatar_url: avatar
      },
      {
        id: 3,
        nickname: "takehiro",
        time: "11:19AM",
        messages: ["Hi Everyone!"],
        avatar_url: avatar
      }
    ];

    return (
      <ChatPane
        signOut={() => {this.signOut();}}
        users={this.props.users}
        currentUser={this.props.currentUser}
        messages={messages}
      />
    );
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isNumber(nextProps.currentUser.id)) {
      history.pushState(null, "/");
    }
  }

  signOut() {
    this.props.signOut(this.props.currentUser);
  }
}
