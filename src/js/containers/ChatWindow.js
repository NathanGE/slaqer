import React from 'react';
import {connect} from 'react-redux';
import signOut from '../actions/signOut';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import history from '../helpers/history';
import ChatPane from '../components/ChatPane';
import avatar from '../../img/avatar.png';
import getParams from '../helpers/getParams';
import addMessage from '../actions/addMessage';

const mapStateToProps = (state) => {
  return {
    "currentUser": state.currentUser,
    "users": state.users,
    "messages": state.messages,
    "chatMessage": getParams(state.form.chatMessage, ['message'])

  }
};

@connect(mapStateToProps,
  dispatch => ({
    ... bindActionCreators({ signOut, addMessage }, dispatch)
  })
)

export default class ChatWindow extends React.Component {
  render() {
    return (
      <ChatPane
        signOut={() => {this.signOut();}}
        users={this.props.users}
        currentUser={this.props.currentUser}
        messages={this.props.messages}
        addMessage={() => { this.addMessage(); }}
      />
    );
  }

  componentWillReceiveProps(nextProps) {
    if(! _.isNumber(nextProps.currentUser.id)) {
      history.pushState(null, "/");
    }
  }

  addMessage() {
    const chatMessage = {
      chat_message: {
        body: this.props.chatMessage.message
      }
    };

    this.props.addMessage(
      chatMessage,
      this.props.currentUser
    );
  }

  signOut() {
    this.props.signOut(this.props.currentUser);
  }
}
