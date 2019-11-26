import React, {Component} from 'react';
// import IScroll from 'iscroll';
import 'webrtc-adapter';
// import IScroll from 'iscroll';
import './Chat.css';

// import NavGroup from '../NavGroup';
// import SidebarGroup from '../SidebarGroup'

interface State {
    socket?: any;
    message?: string[];
    IScroll?: any;
}

interface Props {
    foo?: string;
}

export default class Chat extends Component<Props, State> {

    static defaultProps = {
        foo:''
    };

    state = {
        socket: new WebSocket('ws://127.0.0.1:1234'),
        message: ['test'],
        IScroll : null,
    };

    constructor(props: any) {
        // @ts-ignore
        super(props);

        this.handleSendMessage = this.handleSendMessage.bind(this);

    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('update');
    }

    componentDidMount(): void {
        // console.log(webkitRTCPeerConnection);
        // console.log(IScroll);
        this.state.socket.onopen = () => {
            console.log('connected successful');
        };
        this.state.socket.onmessage = (e: any) => {
            // console.log('onmessage', e.data);
            this.state.message.push(e.data);
            this.setState({
                message: this.state.message,
            }, () => {
                console.log(this.state.message);
                // @ts-ignore
                // this.state.IScroll.refresh();
                // // @ts-ignore
                // this.state.IScroll.scrollTo(0, this.state.IScroll.maxScrollY, 0);
            });

            // this.handleOnMessage();
        };
        this.handleScrollBar();

        // @ts-ignore
        // this.state.IVideo = document.getElementById('stream');
        // navigator.getUserMedia({audio: true, video: {width: 200, height: 300}},
        //     (stream) => {
        //         const video: any = document.getElementById('stream');
        //         console.log(stream);
        //         console.log(video);
        //
        //         // @ts-ignore
        //         video.srcObject = stream;
        //         // @ts-ignore
        //         video.onloadedmetadata = (e) => {
        //             console.log('onloadmetadata', e);
        //             // @ts-ignore
        //             video.play();
        //         };
        //     },
        //     (err) => {
        //         console.log('The following error occurred: ' + err.name);
        //     }
        // );
        // const userMedia = navigator.mediaDevices.getUserMedia({audio: true, video: true});

    }

    handleScrollBar(): void {
        // console.log('iscroll is ',IScroll);
        // // @ts-ignore
        // const scroll = new IScroll('#wrapper', {
        //     scrollbars: true,
        //     mouseWheel : true,
        //     interactiveScrollbars: true,
        //     shrinkScrollbars: 'scale',
        //     fadeScrollbars: true
        // });
        // scroll.scrollTo(0,scroll.maxScrollY, 0);
        // this.setState({
        //     IScroll: scroll
        // });
    }

    handleSendMessage(elem: any): boolean {

        if(elem.keyCode === 13 && elem.target.value !== '') {
            this.state.socket.send(elem.target.value);
            elem.target.value = '';
            // elem.target.returnValue = false;
            // elem.target.focus();
            elem.preventDefault();
            // elem.target.returnValue = false;
        }
        return false;
    }

    render() {
        // console.log('类型为',typeof this.state.message);
        // console.log(this.state.message);
        return (
            <div className="chat">
                <div className="chat-header">
                    <span> <span className="name">（Fzxa) {this.props.foo}</span></span>
                </div>
                <div className="chat-body" id="wrapper">
                    <ul className="chat-active">
                        {/*<div className="conversation-start">*/}
                            {/*<span>Today, 6:48 AM</span>*/}
                        {/*</div>*/}
                        <li>
                            <div className="bubble you">
                                How are you,
                            </div>
                        </li>
                        <li>
                            <div className="bubble me">
                                How are you,
                            </div>
                        </li>
                        {
                            this.state.message.map((item, index) => {
                                console.log(item, index);
                                return <li key={index}><div className="bubble me">{item}</div></li>;
                            })
                        }
                    </ul>

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
                        <textarea autoFocus onKeyDown={this.handleSendMessage}/>
                    </div>
                </div>
            </div>
        );
    }
}
