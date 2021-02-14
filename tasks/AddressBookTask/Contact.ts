"use strict"

import {
    v4 as uuidv4
} from 'uuid';
import Validator from "./Validator"

export { Contact, ContactKeys, ContactInterface };

interface ContactInterface {
    readonly uuid: string;
    name: string;
    surname: string;
    email: string;
    readonly creationDate: Date;
    latestModifingDate: Date;

    modify(key: ContactKeys, value: string): this;
    modifingName(newName: string): this;
    modifingSurname(newSurname: string): this;
    modifingEmail(newEmail: string): this;
    modifingDate(): void;
    containsPhrase(phrase: string): boolean;
}
type ContactKeys = keyof ContactInterface;

class Contact implements ContactInterface {
    readonly uuid: string;
    name: string;
    surname: string;
    email: string;
    readonly creationDate: Date;
    latestModifingDate: Date;

    //otypuj constructor
    constructor(name: string, surname: string, email: string) {
        if (!Validator.isEmptyString(name)) throw new Error("Name string is empty");
        if (!Validator.isEmptyString(surname)) throw new Error("Surname string is empty");
        if (!Validator.isEmail(email)) throw new Error("That's not an email");

        this.uuid = uuidv4();

        this.name = name;
        this.surname = surname;
        this.email = email;

        this.creationDate = new Date();
        this.latestModifingDate = this.creationDate;
    }


    modify(key: ContactKeys, value: string): this {
        if (!Validator.isEmptyString(value)) throw new Error("Value input is empty");
        if (key === 'creationDate' || key === 'latestModifingDate' || key === 'uuid') throw new Error("Cannot edit that key");

        if (key === 'name') this.modifingName(value);
        if (key === 'surname') this.modifingSurname(value);
        if (key === 'email') this.modifingEmail(value);
        return this;
    }

    modifingName(newName: string): this {
        this.name = newName;
        this.modifingDate();
        return this;
    }

    modifingSurname(newSurname: string): this {
        this.surname = newSurname;
        this.modifingDate();
        return this;
    }

    modifingEmail(newEmail: string): this {
        if (!Validator.isEmail(newEmail)) throw new Error("Invalid new email")

        this.email = newEmail;
        this.modifingDate();
        return this;
    }

    modifingDate(): void {
        this.latestModifingDate = new Date();
    }

    containsPhrase(phrase: string): boolean {
        const regex: RegExp = new RegExp(phrase, 'gi');
        const values: string = Object.values(this).toString();
        if (!regex.test(values)) return false;
        return true;
    }
};