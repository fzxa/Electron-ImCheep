import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import SessionList from '../components/SessionList';
import { counterActions, session_chat } from '../actions/session';



function mapDispatchToProps(dispatch: Dispatch<counterActions>) {
  return bindActionCreators({session_chat}, dispatch);
}

export default connect(mapDispatchToProps)(SessionList);
