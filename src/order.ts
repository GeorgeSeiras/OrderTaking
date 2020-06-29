export class order{
  items:Array<string>;

  constructor(){
    this.items = [];

  }

  addItem(item:string){
    this.items.push(item);
  }

  closeOrder() {
    while(this.items.length>0){
        this.items.pop;
    }
}
}