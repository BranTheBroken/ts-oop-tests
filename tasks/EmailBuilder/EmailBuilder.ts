"use strict"
import Validator from './Validator';
import { Email } from './Email';

interface EmailBuilderInterface {
    _email: {
        from: string,
        to: string[],
        CC?: string[],
        BCC?: string[],
        title: string,
        html: string,
    }
}

class EmailBuilder implements EmailBuilderInterface {
    _email: {
        from: string,
        to: string[],
        CC?: string[],
        BCC?: string[],
        title: string,
        html: string
    }

    constructor() {
        this._email = {
            from: "",
            to: [],
            CC: [],
            BCC: [],
            title: "",
            html: "",
        }
    }

    //metoda build tworzy klase email na podstawie tego co zagregował builder

    newFrom(value: string) {
        if (!Validator.isEmail(value)) throw new Error("Invalid newFrom value");
        this._email.from = value;
    }

    newTo(value: string[]) {
        if (!Validator.isArrayOfEmails(value)) throw new Error("Invalid newTo value");
        this._email.to = value;
    }

    newCC(value: string[]) {
        if (!Validator.isArrayOfEmails(value)) throw new Error("Invalid newCC value");
        this._email.CC = value;
    }

    newBCC(value: string[]) {
        if (!Validator.isArrayOfEmails(value)) throw new Error("Invalid newBCC value");
        this._email.BCC = value;
    }

    newTitle(value: string) {
        if (!Validator.isEmptyString(value)) throw new Error("Invalid newTitle input");
        this._email.title = value;
    }

    newHtml(value: string) {
        if (!Validator.isEmptyString(value)) throw new Error("Invalid newHtml input");
        this._email.html = value;
    }

    buildEmail(): Email {
        return new Email(this._email.from, this._email.to, this._email.title, this._email.html, this._email.CC, this._email.BCC);
    }
}