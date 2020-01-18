import {counterActions} from '../actions/session';
import {SessionState} from "../types";
import {SESSION, SWITCH_CHAT, SESSION_USERS} from "../actions/session/sessionType";


const INITIAL_STATE = {
    ChatIndex: 0,
    LoginUser:{
        uid: 1,
    },
    MessageList: {},
    SessionUsers: {},
};

function SwitchChat(state = INITIAL_STATE, action:any): SessionState {

    state.ChatIndex = action.payload.idx;
    return state;
}

function GetSessionUsers(state = INITIAL_STATE, action:any):SessionState {

    state.SessionUsers = action.payload.users
    state.MessageList = action.payload.msg;
    return state;

}

export default function Session(state = INITIAL_STATE, action: counterActions):SessionState {
    switch (action.type) {
        case SESSION:

            return state;
            break;
        case SWITCH_CHAT:
            return SwitchChat(state, action)
            break;
        case SESSION_USERS:

            return GetSessionUsers(state, action);
            break;
        default:
            return state
    }
}
