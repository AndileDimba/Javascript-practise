//          Find a length of an array without using built-in functions 

function arrLength(arr) {
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    if (arr[i] !== undefined) {
       result++
    }
  }
  return result;
}

console.log(arrLength([1,2,3,4,5,6,7,8,9,10]));
