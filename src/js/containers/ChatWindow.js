import React from 'react';
import {connect} from 'react-redux';
import signOut from '../actions/signOut';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import history from '../helpers/history';
import ChatPane from '../components/ChatPane';

const mapStateToProps = (state) => {
  return {
    "currentUser": state.currentUser
  }
};

@connect(mapStateToProps,
  dispatch => ({
    ... bindActionCreators({signOut}, dispatch)
  })
)

export default class ChatWindow extends React.Component {
  render() {
    const users = [
      {status: 'active', nickname: 'marco', id: 1},
      {status: 'active', nickname: 'ken', id: 2},
      {status: 'inactive', nickname: 'takehiro', id: 3}
    ];

    return (
      <ChatPane
        signOut={() => {this.signOut();}}
        users={users}
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
