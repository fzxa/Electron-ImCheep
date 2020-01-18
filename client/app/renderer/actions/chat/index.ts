import {MESSAGE_SEND} from "./chatType";


export type counterActions = MessageSend;


interface MessageSend {
  type: MESSAGE_SEND;
}

export function message_send(): MessageSend {
  return {
    type: MESSAGE_SEND,
  };
}
