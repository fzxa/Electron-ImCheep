import { SESSION_CHAT } from '../actions/session/sessionType';
import { counterActions } from '../actions/session';

export default function switchSessionChat(state = {}, action: counterActions):any {
    console.log('switchSessionChat：',action, SESSION_CHAT);
    switch (action.type) {
        case SESSION_CHAT:
            console.log("session_chat");
            return state;
         break;
        default:
            return state;
         break;
    }
}
