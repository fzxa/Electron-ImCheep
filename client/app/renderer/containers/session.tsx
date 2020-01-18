import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { counterActions, session , switch_chat, session_users} from '../actions/session';
import {SessionStoreState} from "../types";
import ChatBox from "../components/ChatBox";


function mapStateToProps(state: SessionStoreState) {
  return {
    ChatIndex: state.session.ChatIndex,
    LoginUser: state.session.LoginUser,
    MessageList: state.session.MessageList,
    SessionUsers: state.session.SessionUsers,
  };
}
function mapDispatchToProps(dispatch: Dispatch<counterActions>) {
  return bindActionCreators({session, switch_chat, session_users}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
