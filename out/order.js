"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
class order {
    constructor() {
        this.items = new Array();
    }
    addItem(item) {
        this.items.push(item);
    }
    closeOrder() {
        this.items.length = 0;
    }
}
exports.order = order;
//# sourceMappingURL=order.js.map