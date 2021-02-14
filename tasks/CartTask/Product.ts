"use strict"

import {
    v4 as uuidv4
} from 'uuid';
import Validator from './Validator';

export { ProductInterface, Product }

interface ProductInterface {
    readonly _id: string;
    name: string;
    category: string;
    normalPrice: number;
    discountInPerc: number | null;
    discountedPrice: number;

    changePrice(newPrice: number): this;
    changeName(newName: string): this;
    changeDiscount(newDiscount: number): this;
    changeCategory(newCategory: string): this;
}

class Product {
    readonly _id: string;
    name: string;
    category: string;
    normalPrice: number;
    discountInPerc: number | null;
    discountedPrice: number;

    constructor(name: string, category: string, price: number) {
        if (!Validator.isEmptyString(name)) throw new Error("Name input is empty");
        if (!Validator.isEmptyString(category)) throw new Error("Category input is empty");
        if (!Validator.isNumberPositive(price)) throw new Error("Invalid price input");


        this._id = uuidv4();
        this.name = name;
        this.category = category;
        this.normalPrice = price;
        this.discountInPerc = null;
        this.discountedPrice = this.normalPrice;
    }

    changePrice(newPrice: number): this {
        if (!Validator.isNumberPositive(newPrice)) throw new Error("Invalid newPrice input");

        this.normalPrice = newPrice;
        if (this.discountInPerc) this.discountedPrice = this.normalPrice - (this.normalPrice * (this.discountInPerc / 100))
        return this;
    }

    changeName(newName: string): this {
        if (!Validator.isEmptyString(newName)) throw new Error("newName input is empty");

        this.name = newName;
        return this;
    }

    changeDiscount(newDiscount: number): this {
        if (!Validator.isNumberPositive(newDiscount)) throw new Error("Invalid newDiscount input");
        if (!Validator.isBetweenRange(newDiscount, 100, 0)) throw new Error("Invalid newDiscount input");

        this.discountInPerc = newDiscount;
        this.discountedPrice = this.normalPrice - (this.normalPrice * (newDiscount / 100));
        return this;
    }

    changeCategory(newCategory: string): this {
        if (!Validator.isEmptyString(newCategory)) throw new Error("Invalid newCategory input");

        this.category = newCategory;
        return this;
    }
}