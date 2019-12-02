import React, { Component } from 'react';
import SessionList from '../SessionList';
import Chat from '../Chat';

interface SessionChatProps {
    count: number;
    session: () => void;
    switch_chat: () => void;
}

export default class ChatBox extends Component<SessionChatProps> {
  render() {
      const {session, count, switch_chat} = this.props;
    return (
      <React.Fragment>
        <SessionList session={session} count={count} switch_chat={switch_chat}/>
        <Chat />
      </React.Fragment>
    );
  }
}
