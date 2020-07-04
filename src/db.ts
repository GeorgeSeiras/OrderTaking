import * as mongoose from "mongoose";

var mongoDB = 'mongodb://127.0.0.1/tables';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var query = {},
    update = { expire: new Date() },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

var TablesSchema = new Schema({
    tableID: Number
});

var OrdersSchema = new Schema({
    tableID: Number,
    item: String
});
var TableModel = mongoose.model('TableModel', TablesSchema);
var OrderModel = mongoose.model('OrderModel', OrdersSchema);
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

export { mongoose, TableModel, OrderModel };