import React, { Component } from 'react'
import OverlayScrollbars from 'overlayscrollbars';

import './Organization.css';
import Tree from 'antd/es/tree';
import Icon from 'antd/es/icon';
import 'antd/dist/antd.css';

import {OrganizationListState, OrganizationState,} from "../../types";
import ProfileInfo from '../Profile';


interface initialState {

}

interface initialProps {
    Profile: OrganizationState;
    OrganizationTree: OrganizationListState;
    get_organization: ()=> void;
    get_organization_info: (uid:string)=>void;
    message_send: ()=>void;
}

const { TreeNode, DirectoryTree } = Tree;

export default class Organization extends Component<initialProps, initialState> {

    state: Readonly<initialState>

    public componentDidMount(): void {
        const {get_organization} = this.props;
        get_organization();


        //scroll
        let wrap:NodeListOf<Element> = document.querySelectorAll('.sidebar-list');
        OverlayScrollbars(wrap, {
            scrollbars: {
                autoHide: 'leave'
            },
            overflowBehavior: {
                x:'hidden',
                y:'scroll'
            }
        });
    }

    private onSelect = (keys: any, event: any) => {
        const { get_organization_info } = this.props;
        console.log('Trigger Select', keys, event);
        const UID:string = keys[0];

        get_organization_info(UID);
    };

    // private onExpand = () => {
    //     console.log('Trigger Expand');
    // };


    public render() {
        const { OrganizationTree, Profile, message_send } = this.props;
        let User:any = OrganizationTree;
        console.log(this.props);
        return (
            <React.Fragment>
            <div className="sidebar-group">

                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-ptreeDefaultExpandAlllus"></a>
                </div>


                <div className="sidebar-list">
                    <div className="new-friend">
                        <a href="javascript:;"><Icon type="user-add" style={{"width":"20px", "height":"20px","paddingTop":"2px", "background":"#00AE2B", "color":"#fff"}}/><span>新的联系人</span></a>
                    </div>
                    <DirectoryTree defaultSelectedKeys={['三国科技公司']} defaultExpandedKeys={['三国科技公司']} onSelect={this.onSelect}>

                        <TreeNode key="三国科技公司" title="三国科技公司" >
                        {
                            Object.keys(User).map((value:string, index: number, array:string[])=>{

                                const Org: string[] = User[value];
                                return (
                                    <TreeNode key={value} title={value}>
                                        {
                                             Object.keys(Org).map((v:string, i:number, a:string[])=>{
                                                 let INFO:[] = Org[v];
                                                 return(
                                                     <TreeNode icon={<img src={INFO['avatar']} className='organization-avatar' />} title={ INFO['name']+ '('+(INFO['courtesyName'] || INFO['name'])+')'} key={INFO['uid'].toString()}></TreeNode>
                                                 )
                                             })
                                        }
                                    </TreeNode>
                                )
                            })
                        }
                        </TreeNode>
                    </DirectoryTree>
                </div>
                {/*end sidebar-wrap*/}
            </div>
            <ProfileInfo Profile={Profile} message_send={message_send}/>
            </React.Fragment>
        );
    }
}
