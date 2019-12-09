import React, { Component } from 'react'
import Divider from 'antd/es/divider';
import Button from 'antd/es/button';
import Empty from 'antd/es/empty';
import './Profile.css';
import {OrganizationState} from "../../types";

interface InitialProps {
    Profile: OrganizationState;
}

export default class Profile extends Component<InitialProps> {


    public render() {
        const { Profile } = this.props;

        let sexElem = ()=>{
            if (Profile.Sex == '男') {
                return <span><i className="ti-user sex"></i></span>
            } else {
                return <span><i className="ti-user sex-female"></i></span>
            }
        }
        return (
            <React.Fragment>
                <div className="profile">
                    {
                        Profile.ID == '' ?
                    <Empty />
                        :
                        <div className="profile-info">
                            <ul>
                                <li>
                                    <div className='info-left'>
                                        <h3>{Profile.NickName || Profile.FullName} {sexElem()}</h3>
                                        <p>{Profile.FullName} ({Profile.PinYin})</p>
                                        <p>{Profile.Position}</p>
                                    </div>
                                    <img src={Profile.Avatar}  alt="" />
                                </li>
                            </ul>
                            <Divider className="divider" />
                            <table>
                                <tbody>
                                <tr>
                                    <td>用户ID</td>
                                    <td>{Profile.ID}</td>
                                </tr>
                                <tr>
                                    <td>职级</td>
                                    <td>{Profile.Level}</td>
                                </tr>
                                <tr>
                                    <td>座机</td>
                                    <td>{Profile.Landline}</td>
                                </tr>
                                <tr>
                                    <td>位置</td>
                                    <td>{Profile.Workstation}</td>
                                </tr>
                                <tr>
                                    <td>简介</td>
                                    <td>
                                        <p className="desc">{Profile.Profile}</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="profile-footer">
                                <Button type='primary' block>发消息</Button>
                            </div>
                        </div>
                    }
                </div>
            </React.Fragment>
        );
    }
}
