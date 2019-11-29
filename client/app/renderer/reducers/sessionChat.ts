import { counterActions } from '../actions/session';
import { SessionState } from "../types";
import {SESSION} from "../actions/session/sessionType";

const INITIAL_STATE = {
    count: 1
};

export default function Session(state = INITIAL_STATE, action: counterActions):SessionState {
    switch (action.type) {
        case SESSION:
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}
