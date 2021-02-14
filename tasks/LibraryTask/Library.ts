"use strict"

import { Booking, BookingInterface } from "./Booking";
import { Book, BookInterface } from "./Book";
import { User, UserInterface } from "./User";

export { Library };

interface LibraryInterface {
    bookList: BookInterface[];
    bookingsList: BookingInterface[];
    userList: UserInterface[];

    addBook(book: BookInterface): this;
    addUser(user: UserInterface): this;
    deleteBook(book: BookInterface): this;
    deleteUser(user: UserInterface): this;
    rentBook(book: BookInterface, user: UserInterface): this;
    returnBook(book: BookInterface, user: UserInterface): this;
}

class Library implements LibraryInterface {
    bookList: BookInterface[];
    bookingsList: BookingInterface[];
    userList: UserInterface[];

    constructor() {
        this.bookList = [];
        this.bookingsList = [];
        this.userList = [];
    }


    addBook(book: BookInterface): this {
        this.bookList.push(book);

        return this;
    }

    addUser(user: UserInterface): this {
        this.userList.push(user);

        return this;
    }

    deleteBook(book: BookInterface): this {
        if (!this.bookList.includes(book)) throw new Error("Book couldnt be found");

        for (const booking of this.bookingsList) {
            if (booking.rentedBooks.includes(book)) throw new Error("Book is rented!")
        }

        const bookIdx: number = this.bookList.indexOf(book);
        this.bookList.splice(bookIdx, 1);
        return this;
    }

    deleteUser(user: UserInterface): this {
        if (!this.userList.includes(user)) throw new Error("User couldnt be found");

        for (const booking of this.bookingsList) {
            if (booking.renter._id === user._id) throw new Error("User is renting")
        }

        const userIdx: number = this.userList.indexOf(user);
        this.userList.splice(userIdx, 1);
        return this;
    }

    rentBook(book: BookInterface, user: UserInterface): this {
        if (!this.userList.includes(user)) throw new Error("User couldnt be found");
        if (!this.bookList.includes(book)) throw new Error("Book couldnt be found");

        for (const booking of this.bookingsList) {
            if (booking.rentedBooks.includes(book)) throw new Error("Book is rented!")
        }

        this.bookingsList.push(new Booking(user, book));
        return this;
    }

    returnBook(book: BookInterface, user: UserInterface): this {
        if (!this.userList.includes(user)) throw new Error("User couldnt be found");
        if (!this.bookList.includes(book)) throw new Error("Book couldnt be found");

        const findBooking: BookingInterface | undefined = this.bookingsList.find(booking => booking.rentedBooks.includes(book) && booking.renter === user);
        if (typeof findBooking === 'undefined') throw new Error("Booking couldnt be found");

        const returnedBookIdx: number = findBooking.rentedBooks.indexOf(book);
        findBooking.rentedBooks.splice(returnedBookIdx, 1);
        findBooking.countCharge();

        const findBookingIdx: number = this.bookingsList.indexOf(findBooking)
        if (findBooking.rentedBooks.length === 0) this.bookingsList.splice(findBookingIdx, 1);

        return this;
    }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
const book2 = new Book("My Little Pony", "William Shakespeare", "Kucyki i ich wybryki");
const book3 = new Book("Poradnik", "Razi", "Jak żyć by żyć");
const user1 = new User("Maciek", "Walezy");
const user2 = new User("Wojtek", "Bezportek");
const library = new Library();
library.addBook(book1).addBook(book2).addBook(book3).addUser(user1).addUser(user2);
library.rentBook(book1, user1).rentBook(book2, user2).rentBook(book3, user1);
console.log(library);