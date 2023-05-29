//Functiona that turns around a string, getting its palindrome.

const palindromo = (string) => {
    return string
    .split('')
    .reverse()
    .join('')
}

module.exports = palindromo;