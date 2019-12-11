
const DB_NAME: string = "imcheep";
const DB_VERSION: number = 1;

export default class IDBService {

    private readonly indexDB: IDBFactory;
    private readonly DB: IDBOpenDBRequest;

    public dbInstance: IDBDatabase;

    constructor() {

        this.indexDB = window.indexedDB;
        this.DB = this.indexDB.open(DB_NAME, DB_VERSION);

        console.log(this.indexDB, this.DB);

        this.DB.onsuccess = (e: any)=>{
            this.dbInstance = e.target.result;
            this.createSchema();
        }

    }

    public createSchema() {

        // var data:object[] = [{name: "wangzen",age: 24}, {name: "fzxa", age: 18}];
        console.log('createSchema....');
        console.log('db instance::::',this.dbInstance);
        console.log('this DB:::', this.DB);
        let hasTable:boolean = this.dbInstance.objectStoreNames.contains('test');
        if(!hasTable) {
            this.DB.onupgradeneeded = ()=> {
                console.log("sfsdfsdfsdf")
                this.dbInstance.createObjectStore('session_users',{
                    autoIncrement: true,
                    keyPath: "id"
                });
            }

        }
        // this.DB.onupgradeneeded = () => {
        //     console.log('sdfdsfdsfsdfdsf..:::::');
        //     if(!this.dbInstance.objectStoreNames.contains('session_users')) {
        //         var store:IDBObjectStore = this.dbInstance.createObjectStore("session_users", {
        //             autoIncrement: true,
        //             keyPath: "id"
        //         });
        //         console.log('store....',store);
        //         // data.map((value, index)=>{
        //         //     console.log(value, index)
        //         //
        //         // })
        //     }
        // }

        this.DB.onerror = ()=>{
            console.log('error....');
        }


    };


}
