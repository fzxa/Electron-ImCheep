import { combineReducers } from 'redux';
import counter from './counter';
import session from './sessionChat';
import Organization from './organization';

const rootReducers = combineReducers({
  counter,
  session,
  Organization
});

export default rootReducers;
