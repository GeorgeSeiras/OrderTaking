"use strict";
exports.__esModule = true;
exports.OrderModel = exports.TableModel = exports.mongoose = void 0;
var mongoose = require("mongoose");
exports.mongoose = mongoose;
var mongoDB = 'mongodb://127.0.0.1/tables';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var Schema = mongoose.Schema;
var query = {}, update = { expire: new Date() }, options = { upsert: true, "new": true, setDefaultsOnInsert: true };
var TablesSchema = new Schema({
    tableID: Number
});
var OrdersSchema = new Schema({
    tableID: Number,
    item: String
});
var TableModel = mongoose.model('TableModel', TablesSchema);
exports.TableModel = TableModel;
var OrderModel = mongoose.model('OrderModel', OrdersSchema);
exports.OrderModel = OrderModel;
TableModel.findOneAndUpdate(query, update, options, function (err, result) {
    if (err) {
        return;
    }
});
OrderModel.findOneAndUpdate(query, update, options, function (err, result) {
    if (err) {
        return;
    }
});
