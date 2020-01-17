import {Dispatch} from 'redux'
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

export function switch_chat(idx:number, user: object): any {

  return(dispatch:any)=>{
      dispatch({
        type: SWITCH_CHAT,
        payload: {idx, user}
      })
  }

}


//聊天数据
interface sessionUsers {
  type: SESSION_USERS,
}
export function session_users() {
  return(dispatch:Dispatch)=>{

    db.SessionUsers.toArray().then((users)=>{

      dispatch({
        type: SESSION_USERS,
        payload:users
      })
    })
  };
}
