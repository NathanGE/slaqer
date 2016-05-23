import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import axios from 'axios';
import history from '../helpers/history';
import SignUpForm from '../components/SignUpForm';

const getParams = (form, fields) => {
  if(form === undefined) {
    return {};
  }
  let params = {};
  for(let field of fields) {
    const fieldValue = form[field];
    if(fieldValue) {
      params[field] = fieldValue.value;
    } else {
      params[field] = '';
    }
  }
  return params;
};

const mapStateToProps = (state) => {
  return {
    "signup" : getParams(state.form.signup, ['nickname', 'email', 'password'])
  };
}

@connect(mapStateToProps)

export default class SignUp extends React.Component {
  submit(e) {
    const userAttributes = {
      user: {
        nickname: this.props.signup.nickname,
        email:    this.props.signup.email,
        password: this.props.signup.password
      }
    };

    const url = "http://slackr-api.thefirehoseproject.com/33c638d9ddd88eac2fdc/users";
    const result = axios.post(url, userAttributes);
    this.props.dispatch({
      type: "LOAD_CURRENT_USER",
      payload: result
    });

    history.pushState(null, "messages");
    e.preventDefault();
  }
  render() {
    return (
      <SignUpForm submit={(e) => {this.submit(e); }} />
    );
  }
}
