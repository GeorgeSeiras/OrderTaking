import * as express from "express";
import { Items } from "./index";
import {order, table } from "./index";
import {connection} from "./index";
const router = express.Router();

table.createTable(0);
table.createTable(1);
table.createTable(2);

var ItemList: Array<string> = [];
for (var key in Items) {
    if (isNaN(Number(Items[key]))) {
        ItemList.push(Items[key]);
    }
}

router
    .route("/tables")
    .post((req, res) => {
        return res.send(JSON.stringify(table.TableList));
    })
    .get((req, res) => {
        return res.sendFile('views/tables.html', { root: __dirname });
    })

router
    .route('/orders/:tableID/:item?')
    .get((req, res) => {
        if (!(req.params.item == null)) {
            var item = req.params.item;
            if (item != "" && item != undefined) {
                for (var key in ItemList) {
                    if (item.localeCompare(ItemList[key]) == 0) {
                        table.TableList[Number.parseInt(req.params.tableID)].tableOrder.addItem(item);
                        break;
                    }
                }
            }
        }
        return res.sendFile('views/orders.html', { root: __dirname });

    })
    .post((req, res) => {
        if (table.TableList[Number.parseInt(req.params.tableID)] != null) {
            return res.send(JSON.stringify(table.TableList[Number.parseInt(req.params.tableID)]));
        } else {
            return res.send(null);
        }

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