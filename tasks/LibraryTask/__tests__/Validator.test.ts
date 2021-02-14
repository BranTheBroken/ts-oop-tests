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