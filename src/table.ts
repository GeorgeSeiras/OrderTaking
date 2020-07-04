import { order } from "./index";
import {mongoose,TableModel} from "./index";

export class table {
    public id: number;
    public tableOrder: order;
    constructor(id?: number) {
        this.id = id;
        this.tableOrder = new order();
    }
    
    public async createTable(id:number){
      var newTable = new TableModel({
          tableID:id
      });
     return  newTable.save(function(err,TableModel){
        if(err){
            console.log(err);
        }
      });
    }
    public async getAllTables(){
      return TableModel.find({}).sort('tableID');
    }


    
}

  
