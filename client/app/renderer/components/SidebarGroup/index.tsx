import React, { Component } from 'react';
import './SidebarGroup.css';
export default class SidebarGroup extends Component {
    render() {
        // @ts-ignore
        return (
            <div className="sidebar-group">
                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>
                <ul className="people">
                    <li className="person active" data-chat="person1">
                        <img src="/image/avatar.png" alt="" />
                        <span className="name">Zanewang(王振)</span>
                        <span className="time">1分钟前</span>
                        <span className="preview">暂时没有对vscode二次开发</span>
                    </li>
                    <li className="person" data-chat="person1">
                        <img src="/image/avatar.png" alt="" />
                        <span className="name">Zanewang(王振)</span>
                        <span className="time">1分钟前</span>
                        <span className="preview">暂时没有对vscode二次开发</span>
                    </li>
                </ul>
            </div>
        );
    }
}
