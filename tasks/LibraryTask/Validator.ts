"use strict"

export default class Validator {
    static isEmptyString(value: string): boolean {
        if (value.length <= 0) return false;
        else return true;
    }
}