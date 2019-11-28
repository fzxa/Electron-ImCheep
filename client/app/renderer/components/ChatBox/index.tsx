import React, { Component } from 'react';
import SessionList from '../SessionList';
import Chat from '../Chat';
export default class ChatBox extends Component {
  render() {
    return (
      <React.Fragment>
        <SessionList />
        <Chat />
      </React.Fragment>
    );
  }
}
