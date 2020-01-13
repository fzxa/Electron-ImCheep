import React, { Component } from 'react';
import './SessionList.css';


interface SessionChatProps {
    ChatIndex: number,
    MessageList: [],
    switch_chat: ()=>void,
    session_users: ()=>void,
}

export default class SessionList extends Component<SessionChatProps> {

    componentDidMount(): void {
        const {session_users} = this.props;
        session_users();
    }

    render() {
        // console.log(test);
        const {ChatIndex, MessageList, switch_chat, session_users} = this.props;
        console.log(ChatIndex, MessageList, switch_chat, session_users);

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
