import React, { Component } from 'react';
import './SessionList.css';

interface SessionChatProps {
    count: number;
    session_chat: () => void;
}

export default class SessionList extends Component<SessionChatProps> {

    render() {
        const {session_chat, count} = this.props;
        console.log('SessionList render',session_chat, count);
        return (
            <div className="sidebar-group">
                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>
                <ul className="people">
                    <li className="person active" onClick={session_chat}>
                        <img src="/image/avatar.png" alt="" />
                        <span className="name">zanewang(王振)</span>
                        <span className="time">刚刚</span>
                        <span className="preview">暂时没有对vscode二次开发</span>
                    </li>
                    <li className="person">
                        <img src="/image/avatar.png" alt="" />
                        <span className="name">zanewang(王振)</span>
                        <span className="time">1分钟前</span>
                        <span className="preview">暂时没有对vscode二次开发</span>
                    </li>
                </ul>
            </div>
        );
    }
}
