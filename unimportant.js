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

