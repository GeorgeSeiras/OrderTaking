import * as express from "express";
import { order, table } from "./index";
import { Items } from "./index";
const router = express.Router();

const table1 = new table(0);
const table2 = new table(1);
const table3 = new table(2);
const table4 = new table(3);
const table5 = new table(4);

const TableList: Array<table> = [table1, table2, table3, table4, table5];
const ItemList: Array<string> = [];
for (var key in Items) {
    if (isNaN(Number(Items[key]))) {
        ItemList.push(Items[key]);
    }
}

router
    .route("/tables")
    .post((req, res) => {
        return res.send(JSON.stringify(TableList));
    })
    .get((req, res) => {
        return res.sendFile('views/tables.html', { root: __dirname });
    })

router
    .route('/orders/:tableID/:item?')
    .get((req, res) => {
        if (!req.params.item == undefined) {
            var item = req.params.item;
            if (item != "" && item != undefined) {
                for (var key in ItemList) {
                    if (item.localeCompare(ItemList[key]) == 0) {
                        var tmpTable = TableList[Number.parseInt(req.params.tableID)].tableOrder.addItem(item);
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
        
    })

router
    .route("/additem/:tableID/:item?")
    .get((req, res) => {
        return res.sendFile('views/additem.html', { root: __dirname });

    })
    .post((req, res) => {
        return res.send(JSON.stringify(ItemList));

    })

module.exports = router;