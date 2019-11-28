import {SESSION_CHAT} from "./sessionType";

export type counterActions = session_chat;

//session chat
interface session_chat {
  type: SESSION_CHAT,
}

export function session_chat(): session_chat {
  return {
    type: SESSION_CHAT
  }
}

