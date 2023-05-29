//Unit test for "isUpperCase" function

const isUpperCase = require('../utils/mayuscula');

test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})