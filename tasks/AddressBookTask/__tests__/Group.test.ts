import { Group } from '../Group'
import { Contact } from '../Contact'

test('modifingGroupName method works correctly with valid parameters', () => {
    const testGroup0 = new Group('grupka');
    const testGroup1 = new Group('secondGrupka');
    const testGroup2 = new Group('thirdGrupka');
    const testGroup3 = new Group('fourthGrupka');

    testGroup0.modifingGroupName('anotherGrupkaName');
    testGroup1.modifingGroupName('anotherSecondGrupkaName');
    testGroup2.modifingGroupName('anotherThirdGrupkaName');
    testGroup3.modifingGroupName('anotherFourthGrupkaName');

    expect(testGroup0.groupName).toBe('anotherGrupkaName');
    expect(testGroup1.groupName).toBe('anotherSecondGrupkaName');
    expect(testGroup2.groupName).toBe('anotherThirdGrupkaName');
    expect(testGroup3.groupName).toBe('anotherFourthGrupkaName');
});

test('addContactToGroup method works correctly with valid parameters', () => {
    const testGroup = new Group('grupka');
    const testContact0 = new Contact('eryk', 'surname', 'emai@wp.pl');
    const testContact1 = new Contact('arek', 'KYS', 'game@stop.com');
    const testContact2 = new Contact('magda', 'fak', 'poczta@wp.pl');

    testGroup.addContactToGroup(testContact0);
    testGroup.addContactToGroup(testContact1);
    testGroup.addContactToGroup(testContact2);

    expect(testGroup.groupMembers[0]).toBe(testContact0);
    expect(testGroup.groupMembers[1]).toBe(testContact1);
    expect(testGroup.groupMembers[2]).toBe(testContact2);
});

test('deleteContactFromGroup method works correctly with valid parameters', () => {
    const testGroup = new Group('grupka');
    const testContact0 = new Contact('eryk', 'surname', 'emai@wp.pl');
    const testContact1 = new Contact('arek', 'KYS', 'game@stop.com');
    const testContact2 = new Contact('magda', 'fak', 'poczta@wp.pl');

    testGroup.addContactToGroup(testContact0);
    testGroup.addContactToGroup(testContact1);
    testGroup.addContactToGroup(testContact2);

    expect(testGroup.groupMembers.length).toBe(3);

    testGroup.deleteContactFromGroup(testContact0);
    expect(testGroup.groupMembers.length).toBe(2)

    testGroup.deleteContactFromGroup(testContact1);
    expect(testGroup.groupMembers.length).toBe(1)

    testGroup.deleteContactFromGroup(testContact2);
    expect(testGroup.groupMembers.length).toBe(0)
});

test('isContactInGroup method works correctly with valid parameters', () => {
    const testGroup = new Group('grupka');
    const testContact0 = new Contact('eryk', 'surname', 'emai@wp.pl');
    const testContact1 = new Contact('arek', 'KYS', 'game@stop.com');
    const testContact2 = new Contact('magda', 'fak', 'poczta@wp.pl');

    testGroup.addContactToGroup(testContact0);
    testGroup.addContactToGroup(testContact1);
    testGroup.addContactToGroup(testContact2);

    expect(testGroup.isContactInGroup(testContact0)).toBe(true);
    expect(testGroup.isContactInGroup(testContact1)).toBe(true);
    expect(testGroup.isContactInGroup(testContact2)).toBe(true);
});

test('addContactToGroup method should throw error', () => {
    const testGroup = new Group('grupka');
    const testContact = new Contact('eryk', 'surname', 'emai@wp.pl');

    testGroup.addContactToGroup(testContact);
    expect(() => {
        testGroup.addContactToGroup(testContact);
    }).toThrow('This contact already is in the group');
})

test('deleteContactFromGroup method should throw error', () => {
    const testGroup = new Group('grupka');
    const testContact = new Contact('magda', 'fak', 'poczta@wp.pl');

    expect(() => {
        testGroup.deleteContactFromGroup(testContact);
    }).toThrow('That contact couldn;t be found in group');
})