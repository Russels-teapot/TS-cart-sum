import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new MusicAlbum(1020, 'Violator', 'Depeche Mode', 1000))
console.log(cart.calculateSum());
console.log(cart.calculateDiscountSum(10));
cart.deleteItem(1001);
console.log(cart.items);
