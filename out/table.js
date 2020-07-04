"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const index_1 = require("./index");
const index_2 = require("./index");
class table {
    constructor(id) {
        this.id = id;
        this.tableOrder = new index_1.order();
    }
    createTable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var newTable = new index_2.TableModel({
                tableID: id
            });
            return newTable.save(function (err, TableModel) {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
    getAllTables() {
        return __awaiter(this, void 0, void 0, function* () {
            return index_2.TableModel.find({}).sort('tableID');
        });
    }
}
exports.table = table;
//# sourceMappingURL=table.js.map