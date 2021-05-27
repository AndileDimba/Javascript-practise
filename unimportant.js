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
