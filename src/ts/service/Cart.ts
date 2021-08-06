import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    calculateSum():number {
      let sum = 0
      for(const item of this._items) {
        sum += item.price
      }
      return sum
    }

    calculateDiscountSum(discount:number):number {
      const sum = this.calculateSum();
      const discountSum = sum - sum * (discount/100);
      return discountSum;
    }

    deleteItem(id:number):void {
      const indexToDelete = this._items.findIndex(item => item.id === id);
      this._items.splice(indexToDelete, 1)
    }
}
