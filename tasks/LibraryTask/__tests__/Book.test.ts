import { Book } from '../Book';

test('Book constructor should throw an error', () => {
    expect(() => {
        const invalidTitleValue = new Book('', 'bookAuthor', 'bookDesc');
    }).toThrow('Title input is invalid');

    expect(() => {
        const invalidAuthorValue = new Book('bookTitle', '', 'bookDesc');
    }).toThrow('Author input is invalid');

    expect(() => {
        const invalidDescalue = new Book('bookTitle', 'bookAutor', '');
    }).toThrow('Desc input is invalid');
});