"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const order_1 = require("./order");
class table {
    constructor(id) {
        this.id = id;
        this.tableOrder = new order_1.order();
    }
}
exports.table = table;
//# sourceMappingURL=table.js.map