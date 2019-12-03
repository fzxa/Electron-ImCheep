import React, { Component } from 'react'
import './Organization.css';
import Tree from 'antd/es/tree';
import 'antd/dist/antd.css';

interface OrganizationProps {
    get_organization: ()=> void;
    get_organization_info: ()=>void;
}

const { TreeNode, DirectoryTree } = Tree;

export default class Organization extends Component<OrganizationProps> {
    componentWillMount(): void {
        const { get_organization } = this.props;
        console.log('get organization..',get_organization);
        let userArr = get_organization();
        console.log(userArr);
    }

    onSelect = (keys: any, event: any) => {
        console.log('Trigger Select', keys, event);
    };

    onExpand = () => {
        console.log('Trigger Expand');
    };

    render() {
        return (
            <div className="sidebar-group">

                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>
                <DirectoryTree onSelect={this.onSelect} onExpand={this.onExpand}>
                    <TreeNode title="公司组织架构" key="0-0">
                        <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
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
