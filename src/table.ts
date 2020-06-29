import { order } from "./order";
export class table {
    id: number;
    tableOrder: order ;
    constructor(id: number) {
        this.id = id;
        this.tableOrder = new order();

    }
}