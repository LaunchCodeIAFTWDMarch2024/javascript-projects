function reverse(str) {
   //str = 'abc'
   let lettersArray = str.split('');
   //letterArray = ['a','b','c']
   let reversedLettersArray = lettersArray.reverse();
   //reversedLettersArray = ['c','b','a']
   return reversedLettersArray.join('');
   // return 'cba'
}

// console.log(reverse('abc'))
let reversedWord = reverse
console.log(reversedWord)

reversedWord = reverse('abc')

console.log(reversedWord)