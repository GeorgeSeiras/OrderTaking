"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const order_1 = require("./order");
class table {
    constructor(id) {
        this.id = id;
        this.tableOrder = new order_1.order(null);
    }
    addOrder(order) {
        var item;
        for (item in order.items) {
            this.tableOrder.items.push(item);
        }
    }
    closeOrder() {
        while (this.tableOrder.items.length > 0) {
            this.tableOrder.items.pop;
        }
    }
}
exports.table = table;
//# sourceMappingURL=table.js.map