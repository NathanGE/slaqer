import React from 'react';
import _ from 'lodash';

export default class Welcome extends React.Component {
  componentWillMount() {
    const messages = [
      "You are awesome!",
      "Always get plenty of sleep if you can!",
      "Sometimes you eat the bear, and sometimes... well, the bear eats you.",
      "Make every day better than the last, especially this one!"
    ];

    this.message =  _.sample(messages);
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
