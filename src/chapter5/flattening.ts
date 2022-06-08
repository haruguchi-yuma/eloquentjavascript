let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(
  arrays.reduce((flatArr, arr) => flatArr.concat(arr), [])
);
