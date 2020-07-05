import { expect } from 'chai';
import { table } from "../table";
import { order } from "../order";
import 'mocha';

var orderhelper = new order();
var tablehelper = new table();

describe("Get all tables", () => {
    it('should return the tableIDs', () => {
        var tableList = JSON.parse(JSON.stringify(tablehelper.getAllTables()));
        for (var i = 0; i < tableList.length; i++) {
            expect(tableList[i].tableID)
        }
    });
});
describe("Add freddo_capuccino to orders for table 1", async () => {
    it('should add freddo_capuccino to the orders of table 1', async () => {
        var done = await orderhelper.addToOrder("freddo_capuccino", 1);
        var orderList = await orderhelper.getOrders(1);
        var orderListfinal = JSON.parse(JSON.stringify(orderList));
        expect(orderListfinal[0].item === "freddo_capuccino");

    });
});
describe("Remove all items from the order of table 1", () => {
    it('should empty the orders of table 1', () => {
        orderhelper.closeOrder(1);
        var orderList = JSON.parse(JSON.stringify(orderhelper.getOrders(1)));
        expect(orderList.length === 0);
    })
})