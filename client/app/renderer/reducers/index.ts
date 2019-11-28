import { combineReducers } from 'redux';
import counter from './counter';
import session from './sessionChat';

const rootReducers = combineReducers({
  counter,
  session
});

export default rootReducers;
