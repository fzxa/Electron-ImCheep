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
                    <img src="/image/dog.png" />
                </div>
                <div className="nav-group">
                    <ul>
                        <li>
                            {/*className="active"*/}
                            <NavLink to="/chat">
                                <i className="ti-comment-alt"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  to="/tree" className="notifiy_badge">
                                <i className="ti-user"></i>
                            </NavLink>
                        </li>
                        <li className="brackets">
                            <NavLink to="/home">
                                <i className="ti-star"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/#" data-toggle="modal">
                                <i className="ti-pencil"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/#" data-toggle="modal">
                                <i className="ti-settings"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/#">
                                <i className="ti-power-off"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
