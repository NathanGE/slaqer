import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';

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

@connect(mapStateToProps);

class SignUp extends React.Component {
  submit(e) {
    console.log(this.props.signup);
    e.preventDefault();
  }
  render() {
    const {fields: {email, nickname, password}} = this.props;

    return (
      <div className="card col-xs-6 col-xs-offset-3">
        <h1 className="text-center">
          Sign up for Slaqer
        </h1>

        <form className="sign-up-form text-center" onSubmit={(e) => {this.submit(e);} }>
          <div className="col-xs-6 col-xs-offset-3">
            <label>Enter Your <strong>Nickname</strong></label>
            <input type="text" className="form-control" placeholder="Nickname" { ...nickname }/>
            <label>Enter Your <strong>Email</strong></label>
            <input type="text" className="form-control" placeholder="Email" { ...email } />
            <label>Enter Your <strong>Password</strong></label>
            <input type="text" className="form-control" placeholder="Password" { ...password } />

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

SignUp = reduxForm({
  form: 'signup',
  fields: ['nickname', 'email', 'password']
})(SignUp);

export default SignUp;
