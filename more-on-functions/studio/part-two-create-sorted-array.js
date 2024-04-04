function findMinValue(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function sortArr(arr){
  let sortedArr = [];
  while (arr.length > 0) {
    sortedArr.push(findMinValue(arr));
    // arr.splice(arr.indexOf(findMinValue(arr)), 1)
    arr = arr.filter((val) => {return val !== findMinValue(arr)})
  }
  return sortedArr;
}

// console.log(sortArr(nums1))
// console.log(sortArr(nums2))
// console.log(sortArr(nums3))








































// function spliceTest(arr) {
//   let sorted = []
//   while (arr.length > 0) {
//     sorted.push(findMinValue(arr));
//     arr.splice(arr.indexOf(findMinValue(arr)),1)
//     console.log(arr, sorted)
//   }
//   return sorted
// }

// function sortIntoArr(arr) {
//   let sortedArr = [];
//   while (arr.length > 0) {
//     sortedArr.push(findMinValue(arr));
//     arr = arr.filter((val) => {
//       return val !== findMinValue(arr);
//     });
//   }
//   return sortedArr;
// }

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

// function recursiveSort(arr, recursiveSortedArr = []) {
//   if (arr.length === 1) {
//     recursiveSortedArr.push(findMinValue(arr));
//   } else {
//     recursiveSortedArr.push(findMinValue(arr));
//     arr = arr.filter((val) => {
//       return val !== findMinValue(arr);
//     });
//     recursiveSort(arr, recursiveSortedArr);
//   }
//   return recursiveSortedArr;
// }

function recursiveSort(arr, recursiveSortedArr = []) {
  if (arr.length === 1) {
    recursiveSortedArr.push(findMinValue(arr));
  } else {
    recursiveSortedArr.push(findMinValue(arr));
    arr.splice(arr.indexOf(findMinValue(arr)), 1)
    recursiveSort(arr, recursiveSortedArr);
  }
  return recursiveSortedArr;
}

// //Sample arrays for testing:
// let nums1 = [5, 10, 2, 42];
// let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
// let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// console.log(sortIntoArr(nums1))
// console.log(sortIntoArr(nums2))
// console.log(sortIntoArr(nums3))

console.log(recursiveSort(nums1));
console.log(recursiveSort(nums2));
console.log(recursiveSort(nums3));

// console.log(spliceTest(nums1))
// console.log(spliceTest(nums2))
// console.log(spliceTest(nums3))