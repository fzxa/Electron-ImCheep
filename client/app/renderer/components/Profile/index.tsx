import React, { Component } from 'react'
import Divider from 'antd/es/divider';
import Button from 'antd/es/button';
import './Profile.css';


export default class Profile extends Component {


    public render() {

        return (
            <React.Fragment>
                <div className="profile">
                    <div className="profile-info">
                        <ul>
                            <li>
                                <div className='info-left'>
                                    <h3>zanewang <span><i className="ti-user sex"></i></span></h3>
                                    <p>王振</p>
                                    <p>研发一组员工</p>
                                </div>
                                <img src="/image/avatar.png" alt="" />
                            </li>
                        </ul>
                        <Divider className="divider" />
                        <table>
                            <tbody>
                            <tr>
                                <td>职级</td>
                                <td>15级工程师</td>
                            </tr>
                            <tr>
                                <td>职位</td>
                                <td>BUG专家</td>
                            </tr>
                            <tr>
                                <td>坐位</td>
                                <td>LX270</td>
                            </tr>
                            <tr>
                                <td>部门</td>
                                <td>
                                    <p>CSIG云与智慧产业事业群/云产品部/大数据及人工智能产品中心/数仓与数据湖产品组/研发一组</p>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="profile-footer">
                            <Button type='primary' block>发消息</Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
