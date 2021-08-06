import Cart from '../service/Cart';
import MusicAlbum from "../domain/MusicAlbum";


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('calculate sum', ()=>{
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1020, 'Violator', 'Depeche Mode', 1000));
  const sum = cart.calculateSum();
  expect(sum).toBe(1900)
});

test('calculate discount sum', ()=>{
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1020, 'Violator', 'Depeche Mode', 1000));
  const discountSum = cart.calculateDiscountSum(10)
  expect(discountSum).toBe(1710)
});

test('delete item', ()=>{
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new MusicAlbum(1020, 'Violator', 'Depeche Mode', 1000));
  cart.deleteItem(1008);
  expect(cart).toEqual({"_items": [{
    "id": 1020,
    "name": "Violator",
    "author": "Depeche Mode",
    "price": 1000
  }]})
})
