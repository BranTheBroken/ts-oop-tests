"use strict"

import { ContactKeys, ContactInterface, Contact } from './Contact';
import { GroupInterface, Group } from './Group'
import Validator from './Validator';

export { AddressBook }

interface AddressBookInterface {
    contactList: Contact[];
    groupList: Group[];

    createNewContact(name: string, surname: string, email: string): this;
    createNewGroup(groupName: string): this;
    findContact(phrase: string): Contact[];
    modifyContact(contact: ContactInterface, key: ContactKeys, value: string): this;
    modifyGroupName(group: GroupInterface, groupName: string): this;
}

class AddressBook implements AddressBookInterface {
    contactList: Contact[];
    groupList: Group[];

    constructor() {
        this.contactList = [];
        this.groupList = [];
    }

    createNewContact(name: string, surname: string, email: string): this {
        try {
            const contact = new Contact(name, surname, email)
            this.contactList.push(contact)
        } catch (err) {
            console.error(err)
        }
        return this;
    }

    createNewGroup(groupName: string): this {
        try {
            const contact = new Group(groupName)
            this.groupList.push(contact);
        } catch (err) {
            console.error(err)
        }
        return this;
    }

    findContact(phrase: string): Contact[] {
        if (!Validator.isEmptyString(phrase)) throw new Error("Wrong phrase input");

        const results: Contact[] = this.contactList.filter(contact => contact.containsPhrase(phrase));
        return results;
    }

    modifyContact(contact: ContactInterface, key: ContactKeys, value: string): this {

        contact.modify(key, value);
        return this;
    }

    modifyGroupName(group: GroupInterface, groupName: string): this {

        group.modifingGroupName(groupName);
        return this;
    }

}

const addressBook = new AddressBook();
addressBook.createNewContact("Dawid", "Drapinski", "drapinski@gmail.com").createNewContact("Eryk", "Drapinski", "eryk@gmail.com").createNewGroup("Łakamakafą");
addressBook.modifyGroupName(addressBook.groupList[0], "xxxxxx");
addressBook.groupList[0].addContactToGroup(addressBook.contactList[1]);
addressBook.modifyContact(addressBook.contactList[0], "surname", "wonchock")
console.log(addressBook);