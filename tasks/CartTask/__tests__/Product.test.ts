import { Product } from '../Product';

test('changePrice method works well with valid parameters', () => {
    const testProduct: Product = new Product("Cheddar", "Cheese", 12);

    const previousPrice: number = testProduct.normalPrice;
    testProduct.changePrice(10);

    expect(previousPrice).not.toBe(testProduct.normalPrice)
    expect(testProduct.normalPrice).toBe(10);
})

test('changeName method works well with valid parameters', () => {
    const testProduct: Product = new Product("Cheddar", "Cheese", 12);

    const previousName: string = testProduct.name;
    testProduct.changeName('Salame');

    expect(previousName).not.toBe(testProduct.name)
    expect(testProduct.name).toBe('Salame');
});

test('changeDiscount method works well with valid parameters', () => {
    const testProduct: Product = new Product("Book", "Books", 35);

    const previousPrice: number = testProduct.normalPrice;
    testProduct.changeDiscount(10);

    expect(previousPrice).not.toBe(testProduct.discountedPrice);
    expect(testProduct.discountedPrice).toBe(31.5);
    expect(testProduct.discountInPerc).toBe(10);
})

test('changeCategory method works well with valid parameters', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4);

    const previousCategory: string = testProduct.category;
    testProduct.changeCategory('Food');

    expect(previousCategory).not.toBe(testProduct.category)
    expect(testProduct.category).toBe('Food');
})

test('Product class should throw an error', () => {
    expect(() => {
        const testProduct0 = new Product("", "Groceries", 4);
    }).toThrow('Name input is empty');

    expect(() => {
        const testProduct1 = new Product("Bread", "", 4);
    }).toThrow('Category input is empty');

    expect(() => {
        const testProduct2 = new Product("Bread", "Groceries", -4);
    }).toThrow('Invalid price input');

    expect(() => {
        const testProduct3 = new Product("Bread", "Groceries", NaN);
    }).toThrow('Invalid price input');
});

test('changePrice should throw an error', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4);

    expect(() => {
        testProduct.changePrice(-2);
    }).toThrow('Invalid newPrice input');

    expect(() => {
        testProduct.changePrice(NaN);
    }).toThrow('Invalid newPrice input');
});

test('changeName should throw an error', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4);

    expect(() => {
        testProduct.changeName('');
    }).toThrow('newName input is empty');
});

test('changeDiscount should throw an error', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4);

    expect(() => {
        testProduct.changeDiscount(NaN);
    }).toThrow('Invalid newDiscount input');

    expect(() => {
        testProduct.changeDiscount(-1);
    }).toThrow('Invalid newDiscount input');
});

test('changeCategory should throw an error', () => {
    const testProduct: Product = new Product("Bread", "Groceries", 4);

    expect(() => {
        testProduct.changeCategory('');
    }).toThrow('Invalid newCategory input');
});