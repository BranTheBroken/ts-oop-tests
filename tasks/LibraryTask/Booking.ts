"use strict"

import { BookInterface } from './Book';
import { UserInterface } from './User';

export { Booking, BookingInterface };

interface BookingInterface {
    rentDate: Date;
    expireDate: Date;
    rentedBooks: BookInterface[];
    renter: UserInterface;
    charge: number;

    addBook(book: BookInterface): this;
    countCharge(): this;
}

class Booking implements BookingInterface {
    rentDate: Date;
    expireDate: Date;
    rentedBooks: BookInterface[];
    renter: UserInterface;
    charge: number;

    constructor(user: UserInterface, book: BookInterface) {

        const date = new Date();
        this.rentDate = date;
        this.expireDate = date;
        this.expireDate.setDate(this.expireDate.getDate() + 7);

        this.rentedBooks = [book];
        this.renter = user;
        this.charge = 0;
    }

    addBook(book: BookInterface): this {
        this.rentedBooks.push(book);
        return this;
    }

    countCharge(): this {
        let today: Date | number = new Date();
        let copyExpired: Date | number = this.expireDate;
        today = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
        copyExpired = Date.UTC(copyExpired.getFullYear(), copyExpired.getMonth(), copyExpired.getDate());


        const millisInDay = (1000 * 60 * 60 * 24)
        this.charge = ((today - copyExpired) / millisInDay) > 0 ?
            ((today - copyExpired) / millisInDay) * 0.33 : 0;
        if (this.charge > 0) console.log(`Fee to pay: ${this.charge}`);
        return this;
    }
}