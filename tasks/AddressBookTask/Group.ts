"use strict"

import {
    v4 as uuidv4
} from 'uuid';
import Validator from './Validator';
import { Contact } from './Contact';

export { GroupInterface, Group };

interface GroupInterface {
    readonly uuid: string;
    groupName: string;
    groupMembers: Contact[];

    modifingGroupName(newGroupName: string): this;
    addContactToGroup(contact: Contact): this;
    deleteContactFromGroup(contact: Contact): this;
    isContactInGroup(contact: Contact): boolean;
}

class Group implements GroupInterface {
    readonly uuid: string;
    groupName: string;
    groupMembers: Contact[];

    constructor(groupName: string) {
        if (!Validator.isEmptyString(groupName)) throw new Error("groupName string is empty");

        this.uuid = uuidv4();
        this.groupName = groupName;
        this.groupMembers = [];
    }

    modifingGroupName(newGroupName: string): this {
        if (!Validator.isEmptyString(newGroupName)) throw new Error("newGroupName string is empty");

        this.groupName = newGroupName;
        return this;
    }

    addContactToGroup(contact: Contact): this {
        if (this.isContactInGroup(contact)) throw new Error("This contact already is in the group");

        this.groupMembers.push(contact);
        return this;
    }

    deleteContactFromGroup(contact: Contact): this {
        if (!this.isContactInGroup(contact)) throw new Error("That contact couldn;t be found in group");

        this.groupMembers.splice(this.groupMembers.indexOf(contact), 1);
        return this;
    }

    isContactInGroup(contact: Contact): boolean {
        return this.groupMembers.some(currentValue => currentValue.uuid === contact.uuid);
    }
}
