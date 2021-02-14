import { Booking } from '../Booking';
import { Book } from '../Book';
import { User } from '../User';


test('addBook method works correctly', () => {
    const testBook0 = new Book("Harry Potter", "J.K. Rowling", "Pioruny, różdżki, magia");
    const testBook1 = new Book("My Little Pony", "William Shakespeare", "Kucyki i ich wybryki");
    const testBook2 = new Book('Poradkin', 'Arnold Schwarzenibba', 'how to live');

    const testUser = new User("Maciek", "Walezy");

    const testBooking = new Booking(testUser, testBook0);

    expect(testBooking.rentedBooks.length).toBe(1);
    expect(testBooking.rentedBooks[0]).toEqual(testBook0);

    testBooking.addBook(testBook1);

    expect(testBooking.rentedBooks.length).toBe(2);
    expect(testBooking.rentedBooks[1]).toEqual(testBook1);

    testBooking.addBook(testBook2);

    expect(testBooking.rentedBooks.length).toBe(3);
    expect(testBooking.rentedBooks[2]).toEqual(testBook2);
});