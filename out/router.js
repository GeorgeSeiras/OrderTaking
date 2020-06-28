"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./index");
const router = express.Router();
const table1 = new index_1.table(0);
const table2 = new index_1.table(1);
const table3 = new index_1.table(2);
const table4 = new index_1.table(3);
const table5 = new index_1.table(4);
const TableList = [table1, table2, table3, table4, table5];
const orderList = [];
router
    .route("/tables")
    .post((req, res) => {
    return res.send(JSON.stringify(TableList));
})
    .get((req, res) => {
    return res.sendFile('views/tables.html', { root: __dirname });
});
router
    .route("/orders")
    .get((req, res) => {
});
router
    .route("/tables/:tableID")
    .get((req, res) => {
    var id = parseInt('${request.params.tableID}');
    if (TableList[id] != null) {
        return res.json(TableList[parseInt(`${req.params.tableID}`)].tableOrder);
    }
    else {
        return res.json(id);
    }
})
    .post((req, res) => {
    var id = parseInt('${request.params.tableID}');
    var newOrder = JSON.parse(req.body);
    console.log(newOrder);
    if (TableList[id] != null) {
        TableList[id].addOrder(newOrder);
    }
    res.redirect("../tables");
});
module.exports = router;
//# sourceMappingURL=router.js.map