"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./index");
const index_2 = require("./index");
const router = express.Router();
var ItemList = [];
var tableHelper = new index_2.table();
var orderhelper = new index_2.order();
for (var key in index_1.Items) {
    if (isNaN(Number(index_1.Items[key]))) {
        ItemList.push(index_1.Items[key]);
    }
}
router
    .route("/")
    .get((req, res) => {
    return res.redirect("/tables");
});
router
    .route("/tables")
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var tables = yield tableHelper.getAllTables();
    return res.send(JSON.stringify(tables));
}))
    .get((req, res) => {
    return res.sendFile('views/tables.html', { root: __dirname });
});
router
    .route('/orders/:tableID/:item?')
    .get((req, res) => {
    var item = req.params.item;
    var tableID = Number.parseInt(req.params.tableID);
    if (item != null) {
        if (item != "" && item != undefined) {
            for (var key in ItemList) {
                if (item.localeCompare(ItemList[key]) == 0) {
                    var done = index_2.order.addToOrder(item, tableID);
                    break;
                }
            }
        }
    }
    return res.sendFile('views/orders.html', { root: __dirname });
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var item = req.params.item;
    ;
    var tableID = Number(req.params.tableID);
    if (item === "closeOrder") {
        index_2.order.closeOrder(tableID);
        return res.send(null);
    }
    else {
        var orders = yield orderhelper.getOrders(tableID);
        return res.send(JSON.stringify(orders));
    }
}));
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