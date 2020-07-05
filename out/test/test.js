"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const table_1 = require("../table");
require("mocha");
describe("Get all tables", () => {
    it('should return the tableIDs', () => {
        var tablehelper = new table_1.default();
        var tableList = JSON.parse(JSON.stringify(tablehelper.getAllTables()));
        for (var i = 0; i < tableList.length; i++) {
            chai_1.expect(tableList[i].tableID);
        }
    });
});
//# sourceMappingURL=test.js.map