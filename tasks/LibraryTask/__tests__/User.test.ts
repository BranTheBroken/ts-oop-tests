import { User } from '../User';

test('User constructor should throw an error', () => {
    expect(() => {
        const invalidSurnameValue = new User('Valid', '');
    }).toThrow("Invalid surname input");

    expect(() => {
        const invalidNameValue = new User('', 'Valid');
    }).toThrow("Invalid name input");

});