import { AddressBook } from '../AddressBook';
import { Contact } from '../Contact';
import { Group } from '../Group';

test('createNewContact method works correctly with valid parameters', () => {
    const testAddressBook = new AddressBook();

    testAddressBook.createNewContact('arek', 'KYS', 'game@stop.com');
    expect(testAddressBook.contactList.length).toBe(1);

    testAddressBook.createNewContact('magda', 'fak', 'poczta@wp.pl');
    expect(testAddressBook.contactList.length).toBe(2)

    testAddressBook.createNewContact('eryk', 'surname', 'emai@wp.pl');
    expect(testAddressBook.contactList.length).toBe(3)

    expect(testAddressBook.contactList[0].name).toBe('arek');
    expect(testAddressBook.contactList[0].surname).toBe('KYS');
    expect(testAddressBook.contactList[0].email).toBe('game@stop.com');

    expect(testAddressBook.contactList[1].name).toBe('magda');
    expect(testAddressBook.contactList[1].surname).toBe('fak');
    expect(testAddressBook.contactList[1].email).toBe('poczta@wp.pl');

    expect(testAddressBook.contactList[2].name).toBe('eryk');
    expect(testAddressBook.contactList[2].surname).toBe('surname');
    expect(testAddressBook.contactList[2].email).toBe('emai@wp.pl');
});

test('findContact method works correctly', () => {
    const testAddressBook = new AddressBook();

    testAddressBook.createNewContact('arek', 'KYS', 'game@stop.com');
    testAddressBook.createNewContact('magda', 'fak', 'poczta@wp.pl');
    testAddressBook.createNewContact('eryk', 'surname', 'emai@wp.pl');

    const results: Contact[] = testAddressBook.findContact('eryk');

    expect(results[0].name).toBe('eryk');
    expect(results[0].surname).toBe('surname');
    expect(results[0].email).toBe('emai@wp.pl');
});

test('modifyContact method works correctly with different valid parameters', () => {
    const testAddressBook = new AddressBook();

    testAddressBook.createNewContact('arek', 'KYS', 'game@stop.com');
    testAddressBook.createNewContact('magda', 'fak', 'poczta@wp.pl');
    testAddressBook.createNewContact('eryk', 'surname', 'emai@wp.pl');

    const testContact0: Contact = testAddressBook.contactList[0];
    const testContact1: Contact = testAddressBook.contactList[1];
    const testContact2: Contact = testAddressBook.contactList[2];

    testAddressBook.modifyContact(testContact0, 'name', 'tymon');
    testAddressBook.modifyContact(testContact1, 'surname', 'waitwhaaat');
    testAddressBook.modifyContact(testContact2, 'email', 'new@mail.pl');

    expect(testContact0.name).toBe('tymon');
    expect(testContact1.surname).toBe('waitwhaaat');
    expect(testContact2.email).toBe('new@mail.pl');
})

test('createNewGroup method works correctly with valid parameters', () => {
    const testAddressBook = new AddressBook();

    testAddressBook.createNewGroup('wowowo');
    expect(testAddressBook.groupList.length).toBe(1)

    testAddressBook.createNewGroup('grupka');
    expect(testAddressBook.groupList.length).toBe(2)

    testAddressBook.createNewGroup('check');
    expect(testAddressBook.groupList.length).toBe(3);

    expect(testAddressBook.groupList[0].groupName).toBe('wowowo');
    expect(testAddressBook.groupList[1].groupName).toBe('grupka');
    expect(testAddressBook.groupList[2].groupName).toBe('check');
})

test('modifyGroupName method works correctly with valid parameters', () => {
    const testAddressBook = new AddressBook();

    testAddressBook.createNewGroup('wowowo');
    testAddressBook.createNewGroup('grupka');
    testAddressBook.createNewGroup('check');

    const testGroup0: Group = testAddressBook.groupList[0];
    const testGroup1: Group = testAddressBook.groupList[1];
    const testGroup2: Group = testAddressBook.groupList[2];

    testAddressBook.modifyGroupName(testGroup0, 'creation');
    testAddressBook.modifyGroupName(testGroup1, 'einstein');
    testAddressBook.modifyGroupName(testGroup2, 'tesla');

    expect(testGroup0.groupName).toBe('creation');
    expect(testGroup1.groupName).toBe('einstein');
    expect(testGroup2.groupName).toBe('tesla');
})