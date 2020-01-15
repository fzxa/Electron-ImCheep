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

// id: number;
// name: string;
// avatar: string;
// lastMessage: string;
// time:string;
// rank: number;
// deleted: boolean;
export interface SessionUsersState {
  [propName: string]: Object[];
}

export interface SessionState {
  ChatIndex: number;
  MessageList: string[];
  SessionUsers:SessionUsersState;
}

export interface SessionStoreState {
  session: SessionState;
}

// 联系人信息
export interface OrganizationState {
  ID: string;
  FullName: string;
  NickName: string;
  PhoneNumber: string;
  Landline: string;
  PinYin: string;
  Level: string;
  Position: string;
  Workstation: string;
  Sex: string;
  Avatar: string;
  Profile: string;
  Department: string;
}

export interface OrganizationListState {
  [propName: string]: Object[];
}

export interface OrganizationSchemaState {
  Profile:OrganizationState;
  OrganizationTree: OrganizationListState;
}


export interface OrganizationStoreState {
  organization:OrganizationSchemaState
}

