import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { counterActions, get_organization, get_organization_info } from '../actions/organization';
import {  message_send } from '../actions/chat';
import {OrganizationStoreState} from "../types";
import Organization from '../components/Organization';


function mapStateToProps(state: OrganizationStoreState) {
  return {
    OrganizationTree: state.organization.OrganizationTree,
    Profile: state.organization.Profile,
  };
}
function mapDispatchToProps(dispatch: Dispatch<counterActions>) {
  return bindActionCreators({get_organization, get_organization_info, message_send}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
