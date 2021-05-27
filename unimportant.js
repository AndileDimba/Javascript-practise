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

// console.log(dupArr([1, 2, 3, 5], [1, 2, 3, 4, 5]));


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

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


//                   Write an algorithm that will take an array for the first argument and 
//                   return an array with all the objects that matches all the properties
//                   and values in the Object passed as second parameter.


function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (let i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

//               Convert the given string to a lowercase sentence with words joined by dashes

function spinalCase(str) {
  var regex = /\s+|_+/g;

 // Replace low-upper case to low-space-uppercase
 str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

 // Replace space and underscore with -
 return str.replace(regex, "-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
