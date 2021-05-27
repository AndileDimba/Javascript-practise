// Given a string of lowercase letters in the range ascii[a-z],
// determine the index of a character that can be removed to make the string a palindrome.
// There may be more than one solution, but any will do. If the word is already a palindrome
// or there is no solution, return -1. Otherwise, return the index of a character to remove.vv

function palindromeIndex(s) {
  let result = -1;
  const length = s.length;

  if (
    length >= 1 &&
    (length <= 100005) & (s !== s.split("").reverse().join(""))
  ) {
    for (let i = 0; i < length; i++) {
      if (s.charAt(i) != s.charAt(length - 1 - i)) {
        let s1 = s.substring(0, i) + s.substring(i + 1);
        let s2 =
          s.substring(0, length - 1 - i) + s.substring(length - 1 - i + 1);

        if (s1 === s1.split("").reverse().join("")) {
          result = i;
        } else if (s2 === s2.split("").reverse().join("")) {
          result = length - 1 - i;
        }
        break;
      }
    }
  }

  return result;
}
// console.log(palindromeIndex("acbdbba"));
// console.log(palindromeIndex("acbba"));
// console.log(palindromeIndex("aaak"));
// console.log(palindromeIndex("aka"));

//                                 return all the duplicates

function dupArr(arr) {
  let newArr = arr.sort();
  console.log(newArr);
  let results = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      results.push(newArr[i]);
    }
  }
  return results;
}

// console.log(dupArr([1,2,3,4,5,6,7,8,9,8,4,3,2]));

//                             Reverse odd words in a string

// 1. Break the string down into an array of words.
// 2. Loop over each word in the array.
//     - if the index is odd, change the word so it is reversed.
//     - if the index is even, leave it as it is.
// 3. Join all the words in the array together so they are a string again, with spaces between them.
// 4. Return the new string we made.

function reverse(str) {
  let result = str.split(" ");
  for (let i = 0; i < result.length; i++) {
    if (i % 2 == 1) {
      let char = result[i].split("").reverse().join("");
      result[i] = char;
    }
  }
  return result.join(" ");
}

// console.log(reverse('one two three four'));

//                              Fizz Buzz

// Step 1: Run a loop from 1 to n, for reach iteration (i) perform the next steps
// Step 2: if i is divisible by both 3 and 5, print “FizzBuzz”
// Step 3: if above condition fails, and i is divisible by 3, print “Fizz”
// Step 4: if above condition fails, and i is divisible by 5, print “Buzz”
// Step 5: if all conditions fails, print i itself.

function fizzbuzz(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result.join(" ");
}

// console.log(fizzbuzz(16));

//                           Replace word with another one

function replaceStr(str) {
  // 0. store the word first
  // 1. Split the string into an array so that we can go through each word
  // 2. iterate through each word
  //  - check if the string matches the word
  //  - replace it if it matches
  // 3. join the strings back with spaces

  let word = "film";
  let result = str.split(" ");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === word) {
      result[i] = "movie";
    }
  }
  return result.join(" ");
}

// console.log(replaceStr('This film is the best movie in the world!'));

//                  print out all the duplicates in an array

function dupArr(arr) {
  let newArr = arr.sort();
  let results = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      results.push(newArr[i]);
    }
  }
  return results;
}

// console.log(dupArr([1,2,3,4,5,6,7,8,9,8,4,3,2]));

//                  print out only the first duplicate in an array

function dupArr(arr) {
  let newArr = arr.sort();
  let results = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      results.push(newArr[i]);
    }
  }
  return results;
}

// console.log(dupArr([1,2,3,4,5,6,7,8,9,8,4,3,2]));

//                  print letters in an alphabetical order

function alphabeticalOrder(arr) {
  let result = arr.join(" ").toLowerCase().split(" ");
  return result.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
// console.log(
//   alphabeticalOrder([
//     "a",
//     "d",
//     "c",
//     "b",
//     "z",
//     "g",
//     "w",
//     "e",
//     "m",
//     "L",
//     "q",
//     "R",
//     "T",
//     "X",
//     "I",
//     "U",
//   ])
// );


//                                 return all non duplicates

function dupArr(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2);
  function checkNum(num) {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  }
  return newArr.filter(checkNum);
}

console.log(dupArr([1, 2, 3, 5], [1, 2, 3, 4, 5]));


//                                 remove duplicates from the array and other arguments


function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


//               Convert the given string to a lowercase sentence with words joined by dashes

function spinalCase(str) {
  var regex = /\s+|_+/g;

 // Replace low-upper case to low-space-uppercase
 str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

 // Replace space and underscore with -
 return str.replace(regex, "-").toLowerCase();
}

// console.log(spinalCase('This Is Spinal Tap'));


//     return a new array of unique values from two original arrays in the order they show up.
//     So there is not sorting required, and there shouldn’t be any duplicates.


function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));