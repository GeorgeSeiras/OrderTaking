import * as express from "express";
import { order, table } from "./index";
const router = express.Router();

const table1 = new table(0);
const table2 = new table(1);
const table3 = new table(2);
const table4 = new table(3);
const table5 = new table(4);

const TableList: Array<table> = [table1, table2, table3, table4, table5];
const orderList: Array<order> = [];
router
    .route("/tables")
    .post((req,res)=>{
        return res.send(JSON.stringify(TableList));
    })
    .get((req, res) => {
        return res.sendFile('views/tables.html',{root:__dirname});
    })
   

router
    .route("/orders")
    .get((req, res) => {
    })

router
    .route("/tables/:tableID")
    .get((req, res) => {
        return res.sendFile('views/orders.html',{root:__dirname});
    })
    .post((req, res) => {
        var id:number=parseInt('${request.params.tableID}');
        if (TableList[id] != null) {
            return res.json(TableList[parseInt(`${req.params.tableID}`)].tableOrder);
        } else {
            return res.json(id);
        }
    })
    .post((req, res) => {
        var id:number=parseInt('${request.params.tableID}');
        var newOrder: order = JSON.parse(req.body);
        console.log(newOrder);
        if (TableList[id] != null) {
            TableList[id].addOrder(newOrder);
        }
        res.redirect("../tables");
    })

module.exports = router;