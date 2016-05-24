import React from 'react';
import SignInForm from '../components/SignInForm';
import {connect} from 'react-redux';
import getParams from '../helpers/getParams';

const mapStateToProps = (state) => {
  return {
    "signin": getParams(state.form.signin, ['email', 'password'])
  }
};

@connect(mapStateToProps)

export default class SignIn extends React.Component {
  submit(e) {
    console.log(this.props.signin);
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
