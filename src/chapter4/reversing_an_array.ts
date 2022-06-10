
const reverseArray = <T>(arr: readonly T[]) => {
  const reversedArray: T[] = [];
  arr.forEach(el => reversedArray.unshift(el))
  return reversedArray
}

const reverseArrayInPlace = <T>(arr: T[]) => {
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

{ // 別解
  const reverseArray = <T>(arr: readonly T[]) =>
    arr.map((_, i) => arr[arr.length - 1 - i])
}
