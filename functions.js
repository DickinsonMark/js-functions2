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
  var longest = '';
  var strArr = str.split(' ');
  for (var i = 0; i < strArr.length; i++){
    if (strArr[i].length > longest.length){
      longest = strArr[i];
    };
  };
  return longest;
}


console.log(longestWord('This is a very long sentence with a long word sentence!'));

//  #3.

function longestActualWord(str){
  var long = '';
  var strAr = str.replace(/[^\w\s]/g, '').split(' ');
  for (var i = 0; i < strAr.length; i++){
    if (strAr[i].length > long.length){
      long = strAr[i];
    };
  };
  return long;
}


console.log(longestActualWord('This is a very long sentence with a long word macBooks!'));

//  #4.

function factorial(num) {
  if (num < 0){
    return undefined;
  } else if (num === 0){
    return 1;
  } else {
    return (num * factorial(num - 1));
  };
};

console.log(factorial(3));
console.log(factorial(-3));
console.log(factorial(0));
console.log(factorial(32));
console.log(factorial(8));

//  #5. Bonus!

function isPalindrome(str){
  var str = str.toLowerCase();
  var reverseStr = str.split('').reverse().join('')
// console.log(str.replace(/[^\w]|_/g, ''));
  return (str.replace(/[^\w]|_/g, '') === reverseStr.replace(/[^\w]|_/g, ''));
}


console.log(isPalindrome('No "x" in Nixon'));
console.log(isPalindrome('Was it a car or a cat I saw?'));
console.log(isPalindrome('put it up'));
console.log(isPalindrome('taco cat'));
console.log(isPalindrome('step on no pets'));
console.log(isPalindrome('stack cats'));
console.log(isPalindrome('race car'));
console.log(isPalindrome('Amor, Roma'));
console.log(isPalindrome('A man, a plan, a canal, Panama!'));
console.log(isPalindrome('Not a palindrome!!!!'))
