import { CartItem } from '../CartItem';
import { Product } from '../Product';

test('When CartItem is created, getTotal method counts price with getTotal correctly', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4)
    const testCartItem: CartItem = new CartItem(testProduct, 2);

    expect(testCartItem.total).toBe(8);
})

test('changeQty method works correctly with valid parameters', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4)
    const testCartItem: CartItem = new CartItem(testProduct, 2);

    const previousQty: number = testCartItem.qty;
    testCartItem.changeQty(12);

    expect(testCartItem.qty).not.toBe(previousQty);
    expect(testCartItem.qty).toBe(12);
});

test('CartItem constructor error', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4);

    expect(() => {
        const testCartItem: CartItem = new CartItem(testProduct, -2);
    }).toThrow('Invalid qty input')
});

test('changeQty should throw an error', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4);
    const testCartItem: CartItem = new CartItem(testProduct, 2);

    expect(() => {
        testCartItem.changeQty(-4);
    }).toThrow('Invalid value input');
    expect(() => {
        testCartItem.changeQty(0);
    }).toThrow('Invalid value input');
});