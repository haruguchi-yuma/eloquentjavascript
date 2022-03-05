const min = (a, b) => a < b ? a : b

{
  // 可変長に対応
  const min = (...nums) => {
    let min = Infinity
    nums.forEach(num => min = min > num ? num : min)
    return min
  }
  console.log(min(4, -2, 3))
}

{ // 可変長に対応パート2
  const min = (...nums) => {
    return nums.reduce((a, b) => a < b ? a : b )
  }
  console.log(min(-1, 2, 3, -199))
}
