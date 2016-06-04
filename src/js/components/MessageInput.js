import React from 'react';
import {reduxForm} from 'redux-form';

class MessageInput extends React.Component {
  render() {
    return (
      <form onSubmit={(e) => {this.submit(e)}} >
        <input type="text" id="textbox" {...this.props.fields.message} />
      </form>
    );
  }
  submit(e) {
    this.props.resetForm();
    this.props.addMessage();
    e.preventDefault();
  }
}

MessageInput = reduxForm({
  form: 'chatMessage',
  fields: ['message']
})(MessageInput);

export default MessageInput;
