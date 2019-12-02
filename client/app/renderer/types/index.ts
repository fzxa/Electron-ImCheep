import { RouterState } from 'connected-react-router';

export interface RouterState {
  router: RouterState;
}

export interface CounterState {
  count: number;
}

export interface StoreState {
  counter: CounterState;
}


export interface SessionState {
  ChatIndex: number;
  MessageList: [];
}

export interface SessionStoreState {
  session: SessionState;
}
