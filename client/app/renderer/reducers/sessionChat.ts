import { counterActions } from '../actions/session';
import { SessionState } from "../types";
import {SESSION, SWITCH_CHAT} from "../actions/session/sessionType";

const INITIAL_STATE = {
    ChatIndex: 0,
    MessageList: []
};

export default function Session(state = INITIAL_STATE, action: counterActions):SessionState {
    switch (action.type) {
        case SESSION:
           state
        case SWITCH_CHAT:
            return {
                ChatIndex: 0,
                MessageList: []
            }
        default:
            return {
                ChatIndex: 0,
                MessageList: []
            }
    }
}
