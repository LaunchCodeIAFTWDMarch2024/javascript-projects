//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinVal(arr) {
    let minVal = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1] && arr[i+1] < minVal) {
            minVal = arr[i+1];
        } else if (arr[i] < minVal) {
            minVal = arr[i]
        } 
    }
    return minVal;
}

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMinVal(nums1));
console.log(findMinVal(nums2));
console.log(findMinVal(nums3));
