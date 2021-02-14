"use strict"

const is = require('is_js');

export default class Validator {
    static isEmptyString(value: string) {
        if (value.length <= 0) return true;
        else return false;
    }

    static isValidGender(value: string) {
        if (this.isEmptyString(value)) return false;
        const genders = ["male", "female"];
        if (!genders.includes(value)) return true;
        else return false;
    }
    static isDate(value: string) {
        if (is.not.date(value)) return true;
        else return false;
    }
    static isPassword(value: string) {
        if (this.isEmptyString(value)) return false;
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
        if (regex.test(value)) return false;
        else return true;
    }
    static isEmail(value: string) {
        if (is.not.email(value)) return true;
        else return false;
    }
}