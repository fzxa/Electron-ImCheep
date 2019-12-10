import React, { Component } from 'react';
import './SessionList.css';

import websqlService from '../../service/websqlService';

interface SessionChatProps {
    ChatIndex: number,
    MessageList: [],
    switch_chat: ()=>void,
}

export default class SessionList extends Component<SessionChatProps> {

    render() {
        let test: any = new websqlService();
        console.log(test);
        const {ChatIndex, MessageList, switch_chat } = this.props;
        console.log(ChatIndex, MessageList, switch_chat);

        return (
            <div className="sidebar-group">
                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>
                <ul className="people">

                    <li className="person active" onClick={switch_chat}>
                        <img src="/image/avatar.png" alt="" />
                        <span className="name">zanewang(王振)</span>
                        <span className="time">刚刚</span>
                        <span className="preview">暂时没有对vscode二次开发</span>
                    </li>

                </ul>
            </div>
        );
    }
}
