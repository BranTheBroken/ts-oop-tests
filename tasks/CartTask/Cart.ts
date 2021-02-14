// Stwórz strukturę danych związaną ze sklepem internetowym
import {
    v4 as uuidv4
} from 'uuid';

import { Product, ProductInterface } from './Product';
import { CartItem, CartItemInterface } from './CartItem';
import Validator from './Validator';

interface CartInterface {
    _id: string;
    userCart: CartItem[];
    discountValue: number | null;
    totals: {
        price: number;
        qty: number;
        discount: number;
    };

    addProduct(product: ProductInterface, qty: number): this;
    addCartDiscount(discount: string): this;
    changeProdQty(id: string, value: number): CartItem[] | this;
    deleteProduct(cartItem: CartItemInterface): this;
    calculateTotals(): void;
}

export default class Cart {
    _id: string;
    userCart: CartItem[];
    discountValue: number | null;
    totals: {
        price: number;
        qty: number;
        discount: number;
    };

    constructor() {
        this._id = uuidv4();
        this.userCart = [];
        this.discountValue = null
        this.totals = {
            price: 0,
            qty: 0,
            discount: 0,
        };
    }

    addProduct(product: ProductInterface, qty: number): this {
        try {
            const isProductInCart: CartItem | undefined = this.userCart.find(item => item.product.name === product.name);
            if (isProductInCart instanceof CartItem) isProductInCart.changeQty(qty);

            const cartItem = new CartItem(product, qty);
            this.userCart.push(cartItem);
        } catch (err) {
            console.error(err);
        }
        this.calculateTotals();
        return this;
    }

    addCartDiscount(discount: string): this {
        if (!Validator.isEmptyString(discount)) throw new Error("Invalid discount code");

        const discountCodes = ["BULBULB", "MAAASLO", "bumcyfyksz"];

        if (!discountCodes.includes(discount)) throw new Error("Invalid discount code");

        this.discountValue = 10;
        this.calculateTotals();

        return this;
    }

    changeProdQty(cartItem: CartItemInterface, value: number): CartItem[] | this {
        if (!Validator.isNumberPositive(value)) throw new Error('Invalid value input');

        cartItem.changeQty(value);
        if (cartItem.qty === 0) this.deleteProduct(cartItem);

        this.calculateTotals();
        return this;
    }

    deleteProduct(cartItem: CartItemInterface): this {
        const cartItemIdx: number = this.userCart.indexOf(cartItem);

        this.userCart.splice(cartItemIdx, 1);
        this.calculateTotals();
        return this;
    }

    calculateTotals() {
        this.totals = this.userCart.reduce((acc, currVal) => {
            acc.price += currVal.product.discountedPrice * currVal.qty;
            acc.qty += currVal.qty;
            acc.discount += currVal.product.normalPrice * currVal.qty;

            return acc;
        }, {
            price: 0,
            qty: 0,
            discount: 0,
        });

        if (typeof this.discountValue === 'number') this.totals.price = this.totals.price - (this.totals.price * (this.discountValue / 100));

        this.totals.discount = parseFloat((this.totals.discount / (this.totals.discount - this.totals.price)).toFixed(1));
        return this;
    }
}

// const prod1 = new Product("Cheddar", "Cheese", 12);
// const prod3 = new Product("Book", "Books", 35);
// const prod4 = new Product("Bread", "Groceries", 4);

// const cart = new Cart();
// cart.addProduct(prod1, 2).addProduct(prod3, 1).addProduct(prod4, 3);
// cart.addCartDiscount("BULBULB");
//console.log(cart);