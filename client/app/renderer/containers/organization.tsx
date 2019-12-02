import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { counterActions, get_organization, get_organization_info } from '../actions/organization';
import {OrganizationStoreState} from "../types";
import Organization from "../components/Organization";


function mapStateToProps(state: OrganizationStoreState) {
  return {
    ID: state.organization.ID,
    FullName: state.organization.FullName,
    PhoneNumber: state.organization.PhoneNumber,
    Landline: state.organization.Landline,
    PinYin: state.organization.PhoneNumber,
    Level: state.organization.Level,
    Position: state.organization.Position,
    Workstation: state.organization.Workstation,
    Sex: state.organization.Sex,
    Avatar: state.organization.Avatar,
    Profile: state.organization.Profile,
    Department: state.organization.Department,
  };
}
function mapDispatchToProps(dispatch: Dispatch<counterActions>) {
  return bindActionCreators({get_organization, get_organization_info}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
