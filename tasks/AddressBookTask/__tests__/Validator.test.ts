import Validator from '../Validator'

test('isEmptyString function work with input value length being 0', () => {
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

test('isEmptyString function works with input value length not being 0', () => {
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
})

test('isEmail function works with input value not being email', () => {
    const testValue0: boolean = Validator.isEmail('notemail.pl');
    const testValue1: boolean = Validator.isEmail('isthis@mail');
    const testValue2: boolean = Validator.isEmail('noforsure_no');
    const testValue3: boolean = Validator.isEmail('emailisit');
    const testValue4: boolean = Validator.isEmail('whyyyds@pdd');

    expect(testValue0).toBe(false);
    expect(testValue1).toBe(false);
    expect(testValue2).toBe(false);
    expect(testValue3).toBe(false);
    expect(testValue4).toBe(false);
})

test('isEmail function works with input value being email', () => {
    const testValue0: boolean = Validator.isEmail('yes@email.pl');
    const testValue1: boolean = Validator.isEmail('isthis@mail.eu');
    const testValue2: boolean = Validator.isEmail('nofors@ure.no');
    const testValue3: boolean = Validator.isEmail('email12@isit.pl');
    const testValue4: boolean = Validator.isEmail('whyyyds@pdd.pl');

    expect(testValue0).toBe(true);
    expect(testValue1).toBe(true);
    expect(testValue2).toBe(true);
    expect(testValue3).toBe(true);
    expect(testValue4).toBe(true);
})
