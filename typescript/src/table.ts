import { order } from "./order";
export class table {
    id: number;
    tableOrder: order
    constructor(id: number) {
        this.id = id;
        this.tableOrder = new order(null);
    }

    addOrder(order: order) {
        var item: string;
        for (item in order.items) {
            this.tableOrder.items.push(item);
        }
    }

    closeOrder() {
        while(this.tableOrder.items.length>0){
            this.tableOrder.items.pop;
        }
    }
}