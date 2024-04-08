

//attendance code: FunWithFunctions

let helperFunctions = {
    addTwo: function(num1, num2){ return num1 + num2 },
    filterNums: function(arr){return arr.filter((e) => typeof e !== 'number')},
    message: 'Hope these functions help!',
}

console.log(helperFunctions.addTwo(3,6))
//what's the expected output?
console.log(helperFunctions.filterNums(['one', 2, 'three', 4, false, '']))
//what's the expected output?
console.log(helperFunctions.message)
//what's the expected output?