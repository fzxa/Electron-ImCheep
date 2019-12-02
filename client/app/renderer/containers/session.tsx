import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { counterActions, session , switch_chat} from '../actions/session';
import {SessionStoreState} from "../types";
import ChatBox from "../components/ChatBox";


function mapStateToProps(state: SessionStoreState) {
  return {
    count: state.session.count
  };
}
function mapDispatchToProps(dispatch: Dispatch<counterActions>) {
  return bindActionCreators({session, switch_chat}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
