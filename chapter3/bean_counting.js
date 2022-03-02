const countBs = str => {
  let count = 0
  for(let i = 0; i < str.length; i++) {
    str[i] === "B" ? count++ : count
  }
  return count
}
console.log(countBs("BBBaaBB"))

// for ofでループ
const countBs2 = str => {
  let count = 0
  for(s of str) {
    str[i] === "B" ? count++ : count
  }
}

console.log(countBs("BBBaaBB"))


const countChar = (str, target) => {
  let count = 0
  for(let i = 0; i < str.length; i++) {
    str[i] === target ? count++ : count
  }
  return count
}

console.log(countChar("AAABBCCC", "A"))


const newCountBs = str => countChar(str, "B")
console.log(newCountBs("BBss"))
