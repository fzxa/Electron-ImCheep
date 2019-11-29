import React, { Component } from 'react';
import SessionList from '../SessionList';
import Chat from '../Chat';


interface Props {
    switchSessionChst: () => void;
}

export default class ChatBox extends Component<Props> {
  render() {
    const {switchSessionChst} = this.props;
    console.log('chatbox ', switchSessionChst);
    return (
      <React.Fragment>
          <p onClick={switchSessionChst}>session chat</p>
        <SessionList />
        <Chat />
      </React.Fragment>
    );
  }
}
