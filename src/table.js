"use strict";
exports.__esModule = true;
var order_1 = require("./order");
var table = /** @class */ (function () {
    function table(id) {
        this.id = id;
        this.tableOrder = new order_1.order(null);
    }
    table.prototype.addOrder = function (order) {
        var item;
        for (item in order.items) {
            this.tableOrder.items.push(item);
        }
    };
    table.prototype.closeOrder = function () {
        while (this.tableOrder.items.length > 0) {
            this.tableOrder.items.pop;
        }
    };
    return table;
}());
exports.table = table;
