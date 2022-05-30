const minimum = (num1: number, num2: number) => {
  return num1 < num2 ? num1 : num2
}

{ // 引数の数を可変長にした
  const minimum = (...nums: number[]) =>
    nums.reduce((a, b) => a < b ? a : b )

  console.log(minimum(...[1, 2, 3]))
  console.log(minimum(1, 2, 3))
}
