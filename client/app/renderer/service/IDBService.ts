import Dexie from 'dexie';

const DB_NAME: string = 'imcheep';
const DB_VERSION: number = 1;


//
// Declare Database
//
class IDBService extends Dexie {


    SessionUsers:Dexie.Table<ISessionUsers,number>;

    constructor(){
        super(DB_NAME);

        var db = this;

        db.version(DB_VERSION).stores({
            SessionUsers: "++id, name, avatar, lastMessage, time, rank, deleted"
        });

    }
}

export interface ISessionUsers {
    id?: number;
    name?: string;
    avatar?: string;
    lastMessage?: string;
    time?:string;
    rank?: number;
    deleted?: boolean;
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
// db.SessionUsers.add({name: "Zanewang", avatar:"/image/avatar.png", lastMessage:"收到请回答", time: "刚刚", rank: 0, deleted: false}).then(()=>{
//     return db.SessionUsers.where("id").equals(4).toArray();
// }).then(youngFriends => {
//     alert ("My young friends: " + JSON.stringify(youngFriends));
// }).catch(e => {
//     alert("error: " + e.stack || e);
// });
