import React, { Component } from 'react';
import SessionList from '../SessionList';
import Chat from '../Chat';
import {SessionUsersState} from "../../types";


interface SessionChatProps {
    ChatIndex: number;
    MessageList: string[],
    SessionUsers: SessionUsersState,
    switch_chat: (idx:number, user: object)=> void,
    session_users:()=>void,
}

export default class ChatBox extends Component<SessionChatProps> {
  render() {
    const {ChatIndex, MessageList,SessionUsers, switch_chat, session_users} = this.props;
    return (
      <React.Fragment>
        <SessionList ChatIndex={ChatIndex} MessageList={MessageList} SessionUsers={SessionUsers} switch_chat={switch_chat}  session_users={session_users}/>
        <Chat />
      </React.Fragment>
    );
  }
}
