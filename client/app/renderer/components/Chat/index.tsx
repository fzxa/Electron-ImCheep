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
                    </div>

                </div>

                <div className="chat-footer">
                    <div className="message-pannel">
                        <ul>
                            <li>
                                <a href="#"><i className="ti-face-smile"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ti-cut"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ti-image"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ti-folder"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ti-star"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="ti-headphone-alt"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="message-box">
                        <textarea>
                            111
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
}
