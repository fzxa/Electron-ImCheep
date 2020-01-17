import {SESSION, SWITCH_CHAT, SESSION_USERS} from "./sessionType";
import {db} from '../../service/IDBService';

export type counterActions = Session | switchChat | sessionUsers;

//session chat
interface Session {
  type: SESSION,
}

export function session(): Session {
  return {
    type: SESSION
  }
}

interface switchChat {
  type:SWITCH_CHAT,
}

export function switch_chat(): switchChat {
  return {
    type:SWITCH_CHAT
  }
}

//聊天数据
interface sessionUsers {
  type: SESSION_USERS,
}
export function session_users() {
  return(dispatch:any)=>{

    db.SessionUsers.toArray().then((users)=>{
      // alert(JSON.stringify(users))
      // alert(dispatch);

      dispatch({
        type: SESSION_USERS,
        payload:users
      })
    })
  };
//   return {
//     type: SESSION_USERS
//   }
}
