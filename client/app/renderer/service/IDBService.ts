import Dexie from 'dexie';

const DB_NAME: string = 'imcheep';
const DB_VERSION: number = 1;

export interface ISessionUsers {
    id?: number;
    uid: string;
    name?: string;
    avatar?: string;
    lastMessage?: string;
    time?:string;
    rank?: number;
    deleted?: boolean;
}

export interface IMessageList {
    id?: number;
    msgID?: string; // uuid
    uid?: number;
    from?: number | string;
    to?: number | string; //接受者(uid/group_id)
    chatType?: number;
    msgType?: number;
    msg?: string;
    fileInfo?: string; //文件信息json格式
    sendTime?: number;
    sendStatus?: number; //发送中，发送完成，发送失败
}

//
// Declare Database
//
class IDBService extends Dexie {


    SessionUsers:Dexie.Table<ISessionUsers,number>;
    MessageList:Dexie.Table<IMessageList, number>;

    constructor(){
        super(DB_NAME);

        var db = this;

        db.version(DB_VERSION).stores({
            SessionUsers: "++id, name, avatar, lastMessage, time, rank, deleted",
            MessageList: "++id, msgID, uid, from, to, chatType, msgType, msg, fileInfo, sendTime, sendStatus"
        });

    }
}

export var db = new IDBService();



//
// Manipulate and Query Database
//
// db.friends.add({name: "Josephine", age: 21}).then(()=>{
//     return db.friends.where("id").equals(1).toArray();
// }).then(youngFriends => {
//     alert ("My young friends: " + JSON.stringify(youngFriends));
// }).catch(e => {
//     alert("error: " + e.stack || e);
// });
// var db = new IDBService();
// db.SessionUsers.add({uid: "1", name: "王振", avatar:"/image/avatar.png", lastMessage:"收到请回答", time: "刚刚", rank: 0, deleted: false}).then(()=>{
//     return db.SessionUsers.where("id").equals(4).toArray();
// }).then(youngFriends => {
//     alert ("My young friends: " + JSON.stringify(youngFriends));
// }).catch(e => {
//     alert("error: " + e.stack || e);
// });
// alert(v4())
// db.MessageList.add({msgID: uuidv4(), uid: 2, from: 2, to: 1, chatType:0, msgType: 0, msg: "你好呀 哈哈哈哈哈", fileInfo:"{}",sendTime: +new Date(), sendStatus: 1}).then(()=>{
//     return db.MessageList.toArray();
// }).then(MessageList => {
//     alert ("Message: " + JSON.stringify(MessageList));
// }).catch(e => {
//     alert("error: " + e.stack || e);
// });
