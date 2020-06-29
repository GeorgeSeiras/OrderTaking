"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./index");
const index_2 = require("./index");
const router = express.Router();
const table1 = new index_1.table(0);
const table2 = new index_1.table(1);
const table3 = new index_1.table(2);
const table4 = new index_1.table(3);
const table5 = new index_1.table(4);
const TableList = [table1, table2, table3, table4, table5];
const ItemList = [];
for (var key in index_2.Items) {
    if (isNaN(Number(index_2.Items[key]))) {
        ItemList.push(index_2.Items[key]);
    }
}
router
    .route("/tables")
    .post((req, res) => {
    return res.send(JSON.stringify(TableList));
})
    .get((req, res) => {
    return res.sendFile('views/tables.html', { root: __dirname });
});
router
    .route('/orders/:tableID/:item?')
    .get((req, res) => {
    if (!req.params.item == undefined) {
        var item = req.params.item;
        if (item != "" && item != undefined) {
            for (var key in ItemList) {
                if (item.localeCompare(ItemList[key]) == 0) {
                    var tmpTable = TableList[Number.parseInt(req.params.tableID)];
                    tmpTable.tableOrder.addItem(item);
                    break;
                }
            }
        }
    }
    return res.sendFile('views/orders.html', { root: __dirname });
})
    .post((req, res) => {
    return res.send(JSON.stringify(TableList[Number.parseInt(req.params.tableID)]));
});
router
    .route("/additem/:tableID/:item?")
    .get((req, res) => {
    return res.sendFile('views/additem.html', { root: __dirname });
})
    .post((req, res) => {
    return res.send(JSON.stringify(ItemList));
});
module.exports = router;
//# sourceMappingURL=router.js.map