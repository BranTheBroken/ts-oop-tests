export default class Validator {
    static isEmptyString(value: string): boolean {
        if (value.length <= 0) return false;
        else return true;
    }

    static isNumberPositive(value: number): boolean {
        if (isNaN(value) || value <= 0) return false;
        else return true;
    }

    static isBetweenRange(value: number, max: number, min: number): boolean {
        if (value <= max && value > min) return true;
        else return false;
    }
}