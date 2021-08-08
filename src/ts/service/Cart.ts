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
      const result = this._items.reduce(function(sum, current) {
      return sum + current.price;
      }, 0);
      return result
    }

    calculateDiscountSum(discount:number):number {
      const sum = this.calculateSum();
      const discountSum = sum - sum * (discount/100);
      return discountSum;
    }

    deleteItem(id:number):void {
      this._items = this._items.filter((item:Buyable) => item.id !== id)
    }
}
