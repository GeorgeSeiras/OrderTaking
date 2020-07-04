import { mongoose, OrderModel } from "./index";
export class order {
  public items: Array<string> = new Array();

  constructor() {
  }

  private getItems() {
    return this.items;
  }
  private addItems(item: string) {
    this.items.push(item);
  }
  static async addToOrder(item: string, id: number) {

    var newOrder = new OrderModel({
      tableID: id,
      item: item
    });
    return newOrder.save(function (err, OrderModel) {
      if (err) {
        console.log(err);
      }
    });
  }

  static async closeOrder(tableID: number) {
    OrderModel.remove({ tableID: tableID }, function (err) {
      if (err) {
        console.log(err);
      }
    });
    return true;
  }

  public async getOrders(id: number) {
    return OrderModel.find({
      tableID: id
    });;
  }
}
