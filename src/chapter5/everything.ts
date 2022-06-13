// someメソッドバージョン

const every = <T>(array: T[], test: (arg: T) => boolean) =>
  !array.some(ele => !test(ele))



{ // ループバージョン
  const every = <T>(array: T[], test: (arg: T) => boolean) => {
    for (const ele of array) {
      if (!test(ele)) return false
    }
    return true
  }
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
