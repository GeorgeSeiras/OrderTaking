import { order } from "./index";
import {connection} from "./index";

export class table {
    static TableList: Array<table> =[];
    public id: number;
    public tableOrder: order;
    constructor(id: number) {
        this.id = id;
        this.tableOrder = new order();
    }

    static createTable(id:number){
        connection.query('SELECT id FROM tables WHERE id='+id+';',(err,result)=>{
            if(result.length == 0 ){
                connection.query('INSERT INTO tables (id) VALUES ('+id+');',(err,result)=>{
                    if(err){
                        throw err;
                    }
                });
            }
        });
        
    }

}
