//incorrecto principio de Dependencia

import { connect } from "http2";

// class MySQLDatabase{
//     connect(){
//         console.log(`concectabdi a MySQL...`)
//     }
// }
// class UseService{
//     private database: MySQLDatabase;
//     constructor(){
//         this.database = new MySQLDatabase();
//     }
//     getUser(){
//         this.database.connect()
//         console.log(`Obteniendo usuarios de DB`)
//     }
// }EL PROBLEMA es que user devise esta acoplado a MySQLDatabase por lo que se dificulta cambiar la base de datos

//ejemplo correcto 

interface Database{
    connect():void
}
class MySQL implements Database{
    connect(): void {
        console.log(`conectandonos a MySQL...`)
    }
}

class PostSQL implements Database{
    connect(): void {
        console.log(`conectandonos a PostgreSQL... `)
    }
}

class UseService{
    private database: Database;
    constructor(database:Database){
        this.database =database
    }
    getUser(){
    this.database.connect();
    console.log(`Obteniendo usuarios...`)
}
}

const mysqlService = new UseService(new MySQL())

mysqlService.getUser()

const postgresqlService = new UseService(new PostSQL())

postgresqlService.getUser()