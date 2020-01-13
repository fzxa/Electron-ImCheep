import { counterActions } from '../actions/session';
import { SessionState} from "../types";
import {SESSION, SWITCH_CHAT, SESSION_USERS} from "../actions/session/sessionType";
import { db } from '../service/IDBService';


const INITIAL_STATE = {
    ChatIndex: 0,
    MessageList: [],
    SessionUsers: {},
};


function GetSessionUsers(state = INITIAL_STATE): any {
    // let SessionUsers = db.SessionUsers.toArray();
    // console.log(SessionUsers)
    return state;
}

export default function Session(state = INITIAL_STATE, action: counterActions):SessionState {
    switch (action.type) {
        case SESSION:
           state
        case SWITCH_CHAT:
            return {
                ChatIndex: 0,
                MessageList: [],
                SessionUsers: {}
            }
        case SESSION_USERS:
            console.log('session_users.....');
            console.log(db,'db...');

            return GetSessionUsers(state);
        default:
            return {
                ChatIndex: 0,
                MessageList: [],
                SessionUsers: {}
            }
    }
}
