// Obiekt charakteryzujący przedmiot w koszyku:
import { ProductInterface } from './Product';
import Validator from './Validator';

export { CartItem, CartItemInterface };

interface CartItemInterface {
    product: ProductInterface;
    qty: number;
    total: number;

    getTotal(): number;
    changeQty(value: number): this;
}

class CartItem {
    product: ProductInterface;
    qty: number;
    total: number;

    constructor(product: ProductInterface, qty: number) {
        if (!Validator.isNumberPositive(qty)) throw new Error("Invalid qty input");


        this.product = product;
        this.qty = qty;
        this.total = this.getTotal();
    }

    getTotal(): number {
        return this.product.discountedPrice * this.qty;
    }

    changeQty(value: number): this {
        if (!Validator.isNumberPositive(value)) throw new Error("Invalid value input");

        this.qty = value;
        this.total = this.getTotal();
        return this;
    }
}