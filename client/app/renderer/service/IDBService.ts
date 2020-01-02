
const DB_NAME: string = "imcheep";
const DB_VERSION: number = 1.01;

export default class IDBService {

    private readonly indexDB: IDBFactory;
    private readonly DB: IDBOpenDBRequest;

    public dbInstance: IDBDatabase;

    constructor() {

        this.indexDB = window.indexedDB;
        this.DB = this.indexDB.open(DB_NAME, DB_VERSION);

        this.DB.onsuccess = (e: any)=>{
            this.dbInstance = e.target.result;

        }
        this.createSchema();
    }

    public createSchema() {


        this.DB.onupgradeneeded = (event:any)=>{

            let db:any = event.target.result;
            //let store:IDBObjectStore
            db.createObjectStore("session_users", {
                autoIncrement: true,
                keyPath: "id"
            });

            db.createObjectStore("session_message", {
                autoIncrement: true,
                keyPath: "id"
            })
            // let data:object[] = [{"name":"zanewang(王振)", "avatar":"/image/avatar.png", "last_message":"请稍后重试账号余额不足充值", "time":"刚刚", "rank": 1, "deleted":0}];
            //
            // data.map((value, index)=>{
            //     store.add(value)
            // })
        }

    };

    // public getSessionUsers(): void {
    //
    //     var transaction: IDBTransaction = this.dbInstance.transaction(['session_users'], "readwrite");
    //
    //     var objectStore:IDBObjectStore = transaction.objectStore('session_users');
    //     var request:IDBRequest = objectStore.get(1);
    //     request.onsuccess = ()=>{
    //         if (request.result) {
    //             console.log(request.result);
    //         }
    //     }
    // }


}
