let obj = {a: {b: 1}, c: 2}

// {
//   // 基本方針
//   const deepEqual = (obj1, obj2) => {
//     if (要素数が異なる) return false
//     if (ネストしてる、ネストしたものがオブジェクトなら(null除外)) {
//       中を調べていく（再帰）
//     } else {
//       keyが等しいか比べる
//     }
//   }

// }

const deepEqual = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  if (Object.values(obj1).some(n => typeof(n) === 'object' && n !== null)) {
    const keys = Object.keys(obj1).filter((key => typeof(obj1[key]) === 'object'))
    for (key of keys) {
      return deepEqual(obj1[key], obj2[key])
    }
  }
  else {
    return Object.keys(obj1).every((k, i) => k === Object.keys(obj2)[i])
  }
}

console.log(deepEqual(obj, {a: {b: 1}, c: 2})) // true
console.log(deepEqual(obj, {a: {d: 2}, c: 2})) // false
console.log(
  deepEqual(
    {a: 1},
    {a: 1}
    )
  ) // true

console.log(
  deepEqual(
    {a: 1},
    {b: 1}
    )
  ) // false

console.log(deepEqual(obj, obj)) // true

console.log(
  deepEqual(
    {a: {b: {c: 1}}},
    {a: {b: {c: 1}}}
    )
  ) // true

console.log(
  deepEqual(
    {a: {b: {c: 1}}},
    {a: {b: {d: 1}}}
    )
  ) // false

console.log(
  deepEqual(
    {b: {c: 1}},
    {b: {d: 1}}
    )
  ) // false

