import { SESSION_CHAT } from '../actions/session/sessionType';
import { counterActions } from '../actions/session';


export default function switchSessionChat(action: counterActions):any {
    console.log(action, SESSION_CHAT, action.type);
    // switch (action.type) {
    //     case SESSION_CHAT:
    //         console.log("session_chat");
    //         return 1
    //      break;
    //     default:
    //         return 1
    //      break;
    // }
    return null;
}
