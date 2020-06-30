"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const index_1 = require("./index");
const index_2 = require("./index");
class table {
    constructor(id) {
        this.id = id;
        this.tableOrder = new index_1.order();
    }
    static createTable(id) {
        index_2.connection.query('SELECT id FROM tables WHERE id=' + id + ';', (err, result) => {
            if (result.length == 0) {
                index_2.connection.query('INSERT INTO tables (id) VALUES (' + id + ');', (err, result) => {
                    if (err) {
                        throw err;
                    }
                });
            }
        });
    }
}
exports.table = table;
table.TableList = [];
//# sourceMappingURL=table.js.map