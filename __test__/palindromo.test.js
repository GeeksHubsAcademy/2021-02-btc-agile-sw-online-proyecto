//Unit test for "palindromo" function

const palindromo = require('../utils/palindromo.js')

test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')
})