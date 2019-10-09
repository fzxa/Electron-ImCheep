import React, { Component } from 'react';
import './NavGroup.css';

export default class SidebarGroup extends Component {
    render() {
        return (
            <nav className="navigation">
                <div className="nav-avatar">
                    <img src="/image/dog.png" />
                </div>
                <div className="nav-group">
                    <ul>
                        <li>
                            <a data-navigation-target="chats" className="active" href="#">
                                <i className="ti-comment-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a data-navigation-target="friends" href="#" className="notifiy_badge">
                                <i className="ti-user"></i>
                            </a>
                        </li>
                        <li data-navigation-target="favorites" className="brackets">
                            <a href="#">
                                <i className="ti-star"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="modal" data-target="#editProfileModal">
                                <i className="ti-pencil"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="modal" data-target="#settingModal">
                                <i className="ti-settings"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ti-power-off"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}