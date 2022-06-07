type Obj = {
  [index: string]: {} // null undefinedだけ許容しない
}
const deepEqual = (a: Obj, b: Obj): boolean => {
  if (a === b) return true;

  if (typeof a !== 'object' ||
      typeof b !== 'object') return false

  const keysA = Object.keys(a), keysB = Object.keys(b)

  if (keysA.length !== keysB.length) return false

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }

  return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
