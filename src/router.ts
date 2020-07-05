import { mongoose } from "./index";
import * as express from "express";
import { Items } from "./index";
import { order, table } from "./index";
const router = express.Router();
var ItemList: Array<string> = [];

var tableHelper: table = new table();
var orderhelper = new order();

for (var key in Items) {
    if (isNaN(Number(Items[key]))) {
        ItemList.push(Items[key]);
    }
}

router
    .route("/")
    .get((req, res) => {
        return res.redirect("/tables");
    });
router
    .route("/tables")
    .post(async (req, res) => {
        var tables = await tableHelper.getAllTables();
        return res.send(JSON.stringify(tables));
    })
    .get((req, res) => {
        return res.sendFile('views/tables.html', { root: __dirname });
    })

router
    .route('/orders/:tableID/:item?')
    .get((req, res) => {
        var item = req.params.item;
        var tableID = Number.parseInt(req.params.tableID);
        if (item != null) {
            if (item != "" && item != undefined) {
                for (var key in ItemList) {
                    if (item.localeCompare(ItemList[key]) == 0) {
                        var done = orderhelper.addToOrder(item, tableID);
                        break;
                    }
                }
            }
        }
        return res.sendFile('views/orders.html', { root: __dirname });

    })
    .post(async (req, res) => {
        var item: string = req.params.item;;
        var tableID: number = Number(req.params.tableID);
        if (item === "closeOrder") {
            orderhelper.closeOrder(tableID);
            return res.send(null);
        } else {
            var orders = await orderhelper.getOrders(tableID);
            return res.send(JSON.stringify(orders));
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