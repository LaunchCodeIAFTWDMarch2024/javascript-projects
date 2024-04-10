
let word = 'string'

console.log(word.toUpperCase())
word = word.toUpperCase()
console.log(word)

function toUpper(str) {
    str = str.toUpperCase()
    return str
}

function toLower(str) {
    str = str.toLowerCase()
    return str
}

console.log(toUpper('hello'))

toUpper('hello')
let upperWord = toUpper('hello')

console.log(upperWord)

console.log(toLower(upperWord))
console.log(toLower(toUpper('hello')))