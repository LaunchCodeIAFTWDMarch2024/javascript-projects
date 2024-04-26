function makeLine(size) {
    const char = '#'
    return char.repeat(size)
}

console.log(makeLine(5))

function makeSquare(size) {
    //return a single string of hashtags
    let result = ''
    for (let i = 0; i < size; i++) {
        result = result + makeLine(size) + '\n'
    }


    return result;
}

console.log(makeSquare(6))