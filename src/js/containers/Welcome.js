import React from 'react';
import _ from 'lodash';
import history from '../helpers/history';
import {connect} from 'react-redux';
import loadUsers from '../actions/loadUsers';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => {
  return {};
};

@connect(
  mapStateToProps,
  dispatch => ({
    ...bindActionCreators({loadUsers}, dispatch)
  })
)

export default class Welcome extends React.Component {
  componentWillMount() {
    const messages = [
      "You are awesome!",
      "Always get plenty of sleep if you can!",
      "Sometimes you eat the bear, and sometimes... well, the bear eats you.",
      "Make every day better than the last, especially this one!"
    ];

    this.message =  _.sample(messages);
    this.props.loadUsers();
  }

  componentDidMount() {
    setTimeout(() => {
      history.pushState(null, "messages");
    }, 2000);
  }

  render() {
    return (
      <div className="loading">
        <h2 className="text-center">
          Loading...
        </h2>

        <h3 className="text-center">
          {this.message}
        </h3>
      </div>
    );
  }
  
}
