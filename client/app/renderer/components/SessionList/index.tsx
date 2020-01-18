import React, { Component } from 'react';
import './SessionList.css';
import {SessionUsersState} from "../../types";


interface SessionChatProps {
    ChatIndex: number,
    // MessageList: SessionUsersState,
    SessionUsers:SessionUsersState,
    switch_chat: (idx:number, user: object)=>void | undefined,
    session_users: ()=>void,
}

export default class SessionList extends Component<SessionChatProps> {

    componentDidMount(): void {
        const {session_users} = this.props;
        session_users();
    }

    render() {

        const {SessionUsers, switch_chat, ChatIndex} = this.props;

        return (
            <div className="sidebar-group">
                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>
                <ul className="people">

                    {
                        Object.keys(SessionUsers).map((index)=>{
                            let user:object = SessionUsers[index];
                            let idx:number = parseInt(index);
                            return (
                                <li className={idx == ChatIndex ? 'person active' : 'person'} onClick={()=> switch_chat(idx, user)} key={index}>
                                    <img src={user['avatar']} alt="" />
                                    <span className="name">{user['name']}</span>
                                    <span className="time">{user['time']}</span>
                                    <span className="preview">{user['lastMessage']}</span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}
