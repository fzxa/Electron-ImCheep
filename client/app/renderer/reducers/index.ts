import { combineReducers } from 'redux';
import counter from './counter';
import session from './sessionChat';
import organization from './organization';

const rootReducers = combineReducers({
  counter,
  session,
  organization
});

export default rootReducers;
