//数据库名称

const DB_NAME: string = 'imcheep';

//版本号
const DB_VERSION: string = '1.0';

//对数据库的描述
const DB_DISPLAY_NAME: string = 'ImCheep for electron local data';

//设置数据的大小
const DB_SIZE: number = 1024 * 1024;

export default class websqlService {


    private Database: any;



    public constructor() {

        this.initDB();
        this.createSchema();
        this.insertData();
    }

    public initDB(): void{

        this.Database = window.openDatabase(DB_NAME, DB_VERSION, DB_DISPLAY_NAME, DB_SIZE );

        console.log('websqlService', this.Database);

    }

    public executeSql(sql: string, params: string[] | undefined = []):void {

        this.Database.transaction((tx: any, result: any)=> {
            console.log(sql);
            tx.executeSql(sql, params, (ctx: any, result: any)=>{
                console.log('success...', ctx, result);
            });
        });
    }

    public createSchema(): void {

        // this.executeSql("DROP TABLE session_users");
        this.executeSql('' +
            'CREATE TABLE session_users(\n' +
            '   id INTEGER PRIMARY KEY   AUTOINCREMENT,\n' +
            '   name  TEXT NOT NULL,\n' +
            '   last_message  VARCHAR(128) NOT NULL,\n' +
            '   time TIMESTAMP,\n' +
            '   deleted    TINYINT(4)\n' +
            ')');
        this.executeSql("INSERT INTO session_users (name,last_message,time, deleted)" +
            "VALUES ( 'wangzhen', '你好' ， 1111111, 0);");
    }

    public insertData():void {
        let sql:string = "INSERT INTO session_userlist (id, user_name, last_message, update_time, rank, deleted) VALUES ('', '王振', 'last_message', '123123123', '1', '0')";
        this.executeSql(sql);
        this.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique AUTO_INCREMENT, log)');
        this.executeSql('INSERT INTO session_users ( user_name, last_message, update_time, rank, deleted) VALUES ( "fzxa", "last", "12346", "1", "0")');
        // this.executeSql('INSERT INTO LOGS (id, log) VALUES ("2", "www.runoob.com")');
        // this.executeSql('INSERT INTO LOGS (id, log) VALUES ("3", "菜鸟教程")');
        // this.executeSql('INSERT INTO LOGS (id, log) VALUES ("4", "www.runoob.com")');
    }


}
