import React from 'react';

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="card col-xs-6 col-xs-offset-3">
        <h1 className="text-center">
          Sign up for Slaqer
        </h1>

        <form className="sign-up-form text-center">
          <div className="col-xs-6 col-xs-offset-3">
            <label>Enter Your <strong>Nickname</strong></label>
            <input type="text" className="form-control" placeholder="Nickname"/>
            <label>Enter Your <strong>Email</strong></label>
            <input type="text" className="form-control" placeholder="Email"/>
            <label>Enter Your <strong>Password</strong></label>
            <input type="text" className="form-control" placeholder="Password"/>

            <button type="submit" className="btn btn-block btn-primary">Create Account</button>
          </div>
          <br className="clear" />
          <div className="text-center orSignIn">
            <a href="javascript:void(0);">Sign In</a>
          </div>
        </form>
      </div>
    );
  }
}