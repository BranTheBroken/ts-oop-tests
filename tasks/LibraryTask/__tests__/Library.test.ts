import { Book } from "../Book";
import { User } from "../User";
import { Library } from '../Library';

test('addBook method works correctly', () => {
    const testBook0 = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testBook1 = new Book("My Little Pony", "William Shakespeare", "Kucyki i ich wybryki");
    const testBook2 = new Book('Poradkin', 'Arnold Schwarzenibba', 'how to live');

    const testLibrary = new Library();

    testLibrary.addBook(testBook0);

    expect(testLibrary.bookList.length).toBe(1);
    expect(testLibrary.bookList[0]).toEqual(testBook0);

    testLibrary.addBook(testBook1);

    expect(testLibrary.bookList.length).toBe(2);
    expect(testLibrary.bookList[1]).toEqual(testBook1);

    testLibrary.addBook(testBook2);

    expect(testLibrary.bookList.length).toBe(3);
    expect(testLibrary.bookList[2]).toEqual(testBook2);
});

test('addUser method works correctly', () => {
    const testUser0 = new User("Maciek", "Walezy");
    const testUser1 = new User("Wojtek", "Bezportek");
    const testUser2 = new User("XYZ", 'ZYX');

    const testLibrary = new Library();

    testLibrary.addUser(testUser0);

    expect(testLibrary.userList.length).toBe(1);
    expect(testLibrary.userList[0]).toEqual(testUser0);

    testLibrary.addUser(testUser1);

    expect(testLibrary.userList.length).toBe(2);
    expect(testLibrary.userList[1]).toEqual(testUser1);

    testLibrary.addUser(testUser2);

    expect(testLibrary.userList.length).toBe(3);
    expect(testLibrary.userList[2]).toEqual(testUser2);
});


test('deleteBook method works correctly', () => {
    const testBook0 = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testBook1 = new Book("My Little Pony", "William Shakespeare", "Kucyki i ich wybryki");
    const testBook2 = new Book('Poradkin', 'Arnold Schwarzenibba', 'how to live');

    const testLibrary = new Library();

    testLibrary.addBook(testBook0);
    testLibrary.addBook(testBook1);
    testLibrary.addBook(testBook2);

    testLibrary.deleteBook(testBook0);

    expect(testLibrary.bookList.length).toBe(2);
    testLibrary.bookList.forEach((value) => {
        expect(value).not.toEqual(testBook0)
    });

    testLibrary.deleteBook(testBook1);

    expect(testLibrary.bookList.length).toBe(1);
    testLibrary.bookList.forEach((value) => {
        expect(value).not.toEqual(testBook1)
    });


    testLibrary.deleteBook(testBook2);

    expect(testLibrary.bookList.length).toBe(0);
    testLibrary.bookList.forEach((value) => {
        expect(value).not.toEqual(testBook2)
    });
});

test('deleteBook method works correctly', () => {
    const testUser0 = new User("Maciek", "Walezy");
    const testUser1 = new User("Wojtek", "Bezportek");
    const testUser2 = new User("XYZ", 'ZYX');

    const testLibrary = new Library();

    testLibrary.addUser(testUser0);
    testLibrary.addUser(testUser1);
    testLibrary.addUser(testUser2);

    testLibrary.deleteUser(testUser0);

    expect(testLibrary.userList.length).toBe(2);
    testLibrary.userList.forEach((value) => {
        expect(value).not.toEqual(testUser0)
    });

    testLibrary.deleteUser(testUser1);

    expect(testLibrary.userList.length).toBe(1);
    testLibrary.userList.forEach((value) => {
        expect(value).not.toEqual(testUser1)
    });


    testLibrary.deleteUser(testUser2);

    expect(testLibrary.userList.length).toBe(0);
    testLibrary.userList.forEach((value) => {
        expect(value).not.toEqual(testUser2)
    });
});

test('rentBook method works correctly', () => {
    const testUser0 = new User("Maciek", "Walezy");
    const testUser1 = new User("Wojtek", "Bezportek");

    const testBook0 = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testBook1 = new Book("My Little Pony", "William Shakespeare", "Kucyki i ich wybryki");
    const testBook2 = new Book('Poradkin', 'Arnold Schwarzenibba', 'how to live');

    const testLibrary = new Library();

    testLibrary.addUser(testUser0);
    testLibrary.addUser(testUser1);
    testLibrary.addBook(testBook0);
    testLibrary.addBook(testBook1);
    testLibrary.addBook(testBook2);

    testLibrary.rentBook(testBook0, testUser0);
    let booking = testLibrary.bookingsList[0];

    expect(booking.renter).toEqual(testUser0);
    expect(booking.rentedBooks[0]).toEqual(testBook0);

    testLibrary.rentBook(testBook1, testUser0);
    booking = testLibrary.bookingsList[1];

    expect(booking.renter).toEqual(testUser0);
    expect(booking.rentedBooks[0]).toEqual(testBook1);

    testLibrary.rentBook(testBook2, testUser1);
    booking = testLibrary.bookingsList[2];

    expect(booking.renter).toEqual(testUser1);
    expect(booking.rentedBooks[0]).toEqual(testBook2);
});

