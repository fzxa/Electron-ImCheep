import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { counterActions, get_organization, get_organization_info } from '../actions/organization';
import {OrganizationStoreState} from "../types";
import Organization from '../components/Organization'


function mapStateToProps(state: OrganizationStoreState) {
  return {
    Organization: state.Organization
  };
}
function mapDispatchToProps(dispatch: Dispatch<counterActions>) {
  return bindActionCreators({get_organization, get_organization_info}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
