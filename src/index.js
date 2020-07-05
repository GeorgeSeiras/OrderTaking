"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
var db_1 = require("./db");
__createBinding(exports, db_1, "mongoose");
__createBinding(exports, db_1, "TableModel");
__createBinding(exports, db_1, "OrderModel");
var order_1 = require("./order");
__createBinding(exports, order_1, "order");
var table_1 = require("./table");
__createBinding(exports, table_1, "table");
var items_1 = require("./items");
__createBinding(exports, items_1, "Items");
