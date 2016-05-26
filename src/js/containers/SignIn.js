import React from 'react';
import SignInForm from '../components/SignInForm';
import {connect} from 'react-redux';
import getParams from '../helpers/getParams';
import signIn from '../actions/signIn';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    "signin": getParams(state.form.signin, ['email', 'password'])
  }
};

@connect(
  mapStateToProps,
  dispatch => ({
    ... bindActionCreators ({signIn}, dispatch)
  })
)

export default class SignIn extends React.Component {
  submit(e) {
    const signInAttributes = {
      user: {
        email: this.props.signin.email,
        password: this.props.signin.password
      }
    };

    this.props.signIn(signInAttributes);

    e.preventDefault();
  }
  
  render() {
    return (
      <SignInForm 
        submit={ (e) => {this.submit(e); }}
      />
    );
  }
}