test('returnBooks method works correctly', () => {
    const testUser0 = new User("Maciek", "Walezy");
    const testUser1 = new User("Wojtek", "Bezportek");

    const testBook0 = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testBook1 = new Book("My Little Pony", "William Shakespeare", "Kucyki i ich wybryki");
    const testBook2 = new Book('Poradkin', 'Arnold Schwarzenibba', 'how to live');

    const testLibrary = new Library();

    testLibrary.addUser(testUser0);
    testLibrary.addUser(testUser1);
    testLibrary.addBook(testBook0);
    testLibrary.addBook(testBook1);
    testLibrary.addBook(testBook2);

    testLibrary.rentBook(testBook0, testUser0);
    testLibrary.rentBook(testBook1, testUser0);
    testLibrary.rentBook(testBook2, testUser1);

    testLibrary.returnBook(testBook0, testUser0);

    testLibrary.bookingsList.forEach(booking => {
        expect(booking.renter).not.toEqual(testUser0._id);
        booking.rentedBooks.forEach(book => {
            expect(book).not.toEqual(testBook0._id);
        });
    });

    testLibrary.returnBook(testBook1, testUser0);

    testLibrary.bookingsList.forEach(booking => {
        expect(booking.renter).not.toEqual(testUser0._id);
        booking.rentedBooks.forEach(book => {
            expect(book).not.toEqual(testBook1._id);
        });
    });

    testLibrary.returnBook(testBook2, testUser1);

    testLibrary.bookingsList.forEach(booking => {
        expect(booking.renter).not.toEqual(testUser1);
        booking.rentedBooks.forEach(book => {
            expect(book).not.toEqual(testBook2);
        });
    });
});

test('deleteBook method should throw an error', () => {
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    expect(() => {
        testLibrary.deleteBook(testBook);
    }).toThrow('Book couldnt be found');
});

test('deleteBook method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    expect(() => {
        testLibrary.addBook(testBook);
        testLibrary.addUser(testUser);
        testLibrary.rentBook(testBook, testUser);

        testLibrary.deleteBook(testBook);
    }).toThrow('Book is rented!');
});

test('deleteUser method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testLibrary = new Library();

    expect(() => {
        testLibrary.deleteUser(testUser);
    }).toThrow('User couldnt be found');
});

test('deleteUser method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    testLibrary.addBook(testBook);
    testLibrary.addUser(testUser);
    testLibrary.rentBook(testBook, testUser);


    expect(() => {
        testLibrary.deleteUser(testUser);
    }).toThrow('User is renting');

});

test('rentBook method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    expect(() => {
        testLibrary.addUser(testUser);
        testLibrary.rentBook(testBook, testUser);
    }).toThrow('Book couldnt be found');
});
test('rentBook method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    testLibrary.addBook(testBook);

    expect(() => {
        testLibrary.rentBook(testBook, testUser);
    }).toThrow('User couldnt be found');
});

test('rentBook method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    testLibrary.addUser(testUser);
    testLibrary.addBook(testBook);

    testLibrary.rentBook(testBook, testUser);//would work

    expect(() => {
        testLibrary.rentBook(testBook, testUser);//cannot rent second time the same book
    }).toThrow('Book is rented!');
});

test('returnBook method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    expect(() => {
        testLibrary.addUser(testUser);
        testLibrary.rentBook(testBook, testUser);
    }).toThrow('Book couldnt be found');
});

test('returnBook method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    testLibrary.addBook(testBook);

    expect(() => {
        testLibrary.rentBook(testBook, testUser);
    }).toThrow('User couldnt be found');
});

test('returnBook method should throw an error', () => {
    const testUser = new User("Maciek", "Walezy");
    const testBook = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testLibrary = new Library();

    testLibrary.addUser(testUser);
    testLibrary.addBook(testBook);

    expect(() => {
        testLibrary.returnBook(testBook, testUser);
    }).toThrow('Booking couldnt be found');
});