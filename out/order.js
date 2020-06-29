"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
class order {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    closeOrder() {
        while (this.items.length > 0) {
            this.items.pop;
        }
    }
}
exports.order = order;
//# sourceMappingURL=order.js.map