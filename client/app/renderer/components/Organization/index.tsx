import React, { Component } from 'react'
import './Organization.css';
import Tree from 'antd/es/tree';
import 'antd/dist/antd.css';
import {OrganizationState} from "../../types";

interface OrganizationProps {
    Organization: Array<OrganizationState>;
    get_organization: ()=> void;
    get_organization_info: ()=>void;
}

const { TreeNode, DirectoryTree } = Tree;

export default class Organization extends Component<OrganizationProps> {


    onSelect = (keys: any, event: any) => {
        console.log('Trigger Select', keys, event);
    };

    onExpand = () => {
        console.log('Trigger Expand');
    };

    render() {
        const { get_organization,  Organization} = this.props;
        return (
            <div className="sidebar-group">

                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>
                <a onClick={get_organization}>organization....</a>
                {JSON.stringify(Organization)}
                <DirectoryTree onSelect={this.onSelect} onExpand={this.onExpand}>
                    <TreeNode title="组织架构" key="0-0">
                        <TreeNode icon={<img src='http://www.e3ol.com/biography/pic/id/240/284.jpg' className='organization-avatar' />} title='诸葛亮(zhugeliang)' key="0-0-0" />
                        <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                    </TreeNode>
                    <TreeNode title="parent 1" key="0-1">
                        <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                        <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                    </TreeNode>
                </DirectoryTree>
            </div>
        );
    }
}
