import React, { Component } from 'react';
import './Chat.css';
export default class NavGroup extends Component {
    render() {
        return (
            <div className="chat">
                <div className="chat-header">
                    <span> <span className="name">王振（Fzxa）</span></span>
                </div>
                <div className="chat-body">
                    <div className="chat-active" data-chat="person1">
                        <div className="conversation-start">
                            <span>Today, 6:48 AM</span>
                        </div>
                        <div className="bubble you">
                            How are you,
                        </div>
                        <div className="bubble me">
                            Im fine, Think you ,and you?
                        </div>
                        <div className="bubble you">
                            Im fint too
                        </div>
                        <div className="bubble me">
                            good bye
                        </div>
                        <div className="bubble you">
                            How are you,
                        </div>
                        <div className="bubble me">
                            Im fine, Think you ,and you?
                        </div>
                        <div className="bubble you">
                            Im fint too
                        </div>
                        <div className="bubble me">
                            good bye
                        </div>
                        {/*<div className="write">*/}

                            {/*<input type="text" />*/}

                        {/*</div>*/}

                    </div>

                </div>

                <div className="chat-footer">
                    123123213
                </div>
            </div>
        );
    }
}
