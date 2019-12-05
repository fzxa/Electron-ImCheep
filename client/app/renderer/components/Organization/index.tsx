import React, { Component } from 'react'
import './Organization.css';
import Tree from 'antd/es/tree';
import 'antd/dist/antd.css';
import { OrganizationState } from "../../types";
import Profile from '../Profile';

interface initialState {

}

interface initialProps {
    OrganizationInfo: OrganizationState;
    Organization: Array<OrganizationState>;
    get_organization: ()=> void;
    get_organization_info: ()=>void;
}

const { TreeNode, DirectoryTree } = Tree;

export default class Organization extends Component<initialProps, initialState> {

    state: Readonly<initialState>

    public componentDidMount(): void {
        const {get_organization} = this.props;
        get_organization();
    }

    private onSelect = (keys: any, event: any) => {
        console.log('Trigger Select', keys, event);
    };

    private onExpand = () => {
        console.log('Trigger Expand');
    };


    public render() {
        const { Organization } = this.props;
        let User:any = Organization;

        return (
            <React.Fragment>
            <div className="sidebar-group">

                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>


                <DirectoryTree  onSelect={this.onSelect} onExpand={this.onExpand}>

                    {
                        Object.keys(User).map((value:string, index: number, array:string[])=>{
                            console.log(array)

                            const Org:Array<string> = User[value];
                            return (
                                <TreeNode key={value} title={value}>
                                    {
                                         Object.keys(Org).map((v:string, i:number, a:string[])=>{
                                             let INFO:[] = Org[v];
                                             return(
                                                 <TreeNode icon={<img src={INFO['avatar']} className='organization-avatar' />} title={ INFO['name']+' ('+INFO['courtesyName'] +')'} key={INFO['uid'].toString()}></TreeNode>
                                             )
                                         })
                                    }
                                </TreeNode>
                            )
                        })
                    }

                </DirectoryTree>

            </div>
            <Profile />
            </React.Fragment>
        );
    }
}
