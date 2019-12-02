import React, { Component } from 'react';
import SessionList from '../SessionList';
import Chat from '../Chat';

interface SessionChatProps {
    ChatIndex: number;
    MessageList: [],
    switch_chat: ()=> void;
}

export default class ChatBox extends Component<SessionChatProps> {
  render() {
    const {ChatIndex, MessageList, switch_chat} = this.props;
    return (
      <React.Fragment>
        <SessionList ChatIndex={ChatIndex} MessageList={MessageList} switch_chat={switch_chat}/>
        <Chat />
      </React.Fragment>
    );
  }
}
