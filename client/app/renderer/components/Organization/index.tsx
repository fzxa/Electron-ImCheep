import React, { Component } from 'react'
import './Organization.css';

interface OrganizationProps {
    get_organization: ()=> void;
    get_organization_info: ()=>void;
}

export default class Organization extends Component<OrganizationProps> {

    render() {
        const { get_organization, get_organization_info } = this.props;
        console.log(get_organization, get_organization_info);
        console.log(Organization);
        return (
            <div className="organization">
                organization,.....
                123123123123123
                123123123123123
                123123123123123
                123123123123123
                123123123123123
                123123123123123
                123123123123123
            </div>
        );
    }
}
