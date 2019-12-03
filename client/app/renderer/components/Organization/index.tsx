import React, { Component } from 'react'
import './Organization.css';

interface OrganizationProps {
    get_organization: ()=> void;
    get_organization_info: ()=>void;
}

export default class Organization extends Component<OrganizationProps> {
    componentWillMount(): void {
        const { get_organization } = this.props;
        console.log(get_organization);
    }

    render() {
        return (
            <div className="sidebar-group">
                <div className="top">
                    <input type="search" placeholder="搜索" />
                    <a href="javascript:;" className="ti-plus"></a>
                </div>

            </div>
        );
    }
}
