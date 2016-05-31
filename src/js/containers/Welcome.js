import React from 'react';
import _ from 'lodash';
import history from '../helpers/history';
import axios from 'axios';
import urlFor from '../helpers/urlFor';
import {connect} from 'react-redux';

@connect()

export default class Welcome extends React.Component {
  componentWillMount() {
    const messages = [
      "You are awesome!",
      "Always get plenty of sleep if you can!",
      "Sometimes you eat the bear, and sometimes... well, the bear eats you.",
      "Make every day better than the last, especially this one!"
    ];

    this.message =  _.sample(messages);

    const url = urlFor("/users");
    const result = axios.get(url);
    this.props.dispatch({
      type: "SET_USERS",
      payload: result
    });
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
