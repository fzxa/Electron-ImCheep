import React, { Component } from 'react';
import './NavGroup.css';
// import Counter from '../../containers/counter';
// import {Route} from 'react-router';
import { NavLink } from 'react-router-dom';

export default class NavGroup extends Component {
    render() {
        return (
            <nav className="navigation">
                <div className="nav-avatar">
                    <img src="/image/avatar.png" />
                </div>
                <div className="nav-group">
                    <ul>
                        <li>
                            {/*className="active"*/}
                            <NavLink to="/box">
                                <i className="ti-comment-alt"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/organization" className="notifiy_badge">
                                <i className="ti-user"></i>
                            </NavLink>
                        </li>
                        <li className="brackets">
                            <NavLink to="/counter">
                                <i className="ti-star"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/chat" data-toggle="modal">
                                <i className="ti-pencil"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ChatBox" data-toggle="modal">
                                <i className="ti-settings"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ChatBox">
                                <i className="ti-power-off"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
