import {SESSION, SWITCH_CHAT} from "./sessionType";

export type counterActions = Session | switchChat;

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
