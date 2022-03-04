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
