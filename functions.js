//  #1.

var people = {
  Chuck: 22,
  Brian: 46
};

function oldestPerson(obj){
  var oldest = 0;
  for (var keys in obj) {
    if (oldest < obj[keys]){
      oldest = obj[keys];
    };
  };
  return oldest
};

console.log(oldestPerson(people));

//  #2.

function longestWord(str){
  var longest = "";
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++){
    if (strArr[i].length > longest.length){
      longest = strArr[i];
    };
  };
  return longest;
}

console.log(longestWord('This is a very long sentence with a long word sentence!'));

//  #5. Bonus!

function isPalindrome(str){
  var str = str.toLowerCase();
  var reverseStr = str.split('').reverse().join('')
console.log(str.replace(/[^\w]|_/g, ''));
  if (str.replace(/[^\w]|_/g, '') === reverseStr.replace(/[^\w]|_/g, '')) {
    return 'Palindrome! ' + str + ' = ' + reverseStr;
  } else {
    return 'Not a palindrome ' + str + ' != ' + reverseStr;
  }
}

console.log(isPalindrome("No 'x' in Nixon"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("put it up"));
console.log(isPalindrome("taco cat"));
console.log(isPalindrome("step on no pets"));
console.log(isPalindrome("stack cats"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("Amor, Roma"));
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
