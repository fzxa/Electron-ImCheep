import React, { Component } from 'react';
import SidebarGropup from '../SidebarGroup';
import Chat from '../Chat';
export default class ChatBox extends Component {
  render() {
    return (
      <React.Fragment>
        <SidebarGropup />
        <Chat />
      </React.Fragment>
    );
  }
}
