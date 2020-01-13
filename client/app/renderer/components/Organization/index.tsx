import React, { Component } from 'react'
import OverlayScrollbars from 'overlayscrollbars';

import './Organization.css';
import Tree from 'antd/es/tree';
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
        const { OrganizationTree, Profile } = this.props;
        let User:any = OrganizationTree;

        return (
            <React.Fragment>
            <div className="sidebar-group">

                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>


                <div className="sidebar-list">
                    <DirectoryTree defaultSelectedKeys={['三国科技']} defaultExpandedKeys={['三国科技']} onSelect={this.onSelect}>
                        <TreeNode key="三国科技" title="三国科技">
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
            <ProfileInfo Profile={Profile}/>
            </React.Fragment>
        );
    }
}
