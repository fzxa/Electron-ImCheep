import React, { Component } from 'react';
import './SessionList.css';
import {SessionUsersState} from "../../types";
// import {SessionUsersState} from "../../types";


interface SessionChatProps {
    ChatIndex: number,
    MessageList: string[],
    SessionUsers:SessionUsersState,
    switch_chat: ()=>void,
    session_users: ()=>void,
}

export default class SessionList extends Component<SessionChatProps> {

    componentDidMount(): void {
        const {session_users, SessionUsers} = this.props;
        session_users();
        console.log('session users------', this.props, SessionUsers);
    }

    render() {
        // console.log(test);
        const {SessionUsers, switch_chat} = this.props;
       console.log('render ....',SessionUsers);

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

                    {/*<li className="person" onClick={switch_chat}>*/}
                        {/*<img src="/image/avatar.png" alt="" />*/}
                        {/*<span className="name">zanewang(王振)</span>*/}
                        {/*<span className="time">刚刚</span>*/}
                        {/*<span className="preview">暂时没有对vscode二次开发</span>*/}
                    {/*</li>*/}

                    {/*<li className="person" onClick={switch_chat}>*/}
                        {/*<img src="/image/avatar.png" alt="" />*/}
                        {/*<span className="name">zanewang(王振)</span>*/}
                        {/*<span className="time">刚刚</span>*/}
                        {/*<span className="preview">暂时没有对vscode二次开发</span>*/}
                    {/*</li>*/}

                </ul>
            </div>
        );
    }
}
