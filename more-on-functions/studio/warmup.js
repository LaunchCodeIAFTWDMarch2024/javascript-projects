

//attendance code: FocusedFunctions

let miscArr = ['hello world!', 16, true, 'Oranges']

let filteredArr = miscArr.filter((element) => {
    return typeof element !== 'number'
});

console.log(filteredArr)

let getFiltered = function(element) {
    return typeof element !== 'boolean';
}

console.log(miscArr.filter(getFiltered));

function filterElement(element) {
    return (typeof element !== 'string' && typeof element !== 'number')
}

console.log(miscArr.filter(filterElement))