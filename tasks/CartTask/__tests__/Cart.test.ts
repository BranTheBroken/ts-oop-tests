import { Product } from '../Product';
import { CartItem } from '../CartItem';
import Cart from '../Cart'

test('addProduct method works correctly, with valid parameters', () => {
    const testProd0 = new Product("Cheddar", "Cheese", 12);
    const testProd1 = new Product("Book", "Books", 35);
    const testProd2 = new Product("Bread", "Groceries", 4);

    const testCart = new Cart();
    const testCartTotals: object = testCart.totals;

    testCart.addProduct(testProd0, 2);
    expect(testCart.userCart[0].product).toBe(testProd0);
    expect(testCartTotals).not.toEqual(testCart.totals);
    expect(testCart.userCart.length).toBe(1);

    testCart.addProduct(testProd1, 1);
    expect(testCart.userCart[1].product).toBe(testProd1);
    expect(testCartTotals).not.toEqual(testCart.totals);
    expect(testCart.userCart.length).toBe(2);

    testCart.addProduct(testProd2, 3);
    expect(testCart.userCart[2].product).toBe(testProd2);
    expect(testCartTotals).not.toEqual(testCart.totals);
    expect(testCart.userCart.length).toBe(3);
});

test('addCartDiscount method works correctly, with valid parameters', () => {
    const testProd0 = new Product("Cheddar", "Cheese", 12);
    const testProd1 = new Product("Book", "Books", 35);
    const testProd2 = new Product("Bread", "Groceries", 4);

    const testCart = new Cart();
    const testCartTotals = testCart.totals;

    testCart.addProduct(testProd0, 2);
    testCart.addProduct(testProd1, 1);
    testCart.addProduct(testProd2, 3);

    testCart.addCartDiscount("MAAASLO");

    expect(testCart.discountValue).toBe(10);
    expect(testCart.totals).not.toEqual(testCartTotals);
});

test('addCartDiscount method throws an error with empty string as input', () => {
    const testCart = new Cart();

    expect(() => {
        testCart.addCartDiscount('');
    }).toThrow('Invalid discount code');
});

test('addCartDiscount method throws an error with string, that isnt valid discount code', () => {
    const testCart = new Cart();

    expect(() => {
        testCart.addCartDiscount('notACode');
    }).toThrow('Invalid discount code');
});

test('changeProdQty method works correctly with positive value', () => {
    const testCart = new Cart();
    const testProd = new Product("Cheddar", "Cheese", 12);
    const testCartTotals = testCart.totals;

    testCart.addProduct(testProd, 2);
    testCart.changeProdQty(testCart.userCart[0], 3)

    expect(testCart.totals).not.toEqual(testCartTotals);
    expect(testCart.userCart[0].qty).toBe(3);
});


test('deleteProduct method works correctly', () => {
    const testCart = new Cart();
    const testProduct = new Product("Bread", "Groceries", 4);

    testCart.addProduct(testProduct, 5);
    const testCartTotals = testCart.totals;

    testCart.deleteProduct(testCart.userCart[0]);

    expect(testCart.userCart.length).toBe(0);
    expect(testCart.totals).not.toEqual(testCartTotals);
});

test('calculateTotals method works correctly', () => {
    const testProduct0 = new Product("Cheddar", "Cheese", 12);
    const testProduct1 = new Product("Book", "Books", 35);
    const testProduct2 = new Product("Bread", "Groceries", 4);

    const testCart = new Cart();

    testCart.addProduct(testProduct0, 2);

    expect(testCart.totals.price).toBe(24);
    expect(testCart.totals.qty).toBe(2);
    expect(testCart.totals.discount).toBe(24);

    console.log(testCart.totals.price, 'PRICE');
    console.log(testCart.totals.qty, 'QTY');
    console.log(testCart.totals.discount, 'DISCOUNT');

    testCart.addProduct(testProduct1, 1);

    console.log(testCart.totals.price, 'PRICE');
    console.log(testCart.totals.qty, 'QTY');
    console.log(testCart.totals.discount, 'DISCOUNT');

    expect(testCart.totals.price).toBe(59);
    expect(testCart.totals.qty).toBe(3);
    expect(testCart.totals.discount).toBe(59);

    testCart.addProduct(testProduct2, 3);

    console.log(testCart.totals.price, 'PRICE');
    console.log(testCart.totals.qty, 'QTY');
    console.log(testCart.totals.discount, 'DISCOUNT');

    expect(testCart.totals.price).toBe(71);
    expect(testCart.totals.qty).toBe(6);
    expect(testCart.totals.discount).toBe(71);

    testCart.addCartDiscount('BULBULB');

    console.log(testCart.totals.price, 'PRICE');
    console.log(testCart.totals.qty, 'QTY');
    console.log(testCart.totals.discount, 'DISCOUNT');

    expect(testCart.totals.price).toBe(63.9);
    expect(testCart.totals.qty).toBe(6);
    expect(testCart.totals.discount).toBe(10);
});

test('addCartDiscount method should throw an error', () => {
    const testCart = new Cart();

    expect(() => {
        testCart.addCartDiscount('');
    }).toThrow('Invalid discount code');

    expect(() => {
        testCart.addCartDiscount('invalid code');
    }).toThrow('Invalid discount code');
});

test('changeProdQty method should throw an error', () => {
    const testCart = new Cart();
    const testProduct = new Product("Cheddar", "Cheese", 12)

    testCart.addProduct(testProduct, 2);

    expect(() => {
        testCart.changeProdQty(testCart.userCart[0], NaN);
    }).toThrow('Invalid value input');

    expect(() => {
        testCart.changeProdQty(testCart.userCart[0], -2);
    }).toThrow('Invalid value input');

})