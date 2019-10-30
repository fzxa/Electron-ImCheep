import React, { Component } from 'react';

import './Chat.css';

interface State {
    socket?: any;
    message?: string[];
}

interface Props {
    foo?: string;
}

export default class NavGroup extends Component<Props, State> {

    static defaultProps = {
        foo:'wangzhen'
    };

    state = {
        socket: new WebSocket('ws://127.0.0.1:1234'),
        message: ['test']
    };
    constructor(props: any) {
        // @ts-ignore
        super(props);

        this.handleSendMessage = this.handleSendMessage.bind(this);
    }
    componentDidMount(): void {
        this.state.socket.onopen = ()=> {
            console.log('connected');
        };
        this.state.socket.onmessage = (e: any)=> {
            console.log('onmessage', e.data);
            // @ts-ignore
            this.state.message.push(e.data);
            console.log(this.state.message);
            // this.handleOnMessage();
        };
    }

    handleSendMessage(elem: any): void {

        if(elem.keyCode === 13 && elem.target.value !== '') {
            this.state.socket.send(elem.target.value);
            elem.target.value = '';
        }
    }

    render() {
        const list = ()=> {
            return(
                <div>
                    {Object.keys(this.state.message).map((key)=> {

                    })}
                </div>
            );
        };
        return (
            <div className="chat">
                <div className="chat-header">
                    <span> <span className="name">王振（Fzxa) {this.props.foo}</span></span>
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
                        {list()}
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
                        <textarea onKeyDown={this.handleSendMessage}></textarea>
                    </div>
                </div>
            </div>
        );
    }
}
