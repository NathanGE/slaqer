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
    "users": state.users,
    "messages": state.messages
  }
};

@connect(mapStateToProps,
  dispatch => ({
    ... bindActionCreators({signOut}, dispatch)
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
