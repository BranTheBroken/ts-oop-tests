import { Contact } from '../Contact'

test('Contact modify method throws an error, when invalid key is passed', () => {
    const testContact = new Contact('name', 'surname', 'emai@wp.pl');

    expect(() => {
        testContact.modify('creationDate', 'value');
    }).toThrow('Cannot edit that key');

    expect(() => {
        testContact.modify('latestModifingDate', 'value');
    }).toThrow('Cannot edit that key');

    expect(() => {
        testContact.modify('uuid', 'value');
    }).toThrow('Cannot edit that key');
});

test('Contact modify method works, when good parameters are passed', () => {
    const testContact0 = new Contact('eryk', 'surname', 'emai@wp.pl');
    const testContact1 = new Contact('arek', 'KYS', 'game@stop.com');
    const testContact2 = new Contact('magda', 'fak', 'poczta@wp.pl');

    testContact0.modify('name', 'Dawid');
    testContact1.modify('surname', 'Drapinsky');
    testContact2.modify('email', 'newEmail@gmail.com');

    expect(testContact0.name).toBe('Dawid');
    expect(testContact1.surname).toBe('Drapinsky');
    expect(testContact2.email).toBe('newEmail@gmail.com');
});