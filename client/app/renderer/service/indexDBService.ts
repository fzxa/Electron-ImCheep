
const DB_NAME: string = "imcheep";
const DB_VERSION: number = 1;

export default class indexDBService {

    private readonly indexDB: IDBFactory;
    private readonly DB: IDBOpenDBRequest;

    constructor() {

        this.indexDB = window.indexedDB;
        this.DB = this.indexDB.open(DB_NAME, DB_VERSION);
        console.log(this.indexDB, this.DB);

    }

}
