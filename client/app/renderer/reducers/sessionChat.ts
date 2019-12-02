import { counterActions } from '../actions/session';
import { SessionState } from "../types";
import {SESSION, SWITCH_CHAT} from "../actions/session/sessionType";

const INITIAL_STATE = {
    count: 1,
    switchChat: 'state'
};

export default function Session(state = INITIAL_STATE, action: counterActions):SessionState {
    switch (action.type) {
        case SESSION:
            return {
                count: state.count + 1,
                switchChat: 'wangzhen',
            }
        case SWITCH_CHAT:
            console.log('switch chat...');
            return {
                count: state.count - 1,
                switchChat: 'nihao',
            }
        default:
            return state;
    }
}
