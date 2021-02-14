export default class Valiadator {
    static isEmail(value: string): boolean {
        const regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(value)) return true;
        else return false;
    }
    static isEmptyString(value: string): boolean {
        if (value.length <= 0) return false;
        else return false;
    }

    static isArrayOfEmails(value: string[]): boolean {
        if (value.length <= 0) return false;
        const checkElements = value.every(element => this.isEmail(element));
        if (!checkElements) return false;
        else return true;
    }
}