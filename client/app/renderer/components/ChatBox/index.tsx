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
      console.log('chatbox render',this.props);
    return (
      <React.Fragment>
          <p onClick={session}>session{count}</p>
        <SessionList session_chat={session} count={1}/>
        <Chat />
      </React.Fragment>
    );
  }
}
