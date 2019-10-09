import React, { Component } from 'react';
import './SidebarGroup.css';
export default class NavGroup extends Component {
    render() {
        // @ts-ignore
        return (
            <div className="sidebar-group">
                <div className="top">
                    <input type="text" placeholder="搜索" />
                    <a href="javascript:;" className="search"></a>
                </div>
                <ul className="people">
                    <li className="person active" data-chat="person1">
                        <img src="/image/dog.png" alt="" />
                        <span className="name">Fzxa</span>
                        <span className="time">2:09 PM</span>
                        <span className="preview">Hello!...</span>
                    </li>
                    <li className="person" data-chat="person2">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Zanewang</span>
                            <span className="time">1:44 PM</span>
                        <span className="preview">Hello!...</span>
                    </li>
                    <li className="person" data-chat="person3">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Zanewang</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">Hello!...</span>
                    </li>
                    <li className="person" data-chat="person4">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Zanewang</span>
                            <span className="time">2:09 PM</span>
                        <span className="preview">Hello!...</span>
                    </li>
                    <li className="person" data-chat="person5">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Zanewang</span>
                            <span className="time">2:09 PM</span>
                        <span className="preview">Hello!...</span>
                    </li>
                    <li className="person" data-chat="person6">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Zanewang</span>
                            <span className="time">2:09 PM</span>
                        <span className="preview">Hello!...</span>
                    </li>
                </ul>
            </div>
        );
    }
}
