const every = (array, test) => {
  let result = true
  for(let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      result = false
      break
    }
  }
  return result
}

console.log(every([4, 2, 0], n => n % 2 === 0))

// someを使ったバージョン
