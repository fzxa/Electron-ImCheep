import React, { Component } from 'react';
import './SidebarGroup.css';
export default class NavGroup extends Component {
    render() {
        // @ts-ignore
        return (
            <div className="sidebar-group">
                <div className="top">
                    <input type="text" placeholder="Search" />
                    <a href="javascript:;" className="search"></a>
                </div>
                <ul className="people">
                    <li className="person" data-chat="person1">
                        <img src="/image/dog.png" alt="" />
                        <span className="name">Thomas Bangalter</span>
                        <span className="time">2:09 PM</span>
                        <span className="preview">I was wondering...</span>
                    </li>
                    <li className="person" data-chat="person2">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Dog Woofson</span>
                            <span className="time">1:44 PM</span>
                            <span className="preview">I've forgotten how it felt before</span>
                    </li>
                    <li className="person" data-chat="person3">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Louis CK</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">But we’re probably gonna need a new carpet.</span>
                    </li>
                    <li className="person" data-chat="person4">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Bo Jackson</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">It’s not that bad...</span>
                    </li>
                    <li className="person" data-chat="person5">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Michael Jordan</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">Wasup for the third time like is
you blind bitch</span>
                    </li>
                    <li className="person" data-chat="person6">
                        <img src="/image/dog.png" alt="" />
                            <span className="name">Drake</span>
                            <span className="time">2:09 PM</span>
                            <span className="preview">howdoyoudoaspace</span>
                    </li>
                </ul>
            </div>
        );
    }
}
