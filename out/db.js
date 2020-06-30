"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql = require("mysql");
exports.connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'cafe'
});
exports.connection.connect(function (err) {
    if (err)
        throw err;
    var createTables = 'create table if not exists tables(id int primary key auto_increment)';
    var createOrders = 'create table if not exists orders(id int primary key auto_increment,item varchar(50) not null,tableID int not null,FOREIGN KEY (tableID) REFERENCES tables(id))';
    exports.connection.query(createTables, (err, results, fields) => {
        if (err) {
            console.log(err.message);
        }
    });
    exports.connection.query(createOrders, (err, results, fields) => {
        if (err) {
            console.log(err.message);
        }
    });
});
//# sourceMappingURL=db.js.map