"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./index");
const index_2 = require("./index");
const router = express.Router();
index_2.table.createTable(0);
index_2.table.createTable(1);
index_2.table.createTable(2);
var ItemList = [];
for (var key in index_1.Items) {
    if (isNaN(Number(index_1.Items[key]))) {
        ItemList.push(index_1.Items[key]);
    }
}
router
    .route("/tables")
    .post((req, res) => {
    return res.send(JSON.stringify(index_2.table.TableList));
})
    .get((req, res) => {
    return res.sendFile('views/tables.html', { root: __dirname });
});
router
    .route('/orders/:tableID/:item?')
    .get((req, res) => {
    if (!(req.params.item == null)) {
        var item = req.params.item;
        if (item != "" && item != undefined) {
            for (var key in ItemList) {
                if (item.localeCompare(ItemList[key]) == 0) {
                    index_2.table.TableList[Number.parseInt(req.params.tableID)].tableOrder.addItem(item);
                    break;
                }
            }
        }
    }
    return res.sendFile('views/orders.html', { root: __dirname });
})
    .post((req, res) => {
    if (index_2.table.TableList[Number.parseInt(req.params.tableID)] != null) {
        return res.send(JSON.stringify(index_2.table.TableList[Number.parseInt(req.params.tableID)]));
    }
    else {
        return res.send(null);
    }
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