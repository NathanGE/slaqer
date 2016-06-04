import React from 'react';
import Message from './Message';
import ReactDOM from 'react-dom';

export default class MessageList extends React.Component {
  componentWillUpdate() {
    var currentNode = ReactDOM.findDOMNode(this);
    const scrollHeight = currentNode.scrollTop + currentNode.clientHeight;
    this.shouldScrollBottom = scrollHeight >= currentNode.scrollHeight;
  }
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }
  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const messages = this.props.messages.map( (message, index) => {
      return (
        <Message 
          nickname={message.nickname}
          time={message.time}
          messages={message.messages}
          key={index}
          avatar_url={message.avatar_url}
        />
      );
    });

    return (
      <div className="messageList row container-fluid">
        {messages}
      </div>
    );
  }
}
