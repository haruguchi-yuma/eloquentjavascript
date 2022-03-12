const reverseArray = arr => {
  const reversedArray = [];
  arr.forEach(element => reversedArray.unshift(element));
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4]));

const reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4]));
