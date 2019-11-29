import {SESSION} from "./sessionType";

export type counterActions = Session;

//session chat
interface Session {
  type: SESSION,
}

export function session(): Session {
  return {
    type: SESSION
  }
}

