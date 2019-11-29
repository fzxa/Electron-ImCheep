import React, { Component } from 'react';
import SessionList from '../SessionList';
import Chat from '../Chat';

interface SessionChatProps {
    count: number;
    session: () => void;
}

export default class ChatBox extends Component<SessionChatProps> {
  render() {
      const {session, count} = this.props;
    return (
      <React.Fragment>
        <SessionList session={session} count={count}/>
        <Chat />
      </React.Fragment>
    );
  }
}
