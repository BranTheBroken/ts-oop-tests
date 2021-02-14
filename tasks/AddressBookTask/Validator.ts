export default class Validator {
    static isEmptyString(value: string): boolean {
        if (value.length <= 0) return false;
        else return true;
    }

    static isEmail(value: string): boolean {
        if (!this.isEmptyString(value)) return false;
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (regex.test(value)) return true;
        else return false;
    }
}