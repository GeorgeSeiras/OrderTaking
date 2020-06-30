import { connection } from "./index";
export class order {
  items: Array<string> = new Array();

  constructor() {
  }

  public addToOrder(item: string) {
    connection.query('INSERT INTO orders (item) VALUES (' + item + ');', (err, result) => {
      if (err) {
        throw err;
      }
    });
  }

  public closeOrder(tableID: number) {
    connection.query('DELETE FROM orders WHERE tableID=' + tableID + ';', (err, result) => {
      if (err) {
        throw err;
      }
    });
  }
}
