import Validator from '../Validator';

test('isEmptyString method work with input value length being 0', () => {
    const testValue0: boolean = Validator.isEmptyString('');
    const testValue1: boolean = Validator.isEmptyString('');
    const testValue2: boolean = Validator.isEmptyString('');
    const testValue3: boolean = Validator.isEmptyString('');
    const testValue4: boolean = Validator.isEmptyString('');

    expect(testValue0).toBe(false);
    expect(testValue1).toBe(false);
    expect(testValue2).toBe(false);
    expect(testValue3).toBe(false);
    expect(testValue4).toBe(false);
});

test('isEmptyString method works with input value length not being 0', () => {
    const testValue0: boolean = Validator.isEmptyString('string');
    const testValue1: boolean = Validator.isEmptyString('sting');
    const testValue2: boolean = Validator.isEmptyString('stung');
    const testValue3: boolean = Validator.isEmptyString('stang');
    const testValue4: boolean = Validator.isEmptyString('stangues');

    expect(testValue0).toBe(true);
    expect(testValue1).toBe(true);
    expect(testValue2).toBe(true);
    expect(testValue3).toBe(true);
    expect(testValue4).toBe(true);
});

test('isNumberPositive methid works with input value being negative or 0', () => {
    const testValue0: boolean = Validator.isNumberPositive(0);
    const testValue1: boolean = Validator.isNumberPositive(-12);
    const testValue2: boolean = Validator.isNumberPositive(-24);
    const testValue3: boolean = Validator.isNumberPositive(-1);
    const testValue4: boolean = Validator.isNumberPositive(0);

    expect(testValue0).toBe(false);
    expect(testValue1).toBe(false);
    expect(testValue2).toBe(false);
    expect(testValue3).toBe(false);
    expect(testValue4).toBe(false);
});

test('isNumberPositive method works with input value being positive', () => {
    const testValue0: boolean = Validator.isNumberPositive(1);
    const testValue1: boolean = Validator.isNumberPositive(23);
    const testValue2: boolean = Validator.isNumberPositive(75);

    expect(testValue0).toBe(true);
    expect(testValue1).toBe(true);
    expect(testValue2).toBe(true);
});

test('isBetweenRange method works with value being outside range', () => {
    const testValue0: boolean = Validator.isBetweenRange(0, 10, 5);
    const testValue1: boolean = Validator.isBetweenRange(-12, 4, 1);
    const testValue2: boolean = Validator.isBetweenRange(-24, 34, -20);
    const testValue3: boolean = Validator.isBetweenRange(-1, 10, 4);
    const testValue4: boolean = Validator.isBetweenRange(0, 50, 23);

    expect(testValue0).toBe(false);
    expect(testValue1).toBe(false);
    expect(testValue2).toBe(false);
    expect(testValue3).toBe(false);
    expect(testValue4).toBe(false);
});

test('isBetweenRange method works with value being outside range', () => {
    const testValue0: boolean = Validator.isBetweenRange(7, 10, 5);
    const testValue1: boolean = Validator.isBetweenRange(3, 4, 1);
    const testValue2: boolean = Validator.isBetweenRange(-2, 34, -20);
    const testValue3: boolean = Validator.isBetweenRange(6, 10, 4);
    const testValue4: boolean = Validator.isBetweenRange(40, 50, 23);

    expect(testValue0).toBe(true);
    expect(testValue1).toBe(true);
    expect(testValue2).toBe(true);
    expect(testValue3).toBe(true);
    expect(testValue4).toBe(true);
});