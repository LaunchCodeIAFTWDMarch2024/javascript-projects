function reverse(str) {
   //str = 'abc'
   let lettersArray = str.split('');
   //letterArray = ['a','b','c']
   let reversedLettersArray = lettersArray.reverse();
   //reversedLettersArray = ['c','b','a']
   return reversedLettersArray.join('');
   // return 'cba'
}

let str = 'abca;lfghf;lgajf;glajdf;lgafkadfgoiajdfl;gkadflgad;igajd;ligj'

// console.log(reverse('abc'))

let reverseStr = reverse(str)

console.log(reverseStr)

str = 'apple'

console.log(reverse(str))